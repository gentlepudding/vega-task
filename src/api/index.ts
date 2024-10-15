import express from 'express';
import assests from './assets.json';
import portfolio from './portfolio.json';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.static('src'));
app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000'
}

app.get('/api/assets', cors(corsOptions), (req: any, res: any) => {
  res.send(assests);
});

app.get('/api/portfolios', cors(corsOptions), (req: any, res: any) => {
  const asOf = req.params.asOf;                       
  const date = req.params.date;
  res.send(portfolio);
});

export const fetchPrices = async (date?: string) => {
  let url = '/api/prices';
  if (date) url += `?asOf=${date}`;
  const response = await fetch(url);
  return response.json();
};

app.listen(8000, () => {
  console.log('Our app is listening for request on port 8000');
});
  