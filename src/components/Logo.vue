<script setup>
import { useLogo } from '@/composables/useLogo';

const { logoSrc } = useLogo();
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