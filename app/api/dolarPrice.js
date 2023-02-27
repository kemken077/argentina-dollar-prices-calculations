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
  console.log(message);
  response.end(message);
}
