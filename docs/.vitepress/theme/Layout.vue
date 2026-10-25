<script setup>
import { ref } from "vue";
import { useData, withBase } from "vitepress";
const { page, frontmatter } = useData();
const theme = ref("system");
const navigation = [
  ["Start here", "get-started"],
  ["Architecture", "architecture"],
  ["Elements", "elements"],
  ["States", "states"],
  ["Components", "components"],
  ["Colour studio", "themes"],
  ["Sizing", "sizing"],
  ["Chat recipe", "chat"],
  ["Dashboard recipe", "dashboard"],
  ["Compatibility", "compatibility"],
  ["For agents", "agents"],
];
const current = (slug) =>
  page.value.relativePath === `${slug}.md` ? "page" : undefined;
</script>

<template>
  <div
    data-de-gualle
    data-size="md"
    :data-theme="theme === 'system' ? undefined : theme"
    data-docs
  >
    <a data-skip href="#main-content">Skip to content</a>
    <header data-doc-header>
      <nav aria-label="Main navigation">
        <a :href="withBase('/')" data-wordmark>
          <span aria-hidden="true">🍅</span>
          de-gualle
          <small>0.1</small>
        </a>
        <ul>
          <li><a :href="withBase('/get-started.html')">Documentation</a></li>
          <li><a :href="withBase('/elements.html')" :aria-current="current('elements')">Elements</a></li>
          <li><a :href="withBase('/components.html')" :aria-current="current('components')">Components</a></li>
          <li>
            <a :href="withBase('/examples/chat.html')" target="_self">
              Playground ↗
            </a>
          </li>
          <li>
            <label data-theme-control>
              Theme
              <select v-model="theme" aria-label="Documentation theme">
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </label>
          </li>
        </ul>
      </nav>
    </header>
    <details data-mobile-menu>
      <summary>Explore documentation</summary>
      <nav aria-label="Mobile documentation">
        <ul>
          <li v-for="[label, slug] in navigation" :key="slug">
            <a :href="withBase(`/${slug}.html`)" :aria-current="current(slug)">
              {{ label }}
            </a>
          </li>
        </ul>
      </nav>
    </details>
    <div data-doc-layout :data-home="frontmatter.home ? '' : undefined">
      <aside
        v-if="!frontmatter.home"
        data-doc-sidebar
        aria-label="Documentation"
      >
        <small>THE FIELD GUIDE</small>
        <nav>
          <ul>
            <li v-for="[label, slug] in navigation" :key="slug">
              <a
                :href="withBase(`/${slug}.html`)"
                :aria-current="current(slug)"
              >
                {{ label }}
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        <a :href="withBase('/llms-full.txt')">Plain text for agents ↗</a>
      </aside>
      <main id="main-content" tabindex="-1"><Content /></main>
    </div>
    <footer data-doc-footer>
      <p>
        <strong>🍅 de-gualle</strong>
        · A small foundation for useful interfaces.
      </p>
      <small>
        Original CSS and documentation · MIT · Inspired by Pico and atomic
        design.
      </small>
    </footer>
  </div>
</template>
