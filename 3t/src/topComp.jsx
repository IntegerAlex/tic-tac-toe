import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './topComp.css'

export default function TopComp() {
  const token = localStorage.getItem('token');
  console.log('Token:', token); 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (token) {
      axios.post('http://localhost:3000/api/getUser', { token: token })
        .then(response => {
          console.log('Response:', response.data);
          setUserData(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [token]);

  return (
    <div className="top-bar">
      <div className="profile">
        <img src="./src/assets/check-profile.png" alt="Profile Photo" className="profile-photo" />
      </div>
      <p>{}</p>
      <div className="balance">
        <p>Balance</p>
        <p>balance</p>
        <p>INR</p>
        <p>+</p>
        <p></p>
      </div>
    </div>
  );
}
