import React, { useState } from 'react';
import AdminNavbar from '../../navbar/adminNavbar';
import '../../css/admindash.css';

const AdminDashboard = () => {
  const studentData = [
    { id: 1, name: 'John Doe', institution: 'ABC University', course: 'Engineering', fees: '$1000', cutoff: '85%', status: 'Pending' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 3, name: 'David Lee', institution: 'LMN Institute', course: 'Mechanical Engineering', fees: '$1100', cutoff: '88%', status: 'Approved' },
    { id: 4, name: 'Emily Brown', institution: 'PQR University', course: 'Chemistry', fees: '$1300', cutoff: '86%', status: 'Pending' },
    { id: 5, name: 'James Johnson', institution: 'STU College', course: 'Biology', fees: '$1150', cutoff: '89%', status: 'Approved' },
    { id: 6, name: 'Sophia Clark', institution: 'VWX Institute', course: 'Physics', fees: '$1250', cutoff: '91%', status: 'Approved' },
    { id: 7, name: 'William Anderson', institution: 'YZA University', course: 'Electrical Engineering', fees: '$1350', cutoff: '87%', status: 'Approved' },
    { id: 8, name: 'Olivia Wilson', institution: 'BCD College', course: 'Mathematics', fees: '$1050', cutoff: '92%', status: 'Pending' },
    { id: 9, name: 'Benjamin Thompson', institution: 'EFG Institute', course: 'Computer Engineering', fees: '$1400', cutoff: '90%', status: 'Approved' },
    { id: 10, name: 'Emma Garcia', institution: 'HIJ University', course: 'Environmental Science', fees: '$1100', cutoff: '88%', status: 'Approved' },
    { id: 11, name: 'Alexander Martinez', institution: 'KLM College', course: 'Civil Engineering', fees: '$1200', cutoff: '85%', status: 'Pending' },
    { id: 12, name: 'Ava Hernandez', institution: 'NOP Institute', course: 'Industrial Engineering', fees: '$1300', cutoff: '89%', status: 'Approved' },
    { id: 13, name: 'Michael Gonzalez', institution: 'QRS University', course: 'Geology', fees: '$1150', cutoff: '86%', status: 'Pending' },
    { id: 14, name: 'Isabella Perez', institution: 'TUV College', course: 'Astronomy', fees: '$1250', cutoff: '91%', status: 'Approved' },
    { id: 15, name: 'Matthew Sanchez', institution: 'WXY Institute', course: 'Materials Science', fees: '$1350', cutoff: '87%', status: 'Approved' },
    { id: 16, name: 'Charlotte Ramirez', institution: 'ZAB University', course: 'Biochemistry', fees: '$1050', cutoff: '92%', status: 'Pending' },
    { id: 17, name: 'Daniel Torres', institution: 'CDE College', course: 'Nuclear Engineering', fees: '$1400', cutoff: '90%', status: 'Approved' },
    { id: 18, name: 'Madison Scott', institution: 'FGH Institute', course: 'Statistics', fees: '$1100', cutoff: '88%', status: 'Approved' },
    { id: 19, name: 'Ethan Hill', institution: 'IJK University', course: 'Computer Science', fees: '$1200', cutoff: '85%', status: 'Pending' },
    { id: 20, name: 'Chloe Flores', institution: 'LMN College', course: 'Mechanical Engineering', fees: '$1300', cutoff: '89%', status: 'Approved' },
    { id: 21, name: 'Mia Green', institution: 'OPQ Institute', course: 'Chemical Engineering', fees: '$1150', cutoff: '86%', status: 'Pending' },
    { id: 22, name: 'Jacob Adams', institution: 'RST University', course: 'Biology', fees: '$1250', cutoff: '91%', status: 'Approved' },
    { id: 23, name: 'Grace Baker', institution: 'UVW College', course: 'Physics', fees: '$1350', cutoff: '87%', status: 'Approved' },
    { id: 24, name: 'Carter Evans', institution: 'XYZ Institute', course: 'Electrical Engineering', fees: '$1050', cutoff: '92%', status: 'Pending' },
    { id: 25, name: 'Avery King', institution: 'BCD University', course: 'Mathematics', fees: '$1400', cutoff: '90%', status: 'Approved' },
    { id: 26, name: 'Sofia Parker', institution: 'EFG College', course: 'Computer Engineering', fees: '$1100', cutoff: '88%', status: 'Approved' },
    { id: 27, name: 'Luke Cooper', institution: 'HIJ Institute', course: 'Environmental Science', fees: '$1200', cutoff: '85%', status: 'Pending' },
    { id: 28, name: 'Ella Turner', institution: 'KLM University', course: 'Civil Engineering', fees: '$1300', cutoff: '89%', status: 'Approved' },
    { id: 29, name: 'Gabriel Morgan', institution: 'NOP College', course: 'Industrial Engineering', fees: '$1150', cutoff: '86%', status: 'Pending' },
    { id: 30, name: 'Lily Cox', institution: 'QRS Institute', course: 'Geology', fees: '$1250', cutoff: '91%', status: 'Approved' }
];

  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(10); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const filteredStudents = studentData.filter(student => {
    return (
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.fees.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.cutoff.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); 
  };

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button key={i} onClick={() => paginate(i)} className={currentPage === i ? 'active' : ''}>
        {i}
      </button>
    );
  }

  return (
    <div className='admin-dashboard'>
      <AdminNavbar />
      <h2>Student Approval Dashboard</h2>
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
            <th>Student Name</th>
            <th>Institution Name</th>
            <th>Course Name</th>
            <th>Fees</th>
            <th>Cut-Off Mark</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.institution}</td>
              <td>{student.course}</td>
              <td>{student.fees}</td>
              <td>{student.cutoff}</td>
              <td>
                {student.status === 'Pending' && (
                  <button className='approve-btn'>Approve</button>
                )}
                {student.status === 'Approved' && (
                  <button className='approved-btn'>Approved</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        {paginationButtons}
      </div>
    </div>
  );
};

export default AdminDashboard;
