import React, { useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const DisplaySpaces = (props) => {
  
//display information received in the result body 
//from the databse query to locations
console.log('props.result', props.resultObject)
console.log('user ID', JSON.parse(sessionStorage.getItem('user'))._id)
console.log('username for user', JSON.parse(sessionStorage.getItem('user')).username)
console.log('coffeeshop Id', props.resultObject._id)


//define reqBody
const reqBody = {
  _id: JSON.parse(sessionStorage.getItem('user'))._id ,
  username: JSON.parse(sessionStorage.getItem('user')).username ,
  workspace_id: props.resultObject._id
}
//

const handleClick = (e) => {
  e.preventDefault()

// req.body {_id, username}
//PUT method


  fetch('user/favorites', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(reqBody)})
    .then(data => data.json())
    .then(response => {
      console.log('clicked')
    })
  }


  return(
    <> 
      <div className="LocationDisplay">
        <h4>Name: {props.resultObject.workspaceName}</h4> <br></br>
        <h4>Address: {props.resultObject.address}</h4><br></br>
        <h4>Overall Rating: {props.resultObject.rating}</h4><br></br>
        <h4>Wifi: {props.resultObject.wifi}</h4><br></br>
        <h4>Type: {props.resultObject.type}</h4><br></br>
        <h4>Noise level: {props.resultObject.quiet}</h4><br></br>
        <h4>Outlets: {props.resultObject.outlets}</h4><br></br>
        <h4>Time limit: {props.resultObject.timeLimit}</h4><br></br>
        <h4>Laptop Restrictions: {props.resultObject.laptopRestrictions}</h4><br></br>
        <h4>Busy: {props.resultObject.crowded}</h4><br></br>
        <h4>Outdoor Seating: {props.resultObject.outdoorSeating}</h4><br></br>
        <h4>Pet friendly: {props.resultObject.petFriendly}</h4><br></br>
        <h4>Food rating: {props.resultObject.foodRating}</h4><br></br>
        <h4>Coffee rating: {props.resultObject.coffeeRating}</h4><br></br>
        <h4>Seating: {props.resultObject.seating}</h4><br></br>
        <button onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
        </button>
      </div>
    </>
  );
};

export default DisplaySpaces;