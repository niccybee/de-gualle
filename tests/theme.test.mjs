import { test } from "node:test";
import assert from "node:assert/strict";
import {
  generateTheme,
  contrast,
  normalizeHex,
  themeCSS,
} from "../theme/generate.mjs";

test("normalizes HEX and rejects injected/invalid values", () => {
  assert.equal(normalizeHex(" #Fa3 "), "#ffaa33");
  for (const value of ["", "red", "#gg0000", "#123456; color:red", null])
    assert.throws(() => generateTheme(value));
  assert.throws(() => themeCSS("#fff", "body { color:red }"));
});
test("semantic text pairs meet AA for extreme and representative brand colours", () => {
  const seeds = [
    "#000",
    "#fff",
    "#ff0",
    "#0f0",
    "#00f",
    "#f00",
    "#808080",
    "#c44332",
    "#00ffff",
    "#ff00ff",
  ];
  // Cover the RGB cube on a coarse grid, not just the default tomato theme.
  for (const r of [0, 85, 170, 255])
    for (const g of [0, 85, 170, 255])
      for (const b of [0, 85, 170, 255])
        seeds.push(
          "#" + [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join(""),
        );
  for (const seed of seeds)
    for (const mode of Object.values(generateTheme(seed)).filter(
      (v) => typeof v === "object",
    )) {
      for (const surface of ["--dg-background", "--dg-surface"])
        for (const foreground of [
          "--dg-text",
          "--dg-muted",
          "--dg-primary",
          "--dg-error",
          "--dg-success",
          "--dg-warning",
        ]) {
          assert.ok(
            contrast(mode[foreground], mode[surface]) >= 4.5,
            `${seed}: ${foreground} / ${surface}`,
          );
        }
      assert.ok(contrast(mode["--dg-on-primary"], mode["--dg-primary"]) >= 4.5);
      assert.ok(
        contrast(mode["--dg-on-primary-hover"], mode["--dg-primary-hover"]) >=
          4.5,
      );
    }
});
test("scale keeps the seed at 500 and exports explicit/system modes", () => {
  const theme = generateTheme("#123456");
  assert.equal(theme.light["--dg-primary-500"], "#123456");
  assert.equal(
    Object.keys(theme.light).filter((key) => /primary-\d/.test(key)).length,
    11,
  );
  assert.match(themeCSS("#123456"), /prefers-color-scheme: dark/);
  assert.match(themeCSS("#123456"), /data-theme="light"/);
});
