<script setup>
import { reactive, ref, nextTick } from "vue";
import Modal from "./Modal.vue";

const emit = defineEmits(["create"]);

const form = reactive({
  title: "The Road",
  author: "Cormac McCarthy",
  blurb: "Oof",
  attribution: "Sam",
});

const titleInput = ref(null);
const success = ref(false);

function isFormValid() {
  return Object.values(form).every((val) => val.trim() !== "");
}

function handleSubmit() {
  if (isFormValid()) {
    emit("create", { ...form });
    form.title = "";
    form.author = "";
    form.blurb = "";
    form.attribution = "";

    // Set success state for submit button
    success.value = true;
    setTimeout(() => {
      success.value = false;
    }, 2000);

    nextTick(() => {
      titleInput.value?.focus();
    });
  }
}
</script>

<template>
  <Modal label="Create Talker">
    <form @submit.prevent="handleSubmit" aria-labelledby="form-title">
      <fieldset>
        <legend id="form-title">Create Talker</legend>

        <div>
          <label for="title-input">Title</label>
          <input id="title-input" ref="titleInput" v-model="form.title" placeholder="The Road" required
            autocomplete="off" />
        </div>

        <div>
          <label for="author-input">Author</label>
          <input id="author-input" v-model="form.author" placeholder="Cormac McCarthy" required autocomplete="off" />
        </div>

        <div>
          <label for="blurb-input">Blurb</label>
          <textarea id="blurb-input" v-model="form.blurb" placeholder="Woof" required autocomplete="off"></textarea>
        </div>

        <div>
          <label for="attribution-input">Attribution</label>
          <input id="attribution-input" v-model="form.attribution" placeholder="Sam, Bookseller at Composition Shop"
            required autocomplete="off" />
        </div>

        <button class="submit" type="submit" :disabled="success">
          {{ success ? "Talker Created ✓" : "Create Talker" }}
        </button>
      </fieldset>
    </form>
  </Modal>
</template>

<style lang="scss" scoped>
div {
  display: grid;
  gap: 0.5rem;
}

label {
  font-weight: 700;
  font-size: 1rem;
}

button.submit {
  width: fit-content;
}
</style>
