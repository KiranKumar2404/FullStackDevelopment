import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import Footer from '../../navbar/Footer';
import '../css/enrol.css';

function EnrollmentForm() {
  const navigate = useNavigate();
  const [college, setCollege] = useState('');
  const [course, setCourse] = useState('');
  const [duration, setDuration] = useState('');
  const [fees, setFees] = useState('');
  const [studentName, setStudentName] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const enrollData = JSON.parse(localStorage.getItem('enrollData'));
    if (enrollData) {
      const { college, course, duration, fees, studentName } = enrollData;
      setCollege(college);
      setCourse(course);
      setDuration(duration);
      setFees(fees);
      setStudentName(studentName);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const enrollData = {
      college,
      course,
      duration,
      fees,
      studentName
    };
    localStorage.setItem('enrollData', JSON.stringify(enrollData));
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    navigate('/student');
  };

  return (
    <div className='enrol-container'>
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
          <input type="text" id="student-name" name="student-name" value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Enter your name" />

          <button className='buttoon' type="submit">Submit</button>
        </form>
        <Footer />
      </div>
      {showDialog && (
        <div className="enrol-dialog">
          <p>Application submitted successfully. To view status, go to dashboard.</p>
          <button className='buttonn' onClick={handleDialogClose}>OK</button>
        </div>
      )}
    </div>
  );
}

export default EnrollmentForm;
