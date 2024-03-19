import React, { useState } from 'react';
import '../css/forgetpassword.css'; 
import { useNavigate } from 'react-router';

function ForgotPassword() {

  const navigate = useNavigate();
  const handleLogout = () => {
  navigate("/login");
};

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleForgotPassword = () => {
    alert('Password reset successful!');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='forget'>
      <div className='forget1'>
    <div className="forget-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      <p>Remember your password? <button onClick={handleLogout}>Login here</button></p>
    </div>
    </div>
    </div>
  );
}

export default ForgotPassword;