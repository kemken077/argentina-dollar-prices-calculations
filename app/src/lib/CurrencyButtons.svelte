<script>
  import { SPANISH } from '../texts/languages';
  import { calculationMode } from '../stores/stores';
  const handleModeButton = (event) => {
    calculationMode.set(event.target.id);
  };
</script>

<div class="currency-buttons">
  <button
    id="dollars"
    on:click={handleModeButton}
    color="primary">
    {SPANISH.calculationTrigger.buttons.dollars}
  </button>
  <button
    id="pesos"
    on:click={handleModeButton}
    color="secondary">
    {SPANISH.calculationTrigger.buttons.pesos}
  </button>
</div>
