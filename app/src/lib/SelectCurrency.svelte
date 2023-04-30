<!-- <script>
// @ts-nocheck
  import { calculationMode } from '../stores/stores';
  import { Select, SelectItem } from "carbon-components-svelte";
</script>

<Select
  labelText="Currency"
  on:change={(e) => calculationMode.set(e.target.value)}
>
  <SelectItem value="dollars" />
  <SelectItem value="pesos" />
</Select> -->

<script>
  import { ComboBox } from "carbon-components-svelte";
  import { calculationMode } from '../stores/stores';
  function handleSelect(event) {
    const currencyMode = event.detail.selectedItem.text;
    console.log({event, currency: event.detail.selectedItem.text});
    calculationMode.set(currencyMode);
  }
</script>

<ComboBox
  titleText=""
  placeholder="Elige una divisa"
  items={[
    { id: "0", text: "dollars" },
    { id: "1", text: "pesos" },
    { id: "2", text: "euros" },
    { id: "3", text: "reales" },
  ]}
  on:select={handleSelect}
/>



<!-- 
Event name	event.detail type
on:select	{ selectedId: ComboBoxItemId; selectedItem: ComboBoxItem } -->