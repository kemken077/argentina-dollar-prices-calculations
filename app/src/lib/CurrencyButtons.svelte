<script> 
  import Button, { Group, Label } from '@smui/button';
  import { SPANISH } from '../texts/languages';
  import { calculationMode } from '../stores/stores';
  const modes = {
    dollars: 'dollars',
    pesos: 'pesos',
  };
  export let mode = modes. dollars;

  const handleModeButton = (event) => {
    const id = event.target.id;
    console.log(`click on ${id}`);
    mode = id === 'dollarsButton' ? 'dollars' : 'pesos';
    calculationMode.set(mode);
  };
</script>

<div class="currency-buttons">
  <Group>
    <Button
      on:click={handleModeButton}
      id="dollarsButton"
      class="{mode === 'dollars' ? 'selected' : ''}">
      <Label>{SPANISH.calculationTrigger.buttons.dollars}</Label>
    </Button>
    <Button
      id="pesosButton"
      on:click={handleModeButton}
      class="{mode === 'pesos' ? 'selected' : ''}">
      <Label>{SPANISH.calculationTrigger.buttons.pesos}</Label>
    </Button>
  </Group>
</div>