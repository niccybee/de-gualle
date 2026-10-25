import{_ as l,h,o as n,c as k,l as i,f as t}from"./chunks/framework.-NaojeWQ.js";const u=JSON.parse('{"title":"Elements: live examples and HTML","description":"","frontmatter":{},"headers":[],"relativePath":"elements.md","filePath":"elements.md"}'),p={name:"elements.md"};function e(E,s,d,r,g,y){const a=h("ExamplePreview");return n(),k("div",null,[s[0]||(s[0]=i("",5)),t(a,{source:`<h1>Heading one</h1>
<h2>Heading two</h2>
<h3>Heading three</h3>
<h4>Heading four</h4>
<h5>Heading five</h5>
<h6>Heading six</h6>
`,height:"420",title:"Headings",src:"/specimens/6c27a759bd60357f.html"}),s[1]||(s[1]=i("",3)),t(a,{source:`<p>A paragraph with <strong>strong emphasis</strong>, <em>emphasis</em>,
  <mark>highlighting</mark>, <del>removed</del> and <ins>inserted</ins> text.</p>
<p><a href="#details">Jump to details</a> · <small>Supporting text</small></p>
<p><abbr title="Hypertext Markup Language">HTML</abbr>, H<sub>2</sub>O and 2<sup>3</sup>.</p>
<p id="details">Details stay in the document.</p>
`,height:"260",title:"Text and links",src:"/specimens/2b17ede72721b446.html"}),s[2]||(s[2]=i("",3)),t(a,{source:`<ul><li>Design</li><li>Build</li></ul>
<ol><li>Open a project</li><li>Save changes</li></ol>
<dl><dt>Atom</dt><dd>A native element.</dd></dl>
`,height:"330",title:"Lists",src:"/specimens/e16156fe495b9705.html"}),s[3]||(s[3]=i("",2)),t(a,{source:`<blockquote><p>Start with meaningful HTML.</p><footer>— A practical principle</footer></blockquote>
<hr>
<p>A new section follows.</p>
`,height:"230",title:"Quotes and dividers",src:"/specimens/f49bf520a0374d8d.html"}),s[4]||(s[4]=i("",3)),t(a,{source:`<p>Use <code>data-size="md"</code>. Press <kbd>Tab</kbd> to move focus.</p>
<pre><code>&lt;button type="button"&gt;Save&lt;/button&gt;</code></pre>
`,height:"200",title:"Code and keyboard notation",src:"/specimens/f278f48ac86b1cd8.html"}),s[5]||(s[5]=i("",3)),t(a,{source:`<figure>
  <img src="../tomato.svg" width="120" height="120" alt="A red tomato">
  <figcaption>The de-gualle tomato.</figcaption>
</figure>
<video controls aria-label="Video player"></video>
<audio controls aria-label="Audio player"></audio>
`,height:"400",title:"Figures and media",src:"/specimens/f058d69984f43b93.html"}),s[6]||(s[6]=i("",3)),t(a,{source:`<div data-actions>
  <button type="button">Save</button>
  <button type="button" data-variant="secondary">Cancel</button>
  <button type="button" data-variant="danger">Delete</button>
  <button type="button" disabled>Unavailable</button>
  <a href="#destination" data-variant="primary">View project</a>
</div>
<p id="destination">Project destination</p>
`,height:"260",title:"Buttons and navigation links",src:"/specimens/6dfce4970db4f58a.html"}),s[7]||(s[7]=i("",3)),t(a,{source:`<label>Name <input name="name" autocomplete="name" placeholder="Alex Chen"></label>
<label>Email <input type="email" name="email" autocomplete="email"></label>
<label>Password <input type="password" name="password" autocomplete="new-password"></label>
<label>Search <input type="search" name="query"></label>
<label>Telephone <input type="tel" name="phone" autocomplete="tel"></label>
<label>Website <input type="url" name="website" placeholder="https://example.com"></label>
`,height:"730",title:"Text inputs",src:"/specimens/dbd6a1f23f50421d.html"}),s[8]||(s[8]=i("",3)),t(a,{source:`<label>Quantity <input type="number" min="1" max="10" value="3"></label>
<label>Date <input type="date"></label>
<label>Time <input type="time"></label>
<label>Appointment <input type="datetime-local"></label>
<label>Month <input type="month"></label>
<label>Week <input type="week"></label>
`,height:"730",title:"Numbers and dates",src:"/specimens/970f2a625dfcb698.html"}),s[9]||(s[9]=i("",2)),t(a,{source:`<label>Notes <textarea name="notes" rows="3">A little more context.</textarea></label>
<label>Project <select name="project"><option>Website</option><option>Documentation</option></select></label>
<label>Topics <select name="topics" multiple size="3"><option selected>Design</option><option>Development</option><option>Writing</option></select></label>
`,height:"480",title:"Textarea and select",src:"/specimens/b31cc338b12ff9ca.html"}),s[10]||(s[10]=i("",3)),t(a,{source:`<fieldset>
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
`,height:"390",title:"Checkbox, radio and switch",src:"/specimens/3214348157f10b3d.html"}),s[11]||(s[11]=i("",3)),t(a,{source:`<label>Volume <input type="range" min="0" max="100" value="60"></label>
<label>Accent <input type="color" value="#c44332"></label>
<label>Attachment <input type="file" name="attachment"></label>
`,height:"340",title:"Range, colour and file",src:"/specimens/dfa840e64d41a305.html"}),s[12]||(s[12]=i("",3)),t(a,{source:`<form>
  <input type="hidden" name="project-id" value="42">
  <label>Project <input name="project" value="Documentation"></label>
  <div data-actions>
    <input type="button" value="Action">
    <input type="reset" value="Reset">
    <input type="submit" value="Submit">
  </div>
</form>
`,height:"270",title:"Input buttons and hidden fields",src:"/specimens/9cd5d4c0fc0dadbd.html"}),s[13]||(s[13]=i("",3)),t(a,{source:`<label for="email">Email</label>
<input id="email" type="email" value="incomplete" aria-invalid="true" aria-describedby="email-error">
<small id="email-error">Enter a complete email address.</small>
<label>Validated <input value="alex@example.com" aria-invalid="false"></label>
<label>Unavailable <input value="Not available" disabled></label>
<label>Reference <input value="DG-014" readonly></label>
<label>Required, untouched <input name="required" required></label>
`,height:"630",title:"Validation, disabled and read-only",src:"/specimens/9891bfad04b848e4.html"}),s[14]||(s[14]=i("",3)),t(a,{source:`<div data-overflow tabindex="0" role="region" aria-label="Projects">
  <table>
    <caption>Recent projects</caption>
    <thead><tr><th scope="col">Project</th><th scope="col">Status</th></tr></thead>
    <tbody><tr><th scope="row">Website refresh</th><td>In progress</td></tr></tbody>
    <tfoot><tr><th scope="row">Total</th><td>1 project</td></tr></tfoot>
  </table>
</div>
`,height:"270",title:"Tables",src:"/specimens/2e9784cd878e6b68.html"}),s[15]||(s[15]=i("",3)),t(a,{source:`<label for="upload">Upload</label>
<progress id="upload" max="100" value="40">40%</progress>
<label for="pending">Preparing</label>
<progress id="pending" max="100">Preparing…</progress>
<label for="storage">Storage</label>
<meter id="storage" min="0" max="100" value="65">65%</meter>
`,height:"330",title:"Progress and meter",src:"/specimens/0125dba22c94a93d.html"}),s[16]||(s[16]=i("",1))])}const F=l(p,[["render",e]]);export{u as __pageData,F as default};
