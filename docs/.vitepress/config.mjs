import { defineConfig } from "vitepress";
export default defineConfig({
  title: "de-gualle",
  description:
    "🍅 Classless CSS. Native HTML. Thoughtful defaults. A semantic component library for people and agents.",
  lang: "en-AU",
  cleanUrls: false,
  lastUpdated: false,
  head: [
    ["meta", { name: "theme-color", content: "#faf9f6" }],
    ["meta", { name: "color-scheme", content: "light dark" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/tomato.svg" }],
  ],
  vite: { build: { target: "safari15.4", cssTarget: "safari15.4" } },
  markdown: { theme: { light: "github-light", dark: "github-dark" } },
});
