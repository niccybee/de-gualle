# Elements: live examples and HTML

Every specimen below uses the published global stylesheet. The preview renders the exact HTML shown beneath it; use **Copy HTML** to take the snippet. Native controls remain interactive. These are isolated specimens, not connected forms.

[Open the complete element specimen →](/examples/elements.html)


## Headings

Keep a logical heading order in real documents.

```html preview 420
<h1>Heading one</h1>
<h2>Heading two</h2>
<h3>Heading three</h3>
<h4>Heading four</h4>
<h5>Heading five</h5>
<h6>Heading six</h6>
```

## Text and links

Use descriptive links and keep essential instructions visible.

```html preview 260
<p>A paragraph with <strong>strong emphasis</strong>, <em>emphasis</em>,
  <mark>highlighting</mark>, <del>removed</del> and <ins>inserted</ins> text.</p>
<p><a href="#details">Jump to details</a> · <small>Supporting text</small></p>
<p><abbr title="Hypertext Markup Language">HTML</abbr>, H<sub>2</sub>O and 2<sup>3</sup>.</p>
<p id="details">Details stay in the document.</p>
```

## Lists

Ordered, unordered and definition lists retain native semantics.

```html preview 330
<ul><li>Design</li><li>Build</li></ul>
<ol><li>Open a project</li><li>Save changes</li></ol>
<dl><dt>Atom</dt><dd>A native element.</dd></dl>
```

## Quotes and dividers



```html preview 230
<blockquote><p>Start with meaningful HTML.</p><footer>— A practical principle</footer></blockquote>
<hr>
<p>A new section follows.</p>
```

## Code and keyboard notation

Preformatted blocks scroll when the code is wider than its container.

```html preview 200
<p>Use <code>data-size="md"</code>. Press <kbd>Tab</kbd> to move focus.</p>
<pre><code>&lt;button type="button"&gt;Save&lt;/button&gt;</code></pre>
```

## Figures and media

Images, video and audio keep native rendering. Add your own media sources and captions; the players here deliberately have no recording.

```html preview 400
<figure>
  <img src="../tomato.svg" width="120" height="120" alt="A red tomato">
  <figcaption>The de-gualle tomato.</figcaption>
</figure>
<video controls aria-label="Video player"></video>
<audio controls aria-label="Audio player"></audio>
```

## Buttons and navigation links

Buttons perform actions; anchors navigate. Keep the correct element for its job.

```html preview 260
<div data-actions>
  <button type="button">Save</button>
  <button type="button" data-variant="secondary">Cancel</button>
  <button type="button" data-variant="danger">Delete</button>
  <button type="button" disabled>Unavailable</button>
  <a href="#destination" data-variant="primary">View project</a>
</div>
<p id="destination">Project destination</p>
```

## Text inputs

Always provide labels. Input types improve keyboards and validation.

```html preview 730
<label>Name <input name="name" autocomplete="name" placeholder="Alex Chen"></label>
<label>Email <input type="email" name="email" autocomplete="email"></label>
<label>Password <input type="password" name="password" autocomplete="new-password"></label>
<label>Search <input type="search" name="query"></label>
<label>Telephone <input type="tel" name="phone" autocomplete="tel"></label>
<label>Website <input type="url" name="website" placeholder="https://example.com"></label>
```

## Numbers and dates

Unsupported input types use the browser’s fallback. Native picker appearance varies by browser.

```html preview 730
<label>Quantity <input type="number" min="1" max="10" value="3"></label>
<label>Date <input type="date"></label>
<label>Time <input type="time"></label>
<label>Appointment <input type="datetime-local"></label>
<label>Month <input type="month"></label>
<label>Week <input type="week"></label>
```

## Textarea and select



```html preview 480
<label>Notes <textarea name="notes" rows="3">A little more context.</textarea></label>
<label>Project <select name="project"><option>Website</option><option>Documentation</option></select></label>
<label>Topics <select name="topics" multiple size="3"><option selected>Design</option><option>Development</option><option>Writing</option></select></label>
```

## Checkbox, radio and switch

A switch is still a checkbox. Group related choices with a legend.

```html preview 390
<fieldset>
  <legend>Notifications</legend>
  <label><input type="checkbox" name="email" checked> Email updates</label>
  <label><input type="checkbox" role="switch" name="alerts"> Alerts</label>
  <label><input type="checkbox" disabled> Unavailable</label>
</fieldset>
<fieldset>
  <legend>Plan</legend>
  <label><input type="radio" name="plan" value="personal" checked> Personal</label>
  <label><input type="radio" name="plan" value="team"> Team</label>
</fieldset>
```

## Range, colour and file

File selection stays local to this example; nothing is uploaded.

```html preview 340
<label>Volume <input type="range" min="0" max="100" value="60"></label>
<label>Accent <input type="color" value="#c44332"></label>
<label>Attachment <input type="file" name="attachment"></label>
```

## Input buttons and hidden fields

Hidden fields remain hidden. These sample forms have no backend.

```html preview 270
<form>
  <input type="hidden" name="project-id" value="42">
  <label>Project <input name="project" value="Documentation"></label>
  <div data-actions>
    <input type="button" value="Action">
    <input type="reset" value="Reset">
    <input type="submit" value="Submit">
  </div>
</form>
```

## Validation, disabled and read-only

Set aria-invalid after validation. Disabled fields are not submitted; read-only fields can be copied and submitted.

```html preview 630
<label for="email">Email</label>
<input id="email" type="email" value="incomplete" aria-invalid="true" aria-describedby="email-error">
<small id="email-error">Enter a complete email address.</small>
<label>Validated <input value="alex@example.com" aria-invalid="false"></label>
<label>Unavailable <input value="Not available" disabled></label>
<label>Reference <input value="DG-014" readonly></label>
<label>Required, untouched <input name="required" required></label>
```

## Tables

The focusable wrapper scrolls wide tables without losing row/column relationships.

```html preview 270
<div data-overflow tabindex="0" role="region" aria-label="Projects">
  <table>
    <caption>Recent projects</caption>
    <thead><tr><th scope="col">Project</th><th scope="col">Status</th></tr></thead>
    <tbody><tr><th scope="row">Website refresh</th><td>In progress</td></tr></tbody>
    <tfoot><tr><th scope="row">Total</th><td>1 project</td></tr></tfoot>
  </table>
</div>
```

## Progress and meter

Progress describes work; meter describes a known measurement. Omit progress value for an indeterminate state.

```html preview 330
<label for="upload">Upload</label>
<progress id="upload" max="100" value="40">40%</progress>
<label for="pending">Preparing</label>
<progress id="pending" max="100">Preparing…</progress>
<label for="storage">Storage</label>
<meter id="storage" min="0" max="100" value="65">65%</meter>
```
