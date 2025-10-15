<script setup>
import { useLogo } from '@/composables/useLogo';

const { logoSrc, showLogo } = useLogo();
</script>

<template>
  <img v-if="showLogo && logoSrc" :src="logoSrc" alt="Logo" class="logo" />
</template>

<style lang="scss" scoped>
img {
  max-height: 2.75em;
  width: auto;

  @media print {
    max-height: var(--logo-height);
  }
}
</style>