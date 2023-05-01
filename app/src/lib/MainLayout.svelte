
<script>
  import Calculations from "./Calculations.svelte";
  import DolarPrices from "./DolarPrices.svelte";
  import Header from "./Header.svelte";
  import { SPANISH } from '../texts/languages';
  import { calculationMode } from "../stores/stores";
  import SelectCurrency from "./SelectCurrency.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/all.css"
/>
</svelte:head>
<main>
  <Header title={SPANISH.header.title} />
  <div class="container">
    <section class="mode-trigger">
      <SelectCurrency />
    </section>
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
  section.mode-trigger {
    margin: 20px auto;
  }
</style>