import React from "react";
import './App.scss'
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Offer from "./pages/Offer";
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Aboutme' element={<Aboutme/>} />
        <Route path='/Offer' element={<Offer/>} />
      </Routes> 
  )
}

export default App
