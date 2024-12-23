import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            {/* Left Section: FelizCity and the two app names */}
            <div className="header-left">
                <Link to="#" className="header-app-name">
                    <span className="header-brand">FelizCity</span>
                </Link>
                <Link to="/fitness-listing" className="header-app-name">
                    <span>Fitness Listing</span>
                </Link>
                <Link to="/specialist-listing" className="header-app-name">
                    <span>Specialist Listing</span>
                </Link>
            </div>

            {/* Right Section: Login and Signup */}
            <div className="header-right">
                <Link to="/login" className="header-link">Login</Link>
                <Link to="/signup" className="header-link">Sign Up</Link>
            </div>
        </header>
    );
};


export default Header;
