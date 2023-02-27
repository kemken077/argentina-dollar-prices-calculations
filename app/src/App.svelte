<script>
  import DolarMain from "./lib/DolarMain.svelte";
  import Header from "./lib/Header.svelte";
  import { SPANISH, ENGLISH } from './texts/languages';
</script>

<main>
  <Header title={SPANISH.header.title} />
  <DolarMain />
</main>

<style></style>
