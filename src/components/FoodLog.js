import React from 'react';

const FoodLog = ({ foodLog }) => {
  const totalNutrients = foodLog.reduce((totals, item) => {
    Object.keys(item.nutrients).forEach((key) => {
      totals[key] = (totals[key] || 0) + item.nutrients[key];
    });
    return totals;
  }, {});

  return (
    <div>
      <h2>Food Log</h2>
      <ul>
        {foodLog.map((item, index) => (
          <li key={index}>
            {item.label} - {item.nutrients.ENERC_KCAL} kcal
          </li>
        ))}
      </ul>
      <h3>Total Nutrients:</h3>
      <p>Calories: {totalNutrients.ENERC_KCAL} kcal</p>
      {/* Add more nutrients here */}
    </div>
  );
};

export default FoodLog;
