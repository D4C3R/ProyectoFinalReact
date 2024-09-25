import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use `useNavigate` instead of `Navigate`
import '../../styles/NavBar.css';
import sayluicon from '../../img/saylu_icon.jpeg';

function NavBar() {
  const navigate = useNavigate(); // Initialize the navigate hook

  function logout() {
    localStorage.removeItem('Identified');
    navigate('/'); // Use the navigate function for redirection
  }

  return (
    <section className="navbar-section">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/home">
              <img src={sayluicon} alt="" style={{ width: '13.5%', float: 'left' }} />
            </Link>
          </li>
          <li className="navbar-item"><Link to="/Administration">Administration</Link></li>
          <li className="navbar-item"><Link to="/AboutUs">About Us</Link></li>
          <li className="navbar-item"><Link to="/Register">Register</Link></li>
          <li className="navbar-item"><Link to="/Login">Login</Link></li>
          <li className="navbar-item"><button onClick={logout}>Log out</button></li>
        </ul>
      </nav>
    </section>
  );
}

export default NavBar;
