<script>
  import { ourPrice } from "../stores/stores";
  import { SPANISH } from "../texts/languages";
  import  { fomartAmountToCurrency } from '../utils/format';
  const inputPlaceholder = '0';
  let inputAmountInPesos = null;
  let price = 0;

  ourPrice.subscribe(value => {
    price = value;
  });

  $: calculatedPrice = inputAmountInPesos / price;
  $: formattedPesos =  fomartAmountToCurrency(inputAmountInPesos); 

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

<h1 class="pesos">${formattedPesos ? formattedPesos : 0}</h1>
<h3>Pesos argentinos son:</h3>
<h1 class="dollars">${inputAmountInPesos && calculatedPrice ? fomartAmountToCurrency(calculatedPrice.toFixed(2)) : 0} USD</h1>

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
    margin: 0 auto 20px;
    background-color: #fefeea;
    border: none;
    border-radius: 10px;
    display: block;
    width: 94%;
    height: 90px;
    box-sizing: border-box;
    padding: 20px;
  }
  h3 {
    margin: 0;
  }
  h1 {
    font-size: 28px;
  }
  h1.pesos,
  h1.dollars {
    font-size: 36px;
  }
  h1.dollars {
    margin: 20px auto;
    box-sizing: border-box;
    color: #79a471;
    background-color: #fefeea;
    padding: 20px;
    width: 94%;
    border-radius: 10px;
    display: block;
  }
  h1.pesos {
    margin-bottom: 0;
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