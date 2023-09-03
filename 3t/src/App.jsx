import { useState , useEffect, Children} from 'react'
import Bottombar from './bottombar'
import TopComp from './topComp'
import LoginComp from './loginComp'
import SignUpComp from './signUpComp'
import {
  createBrowserRouter as BrowserRouter,
  RouterProvider,
  createRoutesFromElements as CRE,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import './App.css'


const router = BrowserRouter(CRE(
  <>
  <Route path="/" element={<LoginComp/>}>

  </Route>

  <Route path="/home" element={ [<TopComp key="Top"/>,<Bottombar key="Bottom" />]}></Route>

  <Route path="/signup" element={<SignUpComp/>}></Route>
  </>

));



function App() {
  
 
  return (
    <div className="App">

 
 
      <RouterProvider router={router}/>
      
      
      
      
    
     
    </div>
  )
}

export default App
