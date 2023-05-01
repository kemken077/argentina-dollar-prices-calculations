<script>
  export let countryID;
  let alt = `Flag image icon`;
  const extention = '.svg';
  const countries = {
    USD: 'us',
    ARS: 'ar',
    BRL: 'br',
    EUR: 'eu',
    GBP: 'gb',
    AUD: 'au',
    CAD: 'ca',
    JPY: 'jp',
    CNY: 'cn',
  };

  /**
  * @param {string} countryID
  */
  function getImageSource(countryID) {
    return `/static/flags/svg/${countries[countryID]}${extention}`;
  }

  $: imageSource = getImageSource(countryID);

</script>

<div class="flag-wrapper">
  <img src={imageSource} {alt} />
</div>

<style>
  .flag-wrapper {
    width: 40px;
    position: relative;
    top: -8px;
    margin: 0 auto;
  }
</style>
