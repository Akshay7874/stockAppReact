import axios from 'axios';

const stockAPI = axios.create({
    baseURL: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo', // Replace with actual API base URL
});

export const getStockList = () => stockAPI.get('/nse-top20');
export const getStockDetails = (symbol) => stockAPI.get(`/stock/${symbol}`);
