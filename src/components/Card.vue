<script setup>
defineProps(['title', 'author', 'blurb', 'attribution'])
</script>

<template>
  <div class="card">
    <header>
      <h3>{{ title }}</h3>
      <p>{{ author }}</p>
    </header>
    <p>{{ blurb }}</p>
    <p>{{ attribution }}</p>
  </div>
</template>