import { ref, watch } from "vue"

const cards = ref([]) // shared single instance

if (typeof window !== "undefined") {
  const saved = localStorage.getItem("cards")
  if (saved) cards.value = JSON.parse(saved)

  watch(cards, (newCard) => {
    localStorage.setItem("cards", JSON.stringify(newCard))
  }, { deep: true })
}

export function useCards() {
  return { cards }
}
