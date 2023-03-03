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
<div class="input-container">
  <input
    type=number
    name="comparison-input"
    id="comparisonInput"
    placeholder={inputPlaceholder}
    bind:value={inputAmountInPesos} />
</div>

<h4>${inputAmountInPesos ? calculatedPrice.toFixed(2) : 0} USD</h4>

<style>
  input::placeholder {
    color: #4e594a;
  }
  input:focus-visible {
    outline-color: #4e594a;
    outline-style: none;
  }
  input {
    font-size: 62px;
    color: #278664;
    margin: 20px auto;
    background-color: #fefeea;
    border: none;
    border-radius: 10px;
    display: block;
    width: 94%;
    height: 140px;
    box-sizing: border-box;
    padding: 20px;
  }
  h4 {
    font-size: 28px;
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 14px;
    }
    input {
      font-size: 40px;
    }
  }
</style>