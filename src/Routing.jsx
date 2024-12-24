import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './Home/About'
import Service from './Home/Service'
 
 
 


const Routing = () => {
  return (
    <>
    <Routes>
       
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
       <Route path="/service" element={<Service/>} />
        
       
       </Routes>
    </>
  )
}

export default Routing