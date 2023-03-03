<script>
  import Calculations from "./lib/Calculations.svelte";
  import DolarPrices from "./lib/DolarPrices.svelte";
  import Header from "./lib/Header.svelte";
  import { SPANISH } from './texts/languages';
</script>

<main>
  <Header title={SPANISH.header.title} />
  <div class="container">
    <section class="calculations">
      <Calculations />
    </section>
    <section class="prices">
      <DolarPrices />
    </section>
  </div>
</main>

<style>
  .container {
    margin: 0 auto;
    text-align: center;
  }
  section {
    max-width: 100%;
    width: 100%;
  }
</style>
