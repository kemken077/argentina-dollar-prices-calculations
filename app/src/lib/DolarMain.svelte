<script>
  import { onMount } from "svelte";
  import axios from 'axios';
  import { API } from '../config/api';

  onMount(() => {
    const domain = API.domain;
    const endpoint = API.endpoints.dolarPrice;
    const url = `${domain}${endpoint}`;
    axios(url)
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log('Error: ', error);
      });
  });
</script>