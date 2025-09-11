<script setup>
import { ref, onMounted } from 'vue';
import CreateCardForm from './CreateCardForm.vue';
import Card from './Card.vue';

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
  <div class="cards">
    <Card v-for="(card, index) in cards" :key="index" :title="card.title" :author="card.author" :blurb="card.blurb"
      :attribution="card.attribution" />
  </div>

</template>
