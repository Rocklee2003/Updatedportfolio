import React from 'react';
import './footer.css';
import image from './images/UTK_RESUME.pdf';
function Footer() {
  const openNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-menu">
      
        <h2>Menu</h2>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#WorkExperience">Work Experience</a></li>
        </ul>
      </div>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

      <div className="footer-profile">
        <img src="Rocklee.jpg" className="profile-img" />
        <div className="social-icons">
          <a href="https://www.instagram.com/ek_musafir_2003_02/profilecard/?igsh=MmUxb2t0OXo3bG0z" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram icon"></i>
          </a>
          <button onClick={() => openNewTab('https://www.linkedin.com/in/utkarsh-ahirrao-794826259/')}>
            <i className="fab fa-linkedin icon"></i>
          </button>
          <button onClick={() => openNewTab('https://github.com/Rocklee2003')}>
            <i className="fab fa-github icon"></i>
          </button>
        </div>
      </div>

    <div>
      <p>Thank you for visiting my portfolio!</p>
      <a href={image} download className="download-button">
        Download My Resume
      </a>
    </div>  
    </footer>
  );
}

export default Footer;
