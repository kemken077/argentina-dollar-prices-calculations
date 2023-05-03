<script>
  import { onMount } from "svelte";
  import axios from 'axios';
  import { getEndpoint } from '../config/api';
  import { ourPrice } from "../stores/stores";
  import { SideNavMenuItem } from "carbon-components-svelte";
  import { Accordion, AccordionItem } from "carbon-components-svelte";

  let currencyPrices = [];

  const getOurPrice = (/** @type {number} */ buyPrice, /** @type {number} */ salePrice) => {
    const difference = salePrice - buyPrice;
    const ownPrice = buyPrice + (difference / 2);
    ourPrice.set(ownPrice);
  }

  const getCurrencyFormattedPrice = (/** @type {number} */ price) => price ? `$${price.toFixed(2)}`: 'No hay precio para este item';

  onMount(async () => {
    const endpoint = 'dolarPrice';
    const dolarPriceEndpoint = getEndpoint(endpoint)

    try {
      const res = await axios.get(dolarPriceEndpoint);
      currencyPrices = res.data;
      getOurPrice(currencyPrices[0].values.buy, currencyPrices[0].values.sale);
      console.log({currencyPrices});
    } catch (error) {
      console.log('Error: ', error);
    }
  });
</script>

{#each currencyPrices as priceDataItem}
  <SideNavMenuItem>
    <p class="name">{priceDataItem.currencyName}</p>
    <p>Compra: {getCurrencyFormattedPrice(priceDataItem.values.buy)}</p>
    <p>Venta: {getCurrencyFormattedPrice(priceDataItem.values.sale)}</p>
  </SideNavMenuItem>
{/each}

<style>
  p {
    font-size: 12px;
  }
  .name {
    font-weight: bold;
  }
</style>
