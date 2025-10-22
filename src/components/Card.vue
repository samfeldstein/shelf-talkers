<script setup>
import Logo from './Logo.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['title', 'author', 'blurb', 'attribution', 'id']);
const emit = defineEmits(['update']);

function updateCard(field, event) {
  // Get the updated content
  const content = event.target.innerText.trim();

  console.log(`Field "${field}" updated to: "${content}"`);

  // Emit the change to parent
  emit('update', {
    id: props.id,
    field,
    value: content
  });
}
</script>

<template>
  <div class="card">
    <header>
      <hgroup>
        <h3 class="title" contenteditable="true" @blur="updateCard('title', $event)">{{ title }}</h3>
        <p class="author" contenteditable="true" @blur="updateCard('author', $event)">{{ author }}</p>
      </hgroup>
      <Logo />
    </header>
    <p class="blurb" contenteditable="true" @blur="updateCard('blurb', $event)">{{ blurb }}</p>
    <p class="attribution" contenteditable="true" @blur="updateCard('attribution', $event)">{{ attribution }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  font-family: var(--font);
  font-size: 0.85em;
  font-weight: 400;

  padding: 1rem 2rem;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;

  @media screen {
    background-color: oklch(0.99 0 0);

    border-radius: 4px;
    max-width: 40rem;
    min-height: 15rem;
    box-shadow: 0 2px 8px var(--accent);
  }

  @media print {
    border: 1px solid var(--accent);
    padding: 1em;
    page-break-inside: avoid;
    break-inside: avoid;
  }
}

header {
  border-bottom: 1px solid;
  padding-bottom: 0.5em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

hgroup {
  flex: 1;
}

h3 {
  font-weight: 700;
  margin: 0 0 0.25rem 0;

  @media print {
    font-size: var(--title-size);
  }
}

.author {
  margin: 0;
  font-size: 0.8em;
  font-style: italic;

  @media print {
    font-size: var(--author-size);
  }
}

.blurb {
  line-height: 1.3;

  @media print {
    font-size: var(--blurb-size);
  }
}

.attribution {
  font-size: 0.8em;
  margin: 0;
  text-align: right;
  font-style: italic;

  @media print {
    font-size: var(--attribution-size);
  }
}
</style>