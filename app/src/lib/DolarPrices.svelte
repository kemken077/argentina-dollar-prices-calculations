<script>
  import { onMount } from "svelte";
  import axios from 'axios';
  import { API } from '../config/api';
  import DolarTile from "./DolarTile.svelte";
  import { ourPrice } from "../stores/stores";

  let currencyPrices = [];

  const getOurPrice = (/** @type {number} */ buyPrice, /** @type {number} */ salePrice) => {
    const difference = salePrice - buyPrice;
    const ownPrice = buyPrice + (difference / 2);
    ourPrice.set(ownPrice);
  }

  onMount(async () => {
    const domain = API.domain;
    const endpoint = API.endpoints.dolarPrice;
    const url = `${domain}${endpoint}`;

    try {
      const res = await axios.get(url);
      currencyPrices = res.data;
      getOurPrice(currencyPrices[0].values.buy, currencyPrices[0].values.sale);
    } catch (error) {
      console.log('Error: ', error);
    }
  });
</script>

{#each currencyPrices as price}
  <DolarTile priceConfig={price} />
{/each}
