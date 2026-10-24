# Modern CSS. An honest baseline.

The functional benchmark is **iPhone 7 on its latest available iOS 15 update**. The minimum CSS compilation target is Safari 15.4, with Chrome 100 and Firefox 100 as conservative desktop targets. Current Safari, Chrome, Edge and Firefox are intended targets. This does not promise support for an iPhone 7 left on its original iOS 10.

Apple's [security release list](https://support.apple.com/en-au/100100) identifies the available iPhone 7 updates. We do not infer a Safari patch version from the iOS patch number. [WebKit's Safari 15.4 notes](https://webkit.org/blog/12445/new-webkit-features-in-safari-15-4/) describe relevant feature introductions.

## Feature ledger

Every CSS feature family used by the library is recorded below. “Fallback” describes the intended degradation, not evidence of testing on that engine. Release checks and physical-device results belong in the verification section.

| Feature family                                                                | Baseline / compatibility                         | Fallback or handling                                                              |
| ----------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Custom properties, `var()`, `calc()`                                          | Supported by iOS 15; required                    | No IE support                                                                     |
| Flexbox, gap, wrapping                                                        | Supported by iOS 15                              | Wrapped action rows; no fixed desktop-only widths                                 |
| Grid, auto-fit/minmax                                                         | Supported by iOS 15                              | Single column when space is narrow                                                |
| Logical dimensions, margin/padding/border/inset                               | Supported by target; compiled with Lightning CSS | RTL uses logical directions; validate native controls separately                  |
| `min()`, `max()`, `clamp()`                                                   | Supported by iOS 15                              | Bounded sizing; no unbounded viewport typography                                  |
| `:is()`, `:where()`, attribute selectors                                      | Supported by iOS 15; required for scoped build   | Explicit boundary; low-specificity selectors                                      |
| `:focus-visible`                                                              | Safari 15.4+                                     | A standalone `:focus` outline comes first                                         |
| `:has()`                                                                      | Safari 15.4+                                     | Enhances checkbox-label layout only; controls retain native operation             |
| Native `dialog` / `::backdrop`                                                | Safari 15.4+                                     | Older engines need app polyfill or inline content; no automatic polyfill          |
| Native `details` / `summary`                                                  | Supported by target                              | Browser owns expanded state and keyboard behaviour                                |
| `accent-color`                                                                | Safari 15.4+                                     | Native controls stay usable if accent ignored                                     |
| File-selector pseudo-element                                                  | Supported by target; compiler may prefix         | Native file chooser remains usable                                                |
| Progress vendor pseudo-elements                                               | Safari/Firefox rules supplied                    | Native progress if custom appearance ignored                                      |
| `color-scheme`, dark preference media                                         | Supported by target                              | Light default; explicit theme attributes override system                          |
| HEX / sRGB colour and alpha backdrop                                          | Supported by target                              | Generated static palettes; no `color-mix()` or OKLCH requirement                  |
| Animations / transforms                                                       | Supported by target                              | Reduced-motion media makes busy spinner static                                    |
| Forced colours                                                                | Engine-dependent                                 | System border/focus overrides; macOS contrast differs from Windows forced colours |
| `text-wrap: pretty`                                                           | Optional newer-browser enhancement               | Ordinary text wrapping                                                            |
| Overscroll containment                                                        | Optional; support varies in iOS 15               | Native scrolling remains; no interaction depends on containment                   |
| Overflow, sticky sidebar, responsive media                                    | Supported by target                              | Tables scroll locally; sidebar becomes native mobile disclosure                   |
| CSS layers, nesting, `@scope`, container queries, anchor positioning, popover | Not runtime dependencies                         | Source emits flat selectors; future enhancements must include fallbacks           |

Compiled distribution may contain vendor aliases and compatible transformations. Inspect `dist/` for the actual shipped CSS. Documentation chrome is separate from library CSS and has its own responsive rules.

## JavaScript boundary

The library requires none. The docs use stable VitePress 1.6 and Vue 3.5, built with a Safari 15.4 JS/CSS target. The standalone demo scripts use native modules, DOM APIs and timers available in the target. Clipboard copying is progressive: if unavailable or denied, the generated CSS remains selectable and downloadable.

The site is statically rendered so documentation content remains available without hydration. The colour studio and local simulations require JavaScript. There are no external font, icon, colour-naming or AI-provider requests.

## Verification record

See [verification](/verification.md) for checks actually performed. **A 375px viewport or a current WebKit run is not an iPhone 7 test.** No physical-device results are claimed until someone records the device, iOS version, browser and date.

### Physical-device checklist

On an updated iPhone 7: load docs and standalone examples; operate all controls with touch; edit multiline text with the keyboard open; send, stop and retry; scroll messages without jumps; rotate; filter a wide table; use dark mode, increased text size, zoom and reduced motion; check VoiceOver labels and announcements. Record failures rather than silently raising the support floor.
