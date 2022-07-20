import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import styles from '../stylesheets/advancedSearch.scss'

const addSpaceReview = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [rating, setRating] = useState('');
  const [wifi, setWifi] = useState('');
  const [type, setType] = useState('');
  const [noise, setNoise] = useState('');
  const [outlets, setOutlets] = useState('');
  const [time, setTime] = useState('');
  const [laptopChecked, setLaptop] = useState(false);
  const [busy, setBusy] = useState('');
  const [outdoorChecked, setOutdoor] = useState(false);
  const [petChecked, setPetFriendly] = useState(false);
  const [url, setUrlAddress] = useState('');
  const [food, setFood] = useState('');
  const [coffee, setCoffee] = useState('');
  const [seating, setSeating] = useState('');
  const [additional, setAdditional] = useState('');

  // function to handle button click for add Space
  const handleAddSpace = (event) => {
    // we want to pass all of the input values to an object to pass to the db
    event.preventDefault();

    const inputObj = [
      {'workspaceName': name},
      {'zipcode': zipCode},
      {'address': address},
      {'rating': rating},
      {'wifi': wifi},
      {'type': type},
      {'quiet': noise},
      {'outlets': outlets},
      {'timeLimit': time},
      {'laptopRestrictions': laptopChecked},
      {'crowded': busy},
      {'outdoorSeating': outdoorChecked},
      {'petFriendly': petChecked},
      {'url': url},
      {'foodRating': coffee},
      {'coffeeRating': food},
      {'seating': seating},
      {'other': additional}
    ];

    let reqBody = {}
    inputObj.forEach(obj => {
      const val = Object.values(obj)[0]
      if (val !== null && val !== '') {
        reqBody = Object.assign(reqBody, obj)
      }
    })

    console.log(reqBody)

    // send POST request to server with new workspace info in body
    // axios.post('/advancedSearch', reqBody)
    //   .then(res => {
    //     console.log('Response from advanced search: ', res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }
  
  return (
    <>
      <NavBar />
      <h7>Advanced Search</h7>
      <div className='advancedSearch'>
        <form className='location_submission'>
          <input
            id='name'
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <div className="address">
            <input
              type='text'
              placeholder='Street address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}/>
            <input
              type='text'
              placeholder='Zip code'
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}/>
          </div>
          <input
            type='URL'
            placeholder='Website'
            value={url}
            onChange={(e) => setUrlAddress(e.target.value)} />
          <label>
              Type:
              <select 
              value={type}
              onChange={(e) => setType(e.target.value)}>
              <option value='Cafe'>Cafe</option>
              <option value='Bar'>Bar</option>
              <option value='Restaurant'>Restaurant</option>
              </select>
          </label>
          <label>
              Overall Rating:
              <select 
              value={rating}
              onChange={(e) => setRating(e.target.value)}>
              <option value='' selected disabled hidden>Select 1-5</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option> 
              </select>
          </label>
          <div className="rating">
            <label>
              Food:
              <select 
              value={food}
              onChange={(e) => setFood(e.target.value)}>
              <option value='' selected disabled hidden>Select</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>  
              </select>
            </label>
            <label>
                Coffee:
                <select 
                value={coffee}
                onChange={(e) => setCoffee(e.target.value)}>
                <option value='' selected disabled hidden>Select</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>  
                </select>
            </label>
            <label>
            Seating:
                <select 
                value={seating}
                onChange={(e) => setSeating(e.target.value)}>
                <option value='' selected disabled hidden>Select</option>
                <option value='Small'>0 - 10</option>
                <option value='Medium'>10 - 25 </option>
                <option value='Large'>25 - 40</option>
                </select>
            </label>
          </div>
          
          <label>
              Wifi:
              <select 
              value={wifi}
              onChange={(e) => setWifi(e.target.value)}>
              <option value='' selected disabled hidden>Select</option>
              <option value='Fast'>High speed and reliable</option>
              <option value='Moderate'>Moderate speed and reliable</option>
              <option value='Slow'>Slow and spotty</option>
              <option value='None'>Not available</option>
              </select>
          </label>
          <label>
          Noise level:
              <select 
              value={noise}
              onChange={(e) => setNoise(e.target.value)}>
              <option value='' selected disabled hidden>Select</option>
              <option value='Quiet'>Quiet</option>
              <option value='Moderate'>Moderate</option>
              <option value='Loud'>Loud</option>
              </select>
          </label>
          <label>
          Outlets:
              <select 
              value={outlets}
              onChange={(e) => setOutlets(e.target.value)}>
              <option value='' selected disabled hidden>Select</option>
              <option value='Many'>Many and accessible</option>
              <option value='Medium'>Medium</option>
              <option value='Few'>Few</option>
              </select>
          </label>
          <label>
          Time Limit:
              <select 
              value={time}
              onChange={(e) => setTime(e.target.value)}>
              <option value='' selected disabled hidden>Select</option>
              <option value='None'>No time limit</option>
              <option value='1'>One hour </option>
              <option value='2'>Two hours </option>
              </select>
          </label>
          <label>
          Laptop restrictions:
              <input type="checkbox"
              checked={laptopChecked}
              onChange={(e) => setLaptop(e.target.checked)}
              />
          </label>
          <label>
          Busy:
              <select 
              value={busy}
              onChange={(e) => setBusy(e.target.value)}>
              <option value='' selected disabled hidden>Select</option>
              <option value='Very'>Very busy</option>
              <option value='Moderate'>Moderately busy </option>
              <option value='Slow'>Slow</option>
              </select>
          </label>
          <label>
          Outdoor seating:
              <input type="checkbox"
              checked={outdoorChecked}
              onChange={(e) => setOutdoor(e.target.checked)}
              />
          </label>
          <label>
          Pet friendly:
              <input type="checkbox"
              checked={petChecked}
              onChange={(e) => setPetFriendly(e.target.checked)}
              />
          </label>
          
          
          <input
            type='Additional'
            placeholder='Other'
            value={additional}
            onChange={(e) => setAdditional(e.target.value)} />
          <button onClick={handleAddSpace} type='submit' className='submit_btn'>
              Submit
          </button>
        </form>
      </div>
      </>
    );
  };
//submit post to db on submit
export default addSpaceReview;

  

  


 
  
 