import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
  return (
    <div className = "home-container">
      <div className = "home-section">
        <div className = "button-home-container">
          <Link to="/apuestas">
            <button className = "button-home">Gestión Apuestas</button>
          </Link>
        </div>
      </div>
      <div className = "home-section">
        <div className = "button-home-container">
          <Link to="/clientes">
            <button className = "button-home">Gestión Clientes</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
 
export default Home;