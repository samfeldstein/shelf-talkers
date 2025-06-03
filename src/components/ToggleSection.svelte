<script>
  export let label = "Options";
  export let buttonClass;

  let isVisible = false;

  function toggle() {
    isVisible = !isVisible;
  }
</script>

<button on:click={toggle} class={buttonClass}>
  {label}
</button>

{#if isVisible}
  <div class="toggle-content">
    <slot />
  </div>
{/if}

<style>
  .toggle-content {
    margin-top: 1rem;
  }
</style>
