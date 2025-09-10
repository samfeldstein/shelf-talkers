<script setup>
import { reactive, ref, nextTick } from 'vue';

const emit = defineEmits(['create']);

const form = reactive({
  title: 'The Road',
  author: 'Cormac McCarthy',
  blurb: 'Oof',
  attribution: 'Sam'
});

const titleInput = ref(null)

function isFormValid() {
  return Object.values(form).every(val => val.trim() !== '');
}

function handleSubmit() {
  if (isFormValid()) {
    emit('create', { ...form });
    form.title = '';
    form.author = '';
    form.blurb = '';
    form.attribution = '';

    nextTick(() => {
      titleInput.value?.focus();
    });
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label>
      Title:
      <input ref="titleInput" v-model="form.title" required />
    </label>
    <label>
      Author:
      <input v-model="form.author" required />
    </label>
    <label>
      Blurb:
      <textarea v-model="form.blurb" required></textarea>
    </label>
    <label>
      Attribution:
      <input v-model="form.attribution" required />
    </label>
    <button type="submit">Add Card</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
textarea {
  min-height: 80px;
}
button {
  align-self: flex-start;
}
</style>