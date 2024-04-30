import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import Footer from '../../navbar/Footer';
import '../../css/courses.css';

function Cards() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6); 
  const [filter, setFilter] = useState('');
  const [courses, setCourses] = useState([]);

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
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleFilter = () => {
    return courses.filter(course =>
      course.college.toLowerCase().includes(filter.toLowerCase()) ||
      course.courseName.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleEnroll = (course, college, fees, duration) => {
    localStorage.setItem('enrollData', JSON.stringify({ college, course, duration, fees }));
    navigate('/user/enroll');
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredCourses = filter ? handleFilter() : courses;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCourses.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className='app1'>
      <Navbar />
      <div className="filter">
        <input type="text" placeholder="Search by College or Course" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <button onClick={fetchCourses}>Filter</button>
      </div>
      <div className="cards-container">
        {currentCards.length === 0 ? (
          <p>No matching results found.</p>
        ) : (
          currentCards.map((course, index) => (
            <div className="card" key={index}>
              <div className="info">
                <h2 className="course-name">{course.courseName}</h2>
                <p className="college-name">{course.college}</p>
                <p className="fees">Fees: {course.fees}</p>
                <p className="duration">Duration: {course.duration}</p>
              </div>
              <button className={`enroll-button ${currentPage === Math.ceil(indexOfLastCard / cardsPerPage) ? 'active' : ''}`} onClick={() => handleEnroll(course.courseName, course.college, course.fees, course.duration)}>
                Enroll
              </button>
            </div>
          ))
        )}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredCourses.length / cardsPerPage) }, (_, i) => (
          <button key={i} className={currentPage === i + 1 ? 'active' : ''} onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Cards;
