<script setup>
import { ref, onMounted } from 'vue';

const logoSrc = ref('/compshop-logo.svg'); // Reactive state for the logo source

// Load the saved logo from localStorage on page load
onMounted(() => {
  const savedLogo = localStorage.getItem('logo-src');
  if (savedLogo) {
    logoSrc.value = savedLogo;
  }
});
</script>

<template>
  <img v-if="logoSrc" :src="logoSrc" alt="Logo" class="logo" />
</template>

<style scoped>
img {
  max-height: 3em;
  width: auto;
  position: absolute;
  top: -10px;
  right: 0;

  @media print {
    max-height: var(--logo-height);
  }
}
</style>