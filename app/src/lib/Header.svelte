<script>
  export let title = 'This is a default title';
</script>

<header>
  <h1>{ title }</h1>
</header>

<style>
  h1 {
    margin-top: 0;
    font-size: 18px;
    color: #676e5d;
  }
  header {
    min-height: 60px;
    padding: 20px 20px 0;
    text-align: left;
    background-color: #fefeea; 
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 14px;
      margin-top: 2px;
    }
  }
</style>