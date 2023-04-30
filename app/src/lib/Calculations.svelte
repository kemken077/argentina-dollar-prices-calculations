<script>
  import { ourPrice } from "../stores/stores";
  import { calculationMode } from '../stores/stores';
  import { SPANISH } from "../texts/languages";
  import  { fomartAmountToCurrency } from '../utils/format';
  let mode;

  const inputPlaceholder = '0';
  let inputAmountInPesos = null;
  let inputAmountInDollars = null;
  let price = 0;

  ourPrice.subscribe((newPrice) => {
    price = newPrice;
  });

  calculationMode.subscribe((newMode) => {
    mode = newMode;
  });

  $: calculatedPriceDollars = inputAmountInPesos / price;
  $: calculatedPricePesos = price * inputAmountInDollars ;
  $: formattedPesos =  fomartAmountToCurrency(inputAmountInPesos); 
  $: formattedDollars =  fomartAmountToCurrency(inputAmountInDollars);

</script>

<div class={`calculations ${mode === 'dollars' ? 'dollars': 'pesos'}`}>
  <h1>{SPANISH.ourPrice.realPriceTitle} AR ${price}</h1>
  {#if mode === 'dollars'}
    <div class="input-container dollars">
      <input
        type=number
        name="comparison-input"
        id="comparisonInput"
        min=0
        placeholder={inputPlaceholder}
        bind:value={inputAmountInPesos} />
    </div>
    <h1 class="pesos">AR ${formattedPesos ? formattedPesos : 0}</h1>
    <h3>son:</h3>
    <h1 class="dollars">USD ${inputAmountInPesos && calculatedPriceDollars ? fomartAmountToCurrency(calculatedPriceDollars.toFixed(2)) : 0}</h1>
  {/if}

  {#if mode === 'pesos'}
    <div class="input-container pesos">
      <input
        type=number
        name="comparison-input"
        id="comparisonInput"
        max=10
        placeholder={inputPlaceholder}
        bind:value={inputAmountInDollars} />
    </div>
    <h1 class="pesos">USD ${formattedDollars ? formattedDollars : 0}</h1>
    <h3>son:</h3>
    <h1 class="result-dollars">AR ${inputAmountInDollars && calculatedPricePesos ? fomartAmountToCurrency(calculatedPricePesos.toFixed(2)) : 0}</h1>
  {/if}
</div>


<style>
  .calculations {
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .calculations.dollars {
    background: #278664;
  }
  .calculations.pesos {
    background: #DF551E;
  }
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
  .calculations.pesos input {
    color: #DF551E;
  }
  h3 {
    margin: 0;
    color: #fefeea;
  }
  h1 {
    font-size: 28px;
    color: #fefeea;
  }
  h1.pesos,
  h1.dollars {
    font-size: 36px;
  }
  h1.dollars,
  h1.result-dollars {
    margin: 20px auto;
    box-sizing: border-box;
    background-color: #fefeea;
    padding: 20px;
    width: 94%;
    border-radius: 10px;
    display: block;
  }
  h1.result-dollars {
    font-size: 22px;
    color: #DF551E;
  }
  h1.dollars {
    color: #79a471;
  }
  h1.pesos {
    margin-bottom: 0;
    color: #fefeea;
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
