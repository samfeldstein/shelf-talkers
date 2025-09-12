<script setup>
import Card from './Card.vue';
import { useCards } from '@/composables/useCards'

const { cards } = useCards()

// Example card to show when no cards exist
const exampleCard = {
  title: 'Example Title',
  author: 'Example Author',
  blurb: 'This is an example card. It will disappear when you create a new talker.',
  attribution: 'Example Attribution',
};
</script>

<template>
  <div class="cards">
    <!-- Render the example card if no cards exist -->
    <Card v-if="cards.length === 0" v-bind="exampleCard" />
    <Card v-for="card in cards" :key="card.title" v-bind="card" />
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
