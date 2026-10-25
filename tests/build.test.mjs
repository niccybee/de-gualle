import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import postcss from "postcss";
import { compileSelectors, resolveDependencies } from "../scripts/build.mjs";

test("scoping includes the boundary itself, pseudo elements and themed roots", () => {
  const output = compileSelectors(
    'button:hover::before { content:"" } :--root[data-theme="dark"] { color:white } @keyframes spin { to { transform:rotate(1turn) } }',
    true,
  );
  assert.match(
    output,
    /:where\(\[data-de-gualle\]\):is\(button:hover\)::before/,
  );
  assert.match(output, /:where\(\[data-de-gualle\]\)\[data-theme="dark"\]/);
  assert.match(output, /to \{/);
  assert.doesNotMatch(output, /:--root/);
});
test("chat resolves required primitives exactly once", () => {
  const result = resolveDependencies(["organisms/chat", "atoms/button"]);
  for (const entry of [
    "atoms/button",
    "atoms/input",
    "molecules/message",
    "molecules/composer",
  ])
    assert.ok(result.includes(entry));
  assert.equal(result.filter((name) => name === "atoms/button").length, 1);
  assert.ok(!resolveDependencies(["atoms/button"]).includes("atoms/input"));
});
test("every emitted scoped selector has a styling boundary", async () => {
  const css = await readFile("dist/de-gualle.scoped.css", "utf8");
  postcss.parse(css).walkRules((rule) => {
    let parent = rule.parent;
    while (parent) {
      if (parent.type === "atrule" && /keyframes$/.test(parent.name)) return;
      parent = parent.parent;
    }
    for (const selector of rule.selectors)
      assert.ok(selector.includes("[data-de-gualle]"), selector);
  });
  assert.doesNotMatch(css, /:--root|@import|@scope|color-mix\(/);
});

test("package entry points resolve to built files and default to scoped CSS", async () => {
  const manifest = JSON.parse(await readFile("package.json", "utf8"));
  assert.equal(manifest.exports["."], "./dist/de-gualle.scoped.css");
  for (const specifier of [
    "de-gualle",
    "de-gualle/global.css",
    "de-gualle/scoped.css",
    "de-gualle/atoms/button.css",
    "de-gualle/molecules/field.css",
    "de-gualle/organisms/chat.css",
    "de-gualle/organisms/dashboard.css",
    "de-gualle/theme",
  ]) {
    const contents = await readFile(
      new URL(import.meta.resolve(specifier)),
      "utf8",
    );
    assert.ok(contents.length > 0, specifier);
  }
});

test("specimen builds publish only examples present in the current docs", async () => {
  const directory = "docs/public/specimens";
  const obsolete = `${directory}/obsolete-preview.html`;
  await mkdir(directory, { recursive: true });
  await writeFile(obsolete, "Obsolete generated example");
  try {
    const result = spawnSync(process.execPath, ["scripts/build.mjs"], {
      encoding: "utf8",
    });
    assert.equal(result.status, 0, result.stderr || result.stdout);
    const expected = new Set();
    for (const name of (await readdir("docs")).filter((name) =>
      name.endsWith(".md"),
    )) {
      const markdown = await readFile(`docs/${name}`, "utf8");
      for (const match of markdown.matchAll(
        /```html preview[^\n]*\n([\s\S]*?)```/g,
      )) {
        const hash = createHash("sha256")
          .update(match[1])
          .digest("hex")
          .slice(0, 16);
        expected.add(`${hash}.html`);
      }
    }
    assert.ok(expected.size > 0, "No preview examples found in the docs");
    assert.deepEqual(new Set(await readdir(directory)), expected);
  } finally {
    await rm(obsolete, { force: true });
  }
});
