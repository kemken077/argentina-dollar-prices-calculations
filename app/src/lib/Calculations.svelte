<script>
  import { ourPrice } from "../stores/stores";
  import { SPANISH } from "../texts/languages";
  const inputPlaceholder = '0';
  let inputAmountInPesos = null;
  let price = 0;

  ourPrice.subscribe(value => {
    price = value;
  });

  $: calculatedPrice = inputAmountInPesos / price;

</script>

<h1>{SPANISH.ourPrice.realPriceTitle} ${price}</h1>
<input
  type=number
  name="comparison-input"
  id="comparisonInput"
  placeholder={inputPlaceholder}
  bind:value={inputAmountInPesos} />

<h4>${inputAmountInPesos ? calculatedPrice.toFixed(2) : 0} USD</h4>

<style>
  input {
    font-size: 62px;
    color: white;
    width: 80%;
    padding: 20px;
    height: 100px;
  }
</style>