import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../logo.png';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Forms from './Forms';
import Home from './Home';


export default function NavBar() {
  return (
    <Router>
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
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/forms"}>Form</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Routes>

          <Route index element={<Home />} />
          <Route path="/forms" element={<Forms />} />

        </Routes>
      </div>
    </Router>
  )
}
