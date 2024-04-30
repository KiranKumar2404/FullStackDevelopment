import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../navbar/adminNavbar';
import '../../css/admindash.css';

const StudentProfile = () => {
  const [studentData, setStudentData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:8181/college/api/v1/students', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setStudentData(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, []);

    const filteredStudents = studentData ? studentData.filter(student => {
      return (
        (student.name && student.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.fatherName && student.fatherName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.motherName && student.motherName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.gender && student.gender.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.nationality && student.nationality.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.dateOfBirth && student.dateOfBirth.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.srole && student.srole.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.address && student.address.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.number && student.number.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.markSSLC && student.markSSLC.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.markHSC && student.markHSC.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.markDiploma && student.markDiploma.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }) : [];
    


  return (
    <div className='student-profile'>
      <AdminNavbar />
      <h2>Student Profile</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className='student-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Date of Birth</th>
            <th>Role</th>
            <th>Address</th>
            <th>Number</th>
            <th>Mark SSLC</th>
            <th>Mark HSC</th>
            <th>Mark Diploma</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.userId}>
              <td>{student.name}</td>
              <td>{student.fatherName}</td>
              <td>{student.motherName}</td>
              <td>{student.gender}</td>
              <td>{student.nationality}</td>
              <td>{student.dateOfBirth}</td>
              <td>{student.srole}</td>
              <td>{student.address}</td>
              <td>{student.number}</td>
              <td>{student.markSSLC}</td>
              <td>{student.markHSC}</td>
              <td>{student.markDiploma}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentProfile;
