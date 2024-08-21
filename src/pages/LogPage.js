import React from 'react';
import FoodLog from '../components/FoodLog';
import NutrientChart from '../components/NutrientChart';

const LogPage = ({ foodLog, goals }) => {
  const totalNutrients = foodLog.reduce((totals, item) => {
    Object.keys(item.nutrients).forEach((key) => {
      totals[key] = (totals[key] || 0) + item.nutrients[key];
    });
    return totals;
  }, {});

  const calculateRecommendations = () => {
    const recommendations = {};

    if (totalNutrients.ENERC_KCAL < goals.calories) {
      recommendations.calories = `You need ${goals.calories - totalNutrients.ENERC_KCAL} more calories.`;
    } else {
      recommendations.calories = `You have exceeded your calorie goal by ${totalNutrients.ENERC_KCAL - goals.calories} calories.`;
    }

    if (totalNutrients.CHOCDF < goals.carbohydrates) {
      recommendations.carbohydrates = `You need ${goals.carbohydrates - totalNutrients.CHOCDF} more grams of carbohydrates.`;
    } else {
      recommendations.carbohydrates = `You have exceeded your carbohydrate goal by ${totalNutrients.CHOCDF - goals.carbohydrates} grams.`;
    }

    if (totalNutrients.PROCNT < goals.proteins) {
      recommendations.proteins = `You need ${goals.proteins - totalNutrients.PROCNT} more grams of proteins.`;
    } else {
      recommendations.proteins = `You have exceeded your protein goal by ${totalNutrients.PROCNT - goals.proteins} grams.`;
    }

    if (totalNutrients.FAT < goals.fats) {
      recommendations.fats = `You need ${goals.fats - totalNutrients.FAT} more grams of fats.`;
    } else {
      recommendations.fats = `You have exceeded your fat goal by ${totalNutrients.FAT - goals.fats} grams.`;
    }

    return recommendations;
  };

  const recommendations = calculateRecommendations();

  return (
    <div className="log-page-container">
      <h2 className="page-title">Food Log Summary</h2>
      <div className="log-summary">
        <FoodLog foodLog={foodLog} />
        <div className="chart-container">
          <NutrientChart nutrients={totalNutrients} />
        </div>
      </div>
      <div className="recommendations-container">
        <h3 className="recommendations-title">Personalized Recommendations</h3>
        <div className="recommendation-item">
          <p>{recommendations.calories}</p>
        </div>
        <div className="recommendation-item">
          <p>{recommendations.carbohydrates}</p>
        </div>
        <div className="recommendation-item">
          <p>{recommendations.proteins}</p>
        </div>
        <div className="recommendation-item">
          <p>{recommendations.fats}</p>
        </div>
      </div>
    </div>
  );
};

export default LogPage;
