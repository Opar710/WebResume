export default function GMDNavbar() {
  return (
    <nav id="sideNav">
      <div className="sidebar-content">
        <img className="profile-img" src="/assets/img/profile.jpg" alt="Gianni Massimo Daino" />
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
