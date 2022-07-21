import React, { useState, useEffect } from 'react';
import Navbar from "./NavBar"
import DisplayContainer from "../containers/DisplayContainer"
import ProfileCard from "./ProfileCard"
import DisplayProfileContainer from "../containers/DisplayProfileContainer"
// user/favorite/:_id
const Profile = () => { 

    const [locations, setLocations] = useState();    

    //getting user object because it is in local storage after logging in
    const user = JSON.parse(sessionStorage.getItem('user')); 
    const _id = user._id;


    //because array of dependencies is empty, useEffect runs once at the very beginning of when the Profile component loads 
    useEffect(() => {
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
                    <DisplayProfileContainer locations = {locations}/>
                    </div>
                </>)   
        })
    }, [])

    if (locations) {
        return (
            <>
                <Navbar/>
                <div>
                <DisplayProfileContainer locations = {locations}/>
                </div>
            </>)  
    } else return null


}

export default  Profile;