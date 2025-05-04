import React from 'react';

export default function Awards() {
  return (
    <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5">Awards & Projects</h2>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            Google Analytics Certified Developer
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            Google Ads Certified Developer
          </li>
          {/* Add more awards/projects here if needed */}
        </ul>
      </div>
    </section>
  );
}