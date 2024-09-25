import React from 'react'
import { Link, Navigate } from 'react-router-dom';
function logout() {
    localStorage.removeItem('Identified')
    Navigate('/')
  }
  export default logout