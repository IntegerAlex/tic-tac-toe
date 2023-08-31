import { useState , useEffect, Children} from 'react'
import Bottombar from './bottombar'
import TopComp from './topComp'
import LoginComp from './loginComp'
import {
  createBrowserRouter as BrowserRouter,
  RouterProvider,
  createRoutesFromElements as CRE,
  Route,
  Link,
} from "react-router-dom";

import './App.css'


const router = BrowserRouter(CRE(
  <><Route
    path="/"
    element={<Bottombar />}>

  </Route><Route path="/login" element={<LoginComp />}></Route></>

));



function App() {
  
 
  return (
    <div className="App">

 
 
      <RouterProvider router={router}/>
      
      
      
      
    
     
    </div>
  )
}

export default App
