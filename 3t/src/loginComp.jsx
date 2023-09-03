import './LoginComp.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate  , Link } from "react-router-dom"; 

    export default function LoginComp() {
        const [data, setData] = useState('');
        const [pass, setPass] = useState('');
        const [login, setLogin] = useState(null);
        const [token, setToken] = useState(null);
        const navigate = useNavigate();
    
        function handleSubmit() {
            const userData = document.getElementById('user').value;
            const userPass = document.getElementById('pass').value;
            setData(userData);
            setPass(userPass);
        }
    
        useEffect(() => {
            // This effect will run when the component mounts
            // and whenever 'login' changes
            if (data && pass && login === null) {
                console.log('Sending data to server:', data, pass);
                axios.post('http://localhost:3000/api/login', { data: data, pass: pass })
                    .then(response => {
                        console.log('Response:', response.data);
                        setLogin(response.data.login);
                        const resToken =response.data.token;
                        setToken(resToken);
                        localStorage.setItem('token', JSON.stringify(response.data.token));
                        console.log('Token:', resToken);
    
                        // Delayed navigation if login is successful
                        if (response.data.login === true) {
                            // Delay the navigation by 3 seconds (3000 milliseconds)
                            const timeoutId = setTimeout(() => {
                                navigate("/home");
                            }, 3000);
    
                            // Cleanup the timeout if the component unmounts before the delay
                            return () => clearTimeout(timeoutId);
                        }
                    })
                    .catch((error) => {
                        setLogin(false);
                        console.error('Error:', error);
                    });
            }
        }, [data, pass, login, navigate]);
    
        // Rest of your component code...
    

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
