import { defineConfig } from "vitepress";
// Pages project sites mount below /<repository>/; local development stays at /.
const base = process.env.DOCS_BASE || "/";
export default defineConfig({
  base,
  title: "de-gualle",
  description:
    "🍅 Classless CSS. Native HTML. Thoughtful defaults. A semantic component library for people and agents.",
  lang: "en-AU",
  cleanUrls: false,
  lastUpdated: false,
  head: [
    ["meta", { name: "theme-color", content: "#faf9f6" }],
    ["meta", { name: "color-scheme", content: "light dark" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: `${base}tomato.svg` }],
  ],
  vite: { build: { target: "safari15.4", cssTarget: "safari15.4" } },
  markdown: {
    theme: { light: "github-light", dark: "github-dark" },
    config(md) {
      const renderLink = md.renderer.rules.link_open;
      md.renderer.rules.link_open = (tokens, index, options, env, renderer) => {
        // Standalone public HTML is not a VitePress client-side route.
        const href = tokens[index].attrGet("href") || "";
        if (/\/examples\/.*\.html(?:[?#]|$)/.test(href)) {
          tokens[index].attrSet("target", "_self");
          // VitePress leaves links with an explicit target untouched.
          if (href.startsWith("/") && !href.startsWith(base)) {
            tokens[index].attrSet("href", base + href.slice(1));
          }
        }
        return renderLink
          ? renderLink(tokens, index, options, env, renderer)
          : renderer.renderToken(tokens, index, options);
      };
    },
  },
});
