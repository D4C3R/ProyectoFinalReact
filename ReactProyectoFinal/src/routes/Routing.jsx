import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'   
import Home from '../pages/Home'
import Administration from '../pages/Administration'
import AboutUs from '../pages/AboutUs'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Create from '../pages/Create'
import Update from '../pages/Update'

const Routing = () =>{

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Home' element={<Home/>}/>
            <Route path='Administration' element={<Administration/>}/>
            <Route path='AboutUs' element={<AboutUs/>}/>
            <Route path='Register' element={<Register/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='Create' element={<Create/>}/>
            <Route path='Update/:id' element={<Update/>}/>
        </Routes>
    )
}

export default Routing 