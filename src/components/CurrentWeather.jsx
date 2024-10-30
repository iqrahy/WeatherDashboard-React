import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import { Box, Typography } from "@mui/material";

const CurrentWeather = (props) => {
  // props se hm data parent component se child ko pass kr sakte hen yhaan p data weather dashboard se aarha h ek prop m or usko destructure kia h object m
  const { weather } = props;
  return (
    <Box className="bg-white p-4 rounded-4">
      <Typography variant="h5">Current Weather</Typography>

      <Box className="d-flex align-items-center justify-content-center gap-5 mt-4">
        <Box className="d-flex align-items-center justify-content-center my-3">
          <WbSunnyIcon fontSize="medium" className="mr-3 me-2" />
          {/* yhaan pr current weather ka temperature liaa gya h */}
          <Typography className="m-0 ">
            Temperature: {weather.temperature}°C
          </Typography>
        </Box>
        <Box className="d-flex align-items-center justify-content-center my-3">
          <WaterDropIcon fontSize="medium" className="mr-3 me-2" />
          {/* yhaan pr current weather ka humidity li gai h */}
          <Typography className="m-0">Humidity: {weather.humidity}%</Typography>
        </Box>
        <Box className="d-flex align-items-center justify-content-center my-3">
          <AirIcon fontSize="medium" className="mr-3 me-2" />
          {/* yhaan pr current weather ka windSpeed li gai h */}
          <Typography className="m-0">
            Wind Speed: {weather.windSpeed} km/h
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentWeather;
