import React from 'react';
import './about.css';

function About() {
  return (
    <section className="about" id="About">
      <div className="card">
        <div className="card-inner">
          <div className="card-face card-front"></div>
          <div className="card-face card-back">
            <p>Hi! I'm dedicated to achieving my goals in cybersecurity, with a particular focus on red teaming.</p>
          </div>
        </div>    
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p><b>
          Enthusiastic about cybersecurity, I am committed to growing in the field and advancing my expertise in red teaming. I enjoy learning new tools and techniques to strengthen security.
          </b></p>
      </div>
    </section>
  );
}

export default About;
