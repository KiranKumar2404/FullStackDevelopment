import React, { useState } from 'react';
import AdminNavbar from '../../navbar/adminNavbar';
import '../../css/PaymentDetails.css';

const CourseDetails = () => {
  const courseData = [
    { id: 1, course: 'Computer Science Engineering', college: 'ABC University', fees: '$1000', duration: '4 years', feeStatus: 'Paid' },
    { id: 2, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 3, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 4, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 5, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 6, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 7, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 8, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 9, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 10, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 11, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 12, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 13, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 14, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 15, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 16, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 17, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 18, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 19, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 20, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 21, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 22, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 23, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 24, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    { id: 25, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years', feeStatus: 'Non-Paid' },
    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(11); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const filteredCourses = courseData.filter(course => {
    return (
      course.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.fees.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.duration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.feeStatus.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button key={i} onClick={() => paginate(i)} className={currentPage === i ? 'active' : ''}>
        {i}
      </button>
    );
  }

  return (
    <div className='course-details'>
      <AdminNavbar />
      <h2>Course Details</h2>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className='course-table'>
        <thead>
          <tr>
            <th>Course</th>
            <th>College</th>
            <th>Fees</th>
            <th>Duration</th>
            <th>Fee Status</th>
          </tr>
        </thead>
        <tbody>
          {currentCourses.map(course => (
            <tr key={course.id}>
              <td>{course.course}</td>
              <td>{course.college}</td>
              <td>{course.fees}</td>
              <td>{course.duration}</td>
              <td>{course.feeStatus}</td>
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

export default CourseDetails;
