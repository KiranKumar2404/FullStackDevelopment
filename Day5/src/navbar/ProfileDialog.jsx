import React from 'react';
import { useSelector } from 'react-redux';
import './Navbar.css';
import amritaImage from '../images/profile.png';
import { useNavigate } from 'react-router';

const ProfileDialog = ({ onClose }) => {
  // Retrieve user details from Redux state
  const { name, email, number } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/profileupdate");
  };

  return (
    <div className="profile-modal">
      <div className="profile-modal-content">
        <h2>Profile</h2>
        <div className="profile-model-container">
          <img src={amritaImage} alt="Image 6" />
        </div>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Mobile Number:</strong> {number}</p>
        {/* You can add more profile information here */}
        <button className="close" onClick={onClose}>&times; close</button>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default ProfileDialog;
