<script setup>
import { ref, onMounted } from "vue";

const fontFamily = ref("Georgia");

// Function to update the font family
function updateFontFamily() {
  // Save the font family to localStorage
  localStorage.setItem("font-family", fontFamily.value);

  // Dynamically load the Google Font
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.value.replace(
    / /g,
    "+"
  )}&display=swap`;
  document.head.appendChild(link);

  // Apply the font family to the root CSS variable
  document.documentElement.style.setProperty("--font", fontFamily.value);
}

// Load the saved font family on page load
onMounted(() => {
  const savedFont = localStorage.getItem("font-family");
  if (savedFont) {
    fontFamily.value = savedFont;
    updateFontFamily();
  }
});
</script>

<template>
  <label for="font-family">Custom Font</label>
  <input type="text" id="font-family" v-model="fontFamily" placeholder="e.g. Roboto" @input="updateFontFamily" />
</template>