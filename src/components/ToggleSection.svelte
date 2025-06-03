<script>
  import { fly } from "svelte/transition";

  export let label = "Options";
  export let buttonClass;

  // Show on click
  let isVisible = false;

  function toggle() {
    isVisible = !isVisible;
  }

  // Hide on escape
  function handleKeydown(event) {
    if (event.key === "Escape") {
      isVisible = false;
    }
  }

  // Attach/detach listener when modal opens/closes
  $: {
    if (isVisible) {
      window.addEventListener("keydown", handleKeydown);
    } else {
      window.removeEventListener("keydown", handleKeydown);
    }
  }
</script>

<button on:click={toggle} class={buttonClass}>
  {label}
</button>

{#if isVisible}
  <div class="toggle-content" transition:fly={{ y: -200, duration: 300 }}>
    <slot />
    <button class="close-button" aria-label="Close" on:click={toggle}>×</button>
  </div>
{/if}

<style type="scss">
  .toggle-content {
    position: fixed;
    top: 0;
    z-index: 1000;
    background: white;
    border-width: 1px;
    border-style: solid;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: -1px;
    display: grid;
    gap: 1rem;
  }

  .close-button {
    top: 0.5rem;
    right: 0.5rem;
    background: transparent;
    border: none;
    font-size: 2rem;
    line-height: 1;
    color: #666;
    padding: 0;
  }

  .close-button:hover {
    color: #000;
  }
</style>
