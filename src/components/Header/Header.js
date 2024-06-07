import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => (
  <Navbar expand='lg' className='bg-body-tertiary mb-4'>
    <Navbar.Brand href='/'>Library App</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <LinkContainer to='/'>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/library'>
          <Nav.Link>Library</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/add-book'>
          <Nav.Link>Add Book</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/search'>
          <Nav.Link>Search</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
