import React, { useState } from 'react';
import Navbar from "./NavBar"


// user/favorite/:_id
const Profile = () => { 
const getFaves = localStorage.getItem('user')
console.log('getFaves' , getFaves)

const handleTest = (e) => {
    e.preventDefault();
    const getFaves = localStorage.getItem('faves')
    console.log('getFaves' , getFaves)

}


const user = localStorage.getItem('user');

return (
<>
    <Navbar/>
    <div>
        <button onClick={handleTest}>
            testFaves
        </button>

    </div>
</>
    )   
}

export default  Profile;