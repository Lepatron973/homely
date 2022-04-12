import React from 'react';
import MonthlyStats from './MonthlyStats';


const Statistic = () => {
    
    return (
        <div>
            <canvas id="myChart" width="400" height="400"></canvas>
            <MonthlyStats />
        </div>
    );
};

export default Statistic;