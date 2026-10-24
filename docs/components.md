# Small compositions, clear jobs.

This release covers Pico's broad categories using original classless CSS: native content and controls, disclosure, cards, dropdowns, groups, loading, modal, navigation, progress and nonessential hints. It does not copy Pico classes or promise identical behaviour.

| Pattern         | Markup / import                                                    | Behaviour boundary                                             |
| --------------- | ------------------------------------------------------------------ | -------------------------------------------------------------- |
| Page containers | Direct `body > header/main/footer`; `molecules/layout.css`         | Automatic in global build, or with opted-in body               |
| Responsive grid | `data-grid`; `molecules/layout.css`                                | Auto-fitting columns, minimum 18rem or available width         |
| Action row      | `data-actions`; `molecules/layout.css`                             | Wrapping row of actions                                        |
| Vertical stack  | `data-stack`; `molecules/layout.css`                               | Shared gap between children                                    |
| Field           | Label + input + help, optional `data-field`; `molecules/field.css` | Explicit label/help associations remain required               |
| Group           | `fieldset role="group"`; `molecules/field.css`                     | Shared row; provide a legend/name                              |
| Card            | `article`, optional header/footer; `molecules/card.css`            | Use only for self-contained content                            |
| Status / error  | `role="status"` / `role="alert"`; `molecules/card.css`             | Live-region semantics, not visual variants                     |
| Accordion       | `details > summary`; `molecules/disclosure.css`                    | Native disclosure; independent items                           |
| Dropdown        | `nav details > summary + ul`; `molecules/disclosure.css`           | Native disclosure with ordinary links, not an ARIA menu        |
| Modal           | `dialog`; `molecules/disclosure.css`                               | Native focus trap/Escape after `showModal()`                   |
| Loading         | `aria-busy="true"`; `atoms/button.css`                             | Visual state only; app manages the work                        |
| Tooltip / hint  | Prefer visible help or native `title`                              | CSS `data-tooltip` is nonessential only; see below             |
| Chat            | `section[data-chat]`; `organisms/chat.css`                         | Requires application behaviour; complete local recipe included |
| Dashboard       | `section[data-dashboard]`; `organisms/dashboard.css`               | Requires data/filter behaviour; local recipe included          |

## Disclosure and navigation

```html
<details>
  <summary>What is included?</summary>
  <p>Native elements and a few useful patterns.</p>
</details>

<nav aria-label="Project navigation">
  <a href="/">🍅 Project</a>
  <ul>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/settings">Settings</a></li>
  </ul>
</nav>
```

Do not add `role="menu"` to ordinary navigation. The dropdown recipe is a disclosure: it does not implement arrow-key menu navigation, outside-click dismissal, or automatic closing after navigation.

## Dialog recipe

```html
<button type="button" id="open">Edit project</button>
<dialog id="edit" aria-labelledby="edit-title">
  <h2 id="edit-title">Edit project</h2>
  <form method="dialog"><button>Done</button></form>
</dialog>
```

```js
const dialog = document.getElementById("edit");
document
  .getElementById("open")
  .addEventListener("click", () => dialog.showModal());
```

This is optional application code using a native browser API, not library runtime. The benchmark supports dialog; older engines need a polyfill or an inline alternative. Never make essential content accessible only through an unsupported modal.

## Hints

Prefer visible `<small>` text associated by `aria-describedby`. A native `title` or the optional `data-tooltip="Hint"` decoration must not contain essential instructions or be the sole accessible name. CSS-only hints do not implement Escape dismissal, robust touch activation, or a complete accessible tooltip pattern. They are included as a limited visual affordance, not a claim of full tooltip accessibility.
