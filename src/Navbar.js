import React from 'react';

export default function GMDNavbar() {
  return (
    <nav id="sideNav">
      <div className="sidebar-content">
        <h1 className="mobile-title">Mobile Web Specialist</h1>
        
        {/* Image wrapper for red border */}
        <div className="profile-img-wrapper">
          <img
            className="profile-img"
            src="/assets/img/profile.jpg"
            alt="Gianni Massimo Daino"
          />
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
    </nav>
  );
}