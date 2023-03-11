<script>
  import Calculations from "./lib/Calculations.svelte";
  import CurrencyButtons from "./lib/CurrencyButtons.svelte";
  import DolarPrices from "./lib/DolarPrices.svelte";
  import Header from "./lib/Header.svelte";
  import { SPANISH } from './texts/languages';
  import { calculationMode } from "./stores/stores";

  let selectedMode;
  calculationMode.subscribe(newStoredMode => {
    selectedMode = newStoredMode;
  });
</script>

<main>
  <Header title={SPANISH.header.title} />
  <div class="container">
    <section class="mode-trigger">
      <CurrencyButtons mode={selectedMode} />
    </section>
    <section class="calculations">
      <Calculations mode={selectedMode} />
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
