<script>
  import { ourPrice } from "../stores/stores";
  const inputPlaceholder = '0';
  let result = null;
  let price = 0;

  ourPrice.subscribe(value => {
    price = value;
  });

  $: calculatedPrice = result / price;

</script>

<h1>Precio real del dolar (1 USD): ${price}</h1>
<input
  type=number
  name="comparison-input"
  id="comparisonInput"
  placeholder={inputPlaceholder}
  bind:value={result} />

<h4>${result ? calculatedPrice.toFixed(2) : 0} USD</h4>

<style>
  input {
    font-size: 62px;
    color: white;
    width: 80%;
    padding: 20px;
    height: 100px;
  }
</style>