<script>
  // @ts-ignore
  import Menu from "carbon-icons-svelte/lib/Menu.svelte";
  import Close from "carbon-icons-svelte/lib/Close.svelte";
  import { sideMenuOpen } from "../../stores/stores";

  export let size = 32; // Supported icon sizes include 16, 20, 24, and 32.
  let isOpen;

  sideMenuOpen.subscribe((sideMenuNewState) => {
    isOpen = sideMenuNewState;
  })

  function handleClick() {
    if (isOpen) {
      sideMenuOpen.set(false);
    } else {
      sideMenuOpen.set(true);
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="side-menu-button" on:click={handleClick}>
  {#if isOpen}
    <Close size={32} />
  {:else}
    <Menu {size} />
  {/if}
</div>

<style>
  .side-menu-button:hover {
    cursor: pointer;
  }
  .side-menu-button {
    margin-top: 16px;
    padding-bottom: 10px;
  }
</style>

