import "./signUpComp.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpComp() {
    const[data,setData] = useState(''); 
    const[pass,setPass] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');
    const[signup,setSignup] = useState(null);
    const navigate = useNavigate();
    
        useEffect(() => {
        if (data && pass && email && phone) {
        console.log('Sending data to server:', data, pass, email, phone);
            
        // This effect will run when the component mounts
        // and whenever 'data' or 'pass' changes
        axios.post('http://localhost:3000/api/signup', { data:data, pass:pass, email:email, phone:phone }) // Use axios.post
            .then(response => { 
                console.log('Response:', response.data); 
                setSignup(response.data.login);  
                // Log the response data
            })  
            .catch((error) => {
                console.error('Error:', error);
            });

    }
        }, [data, pass, email, phone]);





    function handleSubmit(){
        const userData = document.getElementById('user').value;
        const userPass = document.getElementById('pass').value;
        const userEmail = document.getElementById('email').value;
        const userPhone = document.getElementById('phone').value;
        setData(userData);
        setPass(userPass);
        setEmail(userEmail);
        setPhone(userPhone);
    }


    return (
        <div className="signup">
            <div className="signup-form">
                <h1>Sign Up</h1>
                <input id="user" type="text" placeholder="Enter your name" />
                <input id="email" type="email" placeholder="Enter your email" />
                <input id="phone" type="tel" placeholder="Enter your phone number" />
                <input id="pass" type="password" placeholder="Enter your password" />
                <button type="button" onClick={handleSubmit}>Create account</button>
                <button type="button" onClick={() => navigate("/")}>Login</button>
                {signup === true ? (
                <div className="sign-up-msg">
                    <p>Sign up successful</p>
                    <p>Go to login</p> 
                    <p>Welcome to our platform</p> {/* Fixed the typo here */}
                </div>
                ) : (
                signup === false ? (
                <div className="sign-up-failed">
                    <p>Sign up failed</p>
                    <p>Email already exists</p>
                    <p>Try again</p>
                 </div>
                     ) : null
                    )}
            </div>
        </div>
            )
}