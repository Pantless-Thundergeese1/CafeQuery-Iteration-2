import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  let navigate = useNavigate();
  // event handler for signup button
  const handleSignup = (event) => {
    // prevent page reload
    event.preventDefault();

    const userInputObj = {
      username: username,
      password: password,
      zipcode: zipcode,
      firstName: firstName,
      lastName: lastName,
    };
    // request to server
    // axios
    //   .post('/user', userInputObj)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    fetch('/user',{
      method: "POST",
      body: JSON.stringify(userInputObj),
      headers: {
        "Content-type" : "application/json"
      }
    })
    .then((res) => console.log('response:', res.json()))
    .catch((err) => console.log('error:' , err))

    
    navigate('/login')

  };

  return (
    <div className='signup'>
      <form className='signup_form'>
        <h1>Signup Here</h1>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='text'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='text'
          placeholder='Zip Code'
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <input
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <button onClick={handleSignup} type='submit' className='submit_btn'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
