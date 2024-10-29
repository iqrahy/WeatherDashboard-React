// src/components/WeatherForecast.js
import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Box, Typography } from '@mui/material';


const WeatherForecast = (props) => {
    const {forecast} = props
  return (
    <Box className="py-4">
      <Typography variant="h5">5-Day Forecast</Typography>
      <Box className="row">
        {forecast.map((dayData, index) => (
          <Box key={index} className="col  mb-3 mt-4 ">
            <Box className="text-center bg-white py-4 rounded-4">
            <WbSunnyIcon fontSize="large" />
            <Typography className="m-0 fw-semibold py-3">{dayData.day}</Typography>
            <Typography className="m-0">{dayData.temp}°C</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WeatherForecast;