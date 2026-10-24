# HTML, with thoughtful defaults.

Atoms are native elements. Type, controls and supporting text share the same design variables and sizing system.

[Open the complete living specimen →](/examples/elements.html)

## Content

Headings `h1`–`h6`, paragraphs, links, ordered/unordered/definition lists, emphasis, small text, marks, inline code, keyboard notation, preformatted code, quotes, dividers, figures, captions and responsive media are styled. Preserve a logical heading hierarchy.

## Inputs and forms

All native input types retain browser behaviour. Text-like inputs, textarea and select have a shared skin. Checkbox, radio, range, colour, file and button inputs receive appropriate specialised rules. Hidden inputs remain hidden. Unsupported input types fall back to the browser's native rendering.

```html
<div data-field>
  <label for="email">Email address</label>
  <input
    id="email"
    type="email"
    name="email"
    required
    autocomplete="email"
    aria-describedby="email-help"
  />
  <small id="email-help">We'll only use this to reply.</small>
</div>
```

Use `label` rather than placeholder text as the control name. `name` determines submitted data. Use `autocomplete`, `inputmode`, and appropriate input types to improve keyboards and autofill.

```html
<fieldset>
  <legend>Contact preference</legend>
  <label>
    <input type="radio" name="contact" value="email" checked />
    Email
  </label>
  <label>
    <input type="radio" name="contact" value="phone" />
    Phone
  </label>
</fieldset>
```

An optional switch is still a native checkbox:

```html
<label>
  <input type="checkbox" role="switch" name="notifications" />
  Notifications
</label>
```

## Buttons

```html
<button type="submit">Save changes</button>
<button type="button" data-variant="secondary">Cancel</button>
<button type="button" data-variant="danger">Delete project</button>
<button type="button" aria-busy="true" disabled>Saving…</button>
```

Use a button for an action and an anchor with `href` for navigation. For a visually prominent navigation link, use `data-variant="primary"` or `"secondary"` on the anchor. It stays a link with normal link keyboard behaviour; do not give navigation a button role.

## Tables

```html
<div data-overflow tabindex="0" role="region" aria-label="Project table">
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
```

The wrapper makes wide data horizontally scrollable and keyboard accessible. Do not turn table rows into arbitrary mobile cards; keep their relationships intact.

## Progress and meter

```html
<label for="upload">Upload</label>
<progress id="upload" max="100" value="40">40%</progress>
<label for="storage">Storage</label>
<meter id="storage" min="0" max="100" value="65">65%</meter>
```

Omitting `value` on `progress` creates indeterminate progress. `meter` describes a known measurement, not a loading operation.

<Demo src="/examples/elements.html" title="Native element specimen" height="650" />
