import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import logo from '../logo.png';
import App from '../App';
import Forms from './Forms';


export default function NavBar() {
    return (
        
        <div>
            
             <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Covid-19 Data
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/forms">Form</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
    </Navbar>
        </div>
        
       
    )
}
