<script>
  import Loader from './lib/Loader.svelte';
</script>


<Loader this={() => import('./lib/MainLayout.svelte')}>
  <img slot="fallback" src="https://media.tenor.com/sfTuw8H8zUUAAAAC/money-flying.gif" alt="Money flying" />
</Loader>

