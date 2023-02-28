<script>
  import { onMount } from "svelte";
  import axios from 'axios';
  import { API } from '../config/api';

  let currencyPrices = [];

  onMount(async () => {
    const domain = API.domain;
    const endpoint = API.endpoints.dolarPrice;
    const url = `${domain}${endpoint}`;

    try {
      const res = await axios.get(url);
      currencyPrices = res.data;
    } catch (error) {
      console.log('Error: ', error);
    }
  });
</script>

<main>
  {#each currencyPrices as price  }
    <h1>{price.currencyName}</h1>
    <ul>
      <li>Compra:</li>
      <li>{price.values.buy}</li>
      <li>Venta:</li>
      <li>{price.values.sale}</li>
    </ul>
  {/each}
</main>

<style>
  h1 {
    font-size: 62px;
  }
</style>
