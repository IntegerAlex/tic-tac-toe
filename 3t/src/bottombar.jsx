
import {
    useNavigate,
    createBrowserRouter as BrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import './bottombar.css'
import React from 'react';

export default function Bottombar() {
  
    const navigate = useNavigate();

    return (
        <div className="bottombar">
            <object data="./src/assets/home.svg" alt="home" width={40} height={40} type="image/svg+xml"></object>
            <img src="./src/assets/payment-receipt.svg" alt="payment" width={40} height={40} />
            <img
            src="./src/assets/qr-code.svg"
            alt="qr-scanner"
            width={80} 
            height={80} 
        style={{
            position: "relative", // Optional, adjust based on your layout
            zIndex: 1 // Optional, adjust based on your layout
                }}
            />
            <img src="./src/assets/wallet.svg" alt="wallet" width={40} height={40} />
            
            <img onClick={() =>{ navigate("/profile")
            console.log("clicked")}  }
                id='user' src="./src/assets/user.svg"
                alt="user"
                width={40} height={40}
          
            />
               
            
        </div>
    )
}

  