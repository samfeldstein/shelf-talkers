<script setup>
import Card from './Card.vue';
import { useCards } from '@/composables/useCards'

const { cards } = useCards()
</script>

<template>
  <div class="cards">
    <Card v-for="card in cards" :key="card.title" :title="card.title" :author="card.author" :blurb="card.blurb"
      :attribution="card.attribution" />
  </div>
</template>

<style scoped>
.cards {

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media print {
    display: grid;
    grid-template-columns: var(--card-width) var(--card-width);
    grid-auto-rows: var(--card-height);
    gap: 0;
  }
}
</style>
