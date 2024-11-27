import axios from 'axios';

export const fetchStocks = () => async (dispatch) => {
    try {
        dispatch({ type: 'FETCH_STOCKS_REQUEST' });

        // Fetch data from the API
        const response = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo');
        console.log('API Response:', response.data);

        // Extract and transform the time series data into an array
        const timeSeries = response.data["Time Series (5min)"];
        const stocksArray = Object.keys(timeSeries).map((timestamp) => {
            return {
                timestamp,
                open: timeSeries[timestamp]["1. open"],
                high: timeSeries[timestamp]["2. high"],
                low: timeSeries[timestamp]["3. low"],
                close: timeSeries[timestamp]["4. close"],
                volume: timeSeries[timestamp]["5. volume"],
            };
        });

        // Dispatch the transformed stock data
        dispatch({
            type: 'FETCH_STOCKS_SUCCESS',
            payload: stocksArray,
        });
    } catch (error) {
        dispatch({ type: 'FETCH_STOCKS_FAILURE', error: error.message });
    }
};



export const fetchStockDetails = (symbol) => async (dispatch) => {
    try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo/${symbol}`);
        dispatch({ type: 'FETCH_STOCK_DETAILS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_STOCK_DETAILS_FAILURE', error });
    }
};
