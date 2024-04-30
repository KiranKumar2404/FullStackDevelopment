import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../navbar/adminNavbar';
import '../../css/admindash.css';

const AdminDashboard = () => {
  const [studentData, setStudentData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [editMode, setEditMode] = useState(null); // Track which row is in edit mode
  const [editValues, setEditValues] = useState({}); // Store values being edited

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:8181/college/api/v1/admissions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStudentData(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setErrorMessage('Unable to fetch student data. Please try again later.');
      }
    };

    fetchStudentData();
  }, []);

  const handleEdit = (admissionid) => {
    setEditMode(admissionid); // Set the edit mode to the admission ID
    const currentStudent = studentData.find((student) => student.admissionid === admissionid);
    if (currentStudent) {
      setEditValues(currentStudent); // Populate the initial edit values with the current data
    }
  };

  const handleChange = (field, value) => {
    setEditValues((prev) => ({
      ...prev,
      [field]: value, 
    }));
  };

  const handleUpdate = async (admissionid) => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.put(
        `http://localhost:8181/college/api/v1/admissions/${admissionid}`,
        editValues, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the state with the new data
      setStudentData((prevData) =>
        prevData.map((student) =>
          student.admissionid === admissionid ? editValues : student
        )
      );

      setEditMode(null); // Reset edit mode after successful update
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <h2>Student Approval Dashboard</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>College</th>
            <th>Course</th>
            <th>Fees</th>
            <th>Role</th> {/* New column for role */}
            <th>Mark</th> {/* New column for mark */}
            <th>Application Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.admissionid}>
              <td>
                {editMode === student.admissionid ? (
                  <input
                    type="text"
                    value={editValues.studentName} readOnly
                    onChange={(e) => handleChange('studentName', e.target.value)}
                  />
                ) : (
                  student.studentName
                )}
              </td>
              <td>
                {editMode === student.admissionid ? (
                  <input
                    type="text"
                    value={editValues.college} readOnly
                    onChange={(e) => handleChange('college', e.target.value)}
                  />
                ) : (
                  student.college
                )}
              </td>
              <td>
                {editMode === student.admissionid ? (
                  <input
                    type="text"
                    value={editValues.course} readOnly
                    onChange={(e) => handleChange('course', e.target.value)}
                  />
                ) : (
                  student.course
                )}
              </td>
              <td>
                {editMode === student.admissionid ? (
                  <input
                    type="number"
                    value={editValues.fees} readOnly
                    onChange={(e) => handleChange('fees', e.target.value)}
                  />
                ) : (
                  student.fees
                )}
              </td>
              <td>
                {editMode === student.admissionid ? (
                  <input
                    type="text"
                    value={editValues.role} readOnly
                    onChange={(e) => handleChange('role', e.target.value)}
                  />
                ) : (
                  student.role
                )}
              </td>
              <td>
                {editMode === student.admissionid ? (
                  <input
                    type="number"
                    value={editValues.mark} readOnly
                    onChange={(e) => handleChange('mark', e.target.value)}
                  />
                ) : (
                  student.mark
                )}
              </td>
              <td>
                {editMode === student.admissionid ? (
                  <select
                    value={editValues.applicationStatus}
                    onChange={(e) => handleChange('applicationStatus', e.target.value)}
                  >
                    <option value="Application Submitted">Application Submitted</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                ) : (
                  student.applicationStatus
                )}
              </td>
              <td>
                {editMode === student.admissionid ? (
                  <button onClick={() => handleUpdate(student.admissionid)}>Update</button>
                ) : (
                  <button onClick={() => handleEdit(student.admissionid)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
