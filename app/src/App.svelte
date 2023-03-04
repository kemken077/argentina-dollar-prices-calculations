<script>
  import Calculations from "./lib/Calculations.svelte";
  import DolarPrices from "./lib/DolarPrices.svelte";
  import Header from "./lib/Header.svelte";
  import { SPANISH } from './texts/languages';

  const modes = {
    dollars: 'dollars',
    pesos: 'pesos',
  };
  let selectedMode = modes.dollars;

  const handleModeButton = (event) => {
    const id = event.target.id;
    selectedMode = id === 'dollarsButton' ? 'dollars' : 'pesos';
  };
</script>

<main>
  <Header title={SPANISH.header.title} />
  <div class="container">
    <section class="mode-trigger">
      <button
        id="dollarsButton"
        on:click={handleModeButton}
        class="{selectedMode === 'dollars' ? 'selected' : ''}">{SPANISH.calculationTrigger.buttons.dollars}</button>
      <button
        id="pesosButton"
        on:click={handleModeButton}
        class="{selectedMode === 'pesos' ? 'selected' : ''}">{SPANISH.calculationTrigger.buttons.pesos}</button>
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
  section.mode-trigger button {
    height: 80px;
    width: 44%;
  }
  button.selected {
    outline: none;
  }
  button#dollarsButton.selected {
    background-color: #278664;
  }
  button#pesosButton.selected {
    background-color: #DF551E;
  }
</style>
