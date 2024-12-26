// src/App.js

import React from 'react';
import './App.css'; // Make sure to include './'
import Header from './components/Header/header';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/skills';
import WorkExperience from './components/WorkExperience/workexperience';
import OtherActivities from './components/OtherActivities/otheractivities';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
      <WorkExperience />
      <OtherActivities/>
      <Footer />

    </div>
  );
}

export default App;
