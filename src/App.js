import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchSection from "./component/SearchSection";
import WeatherCard from "./component/WeatherCard";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");

  const handleSearch = (city) => {
    setCity(city);
  };

  const WeatherDisplay = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (city) {
        setLoading(true);
        setWeatherData(null);
        // fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
        axios
          .get(`https://api.weatherapi.com/v1/current.json`, {
            params: {
              key: "cf6cae627141447e9e6113102230410",
              q: city,
            },
          })
          .then((response) => {
            setWeatherData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
            alert("Failed to fetch weather data");
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }, [city]);

    return (
      <div style={{ marginTop: 10 }}>
        {loading && <p>Loading data...</p>}
        {!loading && weatherData && (
          <div style={{ display: "flex" }}>
            <WeatherCard
              type="Temperature"
              info={`${weatherData.current.temp_c}°C`}
            />
            <WeatherCard
              type="Humidity"
              info={`${weatherData.current.humidity}%`}
            />
            <WeatherCard
              type="Condition"
              info={weatherData.current.condition.text}
            />
            <WeatherCard
              type="Wind Speed"
              info={`${weatherData.current.wind_kph} kph`}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f8ff",
      }}
    >
      <SearchSection onChangeCity={handleSearch} />
      <WeatherDisplay city={city} />
    </div>
  );
}

export default App;
