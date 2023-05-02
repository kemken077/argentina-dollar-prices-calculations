<script>
    import SideMenuButton from "./SideMenu/SideMenuButton.svelte";

  export let title = 'This is a default title';
</script>

<header>
  <SideMenuButton />
  <h1>{ title }</h1>
</header>

<style>
  h1 {
    margin-top: 0;
    font-size: 18px;
    color: #676e5d;
    margin-top: 2px;
    padding-top: 17px;
    margin-left: 10px;
  }
  header {
    min-height: 60px;
    padding: 0 20px 0;
    text-align: left;
    background-color: #fefeea; 
    display: flex;
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 14px;
      margin-top: 2px;
      padding-top: 20px;
      margin-left: 10px;
      width: 100%;
    }
  }
</style>