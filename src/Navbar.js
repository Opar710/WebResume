import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function GMDNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-3 py-2">
      <Container fluid>
        <Navbar.Brand href="#home" className="fw-bold text-uppercase">
          Mobile First Web Developer
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center text-lg-start flex-column flex-lg-row gap-2 gap-lg-4">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#interests">Interests</Nav.Link>
            <Nav.Link href="#awards">Awards</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default GMDNavbar;
