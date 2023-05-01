import axios from 'axios';

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

function currenciesRates(request, response) {
  const _API_KEY = 'af96sub64uoicr3kvgd8ao7dctbtrrodbq6qrre45ioq8aj2rs2us8'; 
  const base = 'USD';
  const url = `https://anyapi.io/api/v1/exchange/rates?apiKey=${_API_KEY}&base=${base}`;
  axios(url)
    .then(res => {
      const rates = res.data;
      response.status(200).json(rates);
    })
    .catch(err => console.error('Error: ', err));
  
}

export default allowCors(currenciesRates);