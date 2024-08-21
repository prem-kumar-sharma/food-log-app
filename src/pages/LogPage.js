import React from 'react';
import FoodLog from '../components/FoodLog';
import NutrientChart from '../components/NutrientChart';

const LogPage = ({ foodLog }) => {
  // Calculate total nutrients from logged food items
  const totalNutrients = foodLog.reduce((totals, item) => {
    Object.keys(item.nutrients).forEach((key) => {
      // Accumulate nutrients, using 0 as a fallback value for undefined nutrients
      totals[key] = (totals[key] || 0) + (item.nutrients[key] || 0);
    });
    return totals;
  }, {});

  return (
    <div>
      <h2>Food Log Summary</h2>
      
      {/* Display the list of logged foods */}
      <FoodLog foodLog={foodLog} />
      
      {/* Display the nutrient chart based on total nutrients */}
      <div className="chart-container">
        <NutrientChart nutrients={totalNutrients} />
      </div>
    </div>
  );
};

export default LogPage;
