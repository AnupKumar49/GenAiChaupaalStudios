import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Header.css'; // Import the updated CSS file

function Header() {
  return (
    <Navbar expand="lg" className="header-navbar"  variant="light">
      <Container>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <NavDropdown title="Apparel & Wearables" id="collasible-nav-dropdown" className="nav-dropdown-title">
            <NavDropdown.Item href="/apparel" className="dropdown-item">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="/office" className="dropdown-item">Action 2</NavDropdown.Item>
            <NavDropdown.Item href="/bags" className="dropdown-item">Action 3</NavDropdown.Item>
            <NavDropdown.Item href="/art" className="dropdown-item">Action 4</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Office & Desk Accessories" id="collasible-nav-dropdown" className="nav-dropdown-title">
            <NavDropdown.Item href="/apparel" className="dropdown-item">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="/office" className="dropdown-item">Action 2</NavDropdown.Item>
            <NavDropdown.Item href="/bags" className="dropdown-item">Action 3</NavDropdown.Item>
            <NavDropdown.Item href="/art" className="dropdown-item">Action 4</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Bags & Totes" id="collasible-nav-dropdown" className="nav-dropdown-title">
            <NavDropdown.Item href="/apparel" className="dropdown-item">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="/office" className="dropdown-item">Action 2</NavDropdown.Item>
            <NavDropdown.Item href="/bags" className="dropdown-item">Action 3</NavDropdown.Item>
            <NavDropdown.Item href="/art" className="dropdown-item">Action 4</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Art & Decor" id="collasible-nav-dropdown" className="nav-dropdown-title">
            <NavDropdown.Item href="/apparel" className="dropdown-item">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="/office" className="dropdown-item">Action 2</NavDropdown.Item>
            <NavDropdown.Item href="/bags" className="dropdown-item">Action 3</NavDropdown.Item>
            <NavDropdown.Item href="/art" className="dropdown-item">Action 4</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Drinkware & Learning" id="collasible-nav-dropdown" className="nav-dropdown-title">
            <NavDropdown.Item href="/apparel" className="dropdown-item">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="/office" className="dropdown-item">Action 2</NavDropdown.Item>
            <NavDropdown.Item href="/bags" className="dropdown-item">Action 3</NavDropdown.Item>
            <NavDropdown.Item href="/art" className="dropdown-item">Action 4</NavDropdown.Item>
          </NavDropdown>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
