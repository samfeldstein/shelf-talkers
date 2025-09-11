<script setup>
import { ref, onMounted } from 'vue'

const cardWidth = ref('5')
const cardHeight = ref('2.25')

function updateCardSize() {
  localStorage.setItem('card-width', cardWidth.value)
  localStorage.setItem('card-height', cardHeight.value)
  document.documentElement.style.setProperty('--card-width', `${cardWidth.value}in`)
  document.documentElement.style.setProperty('--card-height', `${cardHeight.value}in`)
}

onMounted(() => {
  cardWidth.value = localStorage.getItem('card-width') ?? '5'
  cardHeight.value = localStorage.getItem('card-height') ?? '2.25'
  updateCardSize()
})
</script>

<template>
  <fieldset>
    <legend>Card Size</legend>
    <label for="card-width">Width (inches)</label>
    <input id="card-width" type="number" step="0.05" v-model="cardWidth" @input="updateCardSize" />

    <label for="card-height">Height (inches)</label>
    <input id="card-height" type="number" step="0.05" v-model="cardHeight" @input="updateCardSize" />
  </fieldset>
</template>

<style scoped>
fieldset {
  display: grid;
  gap: .5rem;
}
</style>
