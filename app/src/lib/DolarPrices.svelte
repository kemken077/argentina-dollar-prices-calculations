<script>
  import { onMount } from "svelte";
  import axios from 'axios';
  import { API } from '../config/api';
  import DolarTile from "./DolarTile.svelte";

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

{#each currencyPrices as price}
  <DolarTile priceConfig={price} />
{/each}
