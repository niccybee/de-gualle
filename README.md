# 🍅 de-gualle

Classless CSS. Native HTML. Thoughtful defaults.

A new semantic CSS library inspired by Pico, organised using atomic design. Native HTML elements are atoms; small purposeful compositions are molecules; chat and dashboard are organisms. This is an independent implementation, not a drop-in Pico replacement.

## Develop

Uses Bun through [@antfu/ni](https://github.com/antfu-collective/ni).

```sh
ni --frozen
nr dev
nr check
```

`nr dev` builds the CSS and starts VitePress. After editing `src/`, run `nr build:css` again. `nr build` produces the documentation in `docs/.vitepress/dist/` and the distributable CSS in `dist/`.

## Use

Global, no build tools:

```html
<link rel="stylesheet" href="/css/de-gualle.css" />
<body data-size="natural">
  <main>
    <h1>Hello, world.</h1>
    <button>Get started</button>
  </main>
</body>
```

Scoped imports in an application:

```js
import "de-gualle/scoped.css";
// Or import only what you need (dependencies included):
// import 'de-gualle/organisms/chat.css'
```

```html
<body data-de-gualle data-size="natural">
  <section data-chat aria-label="Assistant">…</section>
</body>
```

The package is prepared locally; no registry release or CDN URL is claimed. To try it in another project, use `ni /absolute/path/to/pico-v2`, or create a tarball with `na pm pack`. The prepack script generates CSS.

## Documentation deployment

GitHub Actions builds and deploys the docs to GitHub Pages on pushes to `main`, or by manually running the Pages workflow. Dependency installation uses `ni --frozen`; `nr check` runs the tests and builds the static site before deployment.

The workflow obtains the site's base path from GitHub Pages and passes it through `DOCS_BASE`. Local development defaults to `/`. To verify a project-site build locally:

```sh
DOCS_BASE=/de-gualle/ nr check
nr preview
```

Visit `/de-gualle/` on the preview server. Enable **GitHub Actions** as the repository's Pages publishing source before the first deployment. The source repository may be private while the documentation site is public, subject to the GitHub account's Pages eligibility.

## Structure

- `src/`: original CSS atoms, molecules and organisms; no Sass.
- `scripts/build.mjs`: dependency resolution, scoping, Safari-targeted CSS compilation and minification.
- `theme/generate.mjs`: dependency-free, deterministic theme generator and contrast calculations.
- `recipes/`: standalone HTML examples; JS files are demo-only behaviour.
- `docs/`: VitePress field guide, theme studio and agent reference.
- `tests/`: colour contrast and CSS distribution/scoping checks.

## Compatibility

Functional baseline: **iPhone 7 on its latest available iOS 15 update**, plus current Safari, Chrome, Firefox and Edge. The shipped CSS targets Safari 15.4+, Chrome 100+ and Firefox 100+. This is a compatibility target, not a claim of physical-device verification. See `docs/compatibility.md` for feature fallbacks, checks and limitations. Viewport emulation does not reproduce iOS Safari.

## License

MIT. Original code and documentation. Pico is acknowledged as inspiration; its source, branding and documentation have not been copied.
