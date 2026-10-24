<script setup>
import { withBase } from "vitepress";
defineProps({
  src: { type: String, required: true },
  title: { type: String, required: true },
  height: { type: String, default: "620" },
});
</script>
<template>
  <figure data-demo>
    <iframe
      :src="withBase(src)"
      :title="title"
      :height="height"
      loading="lazy"
    ></iframe>
    <figcaption>
      {{ title }} ·
      <a :href="withBase(src)" target="_blank" rel="noopener">
        Open full page ↗
      </a>
    </figcaption>
  </figure>
</template>
