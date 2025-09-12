<script setup>
import Card from './Card.vue';
</script>

<template>
  <Card class="preview" title="The Road" author="Cormac McCarthy"
    blurb="This card shows you what your shelf talkers will look like when printed."
    attribution="Sam Feldstein, Bookseller @ Composition Shop" />
</template>

<style scoped>
.preview {
  border-radius: unset;
  border: 1px solid var(--accent);
  margin: 0 auto;
  padding: 1em;
  width: var(--card-width);
  height: var(--card-height);
  box-shadow: unset;
}
</style>

<style lang="scss">
.preview {
  h3 {
    font-size: var(--title-size);
  }

  .author {
    font-size: var(--author-size);
  }

  .blurb {
    font-size: var(--blurb-size);
  }

  .attribution {
    font-size: var(--attribution-size);
  }

  img {
    max-height: var(--logo-height);
  }
}
</style>
