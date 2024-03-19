import React, { useState } from 'react';
import AdminNavbar from '../../navbar/adminNavbar';
import '../../css/Addcourse.css';

const AddCoursePage = () => {
  const [courseData, setCourseData] = useState([
    { id: 1, course: 'Computer Science Engineering', college: 'ABC University', fees: '$1000', duration: '4 years' },
    { id: 2, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 3, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 4, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 5, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 6, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 7, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 8, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 9, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 10, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 11, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 12, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 13, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 14, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 15, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 16, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 17, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 18, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 19, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 20, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 21, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
    { id: 22, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(11); 

  const addCourse = () => {
  };

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courseData.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(courseData.length / coursesPerPage);

  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button key={i} onClick={() => paginate(i)} className={currentPage === i ? 'active' : ''}>
        {i}
      </button>
    );
  }

  return (
    <div className='add-course-page-container'>
      <AdminNavbar />
      <div className='add-course-form'>
        <h2>Add Course</h2>
        <div className='input-fields'>
          <input type='text' placeholder='Course' />
          <input type='text' placeholder='College' />
          <input type='text' placeholder='Fees' />
          <input type='text' placeholder='Duration' />
          <button onClick={addCourse}>Add</button>
        </div>
      </div>
      <div className='course-details-table'>
        <h2>Course Details</h2>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>College</th>
              <th>Fees</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {currentCourses.map(course => (
              <tr key={course.id}>
                <td>{course.course}</td>
                <td>{course.college}</td>
                <td>{course.fees}</td>
                <td>{course.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='pagination'>
          {paginationButtons}
        </div>
      </div>
    </div>
  );
};

export default AddCoursePage;
