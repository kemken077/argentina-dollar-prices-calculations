<script>
  import { SPANISH, ENGLISH } from "../texts/languages";
  export let priceConfig = {
    currencyName: '',
    values: {
      buy: 0,
      sale: 0,
    },
  };
</script>


<h1>{priceConfig.currencyName}</h1>
<ul>
  <li>{SPANISH.dolarTile.sale}</li>
  <li>{priceConfig.values.buy}</li>
  <li>{SPANISH.dolarTile.sale}</li>
  <li>{priceConfig.values.sale}</li>
</ul>

<style>
  ul {
    list-style-type: none;
  }
</style>
