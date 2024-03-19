import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import '../css/PaymentHistoryDialog.css';

const PaymentHistoryDialog = ({ onClose }) => {
  const navigate = useNavigate();
  const paymentStatus = localStorage.getItem('paymentStatus') === 'true';
  const paymentDateTime = localStorage.getItem('paymentDateTime');
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('profileData'));
    if (userData) {
      setProfileData(userData);
    }
  }, []);

  const handleStudent = () => {
    navigate("/student");
  };

  return (
    <div className='overlay1'>
      <div className="payment-history-dialog">
        <div className="dialog-content">
          {paymentStatus ? (
            <>
              <div className="success-icon">&#10003;</div>
              <p className="payment-status">Paid</p>
            </>
          ) : (
            <>
              <div className="failure-icon">&#10005;</div>
              <p className="payment-status">Unpaid</p>
            </>
          )}
          {profileData ? (
            <div>
              <p><strong>From :</strong> {profileData.name}</p>
            </div>
          ) : (
            <p><strong>From :</strong> Null</p>
          )}
          <p><strong>To :</strong> MSD Trust Pvt.ltd</p>
          {paymentDateTime ? (
            <p className="payment-datetime">Payment Date and Time: {paymentDateTime}</p>
          ) : (
            <p className="payment-datetime">Payment Date and Time: Null</p>
          )}
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryDialog;
