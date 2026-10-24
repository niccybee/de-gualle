import { readFile, writeFile, mkdir, cp, readdir } from "node:fs/promises";
import path from "node:path";
import postcss from "postcss";
import { transform } from "lightningcss";
import { generateTheme, declarations } from "../theme/generate.mjs";

export const dependencies = {
  "atoms/typography": [],
  "atoms/button": [],
  "atoms/input": [],
  "atoms/table": [],
  "atoms/progress": [],
  "molecules/layout": [],
  "molecules/field": ["atoms/input", "atoms/button"],
  "molecules/card": ["atoms/typography"],
  "molecules/disclosure": ["atoms/typography", "atoms/button"],
  "molecules/message": ["atoms/typography"],
  "molecules/composer": ["molecules/field", "molecules/layout"],
  "organisms/chat": [
    "molecules/message",
    "molecules/composer",
    "molecules/card",
  ],
  "organisms/dashboard": [
    "molecules/layout",
    "molecules/field",
    "molecules/card",
    "atoms/table",
    "atoms/progress",
  ],
};
export function resolveDependencies(entries) {
  const result = new Set();
  function visit(name) {
    if (!(name in dependencies)) throw new Error(`Unknown CSS entry: ${name}`);
    for (const dependency of dependencies[name]) visit(dependency);
    result.add(name);
  }
  entries.forEach(visit);
  return [...result];
}

export function compileSelectors(source, scoped) {
  const tree = postcss.parse(source);
  tree.walkRules((rule) => {
    let parent = rule.parent;
    while (parent) {
      if (parent.type === "atrule" && /keyframes$/.test(parent.name)) return;
      parent = parent.parent;
    }
    rule.selectors = rule.selectors.flatMap((selector) => {
      if (selector.includes(":--root")) {
        const roots = scoped
          ? [":where([data-de-gualle])"]
          : ["body", ":where([data-de-gualle])"];
        return roots.map((root) => selector.replaceAll(":--root", root));
      }
      if (!scoped) return [selector];
      const pseudo = selector.match(/(::[\w-]+)$/)?.[1] || "";
      const base = pseudo ? selector.slice(0, -pseudo.length) : selector;
      return [
        `:where([data-de-gualle]) ${selector}`,
        `:where([data-de-gualle]):is(${base})${pseudo}`,
      ];
    });
  });
  return tree.toString();
}

async function build() {
  const theme = generateTheme("#c44332");
  const themes = `:--root {\n${declarations(theme.light)}\n}\n@media (prefers-color-scheme: dark) { :--root:not([data-theme="light"]) { color-scheme: dark;\n${declarations(theme.dark)}\n} }\n:--root[data-theme="dark"] { color-scheme: dark;\n${declarations(theme.dark)}\n}\n:--root[data-theme="light"] { color-scheme: light;\n${declarations(theme.light)}\n}\n`;
  const foundation = await readFile("src/foundation.css", "utf8");
  const sources = Object.fromEntries(
    await Promise.all(
      Object.keys(dependencies).map(async (name) => [
        name,
        await readFile(`src/${name}.css`, "utf8"),
      ]),
    ),
  );
  const banner =
    "/*! de-gualle v0.1.0 | MIT | 🍅 Semantic HTML, thoughtful defaults. */\n";
  async function emit(filename, entries, scoped) {
    const input =
      foundation +
      "\n" +
      themes +
      "\n" +
      resolveDependencies(entries)
        .map((name) => `/* ${name} */\n${sources[name]}`)
        .join("\n");
    // Modern authoring, compiled browser-compatible distribution; no Sass or runtime.
    const css = compileSelectors(input, scoped);
    const code = transform({
      filename,
      code: Buffer.from(css),
      targets: {
        safari: (15 << 16) | (4 << 8),
        chrome: 100 << 16,
        firefox: 100 << 16,
      },
      minify: false,
    }).code;
    await mkdir(path.dirname(`dist/${filename}`), { recursive: true });
    await writeFile(`dist/${filename}`, banner + code);
    const mini = transform({
      filename,
      code: Buffer.from(css),
      targets: {
        safari: (15 << 16) | (4 << 8),
        chrome: 100 << 16,
        firefox: 100 << 16,
      },
      minify: true,
    }).code;
    await writeFile(
      `dist/${filename.replace(".css", ".min.css")}`,
      banner + mini,
    );
  }
  await emit("de-gualle.css", Object.keys(dependencies), false);
  await emit("de-gualle.scoped.css", Object.keys(dependencies), true);
  for (const name of Object.keys(dependencies))
    await emit(`${name}.css`, [name], true);
  await mkdir("docs/public", { recursive: true });
  await cp("dist", "docs/public/css", { recursive: true });
  await cp("recipes", "docs/public/examples", { recursive: true });
  await cp("theme", "docs/public/theme", { recursive: true });
  const docs = (await readdir("docs"))
    .filter((file) => file.endsWith(".md"))
    .sort();
  const text = await Promise.all(
    docs.map(
      async (name) =>
        `\n\n# File: ${name}\n\n${await readFile(`docs/${name}`, "utf8")}`,
    ),
  );
  await writeFile(
    "docs/public/llms-full.txt",
    "# de-gualle — agent reference\n" + text.join(""),
  );
  console.log(
    `Built ${Object.keys(dependencies).length} scoped entries, global/scoped bundles, minified CSS, recipes and agent reference.`,
  );
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === path.resolve("scripts/build.mjs")
)
  await build();
