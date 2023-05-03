
<script>
  import {
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SideNavDivider,
  } from 'carbon-components-svelte';
  import { ourPrice, sideMenuOpen } from '../../stores/stores';
  import DolarPrices from '../DolarPrices.svelte';
  let menuOpen = false;
  let price;

  ourPrice.subscribe((newPrice) => {
    price = newPrice;
  });
  sideMenuOpen.subscribe((newMenuState) => {
    menuOpen = newMenuState;
  });


  function getPrice(price){
    return `1 ARS = USD $${price.toFixed(2)}`;
  };

  $: dollarBluePriceText = getPrice(price);

</script>

<SideNav bind:isOpen={menuOpen}>
  <SideNavItems>
    <SideNavLink text={'Dolar BLUE:'} class="blue" />
    <SideNavLink text={dollarBluePriceText} />
    <SideNavDivider />
    <SideNavMenu text="Cotizaciones">
      <DolarPrices />
    </SideNavMenu>
    <SideNavDivider />
  </SideNavItems>
</SideNav>
