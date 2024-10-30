import React, { useState } from "react";
import CitySearch from "./CitySearch";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import { Box, Typography } from "@mui/material";

// ye ek dummy data h jo current temperature humidity or wind speed btataa h or es m 5 days ka forecast h jis se next 5 days ka temperature pata chalega...
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
  // es use state m data set kia gya h jo current weather ka or forecast ka h jb user city search krega koi tb ye data display hoga pehle esko null rakha h q k jb page load hoga to koi city search nhi hoga es m bad m data set kr sakte hen
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // ye ek function bnaya h jb user city search krega to current weather or forecast ka jo dummy data bnaya h wo set krega agar input khali hoga to alert show hoga
  const citySearch = (city) => {
    if (!city) {
      alert("Please enter a city name.");
      return;
    }
    setCurrentWeather(dummyData.current);
    setForecast(dummyData.forecast);
  };

  return (
    <Box
      className="container text-center mt-5 p-4 border rounded shadow-sm"
      sx={{ backgroundColor: "#E8F3F7" }}
    >
      <Typography variant="h4" className="mb-4 fw-semibold">
        Weather Dashboard
      </Typography>

      {/* yhaan pr component call kie hen */}
      <CitySearch onSearch={citySearch} />

      {/* ye conditional operator ka use kia h ye check krega k jo current weather ki state h wo agar true hogi to ye component render hoga agar false hogi to component render nhi hoga */}
      {currentWeather && <CurrentWeather weather={currentWeather} />}
      {forecast && <WeatherForecast forecast={forecast} />}
    </Box>
  );
};

export default WeatherDashboard;
