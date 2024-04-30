import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/PaymentPage.css';
import PaymentHistoryDialog from './PaymentHistoryDialog';
import { useNavigate } from 'react-router';
import PopupAlert from './PopupAlert'; 

import upiImage from '../../images/UPI.jpg';
import netImage from '../../images/Netbank.png';
import bankImage from '../../images/bank.png';
import ccardImage from '../../images/ccard.png';
import dcardImage from '../../images/dcard.png';

const PaymentPage = () => {
  const navigate = useNavigate();
  const admissionid = JSON.parse(localStorage.getItem('enrollData')).admissionid || null;
  const [showHistoryDialog, setShowHistoryDialog] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(localStorage.getItem('paymentStatus') === 'true');
  const [admissionDetails, setAdmissionDetails] = useState(null);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [rzp, setRzp] = useState(null);
  const enrollData=JSON.parse(localStorage.getItem('enrollData'))
  
  useEffect(() => {
    if (window.Razorpay) {
      const options = {
        key: "rzp_test_9u3kMcqchK88zT",
        amount: enrollData.fees * 100 , 
        currency: "INR",
        name: "MSD Trust Limited",
        description: "Test Transaction",
        handler: function (response) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
      };
      const rzpInstance = new window.Razorpay(options);
      setRzp(rzpInstance);
    } else {
      console.error("Razorpay script not loaded.");
    }
    if (admissionid) {
      fetchAdmissionDetails(admissionid);
    }
  }, [admissionid]);

  const fetchAdmissionDetails = async (admissionid) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get(`http://localhost:8181/college/api/v1/admissions/${admissionid}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAdmissionDetails(response.data);
    } catch (error) {
      console.error('Error fetching admission details:', error);
    }
  };


  // useEffect(() => {
  //   if (window.Razorpay) {
  //     const options = {
  //       key: "rzp_test_9u3kMcqchK88zT",
  //       amount: admissionDetails ? admissionDetails.fees * 100 : 0, 
  //       currency: "INR",
  //       name: "MSD Trust Limited",
  //       description: "Test Transaction",
  //       handler: function (response) {
  //         alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
  //       },
  //     };
  //     const rzpInstance = new window.Razorpay(options);
  //     setRzp(rzpInstance);
  //   } else {
  //     console.error("Razorpay script not loaded.");
  //   }
  // }, [admissionDetails]);

  const handleClick = () => {
    rzp.open();
  };

  const handlePayment = () => {
    if (!admissionid) {
      setPopupMessage('Please select courses to continue payment.');
      setShowPopup(true);
    } else if (!admissionDetails || !admissionDetails.studentName) {
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
    navigate('/user/student');
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
        {admissionDetails ? (
          <div>
            <p><strong>Name :</strong> {admissionDetails.studentName}</p>
          </div>
        ) : (
          <p><strong>Name :</strong> N/A</p>
        )}
        <p>College: {admissionDetails ? admissionDetails.college : 'N/A'}</p>
        <p>Course: {admissionDetails ? admissionDetails.course : 'N/A'}</p>
        <p>Duration: {admissionDetails ? admissionDetails.duration : 'N/A'}</p>
        <p>Fees: {admissionDetails ? admissionDetails.fees : 'N/A'}</p>
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
      <button className="pay-button" onClick={handleClick}>Pay Now</button>
      <button className="pay-button" onClick={handleCancel}>Cancel</button>
      {/* {showHistoryDialog && (
        <PaymentHistoryDialog
          status={paymentStatus}
          onClose={() => setShowHistoryDialog(false)}
        /> 
      )} */}
    </div>
  );
};

export default PaymentPage;
