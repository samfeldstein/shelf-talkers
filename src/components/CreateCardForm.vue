<script setup>
import { ref, reactive, nextTick } from "vue";
import { useCards } from '@/composables/useCards'
import Modal from "./Modal.vue";

const { cards } = useCards()

const form = reactive({
  title: "",
  author: "",
  blurb: "",
  attribution: "",
})

const titleInput = ref(null)
const success = ref(false)

function submitCard(formData) {
  cards.value.push({ ...formData })
}

function isFormValid() {
  return Object.values(form).every((val) => val.trim() !== "")
}

function resetForm() {
  form.title = ""
  form.author = ""
  form.blurb = ""
  form.attribution = ""
}

function submit() {
  if (isFormValid()) {
    submitCard(form)

    // Set success state for submit button
    success.value = true
    setTimeout(() => {
      success.value = false
    }, 2000)

    resetForm()

    nextTick(() => {
      titleInput.value?.focus()
    });
  }
}
</script>

<template>
  <Modal label="Create Talker">
    <form @submit.prevent="submit" aria-labelledby="form-title">
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

        <button class="submit default" type="submit" :disabled="success">
          {{ success ? "Talker Created ✓" : "Create Talker" }}
        </button>
      </fieldset>
    </form>
  </Modal>
</template>

<style lang="scss" scoped>
form {
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
}

button.submit {
  margin-top: 2em;
}
</style>
