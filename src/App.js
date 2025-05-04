import React from 'react';
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

function App() {
  return (
    <>
      <main className="main-content">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Awards />
      </main>
    </>
  );
}

export default App;