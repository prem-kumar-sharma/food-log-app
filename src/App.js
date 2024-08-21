import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FoodSearch from './components/FoodSearch';
import LogPage from './pages/LogPage';
import NutritionalGoals from './components/NutritionalGoals';  // Import the component

function App() {
  const [foodLog, setFoodLog] = useState([]);
  const [goals, setGoals] = useState({
    calories: 2000,
    carbohydrates: 300,
    proteins: 50,
    fats: 70,
  });

  useEffect(() => {
    const storedLog = localStorage.getItem('foodLog');
    if (storedLog) {
      setFoodLog(JSON.parse(storedLog));
    }
    const storedGoals = localStorage.getItem('nutritionalGoals');
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('foodLog', JSON.stringify(foodLog));
  }, [foodLog]);

  const addFoodToLog = (foodItem) => {
    setFoodLog([...foodLog, foodItem]);
  };

  const saveGoals = (newGoals) => {
    setGoals(newGoals);
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<FoodSearch onAddFood={addFoodToLog} />} />
          <Route path="/log" element={<LogPage foodLog={foodLog} goals={goals} />} />  {/* Pass goals to LogPage */}
          <Route path="/goals" element={<NutritionalGoals onSaveGoals={saveGoals} />} />  {/* Add Goals route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
