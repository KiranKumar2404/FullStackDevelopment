import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../navbar/adminNavbar';
import '../../css/Addinstitutions.css';

const AddInstitutionPage = () => {
  const [institutionData, setInstitutionData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [institutionsPerPage] = useState(11);
  const [newInstitution, setNewInstitution] = useState({
    instituteName: '',
    location: '',
    contactNumber: '',
    instituteEmail: '',
    courses: ''
  });
  const [updatedInstitutionData, setUpdatedInstitutionData] = useState({
    instituteId: '', 
    instituteName: '',
    location: '',
    contactNumber: '',
    instituteEmail: '',
    courses: ''
  });

  useEffect(() => {
    fetchInstitutionData();
  }, []);

  const fetchInstitutionData = () => {
    const token = localStorage.getItem('accessToken');

    fetch('http://localhost:8181/college/api/v1/institutes', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch institution data');
        }
      })
      .then(data => setInstitutionData(data))
      .catch(error => console.error('Error fetching institution data:', error));
  };

  const addInstitution = () => {
    const token = localStorage.getItem('accessToken');

    fetch('http://localhost:8181/college/api/v1/institutes/institute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newInstitution)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Institution added successfully:', data);
        fetchInstitutionData();
        setNewInstitution({
          instituteName: '',
          location: '',
          contactNumber: '',
          instituteEmail: '',
          courses: ''
        });
      })
      .catch(error => console.error('Error adding institution:', error));
  };

  const updateInstitution = (id) => {
    const token = localStorage.getItem('accessToken');

    fetch(`http://localhost:8181/college/api/v1/institutes/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch institution details for update');
        }
      })
      .then(data => {
        setUpdatedInstitutionData(data);
      })
      .catch(error => console.error('Error fetching institution details for update:', error));
  };

  const handleUpdate = () => {
    const token = localStorage.getItem('accessToken');

    fetch(`http://localhost:8181/college/api/v1/institutes/${updatedInstitutionData.instituteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(updatedInstitutionData)
    })
      .then(response => {
        if (response.ok) {
          console.log('Institution updated successfully');
          fetchInstitutionData();
          setUpdatedInstitutionData({
            instituteId: '',
            instituteName: '',
            location: '',
            contactNumber: '',
            instituteEmail: '',
            courses: ''
          });
        } else {
          console.error('Failed to update institution');
        }
      })
      .catch(error => console.error('Error updating institution:', error));
  };

  const deleteInstitution = (id) => {
    const token = localStorage.getItem('accessToken');

    fetch(`http://localhost:8181/college/api/v1/institutes/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.ok) {
          console.log('Institution deleted successfully');
          fetchInstitutionData();
        } else {
          console.error('Failed to delete institution');
        }
      })
      .catch(error => console.error('Error deleting institution:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInstitution(prevState => ({
      ...prevState,
      [name]: value
    }));
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
          <input type='text' placeholder='Name' name='instituteName' value={newInstitution.instituteName} onChange={handleInputChange} />
          <input type='text' placeholder='Location' name='location' value={newInstitution.location} onChange={handleInputChange} />
          <input type='text' placeholder='Contact Number' name='contactNumber' value={newInstitution.contactNumber} onChange={handleInputChange} />
          <input type='text' placeholder='Email' name='instituteEmail' value={newInstitution.instituteEmail} onChange={handleInputChange} />
          <input type='text' placeholder='Courses' name='courses' value={newInstitution.courses} onChange={handleInputChange} />
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentInstitutions.map(institution => (
              <tr key={institution.instituteId}>
                <td>{institution.instituteName}</td>
                <td>{institution.location}</td>
                <td>{institution.contactNumber}</td>
                <td>{institution.instituteEmail}</td>
                <td>{institution.courses}</td>
                <td>
                  <button onClick={() => {
                    updateInstitution(institution.instituteId);
                    setUpdatedInstitutionData(institution); // Set the data for the institution being updated
                  }}>Update</button>
                  <button onClick={() => deleteInstitution(institution.instituteId)}>Delete</button>
                </td>
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
