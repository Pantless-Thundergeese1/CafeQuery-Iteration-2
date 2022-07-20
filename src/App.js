
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddSpaceReview from './components/AddSpaceReview';
import DisplayContainer from './containers/DisplayContainer';
import HomePage from './containers/HomePage';
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdvancedSearch from './components/AdvancedSearch.jsx';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function App()  {
    return (
      <>
        <Router>
        {/* <Navbar className="navbar" expand="lg">
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
          </Navbar> */}
          <Routes>
            <Route path='/' element={<AdvancedSearch />}></Route>
              <Route path='home' element ={< HomePage />}></Route>
              <Route path='add' element ={< AddSpaceReview />}></Route>
              <Route path='login' element ={<Login />}></Route>
              <Route path='signup' element ={<Signup />}></Route>
              {/* <Route path='advancedSearch' element ={<AdvancedSearch/>}></Route> */}
          </Routes>
          
        </Router>
        </>
   
    );
};


export default App;
