import axios from 'axios';
import cheerio from 'cheerio';

const getCurrencyData = (currencyName, values) => {
  const currency = {
    currencyName,
    values,
  };
  return currency;
};

const parseValue = (value, splitIdentifier) => {
  return value !== '' ? parseFloat(value.split(splitIdentifier)[1]) : null;
};

export default function dolarPrice(request, response) {
  const message = 'Hello Serverless functions!';
  const url = 'https://www.dolarhoy.com';
  axios(url)
    .then(res => {
      const html = res.data;
      const $ = cheerio.load(html);
      let currencyPrices = [];

      const tilesDolar = $('.tile.is-parent.is-7.is-vertical .tile.is-child', html);
      tilesDolar.each(function() {
        const title = $(this).find('.title').text();
        const valueBuy = parseValue($(this).find('.values .compra').text(), '$');
        const valueSale = parseValue($(this).find('.values .venta').text(), '$');
        const currencyData = getCurrencyData(title, { buy: valueBuy, sale: valueSale});
        currencyPrices.push(currencyData);
      });
      response.status(200).json(currencyPrices);
    })
    .catch(err => console.log(err));
  // End axios HTTP request.
}
