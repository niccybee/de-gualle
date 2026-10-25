# Components: composed from HTML

Each component has a working visual specimen and the exact HTML used to render it. All previews use the full global stylesheet. For individual scoped imports, see [Architecture](./architecture.md).

[Native elements and controls](./elements.md) · [Interactive chat](./chat.md) · [Interactive dashboard](./dashboard.md)


## Page containers

Direct body children header, main and footer receive page spacing. Import: `molecules/layout.css`.

```html preview 310
<header><h1>Project notebook</h1></header>
<main><p>Main content follows the shared page measure.</p></main>
<footer><small>A useful footer.</small></footer>
```

## Responsive grid

Columns fit the available width and stack on narrow screens. Import: `molecules/layout.css`.

```html preview 390
<div data-grid>
  <article><h3>Design</h3><p>Plan the next release.</p></article>
  <article><h3>Build</h3><p>Make something useful.</p></article>
</div>
```

## Action row

Actions wrap when space runs out. Import: `molecules/layout.css`.

```html preview 170
<div data-actions>
  <button type="button">Save changes</button>
  <button type="button" data-variant="secondary">Cancel</button>
</div>
```

## Vertical stack

Shared spacing between children. Import: `molecules/layout.css`.

```html preview 320
<div data-stack>
  <label>Project <input name="project" value="Documentation"></label>
  <p>Keep related items together.</p>
  <button type="button">Continue</button>
</div>
```

## Field

Associate labels and help explicitly. Import: `molecules/field.css`.

```html preview 220
<div data-field>
  <label for="email">Email address</label>
  <input id="email" type="email" name="email" autocomplete="email" aria-describedby="email-help">
  <small id="email-help">We’ll only use this to reply.</small>
</div>
```

## Group

Provide a legend or accessible group name. Import: `molecules/field.css`.

```html preview 220
<fieldset role="group">
  <legend>Search projects</legend>
  <input type="search" name="query" aria-label="Project name">
  <button type="button">Search</button>
</fieldset>
```

## Card

Use article for self-contained content. Import: `molecules/card.css`.

```html preview 340
<article>
  <header><h3>Documentation</h3></header>
  <p>Examples for every component.</p>
  <footer><a href="#details">Read project details</a></footer>
</article>
<p id="details">Last updated today.</p>
```

## Status and error

Live regions convey semantics, not visual variants. Insert updates when the app state changes. Import: `molecules/card.css`.

```html preview 220
<p role="status">Your changes have been saved.</p>
<p role="alert">Upload failed. Check the connection and try again.</p>
```

## Accordion / disclosure

Items expand independently. Import: `molecules/disclosure.css`.

```html preview 320
<details>
  <summary>What is included?</summary>
  <p>Native elements and useful compositions.</p>
</details>
<details open>
  <summary>Does it require JavaScript?</summary>
  <p>This disclosure works with native HTML alone.</p>
</details>
```

## Navigation

Ordinary navigation uses links; do not add role="menu". Import: `molecules/layout.css`.

```html preview 250
<nav aria-label="Project navigation">
  <a href="#overview">Project</a>
  <ul><li><a href="#overview">Overview</a></li><li><a href="#settings">Settings</a></li></ul>
</nav>
<p id="overview">Project overview</p>
<p id="settings">Project settings</p>
```

## Dropdown

A native disclosure with links. It does not implement arrow-key menu navigation or outside-click dismissal. Import: `molecules/disclosure.css`.

```html preview 330
<nav aria-label="Project actions">
  <details>
    <summary>Project actions</summary>
    <ul><li><a href="#edit">Edit project</a></li><li><a href="#archive">Archive project</a></li></ul>
  </details>
</nav>
<p id="edit">Edit destination</p>
<p id="archive">Archive destination</p>
```

## Modal dialog

The small application script opens the native dialog; the browser handles modal focus and Escape. Requires dialog support (Safari 15.4+). Import: `molecules/disclosure.css`.

```html preview 340
<button type="button" id="open">Edit project</button>
<dialog id="edit" aria-labelledby="edit-title">
  <h2 id="edit-title">Edit project</h2>
  <p>Update your project details.</p>
  <form method="dialog"><button>Done</button></form>
</dialog>
<script>
  document.getElementById("open").addEventListener("click", function () {
    document.getElementById("edit").showModal();
  });
</script>
```

## Loading

CSS provides the indicator; your app manages the operation. Keep progress in text. Import: `atoms/button.css`.

```html preview 190
<button type="button" aria-busy="true" disabled>Saving…</button>
<p role="status">Saving your changes. Please wait.</p>
```

## Tooltip / nonessential hint

Hover or focus the button. CSS hints do not provide robust touch activation or Escape dismissal. Never put essential instructions or the only accessible name in a tooltip. Import: `molecules/disclosure.css`.

```html preview 330
<button type="button" aria-label="Save project" data-tooltip="Save project">Save</button>
<p><abbr title="Hypertext Markup Language">HTML</abbr> uses a native title.</p>
<label for="reference">Reference</label>
<input id="reference" aria-describedby="reference-help">
<small id="reference-help">Essential help stays visible.</small>
```

## Message

Identify the author in text. Import: `molecules/message.css`.

```html preview 350
<article data-speaker="assistant">
  <header><strong>Assistant</strong></header>
  <p>How can I help?</p>
</article>
<article data-speaker="user">
  <header><strong>You</strong></header>
  <p>Let’s build something useful.</p>
</article>
```

## Composer

Your app supplies submission, cancellation and error recovery. This isolated form sends nothing to a provider. Import: `molecules/composer.css`.

```html preview 330
<form data-composer>
  <label for="message">Your message</label>
  <textarea id="message" name="message" required></textarea>
  <div data-actions>
    <small>Shift/Enter inserts a new line.</small>
    <button type="submit">Send message</button>
  </div>
</form>
```

## Chat

Import: `organisms/chat.css`. This specimen shows the composition; [open the interactive chat recipe](./chat.md) for application behaviour and JavaScript.

```html preview 650
<section data-de-gualle data-chat aria-labelledby="chat-title">
  <header><h2 id="chat-title">Assistant</h2></header>
  <ol aria-label="Conversation">
    <li data-speaker="assistant">
      <header><strong>Assistant</strong></header>
      <p>How can I help?</p>
    </li>
    <li data-speaker="user">
      <header><strong>You</strong></header>
      <p>Let's build something useful.</p>
    </li>
  </ol>
  <p role="status" aria-live="polite">Ready for your message.</p>
  <form data-composer>
    <label for="message">Your message</label>
    <textarea id="message" name="message" required></textarea>
    <div data-actions><button type="submit">Send message</button></div>
  </form>
</section>
```

## Dashboard

Import: `organisms/dashboard.css`. This specimen shows the composition; [open the interactive dashboard recipe](./dashboard.md) for application behaviour and JavaScript.

```html preview 650
<section data-de-gualle data-dashboard aria-labelledby="overview-title">
  <header><h1 id="overview-title">Overview</h1></header>
  <dl>
    <div>
      <dt>Active projects</dt>
      <dd>12</dd>
    </div>
    <div>
      <dt>Tasks completed</dt>
      <dd>148</dd>
    </div>
  </dl>
  <form role="search">
    <label for="query">Find a project</label>
    <input id="query" name="query" type="search" />
  </form>
  <p role="status">3 projects shown.</p>
  <div data-overflow tabindex="0" role="region" aria-label="Projects">
    <table>
      <caption>Recent projects</caption>
      <thead>
        <tr>
          <th scope="col">Project</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Website refresh</th>
          <td>In progress</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
```
