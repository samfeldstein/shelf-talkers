<script setup>
import { ref } from 'vue';
defineProps(['label'])

const open = ref(false);
const dialogRef = ref(null);

function openModal() {
  dialogRef.value.showModal();
  open.value = true;
}

function closeModal() {
  dialogRef.value.close();
  open.value = false;
}
</script>

<template>
  <button class="open default" @click="openModal">{{ label }}</button>

  <dialog class="box-shadow" ref="dialogRef">
    <div class="content">
      <slot />
      <button class="close" @click="closeModal">&times;</button>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
dialog {
  min-width: 70%;
  padding: 0;
}

.content {
  overflow: auto;
  padding: 1rem;
  display: grid;
  gap: 4rem;
}

button.open {
  flex: 1;
}

button.close {
  border: none;
  padding: 1em;
  background: none;

  font-size: inherit;

  &:focus-visible {
    outline: 1px solid var(--ink);
  }
}
</style>