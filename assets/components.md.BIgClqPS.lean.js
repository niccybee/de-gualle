import{_ as h,h as n,o as l,c as k,l as i,f as t}from"./chunks/framework.-NaojeWQ.js";const c=JSON.parse('{"title":"Components: composed from HTML","description":"","frontmatter":{},"headers":[],"relativePath":"components.md","filePath":"components.md"}'),p={name:"components.md"};function e(E,s,r,d,g,o){const a=n("ExamplePreview");return l(),k("div",null,[s[0]||(s[0]=i("",5)),t(a,{source:`<header><h1>Project notebook</h1></header>
<main><p>Main content follows the shared page measure.</p></main>
<footer><small>A useful footer.</small></footer>
`,height:"310",title:"Page containers",src:"/specimens/7bf6c37d93efd238.html"}),s[1]||(s[1]=i("",3)),t(a,{source:`<div data-grid>
  <article><h3>Design</h3><p>Plan the next release.</p></article>
  <article><h3>Build</h3><p>Make something useful.</p></article>
</div>
`,height:"390",title:"Responsive grid",src:"/specimens/3f1a27f505b5041f.html"}),s[2]||(s[2]=i("",3)),t(a,{source:`<div data-actions>
  <button type="button">Save changes</button>
  <button type="button" data-variant="secondary">Cancel</button>
</div>
`,height:"170",title:"Action row",src:"/specimens/9119b85b305f3f70.html"}),s[3]||(s[3]=i("",3)),t(a,{source:`<div data-stack>
  <label>Project <input name="project" value="Documentation"></label>
  <p>Keep related items together.</p>
  <button type="button">Continue</button>
</div>
`,height:"320",title:"Vertical stack",src:"/specimens/9ab46ffbf2533716.html"}),s[4]||(s[4]=i("",3)),t(a,{source:`<div data-field>
  <label for="email">Email address</label>
  <input id="email" type="email" name="email" autocomplete="email" aria-describedby="email-help">
  <small id="email-help">We’ll only use this to reply.</small>
</div>
`,height:"220",title:"Field",src:"/specimens/b54c3a3d5171cebc.html"}),s[5]||(s[5]=i("",3)),t(a,{source:`<fieldset role="group">
  <legend>Search projects</legend>
  <input type="search" name="query" aria-label="Project name">
  <button type="button">Search</button>
</fieldset>
`,height:"220",title:"Group",src:"/specimens/63901345a5aca758.html"}),s[6]||(s[6]=i("",3)),t(a,{source:`<article>
  <header><h3>Documentation</h3></header>
  <p>Examples for every component.</p>
  <footer><a href="#details">Read project details</a></footer>
</article>
<p id="details">Last updated today.</p>
`,height:"340",title:"Card",src:"/specimens/2d0a4f5c7dfa529b.html"}),s[7]||(s[7]=i("",3)),t(a,{source:`<p role="status">Your changes have been saved.</p>
<p role="alert">Upload failed. Check the connection and try again.</p>
`,height:"220",title:"Status and error",src:"/specimens/2137bcb24ff48c4d.html"}),s[8]||(s[8]=i("",3)),t(a,{source:`<details>
  <summary>What is included?</summary>
  <p>Native elements and useful compositions.</p>
</details>
<details open>
  <summary>Does it require JavaScript?</summary>
  <p>This disclosure works with native HTML alone.</p>
</details>
`,height:"320",title:"Accordion / disclosure",src:"/specimens/a27da940d579d8f0.html"}),s[9]||(s[9]=i("",3)),t(a,{source:`<nav aria-label="Project navigation">
  <a href="#overview">Project</a>
  <ul><li><a href="#overview">Overview</a></li><li><a href="#settings">Settings</a></li></ul>
</nav>
<p id="overview">Project overview</p>
<p id="settings">Project settings</p>
`,height:"250",title:"Navigation",src:"/specimens/de12804b4a1fc30d.html"}),s[10]||(s[10]=i("",3)),t(a,{source:`<nav aria-label="Project actions">
  <details>
    <summary>Project actions</summary>
    <ul><li><a href="#edit">Edit project</a></li><li><a href="#archive">Archive project</a></li></ul>
  </details>
</nav>
<p id="edit">Edit destination</p>
<p id="archive">Archive destination</p>
`,height:"330",title:"Dropdown",src:"/specimens/9cf80cdbb9b1cd21.html"}),s[11]||(s[11]=i("",3)),t(a,{source:`<button type="button" id="open">Edit project</button>
<dialog id="edit" aria-labelledby="edit-title">
  <h2 id="edit-title">Edit project</h2>
  <p>Update your project details.</p>
  <form method="dialog"><button>Done</button></form>
</dialog>
<script>
  document.getElementById("open").addEventListener("click", function () {
    document.getElementById("edit").showModal();
  });
<\/script>
`,height:"340",title:"Modal dialog",src:"/specimens/5e4380f9b84d9c15.html"}),s[12]||(s[12]=i("",3)),t(a,{source:`<button type="button" aria-busy="true" disabled>Saving…</button>
<p role="status">Saving your changes. Please wait.</p>
`,height:"190",title:"Loading",src:"/specimens/19384c490499db28.html"}),s[13]||(s[13]=i("",3)),t(a,{source:`<button type="button" aria-label="Save project" data-tooltip="Save project">Save</button>
<p><abbr title="Hypertext Markup Language">HTML</abbr> uses a native title.</p>
<label for="reference">Reference</label>
<input id="reference" aria-describedby="reference-help">
<small id="reference-help">Essential help stays visible.</small>
`,height:"330",title:"Tooltip / nonessential hint",src:"/specimens/363eba852dfa94fc.html"}),s[14]||(s[14]=i("",3)),t(a,{source:`<article data-speaker="assistant">
  <header><strong>Assistant</strong></header>
  <p>How can I help?</p>
</article>
<article data-speaker="user">
  <header><strong>You</strong></header>
  <p>Let’s build something useful.</p>
</article>
`,height:"350",title:"Message",src:"/specimens/b457c37c6c8ca468.html"}),s[15]||(s[15]=i("",3)),t(a,{source:`<form data-composer>
  <label for="message">Your message</label>
  <textarea id="message" name="message" required></textarea>
  <div data-actions>
    <small>Shift/Enter inserts a new line.</small>
    <button type="submit">Send message</button>
  </div>
</form>
`,height:"330",title:"Composer",src:"/specimens/6b8529cdb1aaf94d.html"}),s[16]||(s[16]=i("",3)),t(a,{source:`<section data-de-gualle data-chat aria-labelledby="chat-title">
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
`,height:"650",title:"Chat",src:"/specimens/1bdda0a5c1110401.html"}),s[17]||(s[17]=i("",3)),t(a,{source:`<section data-de-gualle data-dashboard aria-labelledby="overview-title">
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
`,height:"650",title:"Dashboard",src:"/specimens/d89bd782d181ec1a.html"}),s[18]||(s[18]=i("",1))])}const u=h(p,[["render",e]]);export{c as __pageData,u as default};
