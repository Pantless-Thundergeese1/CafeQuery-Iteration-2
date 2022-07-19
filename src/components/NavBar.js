import React, { useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <Navbar className="navbar" expand="lg">
        <img src="./option1.png" className="icon" alt=""/>
        <LinkContainer to="/">
            <Navbar.Brand>CafeQuery</Navbar.Brand>
        </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="homepage">
        <LinkContainer to="/">
            <Nav.Link>Find A Location</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/add">
            <Nav.Link>Add a Location</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/logIn">
            <Nav.Link>Log In/Sign Up</Nav.Link>
        </LinkContainer> 
        <LinkContainer to="/signUp">
            <Nav.Link>Sign Up</Nav.Link>
        </LinkContainer>     
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}   

export default NavBar;