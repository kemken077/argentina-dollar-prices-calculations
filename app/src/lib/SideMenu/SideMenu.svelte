
<script>
  import {
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SideNavDivider,
  } from 'carbon-components-svelte';
  import { sideMenuOpen } from '../../stores/stores';
  let menuOpen = false;

  sideMenuOpen.subscribe((newMenuState) => {
    menuOpen = newMenuState;
  });
</script>

<SideNav bind:isOpen={menuOpen}>
  <SideNavItems>
    <SideNavLink text="Link 1" />
    <SideNavLink text="Link 2" />
    <SideNavLink text="Link 3" />
    <SideNavMenu text="Menu">
      <SideNavMenuItem href="/" text="Link 1" />
      <SideNavMenuItem href="/" text="Link 2" />
      <SideNavMenuItem href="/" text="Link 3" />
    </SideNavMenu>
    <SideNavDivider />
    <SideNavLink text="Link 4" />
  </SideNavItems>
</SideNav>
