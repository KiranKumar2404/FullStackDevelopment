import React from 'react';
import '../../css/PopupAlert.css';

const PopupAlert = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-content">
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PopupAlert;
