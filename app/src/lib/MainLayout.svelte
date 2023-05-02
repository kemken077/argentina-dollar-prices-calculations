
<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import { ratesUSDBased } from '../stores/stores';
  import { getEndpoint } from "../config/api";
  import { SPANISH } from '../texts/languages';
  import Header from "./Header.svelte";
  import DolarPrices from "./DolarPrices.svelte";
  import SelectCurrency from "./SelectCurrency.svelte";
  import Calculations from "./Calculations.svelte";
  import SideMenu from "./SideMenu/SideMenu.svelte";

  onMount(async () => {
    const currenciesEndpoint = 'currenciesRates';
    const ratesURL = getEndpoint(currenciesEndpoint);
    try {
      const ratesResponse = await axios.get(ratesURL);
      const rates = ratesResponse.data;
      ratesUSDBased.set(rates.rates);
    } catch (error) {
      console.error('Rates response ERROR: ', error);
    }
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/all.css"
/>
<style>
  .bx--side-nav__overlay ,
  .bx--side-nav__navigation {
    margin-top: 12px !important;
  }
</style>
</svelte:head>
<main>
  <Header title={SPANISH.header.title} />
  <SideMenu />
  <div class="container">
    <section class="mode-trigger">
      <SelectCurrency />
    </section>
    <section class="calculations">
      <Calculations />
    </section>
    <section class="prices">
      <DolarPrices />
    </section>
  </div>
</main>

<style>
  .container {
    margin: 0 auto;
    text-align: center;
  }
  section {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }
  section.mode-trigger {
    margin: 20px auto;
  }
</style>