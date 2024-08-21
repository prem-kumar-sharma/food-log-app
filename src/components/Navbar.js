import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search Food</Link></li>
        <li><Link to="/log">Food Log</Link></li>
        <li><Link to="/goals">Set Goals</Link></li>  {/* Link to Set Goals page */}
      </ul>
    </nav>
  );
};

export default Navbar;
