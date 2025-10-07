<script setup>
import { ref, onMounted } from 'vue';

// Reactive state for logo height
const logoHeight = ref('45'); // Default height in pixels

// Function to update logo height in localStorage and CSS variables
function updateLogoHeight() {
  localStorage.setItem('logo-height', logoHeight.value);
  document.documentElement.style.setProperty('--logo-height', `${logoHeight.value}px`);
}

// Load saved logo height on page load
onMounted(() => {
  logoHeight.value = localStorage.getItem('logo-height') ?? '45'; // Default to 45px if not set
  updateLogoHeight();
});
</script>

<template>
  <label for="logo-height">Logo Height</label>
  <input id="logo-height" type="number" step="1" v-model="logoHeight" @input="updateLogoHeight" />
</template>