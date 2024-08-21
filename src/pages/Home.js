import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Food Log App</h1>
      <p>Your journey to better nutrition starts here!</p>
      <div className="instructions">
        <p>Track your daily food intake, monitor your nutrition, and reach your goals with ease.</p>
      </div>

      <div className="dashboard-options">
        <div className="dashboard-card">
          <img 
            src="https://www.eatright.org/-/media/images/eatright-landing-pages/foodgroupslp_804x482.jpg?as=0&w=967&rev=d0d1ce321d944bbe82024fff81c938e7&hash=E6474C8EFC5BE5F0DA9C32D4A797D10D" 
            alt="Search Food" 
            className="dashboard-image"
          />
          <h2>Search Food</h2>
          <p>Find food items and get detailed nutritional information.</p>
          <Link to="/search">
            <button className="dashboard-btn">Search Now</button>
          </Link>
        </div>
        
        <div className="dashboard-card">
          <img 
            src="https://grocotts.ru.ac.za/wp-content/uploads/2022/02/types-of-nutrition.jpg" 
            alt="Food Log" 
            className="dashboard-image"
          />
          <h2>Food Log</h2>
          <p>Track your daily food intake and monitor your progress.</p>
          <Link to="/log">
            <button className="dashboard-btn">Go to Food Log</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;