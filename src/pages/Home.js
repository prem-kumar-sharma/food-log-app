import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="typewriter">Welcome to the Food Log App</h1>
      <p>Your journey to better nutrition starts here!</p>
      <div className="instructions writing-format">
        <p>Track your daily food intake, monitor your nutrition, and reach your goals with ease. Remember, setting goals is the first step towards success.</p>
      </div>

      <div className="dashboard-options">
        <div className="dashboard-card">
          <img 
            src="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg" 
            alt="Set Goals" 
            className="dashboard-image"
          />
          <h2>Set Goals</h2>
          <p>Set your daily nutritional goals to stay on track.</p>
          <a href="/goals">
            <button className="dashboard-btn">Set Goals Now</button>
          </a>
        </div>

        <div className="dashboard-card">
          <img 
            src="https://www.eatright.org/-/media/images/eatright-landing-pages/foodgroupslp_804x482.jpg?as=0&w=967&rev=d0d1ce321d944bbe82024fff81c938e7&hash=E6474C8EFC5BE5F0DA9C32D4A797D10D" 
            alt="Search Food" 
            className="dashboard-image"
          />
          <h2>Search Food</h2>
          <p>Find food items and get detailed nutritional information.</p>
          <a href="/search">
            <button className="dashboard-btn">Search Now</button>
          </a>
        </div>
        
        <div className="dashboard-card">
          <img 
            src="https://grocotts.ru.ac.za/wp-content/uploads/2022/02/types-of-nutrition.jpg" 
            alt="Food Log" 
            className="dashboard-image"
          />
          <h2>Food Log</h2>
          <p>Track your daily food intake and monitor your progress.</p>
          <a href="/log">
            <button className="dashboard-btn">Go to Food Log</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;