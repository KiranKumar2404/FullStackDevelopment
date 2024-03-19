import React, { useState, useEffect } from 'react';
import '../css/PaymentPage.css';
import PaymentHistoryDialog from './PaymentHistoryDialog';
import { useNavigate } from 'react-router';
import PopupAlert from './PopupAlert'; 

import upiImage from '../images/UPI.jpg';
import netImage from '../images/Netbank.png';
import bankImage from '../images/bank.png';
import ccardImage from '../images/ccard.png';
import dcardImage from '../images/dcard.png';

const PaymentPage = () => {
  const navigate = useNavigate();
  const enrollData = JSON.parse(localStorage.getItem('enrollData')) || { college: 'N/A', course: 'N/A', duration: 'N/A', fees: 'N/A' };
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('profileData')) || {name: 'N/A'};
    if (userData) {
      setProfileData(userData);
    }
  }, []);
  const [showHistoryDialog, setShowHistoryDialog] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(localStorage.getItem('paymentStatus') === 'true');
  const [profileData, setProfileData] = useState(null);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handlePayment = () => {
    if (enrollData.college === 'N/A' || enrollData.course === 'N/A' || enrollData.duration === 'N/A' || enrollData.fees === 'N/A') {
      setPopupMessage('Please select courses to continue payment.');
      setShowPopup(true);
    } 
    else if (profileData.name === 'N/A') {
      setPopupMessage('Please Update your profile');
      setShowPopup(true);
    } else {
      const paymentDateTime = new Date().toLocaleString();
      setPaymentStatus(true);
      localStorage.setItem('paymentStatus', 'true');
      localStorage.setItem('paymentDateTime', paymentDateTime);
      setShowHistoryDialog(true);
    }
  };

  const handleCancel = () => {
    navigate('/student');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="payment-container">
      {showPopup && <PopupAlert message={popupMessage} onClose={closePopup} />}
      <h1>MSD Online Admission - Payment Portal</h1>
      <h2>Payment Details</h2>
      <div className="fees-details">
      {profileData ? (
        <div>
          <p><strong>Name :</strong> {profileData.name}</p>
        </div>
      ) : (
        <p><strong>Name :</strong> N/A</p>
      )}
        <p>College: {enrollData.college}</p>
        <p>Course: {enrollData.course}</p>
        <p>Duration: {enrollData.duration}</p>
        <p>Fees: {enrollData.fees}</p>
      </div>
      <div className="payment-methods">
        <div className="payment-method">
          <img src={upiImage} alt="UPI" />
          <p>UPI</p>
        </div>
        <div className="payment-method">
          <img src={netImage} alt="Net Banking" />
          <p>Net Banking</p>
        </div>
        <div className="payment-method">
          <img src={bankImage} alt="Bank Transfer" />
          <p>Bank Transfer</p>
        </div>
        <div className="payment-method">
          <img src={ccardImage} alt="Credit Cards" />
          <p>Credit Cards</p>
        </div>
        <div className="payment-method">
          <img src={dcardImage} alt="Debit Cards" />
          <p>Debit Cards</p>
        </div>
      </div>
      <button className="pay-button" onClick={handlePayment}>Pay Now</button>
      <button className="pay-button" onClick={handleCancel}>Cancel</button>
      {showHistoryDialog && (
        <PaymentHistoryDialog
          status={paymentStatus}
          onClose={() => setShowHistoryDialog(false)}
        />
      )}
    </div>
  );
};

export default PaymentPage;
