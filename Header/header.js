// src/components/Header/Header.js

import React from 'react';
import './header.css';  // Import the CSS file for styling
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={image1}  className="logo-left" />
      </div>
      <div className="header-text">
        <h1>Utkarsh Narendra Ahirrao</h1>
        <p>Student of Pimpri Chinchwad College of Engineering and Research</p>
      </div>
      <div className="logo-container">
        <img src={image2} className="logo-right" />
      </div>
    </header>
  );
}

export default Header;
