import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const authentication = localStorage.getItem('Identified') === 'True'
    
    if (!authentication ){
        
        return <Navigate to="/" />
    }
    
    return children
}

export default ProtectedRoute