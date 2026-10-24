<script setup>
import { computed, ref } from "vue";
import { generateTheme, themeCSS, contrast } from "../../../theme/generate.mjs";
const seed = ref("#c44332"),
  applied = ref("#c44332"),
  mode = ref("light"),
  size = ref("natural"),
  error = ref(""),
  feedback = ref("");
const theme = computed(() => generateTheme(applied.value));
const tokens = computed(() => theme.value[mode.value]);
const output = computed(() => themeCSS(applied.value));
const scale = computed(() =>
  Object.entries(tokens.value).filter(([key]) => /primary-\d/.test(key)),
);
const checks = computed(() =>
  [
    ["Button text", "--dg-on-primary", "--dg-primary"],
    ["Link on page", "--dg-primary", "--dg-background"],
    ["Link on panel", "--dg-primary", "--dg-surface"],
    ["Body text", "--dg-text", "--dg-background"],
    ["Supporting text", "--dg-muted", "--dg-background"],
    ["Error text", "--dg-error", "--dg-surface"],
  ].map(([label, foreground, background]) => ({
    label,
    ratio: contrast(tokens.value[foreground], tokens.value[background]),
  })),
);
function generate() {
  try {
    applied.value = generateTheme(seed.value).seed;
    seed.value = applied.value;
    error.value = "";
    feedback.value = "Theme generated. Preview and CSS updated.";
  } catch (e) {
    error.value = e.message;
    feedback.value = "";
  }
}
async function copy() {
  try {
    await navigator.clipboard.writeText(output.value);
    feedback.value = "CSS copied.";
  } catch {
    feedback.value = "Clipboard unavailable. Select and copy the CSS below.";
  }
}
function download() {
  const url = URL.createObjectURL(
    new Blob([output.value], { type: "text/css" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "de-gualle.theme.css";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
</script>
<template>
  <section aria-label="Theme generator" data-theme-builder>
    <form @submit.prevent="generate">
      <div data-grid>
        <div data-field>
          <label for="brand-colour">Brand HEX colour</label>
          <input
            id="brand-colour"
            v-model="seed"
            :aria-invalid="error ? 'true' : undefined"
            :aria-describedby="error ? 'brand-help brand-error' : 'brand-help'"
            spellcheck="false"
          />
          <small id="brand-help">
            Any 3- or 6-digit HEX colour, including #.
          </small>
        </div>
        <label>
          Colour picker
          <input
            type="color"
            :value="applied"
            @input="
              seed = $event.target.value;
              generate();
            "
          />
        </label>
      </div>
      <button type="submit">Generate theme</button>
      <p v-if="error" id="brand-error" role="alert">{{ error }}</p>
    </form>
    <div data-grid>
      <label>
        Preview theme
        <select v-model="mode">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <label>
        Preview size
        <select v-model="size">
          <option value="natural">Natural</option>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </label>
    </div>
    <section
      data-de-gualle
      :style="tokens"
      :data-theme="mode"
      :data-size="size"
      data-theme-preview
      aria-label="Generated theme preview"
    >
      <small>YOUR COLOUR, A WHOLE SYSTEM</small>
      <h3>Small changes. A fresh perspective.</h3>
      <p>
        A neutral foundation lets your colour do the talking.
        <a href="#generated-css">See the generated CSS.</a>
      </p>
      <div data-swatches>
        <div v-for="[name, colour] in scale" :key="name">
          <span :style="{ background: colour }"></span>
          <small>{{ name.replace("--dg-primary-", "") }}</small>
          <code>{{ colour }}</code>
        </div>
      </div>
      <label for="preview-input">Project name</label>
      <input id="preview-input" value="Something worth making" />
      <p><small>Supporting text stays legible in both themes.</small></p>
      <div data-actions>
        <button type="button">Primary action</button>
        <button type="button" data-variant="secondary">Secondary</button>
        <button type="button" disabled>Unavailable</button>
      </div>
      <p role="alert">! An example error, explained in text.</p>
    </section>
    <table>
      <caption>
        Selected foreground/background checks ·
        {{ mode }}
      </caption>
      <thead>
        <tr>
          <th scope="col">Pair</th>
          <th scope="col">Contrast</th>
          <th scope="col">Normal text AA</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="check in checks" :key="check.label">
          <th scope="row">{{ check.label }}</th>
          <td>{{ check.ratio.toFixed(2) }}:1</td>
          <td>{{ check.ratio >= 4.5 ? "Pass" : "Fail" }}</td>
        </tr>
      </tbody>
    </table>
    <p>
      <small>
        Checks apply to these opaque sRGB pairs, not to every possible
        composition. Raw scale swatches are not all text colours.
      </small>
    </p>
    <h3 id="generated-css">Your theme, ready to plant.</h3>
    <p>Load this after the library. Both themes are included.</p>
    <div data-actions>
      <button type="button" @click="copy">Copy CSS</button>
      <button type="button" data-variant="secondary" @click="download">
        Download theme.css
      </button>
    </div>
    <p role="status" aria-live="polite">{{ feedback }}</p>
    <label for="theme-output">Generated CSS</label>
    <textarea
      id="theme-output"
      :value="output"
      readonly
      rows="12"
      spellcheck="false"
    ></textarea>
  </section>
</template>
