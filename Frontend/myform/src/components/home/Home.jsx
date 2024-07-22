import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Login and Signup Form in MERN</h2>
      <p>Your journey starts here. Choose your path:</p>
      <div className="button-container">
        <NavLink to="/signup" className="button signup-button">
          Signup
        </NavLink>
        <NavLink to="/login" className="button login-button">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
