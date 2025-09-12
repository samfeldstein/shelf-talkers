<script setup>
import Logo from './Logo.vue';

defineProps(['title', 'author', 'blurb', 'attribution'])
</script>

<template>
  <div class="card">
    <header>
      <hgroup>
        <h3 class="title">{{ title }}</h3>
        <p class="author">{{ author }}</p>
      </hgroup>
      <Logo />
    </header>
    <p class="blurb">{{ blurb }}</p>
    <p class="attribution">{{ attribution }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  font-family: var(--font);
  font-weight: 400;
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;

  @media screen {
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
  // For logo positioning
  position: relative;
}

hgroup {
  // Prevent collision with logo
  max-width: 85%;
}

h3 {
  font-size: var(--font-large);
  font-weight: 700;
  margin: 0 0 0.25rem 0;

  @media print {
    font-size: var(--title-size);
  }
}

.author {
  margin: 0;
  font-size: var(--font-small);
  font-style: italic;

  @media print {
    font-size: var(--author-size);
  }
}

.blurb {
  font-size: var(--font-size-body);
  line-height: 1.3;

  @media print {
    font-size: var(--blurb-size);
  }
}

.attribution {
  font-size: var(--font-small);
  margin: 0;
  text-align: right;
  font-style: italic;

  @media print {
    font-size: var(--attribution-size);
  }
}
</style>