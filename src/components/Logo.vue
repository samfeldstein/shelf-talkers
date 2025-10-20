<script setup>
import { useLogo } from '@/composables/useLogo';

const { logoSrc, showLogo } = useLogo();
</script>

<template>
  <img v-if="showLogo && logoSrc" :src="logoSrc" alt="Logo" class="logo" />
</template>

<style lang="scss" scoped>
img {
  height: 100%; // Set explicit width to improve page load
  max-height: 2.75em;
  width: auto;
  flex: 0; // Otherwise, grows to fill space on Safari and mobile, making title and author wrap. Title and author (hgroup) have flex 1

  @media print {
    max-height: var(--logo-height);
  }
}
</style>