import React, { useState } from 'react';
import axios from 'axios';

const FoodSearch = ({ onAddFood }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [servingSizes, setServingSizes] = useState({});
  const [addedItems, setAddedItems] = useState([]);
  const [message, setMessage] = useState('');

  const searchFood = async () => {
    try {
      const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
        params: {
          app_id: '4429303e',
          app_key: '340220ffb79ffe29eb109fce3fc923c9',
          ingr: query,
        },
      });
      setResults(response.data.hints);
      setMessage(''); // Clear any previous messages
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  const handleServingSizeChange = (index, value) => {
    setServingSizes({
      ...servingSizes,
      [index]: value,
    });
  };

  const handleAddFood = (food, index) => {
    const servingSize = servingSizes[index] || 1; // Default serving size is 1
    const foodWithServingSize = {
      ...food,
      servingSize: servingSize,
      nutrients: {
        ENERC_KCAL: food.nutrients.ENERC_KCAL * servingSize,
        CHOCDF: food.nutrients.CHOCDF * servingSize,
        PROCNT: food.nutrients.PROCNT * servingSize,
        FAT: food.nutrients.FAT * servingSize,
      },
    };
    onAddFood(foodWithServingSize);
    setAddedItems([...addedItems, food.label]); // Track added items
    setMessage(`${food.label} has been added to your log.`);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for food..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchFood}>Search</button>
      </div>

      {message && <p className="message">{message}</p>} {/* Display confirmation message */}

      <div className="results-container">
        <ul>
          {results.map((item, index) => (
            <li key={index} className="result-item">
              <img src={item.food.image} alt={item.food.label} className="food-image" />
              <span className={`food-label ${addedItems.includes(item.food.label) ? 'added' : ''}`}>
                {item.food.label}
              </span>
              <input
                type="number"
                min="1"
                value={servingSizes[index] || 1}
                onChange={(e) => handleServingSizeChange(index, e.target.value)}
                className="serving-input"
                placeholder="Serving Size"
              />
              <button onClick={() => handleAddFood(item.food, index)}>
                {addedItems.includes(item.food.label) ? 'Added' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodSearch;
