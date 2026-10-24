# A quieter overview.

The dashboard organism uses a named section, definition-list metrics, a filtering form and a semantic table. It is a recipe rather than a grid of special-purpose widgets.

```js
import "de-gualle/organisms/dashboard.css";
```

```html
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

## State recipe

The local example filters sample projects by name/status, simulates loading, and demonstrates error recovery. Select “Archived” or enter an unmatched query for the empty state. Filters survive refresh and failed requests. Metrics are static sample workspace totals, independent of filtered table rows.

Keep essential status in text. Busy indicators are decorative supplements, not the sole feedback. A loading or failed table must not look like a successful empty result.

<Demo src="/examples/dashboard.html" title="Interactive local dashboard" height="720" />

[Open full page](/examples/dashboard.html) · [View demo JavaScript](/examples/dashboard.js)
