import React, { useState, useEffect } from 'react';
import '../../css/student.css';
import Navbar from '../../navbar/Navbar';
import Footer from '../../navbar/Footer';
import { useNavigate } from 'react-router-dom';
import Institue from '../../images/Intitutes.jpg';
import Course from '../../images/course.jpg';
import Stu from '../../images/stu.jpg';
import Add from '../../images/add.jpg';
import Pay from '../../images/pay.jpg';
import His from '../../images/his.jpg';
import Addmission from '../../images/add1.jpg';
import AdmissionDetailsDialog from './AdmissionDialog';
import PaymentHistoryDialog from './PaymentHistoryDialog'; 

const Student = () => {
  const navigate = useNavigate();
  const [admissionDetails, setAdmissionDetails] = useState(null);
  const [showAdmissionDialog, setShowAdmissionDialog] = useState(false);
  const [showPaymentHistoryDialog, setShowPaymentHistoryDialog] = useState(false); 

  useEffect(() => {
    const admissionStatus = localStorage.getItem('applicationStatus');
    if (admissionStatus === 'Approved') {
    } else {
      console.log('You are not eligible for payment.');
    }
  }, []);

  const fetchAdmissionDetails = () => {
    const enrollData = JSON.parse(localStorage.getItem('enrollData'));
    if (enrollData) {
      setAdmissionDetails(enrollData);
      setShowAdmissionDialog(true);
    } else {
      console.log('No admission details found.');
    }
  };

  const handleCardClick = (route) => {
    if (route === '/check-admission-details') {
      fetchAdmissionDetails();
    } else if (route === '/payment-history') {
      setShowPaymentHistoryDialog(true); 
    } else if (route === '/user/payment') {
      const admissionStatus = localStorage.getItem('applicationStatus');
      if (admissionStatus === 'Approved') {
        navigate(route);
      } else if (admissionStatus === 'Application Submitted') {
        alert('You are still not Approved.');
      } else if (admissionStatus === 'Rejected') {
        alert('You are not eligible for payment.');
      }
    } else {
      navigate(route);
    }
  };

  const closeAdmissionDialog = () => {
    setShowAdmissionDialog(false);
  };

  const closePaymentHistoryDialog = () => {
    setShowPaymentHistoryDialog(false);
  };

  return (
    <div className="student-container1">
      <Navbar />
      <img src={Addmission} className="card-image1" />
      <div className="columns-container1">
        <div className="column1">
          <div className="card1" onClick={() => handleCardClick('/user/institutes')}>
            <img src={Institue} alt="View Institutions" className="card-image" />
            <h3>View Institutions</h3>
          </div>
          <div className="card1" onClick={() => handleCardClick('/user/course')}>
            <img src={Course} alt="View College" className="card-image" />
            <h3>View Courses</h3>
          </div>
        </div>
        <div className="column1">
          <div className="card1" onClick={() => handleCardClick('/user/profileupdate')}>
            <img src={Stu} alt="Add Student Profile" className="card-image" />
            <h3>Add Student Profile</h3>
          </div>
          <div className="card1" onClick={() => handleCardClick('/check-admission-details')}>
            <img src={Add} alt="Check Admission Details" className="card-image" />
            <h3>Check Admission Details</h3>
          </div>
        </div>
        <div className="column1">
          <div className="card1" onClick={() => handleCardClick('/user/payment')}>
            <img src={Pay} alt="Make Payment" className="card-image" />
            <h3>Make Payment</h3>
          </div>
          <div className="card1" onClick={() => handleCardClick('/payment-history')}>
            <img src={His} alt="Payment History" className="card-image" />
            <h3>Payment History</h3>
          </div>
        </div>
      </div>
      <Footer />
      {showAdmissionDialog && (
        <AdmissionDetailsDialog
          admissionDetails={admissionDetails}
          onClose={closeAdmissionDialog}
        />
      )}
      {showPaymentHistoryDialog && (
        <PaymentHistoryDialog onClose={closePaymentHistoryDialog} />
      )}
    </div>
  );
};

export default Student;
