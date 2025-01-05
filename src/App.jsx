import React from "react";
import './App.scss'
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Aboutme' element={<Aboutme/>} />
      </Routes> 
  )
}

export default App
