import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';  // Import the Home component
import FoodSearch from './components/FoodSearch';  // Ensure this is correctly imported
import LogPage from './pages/LogPage';

function App() {
  const [foodLog, setFoodLog] = useState([]);

  useEffect(() => {
    const storedLog = localStorage.getItem('foodLog');
    if (storedLog) {
      setFoodLog(JSON.parse(storedLog));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('foodLog', JSON.stringify(foodLog));
  }, [foodLog]);

  const addFoodToLog = (foodItem) => {
    setFoodLog([...foodLog, foodItem]);
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home page route */}
          <Route path="/search" element={<FoodSearch onAddFood={addFoodToLog} />} />  {/* FoodSearch component */}
          <Route path="/log" element={<LogPage foodLog={foodLog} />} />  {/* Ensure this path is correct */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
