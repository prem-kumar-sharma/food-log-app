import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const NutrientChart = ({ nutrients }) => {
  const data = {
    labels: ['Carbohydrates', 'Proteins', 'Fats'],
    datasets: [
      {
        data: [nutrients.CHOCDF || 0, nutrients.PROCNT || 0, nutrients.FAT || 0],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <Doughnut data={data} />
    </div>
  );
};

export default NutrientChart;
