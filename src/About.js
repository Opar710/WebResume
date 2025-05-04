import React from 'react';

export default function About() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Gianni Massimo Daino</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="/assets/img/profile.jpg"
              alt="Gianni Massimo Daino"
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid p-0">
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">Gianni Massimo Daino</h1>
            <div className="subheading mb-5">
              Building digital solutions for the Johnson County area since 2021<br />
              <a href="tel:+19136877280">(913) 687-7280</a> ·
              <a href="mailto:giannidaino@yahoo.com">giannidaino@yahoo.com</a> ·
              <a href="">📃🔗</a>
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
