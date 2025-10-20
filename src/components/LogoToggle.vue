<script setup>
import { useLogo } from '@/composables/useLogo';

const { showLogo, toggleShowLogo } = useLogo()
</script>

<template>
  <button class="default" @click="toggleShowLogo">
    {{ showLogo ? 'Hide Logo' : 'Show Logo' }}
  </button>
</template>