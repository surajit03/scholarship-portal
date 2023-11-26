import React, { useState } from 'react';
import axios from 'axios';
// Import your Navbar component here if it's not in the same file

const Navbar = ({ onSearch }) => {
  // Handling search input
  const handleSearch = async (e) => {
    const searchTerm = e.target.value;
    // Perform actions based on the search term (e.g., search functionality)
    console.log('Search Term:', searchTerm);

    try {
      const response = await axios.get(`http://localhost:5000/api/schoolarship/Seaechschoolarship?search=${searchTerm}`);
      const scholarships = response.data;
      onSearch(scholarships); // Pass the search results to the parent component
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        {/* <img src={logo} alt="Logo" style={styles.logoImg} /> */}
        logo
      </div>
      <div style={styles.search}>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          style={styles.searchInput}
        />
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.8rem',
    background: '#333',
    color: '#fff',
  },
  logo: {
    marginRight: '1rem',
  },
  logoImg: {
    width: '100px', // Adjust the size of the logo as needed
    height: 'auto',
  },
  search: {
    display: 'flex',
    width:'26%'
  },
  searchInput: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '5px',
    border: 'none',
  },
};
// Your styles object remains the same

export default Navbar;

