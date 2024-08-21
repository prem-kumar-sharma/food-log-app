import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/goals" className="navbar-btn" onClick={toggleMenu}>Set Goals</Link></li>
          <li><Link to="/" className="navbar-btn" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/search" className="navbar-btn" onClick={toggleMenu}>Search Food</Link></li>
          <li><Link to="/log" className="navbar-btn" onClick={toggleMenu}>Food Log</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
