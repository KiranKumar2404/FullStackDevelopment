import React, { useState } from 'react';
import AdminNavbar from '../../navbar/adminNavbar';
import '../../css/Addinstitutions.css';

const AddInstitutionPage = () => {
  const [institutionData, setInstitutionData] = useState([
    { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 2, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 3, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 4, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 5, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 6, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 7, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 8, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 9, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 10, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 11, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 12, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 13, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 14, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 15, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 16, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 17, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 18, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 19, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 20, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 21, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 22, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 23, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
    { id: 24, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [institutionsPerPage] = useState(11); 

  const addInstitution = () => {
  };

  const indexOfLastInstitution = currentPage * institutionsPerPage;
  const indexOfFirstInstitution = indexOfLastInstitution - institutionsPerPage;
  const currentInstitutions = institutionData.slice(indexOfFirstInstitution, indexOfLastInstitution);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(institutionData.length / institutionsPerPage);

  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button key={i} onClick={() => paginate(i)} className={currentPage === i ? 'active' : ''}>
        {i}
      </button>
    );
  }

  return (
    <div className='add-institution-page-container'>
      <AdminNavbar />
      <div className='add-institution-form'>
        <h2>Add Institution</h2>
        <div className='input-fields'>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Location' />
          <input type='text' placeholder='Contact Number' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Courses' />
          <button onClick={addInstitution}>Add</button>
        </div>
      </div>
      <div className='institution-details-table'>
        <h2>Institution Details</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Courses</th>
            </tr>
          </thead>
          <tbody>
            {currentInstitutions.map(institution => (
              <tr key={institution.id}>
                <td>{institution.name}</td>
                <td>{institution.location}</td>
                <td>{institution.contactNumber}</td>
                <td>{institution.email}</td>
                <td>{institution.courses}</td>
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

export default AddInstitutionPage;
