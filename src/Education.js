import React from 'react';

export default function Education() {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Johnson County Community College</h3>
            <div className="subheading mb-3">Web Development Certification</div>
            <div>Computer Science - Web Development Track</div>
            <p>GPA: TBD</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">August 2022 - May 2025</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">Olathe East High School</h3>
            <div className="subheading mb-3">STEM: Program</div>
            <p>GPA: 3.72</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">August 2013 - May 2017</span></div>
        </div>
      </div>
    </section>
  );
}