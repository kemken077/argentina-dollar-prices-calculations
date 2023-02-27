<script>
  console.log('Dolar Main component!');
  import { onMount } from "svelte";
  import axios from 'axios';

  onMount(() => {
    axios('https://argentina-dollar-prices-calculations.vercel.app/api/dolarPrice')
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log('Error: ', error);
      });
  });
</script>