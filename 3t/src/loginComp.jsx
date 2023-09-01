import './LoginComp.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate  , Link } from "react-router-dom"; 

export default function LoginComp() {
    const [data, setData] = useState('');
    const [pass, setPass] = useState('');
    const [login, setLogin] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        // This effect will run when the component mounts
        // and whenever 'data' or 'pass' changes
        if (data && pass) {
            console.log('Sending data to server:', data, pass);
            axios.post('http://localhost:3000/api/login', { data:data, pass:pass }) // Use axios.post
                .then(response => {
                    console.log(login )
                    console.log('Response:', response.data);
                    setLogin(true);
                    console.log(login)
                   
                    // Log the response data
                })
                .catch((error) => {
                    setLogin(false);
                    console.error('Error:', error);
                });
                
        }
    }, [data, pass,login]);


    useEffect(() => {
        // Use a separate useEffect for the delayed navigation
        if (login === true) {
            // Delay the navigation by 4 seconds (4000 milliseconds)
            const timeoutId = setTimeout(() => {
                navigate("/home");
            }, 3000);

            // Cleanup the timeout if the component unmounts before the delay
            return () => clearTimeout(timeoutId);
        }
    }, [login, navigate]);

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
                <button type="button" onClick={() => navigate("/signup")}>Sign up</button>
            
                <div className="login-image">
                     {login === true ? (
                        <img src="./src/assets/unlock.svg" alt="verified" width={200} height={200} />
                     ) : login === false ? (
                        <img src="./src/assets/rejected.png" alt="invalid" width={200} height={200} />
                    ) : (
                        <img src="./src/assets/lock.svg" alt="invalid" width={200} height={200} />
                )}
            </div>
           </div>
        </div>
    );
}
