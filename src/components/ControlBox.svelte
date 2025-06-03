<script>
  export let id;
  export let buttonLabel;
  let isVisible = false;

  // Toggle visibility
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

<div class="control-box-wrapper">
  <button on:click={toggle}>
    {buttonLabel}
  </button>

  <div {id} class:hidden={!isVisible} class="control-box">
    <slot />
  </div>
</div>

<style>
  .control-box {
    display: grid;
    gap: 2rem;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* center the modal */
    z-index: 1000;
    background: white;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    padding: 2rem 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    max-width: 20rem;
  }

  button {
    width: 100%;
  }

  .hidden {
    display: none;
  }
</style>
