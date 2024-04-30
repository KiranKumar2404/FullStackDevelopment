import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import '../../css/enrol.css';
import Navbar from '../../navbar/Navbar';
import Footer from '../../navbar/Footer';

function EnrollmentForm() {
  const navigate = useNavigate();
  const [college, setCollege] = useState('');
  const [course, setCourse] = useState('');
  const [duration, setDuration] = useState('');
  const [fees, setFees] = useState('');
  const [studentName, setStudentName] = useState('');
  const [role, setRole] = useState(''); // New State for role
  const [mark, setMark] = useState(''); // New State for mark
  const [showDialog, setShowDialog] = useState(false);
  const [markInputLabel, setMarkInputLabel] = useState('12th Mark'); // Default label for UG

  useEffect(() => {
    const enrollData = JSON.parse(localStorage.getItem('enrollData'));
    if (enrollData) {
      const { studentName, college, course, duration, fees } = enrollData;
      setCollege(college);
      setCourse(course);
      setDuration(duration);
      setFees(fees);
    }
  }, []);

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    if (selectedRole === 'UG') {
      setMarkInputLabel('12th Mark');
    } else {
      setMarkInputLabel('CGPA');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const admissionData = {
      studentName,
      college,
      course,
      duration,
      fees,
      role,
      mark,
      applicationStatus: 'Application Submitted', 
    };
  
    try {
      const token = localStorage.getItem('accessToken'); 
      const response = await axios.post('http://localhost:8181/college/api/v1/admissions', admissionData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      const { data: { admissionid } } = response;
      localStorage.setItem('enrollData', JSON.stringify({ studentName, college, course, duration, fees, admissionid }));
      setShowDialog(true);
    } catch (error) {
      console.error('Error submitting enrollment:', error);
    }
  };
  

  const handleDialogClose = () => {
    setShowDialog(false);
    navigate('/user/student');
  };

  return (
    <div className="enrol-container">
      <div className="enrollment-form">
        <Navbar />
        <h2>Enrollment Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="college">College:</label>
          <input type="text" id="college" name="college" value={college} readOnly />

          <label htmlFor="course">Course:</label>
          <input type="text" id="course" name="course" value={course} readOnly />

          <label htmlFor="duration">Duration:</label>
          <input type="text" id="duration" name="duration" value={duration} readOnly />

          <label htmlFor="fees">Fees:</label>
          <input type="text" id="fees" name="fees" value={fees} readOnly />

          <label htmlFor="student-name">Student Name:</label>
          <input type="text" id="studentName" name="studentName" value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Enter your name" />

          <label htmlFor="role">Role:</label>
          <select id="role" name="role" value={role} onChange={handleRoleChange}>
            <option value="">Select Role</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>

          <label htmlFor="mark">{markInputLabel}:</label>
          <input type="text" id="mark" name="mark" value={mark} onChange={(e) => setMark(e.target.value)} placeholder={`Enter your ${markInputLabel}`} />

          <button className='buttoon' type="submit">Submit</button>
        </form>
        <Footer />
      </div>
      {showDialog && (
        <div className="dialog">
         <p>Application submitted successfully. To view status, go to dashboard.</p>
        <button onClick={handleDialogClose}>OK</button>
         </div>
      )}
    </div>
  );
}

export default EnrollmentForm;
