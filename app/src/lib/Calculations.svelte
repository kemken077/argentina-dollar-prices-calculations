<script>
  import { ourPrice } from "../stores/stores";
  import { calculationMode, ratesUSDBased } from '../stores/stores';
  import  { formatAmountToCurrency } from '../utils/format';
  let mode;

  let inputAmount;
  let rates;
  const currenciesIDs = {
    dollars: 'USD',
    pesos: 'ARS',
    real: 'BRL',
    euro: 'EUR',
    pound: 'GBP',
    ausdollar: 'AUD',
    candollar: 'CAD',
    yen: 'JPY',
    yuan: 'CNY',
  };
  let price = 0;

  ourPrice.subscribe((newPrice) => {
    price = newPrice;
  });

  calculationMode.subscribe((newMode) => {
    mode = newMode;
  });

  ratesUSDBased.subscribe((newRates) => {
    rates = newRates;
  });

  /**
     * @param {number} inputAmount
     * @param {string | number} modeArg
     */
  function getCalculatedCurrencyPrice(inputAmount, modeArg) {
    const currencyID = currenciesIDs[modeArg];
    const rate = rates[currencyID];
    const blueDollarPrice = price;
    let currencyPriceInDollars = inputAmount;
    if (!rate) { // ARS
      currencyPriceInDollars = inputAmount;
    } else if (rate === 1) { // USD
      currencyPriceInDollars = inputAmount * blueDollarPrice;
    } else {
      currencyPriceInDollars = (inputAmount / rate) * blueDollarPrice;
    }
    return currencyPriceInDollars;
  }

  /**
     * @param {number} mode
     */
  function getPesoCurrencyValue(mode) {
    const currencyID = currenciesIDs[mode];
    const rate = rates[currencyID];
    return (1 / rate) * price;
  }

  /**
     * @param {string} mode
     */
  function getAmountPlaceholderByCurrency(mode) {
    return `Ingrese su monto en $(${currenciesIDs[mode]})`;
  }

  $: formattedInput = formatAmountToCurrency(inputAmount);
  $: calculatedCurrencyPrice = formatAmountToCurrency(getCalculatedCurrencyPrice(inputAmount, mode));
  $: pesoCurrencyValue = formatAmountToCurrency(getPesoCurrencyValue(mode));
  $: inputPlaceholder = getAmountPlaceholderByCurrency(mode);

</script>

<div class={`calculations ${mode}`}>
  <h1 class="unit-price">(1 {currenciesIDs[mode]}) =  ${pesoCurrencyValue ? pesoCurrencyValue : price} {currenciesIDs.pesos}</h1>
  <div class={`input-container ${mode}`}>
    <input
      type=number
      name="comparison-input"
      id="comparisonInput"
      min=0
      placeholder={inputPlaceholder}
      bind:value={inputAmount} />
  </div>
  <h1>${formattedInput ? formattedInput : 0} {mode}</h1>
  <h3>son:</h3>
  <h2>{currenciesIDs.pesos} ${calculatedCurrencyPrice ? calculatedCurrencyPrice : 0}</h2>
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
    background: violet;
  }
  .calculations.real {
    background: yellowgreen;
  }
  .calculations.euro {
    background: lightblue;
  }
  .calculations.pound {
    background: rgb(187, 85, 157);
  }
  .calculations.ausdollar {
    background: green;
  }
  .calculations.candollar {
    background: burlywood;
  }
  .calculations.yen {
    background: white;
  }
  .calculations.yuan {
    background: red;
  }

  .calculations h1.unit-price {
    margin-bottom: 10px;
  }
   input::placeholder {
    color: #b8bbb6;
    font-size: 12px;
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
  .calculations h1 {
    font-size: 18px;
  }
  .calculations h2 {
    font-size: 40px;
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
