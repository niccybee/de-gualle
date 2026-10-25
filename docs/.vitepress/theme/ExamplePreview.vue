<script setup>
import { ref } from "vue";
import { withBase } from "vitepress";
const { source, height = "300" } = defineProps({
  src: { type: String, required: true },
  title: { type: String, required: true },
  source: { type: String, required: true },
  height: { type: String, default: "300" },
});
const feedback = ref("");
async function copy() {
  try {
    await navigator.clipboard.writeText(source);
    feedback.value = "Copied HTML";
  } catch {
    feedback.value = "Select and copy the code below.";
  }
}
</script>
<template>
  <div data-specimen>
    <div data-specimen-toolbar>
      <small>Live HTML preview</small>
      <button type="button" data-variant="secondary" @click="copy">Copy HTML</button>
      <small role="status">{{ feedback }}</small>
    </div>
    <iframe :src="withBase(src)" :height="height" :title="`${title} example`"></iframe>
  </div>
</template>
