import React, { useState } from 'react';
import '../css/institutes.css';
import Navbar from '../../navbar/Navbar';
import Footer from '../../navbar/Footer';

const collegesData = [
  {
    name: 'PSG college of Technology',
    location: 'Coimbatore',
    contactNumber: '04222572177',
    email: 'contact@psgtech.ac.in',
    courses:'5',
  },
  {
    name: 'Kumaraguru College of Technology',
    location: 'Coimbatore',
    contactNumber: ' 0422-2661515',
    email: 'info@kct.ac.in',
    courses: '4',
  },
  {
    name: 'SRM Institute of Science and Technology',
    location: 'Chennai',
    contactNumber: ' 0422-2661515',
    email: 'info@srmist.com',
    courses: '6',
  },
  {
    name: 'Sri Krishna College of Technology',
    location: 'coimbatore',
    contactNumber: '123-456-7890',
    email: 'info@skct.edu.in',
    courses: '3',
  },
  {
    name: 'Vellore Institute of Technology',
    location: 'Vellore',
    contactNumber: '123-456-7890',
    email: 'info@vit.com',
    courses: '7',
  },
  {
    name: 'Thiagarajar college of Engineering',
    location: 'Madurai',
    contactNumber: '04522482240',
    email: 'info@tce.edu',
    courses: '4',
  },
  {
    name: 'Sona college of Technology',
    location: 'Salem',
    contactNumber: '04274099999',
    email: 'info@sonatech.ac.in',
    courses: '5',
  },
  {
    name: 'Kongu College of Enginnering',
    location: 'Erode',
    contactNumber: '042942265550',
    email: 'principal@kongu.ac.in',
    courses: '6',
  },
  {
    name: 'Chennai Institute of Technology',
    location: 'Chennai',
    contactNumber: '04471119111',
    email: 'info@cit.com',
    courses: '6',
  },
  {
    name: 'Velammal institute of Technology',
    location: 'coimbatore',
    contactNumber: '123-456-7890',
    email: 'info@skct.edu.in',
    courses: '7',
  },
  {
    name: 'The American College',
    location: 'coimbatore',
    contactNumber: '123-456-7890',
    email: 'info@skct.edu.in',
    courses: '3',
  },
  {
    name: 'Oxford Univercity',
    location: 'coimbatore',
    contactNumber: '123-456-7890',
    email: 'info@skct.edu.in',
    courses: '3',
  },
];

const pageSize = 6;

const CollegeCard = ({ college }) => {
  return (
    <div className="college-card">
        <Navbar/>
      <h2 className="college-name">{college.name}</h2>
      <p className="college-info">Location: <strong>{college.location}</strong></p>
      <p className="college-info">Contact: {college.contactNumber}</p>
      <p className="college-info">Email: {college.email}</p>
      <p className="college-info">Courses Available: {college.courses}</p>
      
    </div>
  );
};

const Colleges = ({ colleges }) => {
  return (
    <div className="colleges">
      {colleges.map(college => (
        <CollegeCard key={college.name} college={college} />
      ))}
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pageNumbers.map(page => (
        <button
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
const Filter = ({ setFilteredColleges }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = event => {
      setSearchTerm(event.target.value);
    };
  
    const handleFilter = () => {
        const filteredColleges = collegesData.filter(college => {
          return (
            college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            college.location.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
        setFilteredColleges(filteredColleges);
      };
    
      return (
        <div className="filter">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button onClick={handleFilter} style={{backgroundColor: '#007bff',  border:'none',borderRadius: '5px', cursor: 'pointer' }} >Apply Filter</button>
        </div>
      );
    };
    
const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredColleges, setFilteredColleges] = useState(collegesData);


  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(collegesData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, collegesData.length);
  const displayedColleges = filteredColleges.slice(startIndex, endIndex);

  return (
    <div className="app">
      <Filter setFilteredColleges={setFilteredColleges} />
      <Colleges colleges={displayedColleges} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        />
        <Footer/>
    </div>
  );
};

export default App;