import React, { useState } from 'react';
import axios from 'axios';
import '../../css/adminlogin.css';
import { useNavigate } from 'react-router';
import Navbar from '../../navbar/navbar1';
import PopupAlert from '../user/PopupAlert';
import { setUserDetails } from '../../redux/UserSlice';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!signInData.email || !signInData.password) {
      setPopupMessage('Please fill in all the fields.');
      setShowPopup(true);
    } else {
      try {
        const response = await axios.post('http://localhost:8181/college/api/v1/auth/login', signInData);
        const userData = response.data.data;
        localStorage.setItem('accessToken', userData.accessToken);
        navigate("/admin/admindash");
      } catch (error) {
        console.error(error);
        setPopupMessage('Login failed. Please try again.');
        setShowPopup(true);
      }
    }
  };

  const handleInputChange = (e, isSignUpForm) => {
    const name = e.target.name;
    const value = e.target.value;

    if (isSignUpForm) {
      setSignUpData({
        ...signUpData,
        [name]: value
      });
    } else {
      setSignInData({
        ...signInData,
        [name]: value
      });
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='login'>
      <Navbar />
      <div className='login1'>
        <div className="container">
          <h2>Login</h2>
          <form onSubmit={handleSignIn}>
          <input
          type="email"
          name="email"
          placeholder="Email"
          value={signInData.email}
          onChange={(e) => handleInputChange(e, false)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signInData.password}
          onChange={(e) => handleInputChange(e, false)}
        />
            <button className='buttt' type="submit">Login</button>
          </form>
        </div>
      </div>
      {showPopup && <PopupAlert message={popupMessage} onClose={closePopup} />}
    </div>
  );
}

export default AdminLogin;
