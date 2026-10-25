import { cp, mkdtemp, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const project = fileURLToPath(new URL("../", import.meta.url));
function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: project,
    stdio: "inherit",
    ...options,
  });
  if (result.error) throw result.error;
  if (result.status !== 0)
    throw new Error(`${command} failed (${result.status}).`);
  return result.stdout?.trim();
}

// Build and validate before making any change to the publishing branch.
run("nr", ["check"], {
  env: { ...process.env, DOCS_BASE: process.env.DOCS_BASE || "/de-gualle/" },
});
const remote = run("git", ["remote", "get-url", "origin"], {
  stdio: ["ignore", "pipe", "inherit"],
  encoding: "utf8",
});
const directory = await mkdtemp(path.join(tmpdir(), "de-gualle-publish-"));
const git = (...args) => run("git", ["-C", directory, ...args]);
try {
  git("init", "--quiet");
  git("remote", "add", "origin", remote);
  git("fetch", "--depth=1", "origin", "gh-pages");
  git("checkout", "--quiet", "-b", "gh-pages", "FETCH_HEAD");
  for (const entry of await readdir(directory)) {
    if (entry !== ".git")
      await rm(path.join(directory, entry), { recursive: true, force: true });
  }
  await cp(path.join(project, "docs/.vitepress/dist"), directory, {
    recursive: true,
  });
  await writeFile(path.join(directory, ".nojekyll"), "");
  git("add", "--all");
  const diff = spawnSync("git", [
    "-C",
    directory,
    "diff",
    "--cached",
    "--quiet",
  ]);
  if (diff.status === 0)
    console.log("Published documentation is already up to date.");
  else if (diff.status === 1) {
    git("commit", "-m", "docs: publish de-gualle documentation");
    // A regular fast-forward push preserves history and rejects competing updates.
    git("push", "origin", "gh-pages");
    console.log("Published to gh-pages. GitHub Pages will deploy the update.");
  } else throw new Error("Could not compare the publishing branch.");
} finally {
  await rm(directory, { recursive: true, force: true });
}
