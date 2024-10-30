import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Box, Typography } from "@mui/material";

const WeatherForecast = (props) => {
  // props se hm data parent component se child ko pass kr sakte hen yhaan p data weather dashboard se aarha h ek prop m or usko destructure kia h object m
  const { forecast } = props;
  return (
    <Box className="py-4">
      <Typography variant="h5">5-Day Forecast</Typography>
      <Box className="row">
        {/* map method forecast ka jo data h usse print krega har din or temperature ko alag alag print krega */}
        {forecast.map((dayData, index) => (
          <Box key={index} className="col  mb-3 mt-4 ">
            <Box className="text-center bg-white py-4 rounded-4">
              <WbSunnyIcon fontSize="large" />
              {/* dayData.day se forecast wale array ka day lia gya h yhaan */}
              <Typography className="m-0 fw-semibold py-3">
                {dayData.day}
              </Typography>
              {/* dayData.temp se forecast wale array ka temperature lia gya h yhaan */}
              <Typography className="m-0">{dayData.temp}°C</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WeatherForecast;
