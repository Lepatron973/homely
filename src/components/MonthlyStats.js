import React from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const MonthlyStats = () => {
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
    
      const data = {
        labels: labels,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      };
      setTimeout(()=>{
        const ctx = document.getElementById('myChart')

        const config = {
          type: 'line',
          data: data,
          options: {}
        };
        const chart = new Chart(ctx, {
          ...config
        });
        console.log(chart)
      },500)
    return (
        <div>
            
        </div>
    );
};

export default MonthlyStats;