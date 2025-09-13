<script setup>
import { useLogo } from '@/composables/useLogo';

const { logoSrc, showLogo } = useLogo();
</script>

<template>
  <img v-if="showLogo && logoSrc" :src="logoSrc" alt="Logo" class="logo" />
</template>

<style scoped>
img {
  max-height: 2.75em;
  width: auto;
  position: absolute;
  top: -10px;
  right: 0;

  @media print {
    max-height: var(--logo-height);
  }
}
</style>