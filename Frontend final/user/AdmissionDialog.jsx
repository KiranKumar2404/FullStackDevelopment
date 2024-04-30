import React, { useState, useEffect } from 'react';
import '../../css/AdmissionDialoge.css';
import axios from 'axios';

const AdmissionDetailsDialog = ({ admissionDetails, onClose, setAdmissionStatus }) => {
  const [admissionData, setAdmissionData] = useState(null);

  useEffect(() => {
    if (admissionDetails && admissionDetails.admissionid) {
      fetchAdmissionDetails(admissionDetails.admissionid);
    }
  }, [admissionDetails]);

  const fetchAdmissionDetails = async (admissionid) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get(`http://localhost:8181/college/api/v1/admissions/${admissionid}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAdmissionData(response.data);
      // Store applicationStatus in localStorage
      localStorage.setItem('applicationStatus', response.data.applicationStatus || 'Application Submitted');
      // Set applicationStatus in parent component
      setAdmissionStatus(response.data.applicationStatus || 'Application Submitted');
    } catch (error) {
      console.error('Error fetching admission details:', error);
    }
  };

  if (!admissionData) {
    return null;
  }

  const { studentName, college, course, duration, fees, applicationStatus = "Application Submitted" } = admissionData;

  return (
    <div>
      <div className="overlay" onClick={onClose}></div>
      <div className="admission-dialog">
        <div className="dialog-content">
          <h2>Admission Details</h2>
          <p>Name: {studentName || 'n/a'}</p>
          <p>College: {college || 'n/a'}</p>
          <p>Course: {course || 'n/a'}</p>
          <p>Duration: {duration || 'n/a'}</p>
          <p>Fees: {fees || 'n/a'}</p>
          <p>Status: {applicationStatus || 'n/a'}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionDetailsDialog;
