<script>
  import { ComboBox } from "carbon-components-svelte";
  import { calculationMode } from '../stores/stores';

  let selected = 0;
  const currencies = [
    {id: 0, text: 'USD - US Dollar', label: 'dollars'},
    {id: 1, text: 'ARS - Argentinian Peso', label: 'pesos'},
    {id: 2, text: 'BRL - Brazilian Real', label: 'real'},
    {id: 3, text: 'EUR - Euro', label: 'euro'},
    {id: 4, text: 'GBP - British Pound', label: 'pound'},
    {id: 5, text: 'AUD - Australian Dollar', label: 'ausdollar'},
    {id: 6, text: 'CAD - Canadian Dollar', label: 'candollar'},
    {id: 7, text: 'JPY - Japanese Yen', label: 'yen'},
    {id: 8, text: 'CNY - Chinese Yuan Renminbi', label: 'yuan'},
    {id: 9, text: 'UYU - Uruguayian Peso', label: 'uypesos'},
  ];
  function handleSelect(event) {
    const currencyMode = event.detail.selectedItem.label;
    calculationMode.set(currencyMode);
    selected = event.detail.selectedItem.id;
  }
</script>

<ComboBox
  titleText=""
  placeholder="Elige una divisa"
  selectedId="{selected}"
  items={currencies}
  on:select={handleSelect}
/>

