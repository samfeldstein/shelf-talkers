<script setup>
import { ref } from 'vue';

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
  <button @click="openModal">Open Modal</button>

  <dialog ref="dialogRef">
    <slot />
    <button @click="closeModal">Close</button>
  </dialog>
</template>