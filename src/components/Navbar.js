import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search Food</Link></li>  {/* Link to Search page */}
        <li><Link to="/log">Food Log</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
