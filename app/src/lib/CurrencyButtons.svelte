<script> 
  import Button, { Group, Label } from '@smui/button';
  import { SPANISH } from '../texts/languages';
  import { calculationMode } from '../stores/stores';
  const modes = {
    dollars: 'dollars',
    pesos: 'pesos',
  };
  export const mode = modes. dollars;

  const handleModeButton = (event) => {
    calculationMode.set(event.target.id);
  };
</script>

<div class="currency-buttons">
  <Group variant="raised">
    <Button
      id="dollars"
      on:click={handleModeButton}
      color="primary">
      {SPANISH.calculationTrigger.buttons.dollars}
    </Button>
    <Button
      id="pesos"
      on:click={handleModeButton}
      color="secondary">
      {SPANISH.calculationTrigger.buttons.pesos}
    </Button>
  </Group>
</div>
