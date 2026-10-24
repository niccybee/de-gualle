# A small beginning.

de-gualle is a classless CSS library with a neutral, warm visual foundation and a tomato accent. It is independent of Pico and does not promise Pico stylesheet-swap compatibility.

## A stylesheet and some HTML

Build with `nr build:css`, then copy `dist/de-gualle.css` into your site's CSS directory. There is no published registry package or CDN endpoint yet.

[Global CSS](/css/de-gualle.css) · [Minified global CSS](/css/de-gualle.min.css) · [Scoped CSS](/css/de-gualle.scoped.css)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light dark" />
    <link rel="stylesheet" href="/css/de-gualle.css" />
    <title>A fresh start</title>
  </head>
  <body data-size="natural">
    <header>
      <nav aria-label="Main"><a href="/">🍅 My project</a></nav>
    </header>
    <main>
      <h1>Something worth making.</h1>
      <form>
        <label for="name">Your name</label>
        <input id="name" name="name" autocomplete="name" required />
        <button type="submit">Get started</button>
      </form>
    </main>
  </body>
</html>
```

The global build styles native elements throughout the document. Direct `body > header`, `body > main`, and `body > footer` receive a centred page container. Use `--dg-measure: none` to make it fluid.

## Scoped styling

The scoped build only targets an opted-in boundary and its descendants. It does not reset `html` or style elements outside the boundary.

```js
import "de-gualle/scoped.css";
// Equivalent default import: import 'de-gualle'
```

```html
<section data-de-gualle>
  <h2>Get in touch</h2>
  <form>
    <label>
      Email
      <input type="email" name="email" />
    </label>
    <button>Send</button>
  </form>
</section>
```

Use `<body data-de-gualle>` to opt in the whole body. `data-de-gualle="false"` still opts in: this is a presence attribute. Remove it to opt out.

Scoped styles limit the library's reach; they do not block host styles from entering. Nested third-party widgets inside a boundary can be affected. There is no subtree opt-out or Shadow DOM isolation in this release. Put third-party content outside the boundary or use an iframe.

## Import only what you need

```js
import "de-gualle/atoms/button.css";
import "de-gualle/molecules/field.css";
// Or an organism with its dependencies:
import "de-gualle/organisms/chat.css";
```

All selective imports are scoped and include shared foundation/theme variables plus their dependency closure. A button import does not include the input skin. Repeated dependencies across separate CSS imports may repeat rules; use the full scoped bundle when importing most components. Bundlers must retain CSS side effects (the package declares them).

The attribute controls **where**; imports control **what**. `[data-chat]` identifies an organism but does not opt into a scoped build by itself:

```html
<section data-de-gualle data-chat aria-label="Assistant">…</section>
```

## Work on the project

```sh
ni --frozen
nr dev
nr check
```

VitePress is a development dependency. Vue powers this documentation site, not the CSS library. After editing CSS sources, run `nr build:css` to regenerate imports and examples. Standalone recipes work from the built static site and make no external requests.

Use `ni /absolute/path/to/pico-v2` in a consuming project to test local package imports, or `na pm pack` here to create a distributable tarball. The package name is reserved only in this local manifest; availability on npm has not been checked.
