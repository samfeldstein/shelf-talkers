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
  <button @click="openModal">{{ label }}</button>

  <dialog ref="dialogRef">
    <div class="content">


      <slot />

      <button class="close" @click="closeModal">Close</button>
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  width: 100%;
  height: 100%;
  border: 1px solid currentColor;
  border-radius: 4px;
}

.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

button.close {
  width: fit-content;
}
</style>