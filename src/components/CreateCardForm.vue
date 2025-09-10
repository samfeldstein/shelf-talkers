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
  <form @submit.prevent="handleSubmit" aria-labelledby="form-title">
    <fieldset>
      <legend id="form-title">Create Talker</legend>

      <div>
        <label for="title-input">Title</label>
        <input
          id="title-input"
          ref="titleInput"
          v-model="form.title"
          placeholder="The Road"
          required
          autocomplete="off"
        />
      </div>

      <div>
        <label for="author-input">Author</label>
        <input
          id="author-input"
          v-model="form.author"
          placeholder="Cormac McCarthy"
          required
          autocomplete="off"
        />
      </div>

      <div>
        <label for="blurb-input">Blurb</label>
        <textarea
          id="blurb-input"
          v-model="form.blurb"
          placeholder="Woof"
          required
          autocomplete="off"
        ></textarea>
      </div>

      <div>
        <label for="attribution-input">Attribution</label>
        <input
          id="attribution-input"
          v-model="form.attribution"
          placeholder="Sam, Bookseller at Composition Shop"
          required
          autocomplete="off"
        />
      </div>

      <button type="submit">Add Card</button>
    </fieldset>
  </form>
</template>

<style lang="scss" scoped>
form {
  max-width: 40rem;
  margin: 0 auto;
}

fieldset {
  display: grid;
  gap: 2rem;
  padding: 2rem;
}

div {
  display: grid;
  gap: 0.5rem;
}

label {
  font-weight: 700;
  font-size: 1rem;
}

input,textarea {
  padding: 0.25em;
}
</style>