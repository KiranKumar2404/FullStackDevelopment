import React from 'react';
import '../css/AdmissionDialoge.css';

const AdmissionDetailsDialog = ({ admissionDetails, onClose }) => {
  return (
    <div>
      <div className="overlayss"></div>
      <div className="admission-dialog">
        <div className="dialog-content">
          <h2>Admission Details</h2>
          <p>College: {admissionDetails.college || 'N/A'}</p>
          <p>Course: {admissionDetails.course || 'N/A'}</p>
          <p>Duration: {admissionDetails.duration || 'N/A'}</p>
          <p>Fees: {admissionDetails.fees || 'N/A'}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionDetailsDialog;
