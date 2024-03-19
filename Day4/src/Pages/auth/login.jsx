import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import axios from 'axios';
import Navbar from '../../navbar/navbar1';
import '../../css/login.css';
import PopupAlert from '../user/PopupAlert'; 
import { setUserDetails } from '../../redux/UserSlice'; 

const Signin = () => {
  const dispatch = useDispatch(); 
  const [isSignup, setIsSignup] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!signInData.email || !signInData.password) {
      setPopupMessage('Please fill in all the fields.');
      setShowPopup(true);
    } else {
      navigate("/home")
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!signUpData.name || !signUpData.email || !signUpData.password) {
      setPopupMessage('Please fill in all the fields.');
      setShowPopup(true);
      return;
    }

    try {
      localStorage.setItem('signupData', JSON.stringify(signUpData));

      dispatch(setUserDetails(signUpData));

      setSignUpData({
        name: "",
        email: "",
        password: "",
        number: ""
      });

      setPopupMessage('Signup Successful. You can now sign in.');
      setShowPopup(true);
      setIsSignup(false);
    } catch (error) {
      console.error(error);
      setPopupMessage('Sign up failed. Please try again later.');
      setShowPopup(true);
    }
  };

  const handleforget = () => {
    navigate("/forgetpassword");
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
    <div className="Login">
      <Navbar />
      <div className={`container ${isSignup ? "right-panel-active" : ""}`}>
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1><br></br>
            <span>MSD Online Admissions</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={signUpData.name}
              onChange={(e) => handleInputChange(e, true)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signUpData.email}
              onChange={(e) => handleInputChange(e, true)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signUpData.password}
              onChange={(e) => handleInputChange(e, true)}
            />
            <input
              type="number"
              name="number"
              placeholder="Mobile Number"
              value={signUpData.number}
              onChange={(e) => handleInputChange(e, true)}
            />
            <button className="bott" type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn}>
            <h1>Sign In</h1><br></br>
            <>  All the best for your Future</>
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
            <button className="bott" type="submit">Sign In</button><br/>
            <button className="btn" onClick={handleforget}>Forget Password</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome!</h1>
              <p>Already have an account? Login Here</p>
              <button className="ghost" onClick={toggleForm}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1><br/>
              Register Here for Admissions in Top colleges<br/><br/><br/>
              <button className="ghost" onClick={toggleForm}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <PopupAlert message={popupMessage} onClose={closePopup} />}
    </div>
  );
};

export default Signin;
