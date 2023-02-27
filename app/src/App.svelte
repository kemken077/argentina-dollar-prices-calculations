<script>
  import DolarTile from "./lib/DolarTile.svelte";
  import Header from "./lib/Header.svelte";
  import { SPANISH, ENGLISH } from './texts/languages';
</script>

<main>
  <Header title={SPANISH.header.title} />
  <DolarTile />
</main>

<style></style>
