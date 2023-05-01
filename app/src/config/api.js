const API = {
  domain: 'https://argentina-dollar-prices-calculations.vercel.app/',
  endpoints: {
    dolarPrice: 'api/dolarPrice',
    currenciesRates: 'api/currenciesRates',
  }
};

/**
 * @param { string } id
 */
export function getEndpoint(id) {
  const domain = API.domain;
  const endpoint = API.endpoints[id];
  return `${domain}${endpoint}`;
}
