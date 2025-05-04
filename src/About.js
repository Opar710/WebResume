import React from 'react';

export default function About() {
  return (
    <>
      <div className="container-fluid p-0">
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">Gianni Massimo Daino</h1>
            <div className="subheading mb-5">
              Building digital solutions for the Johnson County area since 2021<br/>
              <a href="tel:+19136877280">(913) 687-7280</a> ·
              <a href="mailto:giannidaino@yahoo.com">giannidaino@yahoo.com</a><br/>
              <a href="./assets/GMD_Resume.pdf" target="_blank" rel="noopener noreferrer" title="View my resume" download>📃🔗 download</a>
            </div>
            <p className="lead mb-5">
              Motivated Web Developer with hands-on experience in coding, design, and client support. I’m focused on
              purpose-driven solutions, digital accessibility, and responsive design. Skilled in building clean,
              user-friendly websites for individuals, startups, and small businesses. My long-term goal is to launch a
              development firm that drives innovation, supports local job growth, and bridges the gap between technology
              and community impact. Currently seeking a challenging position in a dynamic tech company where I can
              continue to grow and contribute.
            </p>
            <div className="social-icons">
              <a
                className="social-icon"
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="social-icon"
                href="https://discordapp.com/users/164697153736933376"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
