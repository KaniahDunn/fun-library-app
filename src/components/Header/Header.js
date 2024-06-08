import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => (
  <Navbar expand='lg' className='bg-body-tertiary mb-4'>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        <LinkContainer to='/' className='mx-4'>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/library' className='mx-4'>
          <Nav.Link>Library</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/add-book' className='mx-4'>
          <Nav.Link>Add Book</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/search' className='mx-4'>
          <Nav.Link>Search</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
