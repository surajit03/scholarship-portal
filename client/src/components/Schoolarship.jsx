import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/schoolarship.css';

const ScholarshipComponent = () => {
  const [scholarships, setScholarships] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/schoolarship/facthschoolarship');
        const scholarshipData = response.data;
        setScholarships(scholarshipData);
      } catch (error) {
        console.error(error);
        // Handle errors here
      }
    };

    fetchScholarships();
  }, []);

  const itemsPerPage = 20;

  const pages = [];
  for (let i = 0; i < scholarships.length; i += itemsPerPage) {
    pages.push(scholarships.slice(i, i + itemsPerPage));
  }

  const renderScholarships = (page) => {
    if (page && page.length > 0) {
      return page.map((scholarship) => (
        <div key={scholarship._id} className="scholarship-item">
          <p>Title: {scholarship.title}</p>
          <p>Degrees: {scholarship.degrees}</p>
          <p>Funds: {scholarship.funds}</p>
          <p>Date: {scholarship.date}</p>
        </div>
      ));
    } else {
      return <div className="no-scholarships">No scholarships found.</div>;
    }
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (scholarships.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {renderScholarships(pages[currentPage])}

      <div className="pagination-container">
        <button
          className="pagination-button"
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          Previous Page
        </button>
        <button
          className="pagination-button"
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
        >
          Next Page
        </button>
      </div>

      {scholarships.length === 0 && <div className="loading">Loading...</div>}
    </div>
  );
};
export default ScholarshipComponent;
