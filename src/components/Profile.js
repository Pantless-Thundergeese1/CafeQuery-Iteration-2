import React, { useState } from 'react';
import Navbar from "./NavBar"
import DisplayContainer from "../containers/DisplayContainer"

// user/favorite/:_id
const Profile = () => { 

const [locations, setLocations] = useState('');    

const user = JSON.parse(localStorage.getItem('user'))
const _id = user._id;


fetch(`/user/profile/${_id}`,{

    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    }
)
    .then(data => data.json())
    .then(response => {
        setLocations(response)
        return (
            <>
                <Navbar/>
                <div>
                <DisplayContainer locations = {response}/>
                </div>
            </>
                )   
    }) .catch(error =>  {
        console.log('error in profile.js', error)
    })
    return null;
}

export default  Profile;