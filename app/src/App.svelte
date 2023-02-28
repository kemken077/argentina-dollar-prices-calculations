<script>
  import DolarPrices from "./lib/DolarPrices.svelte";
  import Header from "./lib/Header.svelte";
  import { SPANISH } from './texts/languages';
</script>

<main>
  <Header title={SPANISH.header.title} />
  <section class="prices">
    <DolarPrices />
  </section>
  <section class="calculations">
    <!-- Calculation here. -->
  </section>
</main>

<style>
  section {
    max-width: 50%;
  }
</style>
