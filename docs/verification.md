# Verification record

This page records evidence, not intended support. The physical iPhone 7 check remains pending.

Initial verification: **24 October 2026**. Run `nr check` for the repeatable colour, scoping, package-export and production-build checks.

| Check                     | Evidence / result                                                                                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CSS build                 | Global and scoped bundles; 13 scoped entries with dependencies; readable and minified versions; Safari 15.4 compilation target                                                                                 |
| Automated checks          | Seven tests: HEX validation/injection rejection, contrast pairs, deterministic scale/export, dependency closure, selector boundaries, package exports                                                          |
| Palette coverage          | 74 seed cases (including black, white, yellow and an RGB grid), in both light and dark modes; selected text/action pairs meet 4.5:1                                                                            |
| Production documentation  | All 13 pages checked at 375 × 667 in Chrome 155.0.8059.86; one main heading per page; no horizontal document overflow or runtime/HTTP failures during the pass                                                 |
| Chat                      | Chrome and Playwright WebKit 26.6: sending, safe text rendering, stopping, retry without duplicated prompts, unavailable drafts, code responses, dark mobile layout and minimum control sizing passed          |
| Dashboard                 | Chrome: search, empty results, loading, simulated error, recovery and filter preservation passed; mobile and desktop layouts checked                                                                           |
| Theme studio              | Chrome: generation, light/dark contrast, invalid-input recovery, CSS copy/download and narrow layout passed; WebKit: hydration, generation, dark preview and docs override passed                              |
| Native / scoped behaviour | Chrome: dialog focus, Escape dismissal and return focus; host styles unaffected outside the boundary; self-scoped button; untouched required field; explicit/system theme precedence and reduced motion passed |
| Package                   | Bun package dry run includes CSS distribution, source, recipes, theme generator and license; no registry publication performed                                                                                 |

Browser check scripts and screenshots are local development artifacts under `output/playwright/` (git-ignored). Browser actions were performed through Playwright CLI. Viewport sizing is not device emulation of iOS Safari. These checks are focused functional evidence, not a comprehensive accessibility audit.

## Still requires device or external verification

GitHub Pages deployment verified on **25 October 2026**: the public site is served from the compiled `gh-pages` branch. Root and project-path builds validate links and assets across all 17 generated HTML pages, including standalone recipes. Standalone examples explicitly use native navigation rather than VitePress client routing.

- Physical iPhone 7 with its latest iOS 15 update: real keyboard, touch, orientation, scroll behaviour, zoom, larger text, reduced motion and VoiceOver.
- Safari 15.4 itself, current Firefox and Edge. Current WebKit passing does not prove older Safari passes.
- Windows forced-colour behaviour and assistive technology across browsers.

The CSS library is designed for the stated baseline. Do not describe it as physically verified on iPhone 7 until the device record is completed.
