import React from 'react';

export default function Skills() {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item"><i className="fab fa-figma"></i></li>
          <li className="list-inline-item"><i className="fab fa-html5"></i></li>
          <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
          <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
          <li className="list-inline-item"><i className="fab fa-linux"></i></li>
          <li className="list-inline-item"><i className="fab fa-react"></i></li>
          <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
          <li className="list-inline-item"><i className="fab fa-wix"></i></li>
          <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
          <li className="list-inline-item"><i className="fab fa-google"></i></li>
          <li className="list-inline-item"><i className="fab fa-app-store-ios"></i></li>
          <li className="list-inline-item"><i className="fab fa-rebel"></i></li>
        </ul>

        <div className="subheading mb-3 mt-4">Workflow & Methodologies</div>
        <ul className="fa-ul">
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Expertise in Mobile-First, Responsive Web Design
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Skilled in Cross-Browser Compatibility Testing and Debugging
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Effective Collaboration in Cross-Functional Development Teams
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Experience with Agile Methodologies and Scrum Practices
          </li>
        </ul>
      </div>
    </section>
  );
}
