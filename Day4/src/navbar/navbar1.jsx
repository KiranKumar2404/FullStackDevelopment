import React from 'react';
import './Navbar.css';
import logoImage from '../images/1-removebg-preview 1.png'
import { useNavigate } from 'react-router';

const Navbar = () => {
  const navigate=useNavigate();
  const handleAdmin=()=>{
    navigate("admin/login");
  }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logoImage} alt="Image" />
        <p><b>.  MSD ONLINE ADMISSIONS</b></p>
      </div>
      <div className="right">
        <button className="btn2" onClick={handleAdmin}>Admin Login</button>
        <button className="btn2">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
