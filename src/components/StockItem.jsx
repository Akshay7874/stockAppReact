import React from 'react';
import { useNavigate } from 'react-router-dom';

const StockItem = ({ stock }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/stock/${stock.symbol}`);
    };

    return (
        <div onClick={handleClick} className="stock-item">
            <h3>{stock.name}</h3>
            <p>{stock.symbol}</p>
            <p>Price: {stock.price}</p>
        </div>
    );
};

export default StockItem;
