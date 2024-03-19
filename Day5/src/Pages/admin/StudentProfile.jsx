import React, { useState } from 'react';
import AdminNavbar from '../../navbar/adminNavbar';
import '../../css/admindash.css';

const StudentProfile = () => {
  const studentData = [
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 2, name: 'Jane Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Female', nationality: 'American', dateOfBirth: '1992-02-02', role: 'Student', address: '456 Elm St', number: '9876543210', markSSLC: '88%', markHSC: '92%', markDiploma: '85%' },
    { id: 3, name: 'David Smith', fatherName: 'Michael Smith', motherName: 'Emily Smith', gender: 'Male', nationality: 'British', dateOfBirth: '1988-03-03', role: 'Student', address: '789 Oak St', number: '5678901234', markSSLC: '90%', markHSC: '95%', markDiploma: '82%' },
    { id: 4, name: 'Sarah Johnson', fatherName: 'Robert Johnson', motherName: 'Elizabeth Johnson', gender: 'Female', nationality: 'Canadian', dateOfBirth: '1991-04-04', role: 'Student', address: '101 Pine St', number: '3456789012', markSSLC: '87%', markHSC: '93%', markDiploma: '79%' },
    { id: 5, name: 'Michael Williams', fatherName: 'William Williams', motherName: 'Mary Williams', gender: 'Male', nationality: 'Australian', dateOfBirth: '1989-05-05', role: 'Student', address: '202 Maple St', number: '6789012345', markSSLC: '89%', markHSC: '91%', markDiploma: '84%' },
    { id: 6, name: 'Sophia Brown', fatherName: 'David Brown', motherName: 'Karen Brown', gender: 'Female', nationality: 'New Zealander', dateOfBirth: '1993-06-06', role: 'Student', address: '303 Cedar St', number: '8901234567', markSSLC: '92%', markHSC: '88%', markDiploma: '87%' },
    { id: 7, name: 'William Taylor', fatherName: 'James Taylor', motherName: 'Barbara Taylor', gender: 'Male', nationality: 'Irish', dateOfBirth: '1987-07-07', role: 'Student', address: '404 Birch St', number: '9012345678', markSSLC: '86%', markHSC: '94%', markDiploma: '81%' },
    { id: 8, name: 'Olivia Miller', fatherName: 'Richard Miller', motherName: 'Patricia Miller', gender: 'Female', nationality: 'German', dateOfBirth: '1990-08-08', role: 'Student', address: '505 Walnut St', number: '0123456789', markSSLC: '91%', markHSC: '89%', markDiploma: '88%' },
    { id: 9, name: 'Benjamin Anderson', fatherName: 'John Anderson', motherName: 'Nancy Anderson', gender: 'Male', nationality: 'French', dateOfBirth: '1992-09-09', role: 'Student', address: '606 Pine St', number: '2345678901', markSSLC: '84%', markHSC: '92%', markDiploma: '83%' },
    { id: 10, name: 'Emma Martinez', fatherName: 'Jose Martinez', motherName: 'Linda Martinez', gender: 'Female', nationality: 'Spanish', dateOfBirth: '1991-10-10', role: 'Student', address: '707 Elm St', number: '3456789012', markSSLC: '88%', markHSC: '90%', markDiploma: '86%' },
    { id: 11, name: 'Alexander Harris', fatherName: 'Daniel Harris', motherName: 'Sandra Harris', gender: 'Male', nationality: 'Italian', dateOfBirth: '1988-11-11', role: 'Student', address: '808 Oak St', number: '4567890123', markSSLC: '90%', markHSC: '87%', markDiploma: '85%' },
    { id: 12, name: 'Ava Young', fatherName: 'Kevin Young', motherName: 'Laura Young', gender: 'Female', nationality: 'Japanese', dateOfBirth: '1993-12-12', role: 'Student', address: '909 Maple St', number: '5678901234', markSSLC: '85%', markHSC: '93%', markDiploma: '82%' },
    { id: 13, name: 'Michael Garcia', fatherName: 'David Garcia', motherName: 'Susan Garcia', gender: 'Male', nationality: 'Chinese', dateOfBirth: '1989-01-13', role: 'Student', address: '1010 Cedar St', number: '6789012345', markSSLC: '92%', markHSC: '86%', markDiploma: '89%' },
    { id: 14, name: 'Isabella Rodriguez', fatherName: 'Jose Rodriguez', motherName: 'Pamela Rodriguez', gender: 'Female', nationality: 'Indian', dateOfBirth: '1992-02-14', role: 'Student', address: '1111 Birch St', number: '7890123456', markSSLC: '89%', markHSC: '91%', markDiploma: '84%' },
    { id: 15, name: 'Matthew Lee', fatherName: 'Michael Lee', motherName: 'Deborah Lee', gender: 'Male', nationality: 'Russian', dateOfBirth: '1987-03-15', role: 'Student', address: '1212 Walnut St', number: '8901234567', markSSLC: '87%', markHSC: '94%', markDiploma: '81%' },
    { id: 16, name: 'Charlotte Clark', fatherName: 'Thomas Clark', motherName: 'Carol Clark', gender: 'Female', nationality: 'Brazilian', dateOfBirth: '1991-04-16', role: 'Student', address: '1313 Pine St', number: '9012345678', markSSLC: '90%', markHSC: '89%', markDiploma: '88%' },
];

  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(10); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const filteredStudents = studentData.filter(student => {
    return (
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.fatherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.motherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.nationality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.dateOfBirth.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.markSSLC.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.markHSC.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.markDiploma.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  // Generate pagination buttons
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button key={i} onClick={() => paginate(i)} className={currentPage === i ? 'active' : ''}>
        {i}
      </button>
    );
  }

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
          {currentStudents.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.fatherName}</td>
              <td>{student.motherName}</td>
              <td>{student.gender}</td>
              <td>{student.nationality}</td>
              <td>{student.dateOfBirth}</td>
              <td>{student.role}</td>
              <td>{student.address}</td>
              <td>{student.number}</td>
              <td>{student.markSSLC}</td>
              <td>{student.markHSC}</td>
              <td>{student.markDiploma}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className='pagination'>
        {paginationButtons}
      </div>
    </div>
  );
};

export default StudentProfile;
