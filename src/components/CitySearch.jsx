// src/components/CitySearch.js
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

const CitySearch = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) {
      alert("Please enter a city name.");
      return;
    }
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline justify-content-center py-4 rounded-4 bg-white mb-3 d-flex">
     <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="form-control mr-2 w-50 border border-dark-subtle me-1"
      />
      <Button type="submit" className='border border-0 bg-transparent' variant="primary"><SearchIcon/></Button>
    </form>
  );
};

export default CitySearch;