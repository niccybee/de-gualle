# From elements to interfaces.

de-gualle uses [Brad Frost's atomic design methodology](https://atomicdesign.bradfrost.com/chapter-2/). It is a way to understand the parts and the whole, not a requirement to add an attribute for every layer.

| Layer     | Responsibility                                   | Examples                                            |
| --------- | ------------------------------------------------ | --------------------------------------------------- |
| Atoms     | Native HTML elements and their applicable states | Input, label, button, legend, headings, table cells |
| Molecules | Small compositions with one clear purpose        | Label + input + help text; composer; message        |
| Organisms | Distinct sections made from smaller patterns     | Chat, dashboard                                     |
| Templates | Page-level structure without fixed content       | Header + navigation + dashboard                     |
| Pages     | Real content exercising the system               | Local chat and dashboard demos                      |

## Semantics before selectors

Use `fieldset` and `legend` for a related group of controls, not just a convenient border. Use `article` for self-contained content. Use a named `section` for a thematic region. Avoid choosing a tag solely for its default appearance.

```html
<fieldset>
  <legend>Notification preferences</legend>
  <label>
    <input type="checkbox" name="email" />
    Email updates
  </label>
  <label>
    <input type="checkbox" name="sms" />
    SMS updates
  </label>
</fieldset>
```

Native structure is enough for standard patterns. When HTML lacks a component distinction, use a documented attribute:

```html
<section data-chat aria-labelledby="assistant-title">
  <header><h2 id="assistant-title">Assistant</h2></header>
  <ol aria-label="Messages">
    <li data-speaker="assistant"><p>How can I help?</p></li>
  </ol>
</section>
```

`data-chat` and `data-speaker` are library conventions, not accessibility semantics. Labels, elements and ARIA retain their native responsibilities. Custom attributes are not an SEO shortcut.

## Source and distribution

`src/atoms`, `src/molecules`, and `src/organisms` contain original plain CSS. `src/foundation.css` provides variables, focus rules and bounded sizing. A small build step resolves dependencies, expands styling boundaries, compiles for Safari 15.4 and generates minified files. The internal `:--root` placeholder never reaches users.

No Sass, framework component runtime, utility class vocabulary, or mandatory JavaScript. The docs and recipe demos have their own JavaScript because a CSS library cannot send messages or filter data.

CSS-only does not mean every interaction works without behaviour code: native disclosure works by itself; opening a modal dialog requires calling the browser's API. Recipes make that distinction explicit.
