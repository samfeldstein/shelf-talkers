import { ref, watch } from 'vue';

const cards = ref([]);

// Load cards on init
if (typeof window !== "undefined") {
  const savedCards = localStorage.getItem('cards');
  if (savedCards) {
    try {
      cards.value = JSON.parse(savedCards);
    } catch (e) {
      console.error('Error parsing cards from localStorage');
    }
  }
}

// Add this: Save cards anytime the array changes
watch(cards, (newCards) => {
  if (typeof window !== "undefined") {
    localStorage.setItem('cards', JSON.stringify(newCards));
  }
}, { deep: true });

// Update a specific card field
function updateCard(id, field, value) {
  const index = parseInt(id);
  if (!isNaN(index) && index >= 0 && index < cards.value.length) {
    cards.value[index][field] = value;
  }
}

// Add a new card
function addCard(card) {
  cards.value.push(card);
}

// Clear all cards
function clearCards() {
  cards.value = [];
}

export function useCards() {
  return {
    cards,
    addCard,
    updateCard,
    clearCards
  };
}