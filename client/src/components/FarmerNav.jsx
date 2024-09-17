import React from 'react';
import logo from '../assets/company farmer.png'; // Update path if needed
import { Navbar, Nav, Container, Button } from 'react-bootstrap'; // Import Button
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ padding: "15px 12px" }}>
      <Container style={{ padding: '0', margin: '0' }}>
        <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem', flex: '0 1 auto' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: '0px', marginRight: '10px', width: '80px' }} // Adjust size if necessary
          />
          FARMER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#list-crop" style={{ fontSize: '1.1rem' }}>List Crop</Nav.Link>
            <Nav.Link href="#listed-crop" style={{ fontSize: '1.1rem' }}>Listed Crop</Nav.Link>
            <Nav.Link href="#another-link1" style={{ fontSize: '1.1rem' }}>Another Link 1</Nav.Link>
            <Nav.Link href="#another-link2" style={{ fontSize: '1.1rem' }}>Another Link 2</Nav.Link>
            <Nav.Link href="#register-crop" style={{ fontSize: '1.1rem', color: 'white', textTransform: 'uppercase' }} className="me-4">
              Register Crop
            </Nav.Link>
            <Nav.Item className="ms-3">
              <Button variant="outline-light">Button</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
