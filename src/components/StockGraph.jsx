import React from 'react';
import { Line } from 'react-chartjs-2';
// Import all the necessary components
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary chart elements
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement); // Add PointElement

const StockGraph = ({ data }) => {
    // Ensure data is valid before attempting to map over it
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <div>No data available for graph.</div>;
    }

    const chartData = {
        labels: data.map(item => item.timestamp), // Assuming each item has a 'timestamp' field
        datasets: [
            {
                label: 'Price',
                data: data.map(item => item.low), // Assuming each item has 'low' as a key
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div>
            <p>Stock Price Movement</p>
            <Line data={chartData} />
        </div>
    );
};

export default StockGraph;
