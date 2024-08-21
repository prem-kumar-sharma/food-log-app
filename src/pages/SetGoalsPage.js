import React, { useState, useEffect } from 'react';

const SetGoalsPage = () => {
  const [goals, setGoals] = useState({
    calories: 2000,
    carbohydrates: 300,
    proteins: 50,
    fats: 70,
  });

  useEffect(() => {
    const storedGoals = localStorage.getItem('nutritionalGoals');
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoals({
      ...goals,
      [name]: value,
    });
  };

  const handleSave = () => {
    localStorage.setItem('nutritionalGoals', JSON.stringify(goals));
    alert('Nutritional goals saved successfully!');
  };

  return (
    <div className="set-goals-container">
      <h2>Set Your Daily Nutritional Goals</h2>
      <div className="goal-input">
        <label>Calories (kcal):</label>
        <input type="number" name="calories" value={goals.calories} onChange={handleChange} />
      </div>
      <div className="goal-input">
        <label>Carbohydrates (g):</label>
        <input type="number" name="carbohydrates" value={goals.carbohydrates} onChange={handleChange} />
      </div>
      <div className="goal-input">
        <label>Proteins (g):</label>
        <input type="number" name="proteins" value={goals.proteins} onChange={handleChange} />
      </div>
      <div className="goal-input">
        <label>Fats (g):</label>
        <input type="number" name="fats" value={goals.fats} onChange={handleChange} />
      </div>
      <button className="save-goals-btn" onClick={handleSave}>Save Goals</button>
    </div>
  );
};

export default SetGoalsPage;
