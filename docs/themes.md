# One colour. A complete theme.

Choose a HEX colour, generate a scale, inspect foreground/background contrast, and copy or download plain CSS. No application runtime is required. This workflow is inspired by the [enhanced colour-scale generator](https://github.com/sbensidi/enhanced-color-scale-generator); the implementation here is original.

## Colour studio

<ThemeBuilder />

## Use the exported theme

```html
<link rel="stylesheet" href="/css/de-gualle.scoped.css" />
<link rel="stylesheet" href="/css/de-gualle.theme.css" />
<body data-de-gualle data-size="natural">
  <!-- Follows the device preference by default -->
</body>
```

Explicit overrides:

```html
<body data-de-gualle data-theme="light">
  <body data-de-gualle data-theme="dark"></body>
</body>
```

Remove `data-theme` to follow the system again. No theme-selection JavaScript is required unless your app provides a toggle. For the global build, keep `data-de-gualle` on the body when using the generated theme; it is the exported theme's boundary.

## Variables you can edit

| Purpose      | Variables                                                                        |
| ------------ | -------------------------------------------------------------------------------- |
| Palette      | `--dg-brand`, `--dg-primary-50` through `--dg-primary-950`                       |
| Actions      | `--dg-primary`, `--dg-on-primary`, `--dg-primary-hover`, `--dg-on-primary-hover` |
| Surfaces     | `--dg-background`, `--dg-surface`, `--dg-surface-muted`, `--dg-tint`             |
| Content      | `--dg-text`, `--dg-muted`, `--dg-border`, `--dg-divider`                         |
| Feedback     | `--dg-error`, `--dg-success`, `--dg-warning`, `--dg-focus`                       |
| Shape / type | `--dg-radius`, `--dg-font`, `--dg-mono`, `--dg-line-height`, `--dg-measure`      |

Set overrides on the same opted-in boundary, after the library. Nested `[data-de-gualle]` regions start their own default theme; apply exported tokens there too if needed.

```css
body[data-de-gualle] {
  --dg-radius: 0.2rem;
  --dg-measure: 80rem;
}
```

## How generation works

The original seed is preserved at shade 500. Lighter shades interpolate towards white; darker shades interpolate towards black in sRGB. The generator then adjusts semantic action/link colours separately to meet 4.5:1 against both page and panel surfaces. Button text is selected from black/white for contrast. This is deterministic sRGB interpolation, not a perceptually uniform OKLCH scale.

The raw palette is a selection of colours, not a guarantee that any two shades work together. Semantic tokens are the intended component colours. Editing a seed variable after export does not regenerate the scale: generate the theme again. Overriding colours, transparency or surfaces invalidates earlier pair checks; recheck your final combinations.

The generator reports normal-text AA contrast for selected pairs only. It does not certify a whole interface, keyboard behaviour, custom backgrounds, disabled text, or all possible compositions. Extremely light seeds may need a visibly darker semantic action colour to remain readable.
