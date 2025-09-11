<script setup>
import { ref, onMounted, watch } from "vue";

// Reactive state for card dimensions
const cardWidth = ref("5"); // Default width in inches
const cardHeight = ref("2.25"); // Default height in inches

// Load saved dimensions from localStorage on page load
onMounted(() => {
  const savedWidth = localStorage.getItem("card-width");
  const savedHeight = localStorage.getItem("card-height");

  if (savedWidth) cardWidth.value = savedWidth;
  if (savedHeight) cardHeight.value = savedHeight;

  // Apply the saved dimensions to CSS variables
  updateCardSize();
});

// Watch for changes and save to localStorage
watch([cardWidth, cardHeight], ([newWidth, newHeight]) => {
  localStorage.setItem("card-width", newWidth);
  localStorage.setItem("card-height", newHeight);
  updateCardSize();
});

// Function to update CSS variables
function updateCardSize() {
  document.documentElement.style.setProperty("--card-width", `${cardWidth.value}in`);
  document.documentElement.style.setProperty("--card-height", `${cardHeight.value}in`);
}
</script>

<template>
  <fieldset>
    <legend>Card Size</legend>
    <div class="input width">
      <label for="card-width">Width (inches)</label>
      <input id="card-width" type="number" step="0.05" v-model="cardWidth" />
    </div>
    <div class="input height">
      <label for="card-height">Height (inches)</label>
      <input id="card-height" type="number" step="0.05" v-model="cardHeight" />
    </div>
  </fieldset>
</template>

<style scoped>
div {
  display: grid;
  gap: 0.5rem;
}
</style>