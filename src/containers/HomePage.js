// moved to containers section, per definition this will be the stateful component passing props to the components - Lyam
//import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import DisplayContainer from './DisplayContainer';
import axios from 'axios';
import Login from '../components/Login'
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

import styles from '../stylesheets/homePage.scss'

//import * as actions from '../actions';

const HomePage = () => {

  const [search, setSearch] = useState('');
  const [locations, setLocations] = useState('');

  // hanles event of clicking button for zip code search
  const handleAddZipcode = (event) => {
    // prevents page reload
    // event.preventDefault();

    axios.post('/workspace/search', { searchBarInput: search})
      .then(res => {
        console.log('this is result', res.data);
      //   console.log(locationsLoaded);
        setLocations(res.data)
        // locationsLoaded = true;
        console.log('this is the updated location array', locations);
      })
      //error handling
      .catch(error => {console.log('Error:', error);}); 
  }

  return (
      <>
      <NavBar/>
      <div className='searchBar'>
        <div className="searchForm">
            <input type="text" placeholder="Search for a cafe or zipcode..." className="search-field" onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={handleAddZipcode} type="submit" className="search-button">
              <img src="search.png"/>
            </button>
            <Link to='/advancedSearch'>
              <button className="advanced-search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-search-heart" viewBox="0 0 16 16">
                  <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
                  <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
                </svg>
              </button>
            </Link>
        </div>
        <div className="appDescription">
          <p>Looking for a place to work or study remotely?</p>
          <p>Use CafeQuery to search for a specific cafe, restaurant, or bar to see reviews from other remote workers.</p>
          <p> You can also look up your zipcode to find workspaces near you!</p>
        </div>
      </div>
      <div className='results'>
        <DisplayContainer locations={locations}/>
      </div>
      </>
  );
    
}

export default HomePage;
