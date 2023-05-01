<script>
  import { ComboBox } from "carbon-components-svelte";
  import { calculationMode } from '../stores/stores';
  const currencies = [
    {id: 0, text: 'USD - US Dollar', label: 'dollars'},
    {id: 1, text: 'ARS - Argentina Peso', label: 'pesos'},
    {id: 2, text: 'BRL - Brazilian Real', label: 'real'},
    {id: 3, text: 'EUR - Euro', label: 'euro'},
    {id: 4, text: 'GBP - British Pound', label: 'pound'},
    {id: 5, text: 'AUD - Australian Dollar', label: 'ausdollar'},
    {id: 6, text: 'CAD - Canadian Dollar', label: 'candollar'},
    {id: 7, text: 'JPY - Japanese Yen', label: 'yen'},
    {id: 8, text: 'CNY - Chinese Yuan Renminbi', label: 'yuan'},
  ];
  function handleSelect(event) {
    const currencyMode = event.detail.selectedItem.label;
    console.log({event, currencyText: event.detail.selectedItem.text});
    console.log({event, currencyLabel: event.detail.selectedItem.label});
    calculationMode.set(currencyMode);
  }
  /**
     * @param {number} id
     * @param {string} text
     */
  function getComboItem(id, text) {
    const item = {
      id,
      text,
    }; 
    return item;
  }
</script>

<ComboBox
  titleText=""
  placeholder="Elige una divisa"
  items={currencies}
  on:select={handleSelect}
/>



<!-- 
Event name	event.detail type
on:select	{ selectedId: ComboBoxItemId; selectedItem: ComboBoxItem } -->