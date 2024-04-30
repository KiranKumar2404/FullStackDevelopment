import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import Footer from '../../navbar/Footer';
import '../../css/institutes.css';

function Cards() {
  const navigate = useNavigate();
  const [institutionData, setInstitutionData] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  useEffect(() => {
    fetchInstitutionData();
  }, []);

  const fetchInstitutionData = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get('http://localhost:8181/college/api/v1/institutes', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setInstitutionData(response.data);
    } catch (error) {
      console.error('Error fetching institution data:', error);
    }
  };

  const handleFilter = () => {
    return institutionData.filter(institution =>
      institution.name.toLowerCase().includes(filter.toLowerCase()) ||
      institution.location.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleEnroll = (college, location, contactNumber, email) => {
    localStorage.setItem('enrollData', JSON.stringify({ college, location, contactNumber, email }));
    navigate('/user/enroll');
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredInstitutions = filter ? handleFilter() : institutionData;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredInstitutions.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className='app1'>
      <Navbar />
      <div className="filter">
        <input type="text" placeholder="Search by College or Location" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <button onClick={handleFilter}>Filter</button>
      </div>
      <div className="cards-container">
        {currentCards.length === 0 ? (
          <p>No matching results found.</p>
        ) : (
          currentCards.map((institution, index) => (
            <div className="card" key={index}>
              <div className="info">
                <h2 className="college-name">{institution.instituteName}</h2>
                <p className="location">Location: {institution.location}</p>
                <p className="contact">Contact: {institution.contactNumber}</p>
                <p className="email">Email: {institution.instituteEmail}</p>
                <p className="Courses">Courses Available: {institution.courses}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredInstitutions.length / cardsPerPage) }, (_, i) => (
          <button key={i} className={currentPage === i + 1 ? 'active' : ''} onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Cards;
