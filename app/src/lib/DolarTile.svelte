<script>
  import { SPANISH } from "../texts/languages";
  export let priceConfig = {
    currencyName: '',
    values: {
      buy: 0,
      sale: 0,
    },
  };
</script>

<div class="dolar-tile">
  <h1>{priceConfig.currencyName}</h1>
  <ul>
    <li>{SPANISH.dolarTile.buy}: {priceConfig.values.buy ? `${priceConfig.values.buy}` : 'no hay precio para este item'}</li>
    <li>{SPANISH.dolarTile.sale}: ${priceConfig.values.sale}</li>
  </ul>
</div>

<style>
  .dolar-tile {
    width: 100%;
    text-align: left;
    margin: 10px auto;
    box-sizing: border-box;
    padding: 10px;
    background: #79A471;
    color: #fefeea;
  }
  .dolar-tile:hover {
    background: #278664;
  }
  h1 {
    margin-bottom: 10px;
    margin-top: 0;
    color: #fefeea;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    text-align: left;
    color: #fefeea;
  }
  /* #676e5d */
  /* #79a471 */
</style>
