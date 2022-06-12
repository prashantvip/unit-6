
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Movies from './Movies'

import NavBar from './Navbar'

const AllRoutes = () => {
  return (
    <>
      
      <NavBar/>

       <Routes>
           
            <Route   path='/' element={<Home />} />
            <Route   path='/about' element={<About />} />
            <Route   path='/movies' element={<Movies />} />
           
           
       </Routes>    
    
    </>
  )
}

export default AllRoutes