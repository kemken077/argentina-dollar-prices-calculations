import axios from 'axios';
import { allowCors } from './utils/allowCors';


function currenciesRates(request, response) {
  const _API_KEY = 'af96sub64uoicr3kvgd8ao7dctbtrrodbq6qrre45ioq8aj2rs2us8'; 
  const url = `https://anyapi.io/api/v1/exchange/rates?apiKey=${_API_KEY}`;
  axios(url)
    .then(res => {
      const rates = res.data;
      response.status(200).json(rates);
    })
    .catch(err => console.error('Error: ', err));
  
}

export default allowCors(currenciesRates);