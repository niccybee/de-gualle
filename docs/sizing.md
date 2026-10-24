# A size that fits.

Set sizing on `body` for the whole page or on an opted-in region. Typography, spacing and control padding draw from shared tokens. `natural` is the default, even when the attribute is omitted.

```html
<body data-de-gualle data-size="natural"></body>
```

| Mode      | Body text                               | Base spacing                           | Use                             |
| --------- | --------------------------------------- | -------------------------------------- | ------------------------------- |
| `sm`      | `.9375rem`                              | `.75rem`                               | Compact tools                   |
| `md`      | `1rem`                                  | `1rem`                                 | Stable standard size            |
| `lg`      | `1.125rem`                              | `1.5rem`                               | More generous interfaces        |
| `natural` | `clamp(1rem, .95rem + .22vw, 1.125rem)` | `clamp(.9rem, .72rem + .65vw, 1.4rem)` | Fluid mobile-to-desktop default |

`rem` respects the user's root font setting; the library does not change the HTML root font size. Font growth is bounded and combines viewport units with relative units, rather than scaling purely with the viewport. Zoom and large-text settings still need real testing.

Controls keep at least 2.75rem (44px at a 16px root) height. Text-like form controls keep at least 1rem text to avoid small-text input zoom in iOS. Native checkbox/radio hit areas depend on their label; the label recipe gives them room. `sm` intentionally does not shrink every dimension without limit.

## Fine-tune without a new size name

```css
body[data-de-gualle] {
  --dg-font-size: clamp(1rem, 0.96rem + 0.2vw, 1.1rem);
  --dg-space: clamp(1rem, 0.8rem + 0.6vw, 1.5rem);
  --dg-line-height: 1.65;
}
```

Use the same or greater selector specificity and load overrides after the library. For a local size override, make the region a styling boundary too:

```html
<section data-de-gualle data-size="sm" aria-label="Compact settings">…</section>
```

Raw `data-size` on arbitrary descendants is not a utility selector. It is interpreted on the library boundary (or the body in the global build). Prefer a single page-wide setting; nested boundaries reset theme defaults as well.

Try all modes in the [chat playground](/examples/chat.html) or the [theme studio](/themes.md).
