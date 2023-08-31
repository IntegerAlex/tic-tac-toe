import './LoginComp.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

export default function LoginComp() {
    const [data, setData] = useState('');
    const [pass, setPass] = useState('');

    useEffect(() => {
        // This effect will run when the component mounts
        // and whenever 'data' or 'pass' changes
        if (data && pass) {
            console.log('Sending data to server:', data, pass);
            axios.post('http://localhost:3000/api/login', { data, pass }) // Use axios.post
                .then(response => {
                    console.log('Response:', response.data); // Log the response data
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [data, pass]);

    function handleSubmit() {
        const userData = document.getElementById('user').value;
        const userPass = document.getElementById('pass').value;
        setData(userData);
        setPass(userPass);
    }

    return (
        <div className="login">
            <div className="login-form">
                <h1>Login</h1>
                <input id="user" type="text" placeholder="Enter your name" />
                <input id="pass" type="password" placeholder="Enter your password" />
                <button type="button" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    );
}
