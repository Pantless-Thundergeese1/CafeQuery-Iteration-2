import React, { useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const DisplayCards = (props) => {
  
//display information received in the result body 
//from the databse query to locations
console.log('user ID', JSON.parse(sessionStorage.getItem('user'))._id)
console.log('username for user', JSON.parse(sessionStorage.getItem('user')).username)
console.log('coffeeshop Id', props.resultObject._id)


//define reqBody
const reqBody = {
  _id: JSON.parse(sessionStorage.getItem('user'))._id ,
  username: JSON.parse(sessionStorage.getItem('user')).username ,
  workspace_id: props.resultObject._id
}


const handleClick = (e) => {
  e.preventDefault()

// req.body {_id, username}
//PUT method


  fetch('user/favorites', {
    method: 'DELETE',
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
        <button onClick={handleClick}>delete favorite</button>
      </div>
    </>
  );
};

export default DisplayCards;