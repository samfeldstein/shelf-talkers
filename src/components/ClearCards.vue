<script setup>
import { useCards } from '@/composables/useCards'
const { cards } = useCards()

function clearCards() {
  cards.value = []
}
</script>

<template>
  <button class="default" @click="clearCards">Clear Cards</button>
</template>