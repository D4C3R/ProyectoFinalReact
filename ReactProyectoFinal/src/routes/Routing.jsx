import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'   
import Home from '../pages/Home'
import Administration from '../pages/Administration'
import AboutUs from '../pages/AboutUs'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Create from '../pages/Create'
import Update from '../pages/Update'
import MakeAppointment from '../pages/MakeAppointment'
import ProtectedRoute from './ProtectedRoute'

const Routing = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Home' element={<Home/>}/>
            <Route path='Administration' element={<ProtectedRoute><Administration/></ProtectedRoute>}/>
            <Route path='AboutUs' element={<AboutUs/>}/>
            <Route path='Register' element={<Register/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='Create' element={<ProtectedRoute><Create/></ProtectedRoute>}/>
            <Route path='Update/:id' element={<ProtectedRoute><Update/></ProtectedRoute>}/>
            <Route path='MakeAppointment/:id' element={<ProtectedRoute><MakeAppointment/></ProtectedRoute>}/>
        </Routes>
    )
}

export default Routing 