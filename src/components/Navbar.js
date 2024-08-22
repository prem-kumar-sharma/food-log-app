import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-links">
                    <li><Link to="/goals" className="navbar-btn">Set Goals</Link></li>
                    <li><Link to="/" className="navbar-btn">Home</Link></li>
                    <li><Link to="/search" className="navbar-btn">Search Food</Link></li>
                    <li><Link to="/log" className="navbar-btn">Food Log</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
