<script setup>
import { ref, onMounted } from 'vue';

// Reactive state for font sizes
const titleSize = ref('');
const authorSize = ref('');
const blurbSize = ref('');
const attributionSize = ref('');

// Function to update font sizes in localStorage and CSS variables
function updateFontSizes() {
  localStorage.setItem('title-size', titleSize.value);
  localStorage.setItem('author-size', authorSize.value);
  localStorage.setItem('blurb-size', blurbSize.value);
  localStorage.setItem('attribution-size', attributionSize.value);

  document.documentElement.style.setProperty('--title-size', `${titleSize.value}px`);
  document.documentElement.style.setProperty('--author-size', `${authorSize.value}px`);
  document.documentElement.style.setProperty('--blurb-size', `${blurbSize.value}px`);
  document.documentElement.style.setProperty('--attribution-size', `${attributionSize.value}px`);
}

// Load saved font sizes on page load
onMounted(() => {
  titleSize.value = localStorage.getItem('title-size') ?? '18';
  authorSize.value = localStorage.getItem('author-size') ?? '12';
  blurbSize.value = localStorage.getItem('blurb-size') ?? '14';
  attributionSize.value = localStorage.getItem('attribution-size') ?? '12';

  updateFontSizes();
});
</script>

<template>

  <label for="title-size">Title Size (px)</label>
  <input id="title-size" type="number" step="0.5" v-model="titleSize" @input="updateFontSizes" />

  <label for="author-size">Author Size (px)</label>
  <input id="author-size" type="number" step="0.5" v-model="authorSize" @input="updateFontSizes" />

  <label for="blurb-size">Blurb Size (px)</label>
  <input id="blurb-size" type="number" step="0.5" v-model="blurbSize" @input="updateFontSizes" />

  <label for="attribution-size">Attribution Size (px)</label>
  <input id="attribution-size" type="number" step="0.5" v-model="attributionSize" @input="updateFontSizes" />
</template>
