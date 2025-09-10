<script setup>
import { ref, onMounted } from 'vue';
import CreateCardForm from './CreateCardForm.vue';

const cards = ref([]);

onMounted(() => {
  const saved = localStorage.getItem('cards');
  if (saved) cards.value = JSON.parse(saved);
});

function addCard(card) {
  cards.value.push(card);
  localStorage.setItem('cards', JSON.stringify(cards.value));
}
</script>

<template>
  <CreateCardForm @create="addCard" />
  <ul>
    <li v-for="(card, idx) in cards" :key="idx">
      <h3>{{ card.title }}</h3>
      <p>{{ card.author }}</p>
      <p>{{ card.blurb }}</p>
      <p><em>{{ card.attribution }}</em></p>
    </li>
  </ul>
</template>
