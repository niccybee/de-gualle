import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const output = path.resolve("docs/.vitepress/dist");
const base = process.env.DOCS_BASE || "/";
const origin = "https://docs.example.invalid";
const failures = [];
let count = 0;

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(filename);
    else if (entry.name.endsWith(".html")) await check(filename);
  }
}

async function check(filename) {
  count++;
  const relative = path.relative(output, filename).split(path.sep).join("/");
  const pageURL = new URL(base + relative, origin);
  const html = await readFile(filename, "utf8");
  for (const [tag] of html.matchAll(
    /<(?:a|link|script|iframe|img)\b[^>]*>/gi,
  )) {
    for (const [, reference] of tag.matchAll(/\b(?:href|src)="([^"]+)"/gi)) {
      const url = new URL(reference.replaceAll("&amp;", "&"), pageURL);
      if (url.origin !== origin) continue;
      if (!url.pathname.startsWith(base)) {
        failures.push(`${relative}: link escapes site base: ${reference}`);
        continue;
      }
      let target = decodeURIComponent(url.pathname.slice(base.length));
      if (!target || target.endsWith("/")) target += "index.html";
      if (
        !relative.startsWith("examples/") &&
        target.startsWith("examples/") &&
        target.endsWith(".html") &&
        /^<a\b/i.test(tag) &&
        !/\btarget=/.test(tag)
      ) {
        failures.push(
          `${relative}: standalone example link needs native navigation: ${reference}`,
        );
      }
      try {
        if (!(await stat(path.join(output, target))).isFile())
          throw new Error();
      } catch {
        failures.push(`${relative}: missing local target: ${reference}`);
      }
    }
  }
}

await walk(output);
if (failures.length) throw new Error(failures.join("\n"));
console.log(`Verified links and assets in ${count} HTML pages at ${base}.`);
