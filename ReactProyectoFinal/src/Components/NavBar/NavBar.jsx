import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/NavBar.css';
import sayluicon from '../../img/saylu_icon.jpeg'
const NavBar = () => {
  return (
    <section className="navbar-section">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/home">
              <img src={sayluicon} alt="" style={{ width: '13.5%',float:'left'}}/>
            </Link>
            </li>
          <li className="navbar-item"><Link to="/Administration">Administration</Link></li>
          <li className="navbar-item"><Link to="/AboutUs">About Us</Link></li>
          <li className="navbar-item"><Link to="/Register">Register</Link></li>
          <li className="navbar-item"><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;