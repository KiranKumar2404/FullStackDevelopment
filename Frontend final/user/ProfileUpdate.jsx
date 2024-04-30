import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import Footer from '../../navbar/Footer';
import '../../css/ProfileUpdate.css';

const ProfileUpdate = ({ signUpData }) => {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [srole, setSrole] = useState('');
  const [address, setAddress] = useState('');
  const [number, setMobileNo] = useState('');
  const [markSSLC, setMarkSSLC] = useState('');
  const [markHSC, setMarkHSC] = useState('');
  const [markDiploma, setMarkDiploma] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !fatherName || !motherName || !gender || !nationality || !dateOfBirth || !srole || !address || !number || !markSSLC) {
      alert('Please fill in all required fields.');
      return;
    }
  
    try {
      const token = localStorage.getItem('accessToken'); 
  
      const formData = {
        name,
        fatherName,
        motherName,
        gender,
        nationality,
        dateOfBirth,
        srole,
        address,
        number,
        markSSLC,
        markHSC,
        markDiploma,
      };
  
      const response = await axios.post('http://localhost:8181/college/api/v1/students', formData, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });

      localStorage.setItem('profileData', JSON.stringify({ name }));
      
      console.log('Profile updated successfully:', response.data);
      alert('Profile Updated Successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating profile. Please try again.');
    }
  };
  

  return (
    <div className="profile-update-container">
      <Navbar />
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Father's Name:
          <input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
        </label>
        <label>
          Mother's Name:
          <input type="text" value={motherName} onChange={(e) => setMotherName(e.target.value)} />
        </label>
        <label>
          Gender:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
        <label>
          Nationality:
          <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
        </label>
        <label>
          Date of Birth:
          <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        </label>
        <label>
          Degree:
          <select value={srole} onChange={(e) => setSrole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Mobile Number:
          <input type="number" value={number} onChange={(e) => setMobileNo(e.target.value)} />
        </label>
        <label>
          Mark SSLC:
          <input type="number" value={markSSLC} onChange={(e) => setMarkSSLC(e.target.value)} />
        </label>
        <label>
          Mark HSC (Optional):
          <input type="number" value={markHSC} onChange={(e) => setMarkHSC(e.target.value)} />
        </label>
        <label>
          Mark Diploma (Optional):
          <input type="number" value={markDiploma} onChange={(e) => setMarkDiploma(e.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
      <Footer />
    </div>
  );
};

export default ProfileUpdate;
