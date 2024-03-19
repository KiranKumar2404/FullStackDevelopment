import React, { useState, useEffect } from 'react';
import '../css/ProfileUpdate.css';
import Navbar from '../../navbar/Navbar';
import Footer from '../../navbar/Footer';

const ProfileUpdate = ({signUpData}) => {
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [number, setMobileNo] = useState('');
    const [markSSLC, setMarkSSLC] = useState('');
    const [markHSC, setMarkHSC] = useState('');
    const [markDiploma, setMarkDiploma] = useState('');
  
    useEffect(() => {
      fetchDataFromLocalStorage();
    }, []);
  
    const fetchDataFromLocalStorage = () => {
      const userData = JSON.parse(localStorage.getItem('profileData'));
      if (userData) {
        setName(userData.name);
        setFatherName(userData.fatherName);
        setMotherName(userData.motherName);
        setGender(userData.gender);
        setNationality(userData.nationality);
        setDateOfBirth(userData.dateOfBirth);
        setRole(userData.role);
        setAddress(userData.address);
        setMobileNo(userData.number);
        setMarkSSLC(userData.markSSLC);
        setMarkHSC(userData.markHSC);
        setMarkDiploma(userData.markDiploma);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
        name,
        fatherName,
        motherName,
        gender,
        nationality,
        dateOfBirth,
        role,
        address,
        number,
        markSSLC,
        markHSC,
        markDiploma,
      };
      localStorage.setItem('profileData', JSON.stringify(formData));
      alert('Profile Updated Successfully!');
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
          <select value={role} onChange={(e) => setRole(e.target.value)}>
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
