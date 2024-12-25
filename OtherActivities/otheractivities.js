import React from 'react';
import './otheractivities.css';
import image1 from './images/img6.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img3.jpg';
import image4 from './images/img4.jpg';
import image5 from './images/img5.jpg';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Other Activities</h2>
      <div className="image-grid">
        <img src={image2} alt="Plant 2" className="image" />
        <img src={image3} alt="Person" className="image" />
        <img src={image4} alt="Leaf" className="image" />
        <img src={image5} alt="Wreath" className="image" />
        <img src={image1} alt="Plant 1" className="image" />
      </div>
      <div className="text-section">
        
        <p>
1. "Participated in Firodiya Karandak 2k23 as part of the art team, creating models and paintings for the drama"<br/>
2. "Member of NGO Robin Hood Army, contributing to community initiatives."<br/>
3. "Contributed to creating an art room for the college as part of a 2-member team and is a member of the college's art circle club."<br/>
4. "An all-rounder artist skilled in sketching, painting, anchoring, and event hosting."
        </p>
      </div>
    </div>
  );
};

export default Gallery;
