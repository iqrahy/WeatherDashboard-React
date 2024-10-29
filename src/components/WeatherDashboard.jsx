// src/components/WeatherDashboard.js
import React, { useState } from 'react';
import CitySearch from './CitySearch';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import { Box, Typography } from '@mui/material';

const dummyData = {
  current: { temperature: 30, humidity: 60, windSpeed: 10 },
  forecast: [
    { day: "Monday", temp: 32 },
    { day: "Tuesday", temp: 31 },
    { day: "Wednesday", temp: 29 },
    { day: "Thursday", temp: 28 },
    { day: "Friday", temp: 27 },
  ],
};

const WeatherDashboard = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleCitySearch = (city) => {
    if (!city) {
      alert("Please enter a city name.");
      return;
    }
    setCurrentWeather(dummyData.current);
    setForecast(dummyData.forecast);
  };

  return (
    <Box className="container text-center mt-5 p-4 border rounded shadow-sm" sx={{ backgroundColor: '#E8F3F7' }}>
      <Typography variant='h4' className="mb-4 fw-semibold">Weather Dashboard</Typography>
      <CitySearch onSearch={handleCitySearch} />
      {currentWeather && <CurrentWeather weather={currentWeather} />}
      {forecast && <WeatherForecast forecast={forecast} />}
    </Box>
  );
};

export default WeatherDashboard;