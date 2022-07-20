import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // onclick function to send post request to server
  // if login is successful, do we need to add a cookie to local storage?
  // on signup, do we need to create and store a cookie for the user?
  // add axios call to check user credentials against db on click of submit


  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();


    const reqBody = {
      username: document.getElementById('username').value, 
      password: document.getElementById('password').value
    }
    console.log(reqBody)

    fetch('/user/login',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(reqBody)})
      .then(data => data.json())
      .then(formattedData => {
        console.log('data: ', formattedData)
        if (formattedData === false) {
          alert("Account doesn't exist, please try again or create account");
        }
        else if (formattedData.error) {
          alert("Password incorrect");
        }
        else {
        console.log('formattedData:' , formattedData)
        localStorage.setItem(
          'user',
          JSON.stringify({...formattedData})
        );
        navigate('/home')
        }
      })
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    }
  
    

  return (
    <>
    <div className='login'>
      <div><h7>Log In</h7></div>
      <div className='login_form'>
        <div>
        <input
          id = 'username'
          type="text"
          placeholder='Username'
        />
        </div>
        <div>
        <input
          id = 'password'
          type='password'
          placeholder='Password'
        />
        </div>
        <div className ="lead-to-home">
        <button onClick={handleLogin} type='submit' className='submit_btn'>
            Submit
        </button>
        </div>
        <div>
        <button>
        <Link to='/signup'>
            Sign up
        </Link>
        </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
