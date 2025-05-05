import React, { useEffect } from 'react';
import GMDNavbar from './Navbar';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
import Awards from './Awards';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import profileImg from './profile.jpg';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="layout">
      {/* Desktop Sidebar Nav */}
      <div id="sideNav">
        <div className="profile-img-wrapper">
          <img className="profile-img" src={profileImg} alt="Profile" />
        </div>
        <ul className="navbar-nav">
          <li><a className="nav-link" href="#about">About</a></li>
          <li><a className="nav-link" href="#experience">Experience</a></li>
          <li><a className="nav-link" href="#education">Education</a></li>
          <li><a className="nav-link" href="#skills">Skills</a></li>
          <li><a className="nav-link" href="#interests">Interests</a></li>
          <li><a className="nav-link" href="#awards">Awards</a></li>
        </ul>
      </div>

      <div className="gmd-navbar">
        <GMDNavbar />
      </div>

      <main className="main-content">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Awards />
      </main>
    </div>
  );
}

export default App;
