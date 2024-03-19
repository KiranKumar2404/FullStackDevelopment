import React, { useState } from 'react';
import './Navbar.css';
import logoImage from '../images/1-removebg-preview 1.png'
import { useNavigate } from 'react-router';
import { CgProfile } from "react-icons/cg";
import ProfileDialog from './ProfileDialog';

const LogoutModal = ({ handleConfirmLogout, handleCancelLogout }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to logout?</p>
        <div className="modal-buttons">
          <button onClick={handleConfirmLogout}>Yes</button>
          <button onClick={handleCancelLogout}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [signUpData, setSignUpData] = useState(JSON.parse(localStorage.getItem('signupData')) || {});

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleDropdownItemClick = (action) => {
    switch (action) {
      case 'profile':
        setShowProfileModal(true);
        break;
      case 'status':
        break;
      case 'logout':
        setShowLogoutModal(true);
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    localStorage.clear();
    navigate("/user/login");
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  const handleCloseProfileDialog = () => {
    setShowProfileModal(false);
  };

  const handleUpdateProfile = () => {
    navigate("/user/update");
  };
  const handleHome = () => {
    navigate("/user/home");
  };
  const handleStudent = () => {
    navigate("/user/student");
  };
  const handleInstitute = () => {
    navigate("/user/institutes");
  };
  const handleCourse = () => {
    navigate("/user/course");
  };

  return (
    <nav className="navbar1">
      <div className="navbar-left">
        <img src={logoImage} alt="Image" />
        <p><b>.  MSD ONLINE ADMISSIONS</b></p>
      </div>
      <div className="navbar-right">
        <button className="btn" onClick={handleHome}>Home</button>
        <button className="btn" onClick={handleStudent}>Student</button>
        <button className="btn" onClick={handleInstitute}>Institutions</button>
        <button className="btn" onClick={handleCourse}>Courses</button>
        <div className="btn1" onClick={toggleDropdown}>
          <CgProfile />
          {dropdownVisible && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={() => handleDropdownItemClick('profile')}>Profile</button>
              <button className="dropdown-item" onClick={() => handleDropdownItemClick('logout')}>Logout</button>
            </div>
          )}
        </div>
      </div>
      {showProfileModal && <ProfileDialog signUpData={signUpData} onClose={handleCloseProfileDialog} onUpdate={handleUpdateProfile} />}
      {showLogoutModal && <LogoutModal handleConfirmLogout={handleLogout} handleCancelLogout={handleCancelLogout} />}
    </nav>
  );
};

export default Navbar;
