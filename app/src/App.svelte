<script>
  import Calculations from "./lib/Calculations.svelte";
  import DolarPrices from "./lib/DolarPrices.svelte";
  import Header from "./lib/Header.svelte";
  import { SPANISH } from './texts/languages';
</script>

<main>
  <Header title={SPANISH.header.title} />
  <div class="container">
    <section class="prices">
      <DolarPrices />
    </section>
    <section class="calculations">
      <Calculations />
    </section>
  </div>
</main>

<style>
  .container {
    display: flex;
  }
  section {
    max-width: 50%;
    width: 50%;
  }
  @media screen and (max-width: 1024px) {
    section {
      max-width: 100%;
      width: 100%;
    }
  }
</style>
