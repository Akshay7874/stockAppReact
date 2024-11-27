import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchStockDetails } from '../redux/actions/stockActions';
import StockGraph from './StockGraph';

const StockDetail = () => {
    const { symbol } = useParams();
    const dispatch = useDispatch();
    const { stockDetails, loading, error } = useSelector(state => state.stock);

    useEffect(() => {
        dispatch(fetchStockDetails(symbol));
    }, [dispatch, symbol]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>{stockDetails.name}</h1>
            <p>Price: {stockDetails.price}</p>
            <StockGraph data={stockDetails.priceHistory} />
        </div>
    );
};

export default StockDetail;
