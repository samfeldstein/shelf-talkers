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
    <slot />
    <button class="close" @click="closeModal">&times;</button>
  </dialog>
</template>

<style lang="scss" scoped>
dialog {
  min-width: 70%;
}

button.close {
  margin-top: 4em;
  padding: 1em;
  display: flex;
  justify-self: center;
  border: none;

  font-size: var(--font-large);
  background: none;
  color: var(--accent);

  &:hover {
    color: var(--text-color);
  }

    &:focus-visible {
      outline: 2px solid currentColor;
      border-radius: 4px;
    }
}
</style>