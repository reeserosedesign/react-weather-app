import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let currentWeatherData = {
    city: "Los Angeles",
    temperature: 88,
    date: "12:00 PM on Wednesday, September 28",
    description: "Clear Sky",
    icon: "clear-day.svg",
    high: 105,
    low: 74,
    humidity: 48,
    wind: 14,
  };

  return (
    <div className="topRow">
      <div className="currentWeather">
        <img
          src={currentWeatherData.icon}
          alt=""
          id="weather-icon"
          width="96px"
        />
        <h1>
          <span id="current-temp">{currentWeatherData.temperature}</span>°
        </h1>
        <span id="unit">
          <a href="/" id="fahrenheit" className="active">
            F
          </a>{" "}
          |
          <a href="/" id="celsius">
            C
          </a>
        </span>
        <ul>
          <li>
            <span id="temp-high" className="tempHigh">
              {currentWeatherData.high}
            </span>
            <strong>° </strong>
            <span id="temp-low">{currentWeatherData.low}</span>°
          </li>
          <li>
            Humidity: <span id="humidity">{currentWeatherData.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind-speed">{currentWeatherData.wind}</span>
            <span id="wind-speed-unit">mph</span>
          </li>
        </ul>
      </div>

      <div className="location">
        <h2>
          <span id="weather-description">{currentWeatherData.description}</span>{" "}
          in <span id="city">{currentWeatherData.city}</span>
        </h2>
        <h3 id="date-time">{currentWeatherData.date}</h3>
      </div>
    </div>
  );
}
