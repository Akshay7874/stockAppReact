import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../redux/actions/stockActions';
import StockGraph from './StockGraph';

const StockList = () => {
    const dispatch = useDispatch();
    const { stocks, loading, error } = useSelector(state => state.stock);

    useEffect(() => {
        dispatch(fetchStocks());
    }, [dispatch]);

    // Debugging: Check if stocks is an array
    console.log("Stocks data:", stocks);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Make sure data is available before rendering the graph
    return (
        <div>
            {stocks.length === 0 ? (
                <div>No stocks available</div>
            ) : (
                stocks.map((stock, index) => (
                    <div key={index}>
                        <p>Timestamp: {stock.timestamp}</p>
                        <p>Open: {stock.open}</p>
                        <p>High: {stock.high}</p>
                        <p>Low: {stock.low}</p>
                        <p>Close: {stock.close}</p>
                        <p>Volume: {stock.volume}</p>

                        {/* Passing the entire stock data to the graph */}
                        <StockGraph data={stocks} />
                    </div>
                ))
            )}
        </div>
    );
};

export default StockList;
