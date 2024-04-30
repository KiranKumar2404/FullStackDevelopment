import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../navbar/adminNavbar';
import '../../css/Addcourse.css';

const AddCoursePage = () => {
  const [courseData, setCourseData] = useState([]);
  const [newCourse, setNewCourse] = useState({
    courseName: '',
    college: '',
    fees: '',
    duration: ''
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get('http://localhost:8181/college/api/v1/courses/all', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCourseData(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const addCourse = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.post('http://localhost:8181/college/api/v1/courses', newCourse, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchCourses(); 
      setNewCourse({
        courseName: '',
        college: '',
        fees: '',
        duration: ''
      });
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleUpdate = async (courseId) => {
    try {
      const token = localStorage.getItem('accessToken');
      const courseToUpdate = courseData.find(course => course.courseId === courseId);
      const updatedCourse = { ...courseToUpdate, courseName: courseToUpdate.courseName, college: courseToUpdate.college, fees: courseToUpdate.fees, duration: courseToUpdate.duration };
      await axios.put(`http://localhost:8181/college/api/v1/courses/${courseId}`, updatedCourse, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const updatedData = courseData.map(course => {
        if (course.courseId === courseId) {
          return { ...course, ...updatedCourse };
        }
        return course;
      });
      setCourseData(updatedData);
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };
  

  const handleDelete = async (courseId) => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.delete(`http://localhost:8181/college/api/v1/courses/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchCourses(); 
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleChange = (e, courseId) => {
    const { name, value } = e.target;
    setCourseData(courseData.map(course => {
      if (course.courseId === courseId) {
        return { ...course, [name]: value };
      }
      return course;
    }));
  };
  

  const [editMode, setEditMode] = useState({});

  const toggleEditMode = (courseId) => {
    setEditMode({
      ...editMode,
      [courseId]: !editMode[courseId]
    });
  };

  return (
    <div className='add-course-page-container'>
      <AdminNavbar />
      <div className='add-course-form'>
        <h2>Add Course</h2>
        <div className='input-fields'>
          <input type='text' name='courseName' placeholder='Course' value={newCourse.courseName} onChange={(e) => setNewCourse({...newCourse, courseName: e.target.value})} />
          <input type='text' name='college' placeholder='College' value={newCourse.college} onChange={(e) => setNewCourse({...newCourse, college: e.target.value})} />
          <input type='text' name='fees' placeholder='Fees' value={newCourse.fees} onChange={(e) => setNewCourse({...newCourse, fees: e.target.value})} />
          <input type='text' name='duration' placeholder='Duration' value={newCourse.duration} onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})} />
          <button onClick={addCourse}>Add</button>
        </div>
      </div>
      <div className='course-details-table'>
        <h2>Course Details</h2>
        <table>
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course</th>
              <th>College</th>
              <th>Fees</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(courseData) && courseData.map(course => (
              <tr key={course.courseId}>
                <td>{course.courseId}</td>
                <td>
                  {editMode[course.courseId] ? (
                    <input type='text' value={course.courseName} onChange={(e) => handleChange(e, course.courseId)} name='courseName' />
                  ) : (
                    course.courseName
                  )}
                </td>
                <td>
                  {editMode[course.courseId] ? (
                    <input type='text' value={course.college} onChange={(e) => handleChange(e, course.courseId)} name='college' />
                  ) : (
                    course.college
                  )}
                </td>
                <td>
                  {editMode[course.courseId] ? (
                    <input type='text' value={course.fees} onChange={(e) => handleChange(e, course.courseId)} name='fees' />
                  ) : (
                    course.fees
                  )}
                </td>
                <td>
                  {editMode[course.courseId] ? (
                    <input type='text' value={course.duration} onChange={(e) => handleChange(e, course.courseId)} name='duration' />
                  ) : (
                    course.duration
                  )}
                </td>
                <td>
                  <button onClick={() => {
                    if (editMode[course.courseId]) handleUpdate(course.courseId);
                    toggleEditMode(course.courseId);
                  }}>{editMode[course.courseId] ? 'Update' : 'Edit'}</button>
                  <button onClick={() => handleDelete(course.courseId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCoursePage;