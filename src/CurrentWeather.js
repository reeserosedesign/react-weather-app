import React, { useState } from "react";
import "./CurrentWeather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";

export default function CurrentWeather(props) {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState(null);

  function handleResponse(response) {
    setData({
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      iconDescription: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="topRow">
        <div className="currentWeather">
          <img
            src={data.icon}
            alt={data.iconDescription}
            id="weather-icon"
            width="96px"
          />
          <h1>
            <span id="current-temp">{data.temperature}</span>°
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
                {data.high}
              </span>
              <strong>° </strong>
              <span id="temp-low">{data.low}</span>°
            </li>
            <li>
              Humidity: <span id="humidity">{data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind-speed">{data.wind}</span>
              <span id="wind-speed-unit">mph</span>
            </li>
          </ul>
        </div>

        <div className="location">
          <h2>
            <span id="weather-description">{data.description}</span> in{" "}
            <span id="city">{data.name}</span>
          </h2>
          <p id="date-time">
            <FormattedDate date={data.date} />
          </p>
        </div>
      </div>
    );
  } else {
    const source = `https://api.openweathermap.org/data/2.5/weather?`;
    const key = `3a94f3778290bfeee61278505dbbe51d`;
    let unit = `imperial`;
    let url = `${source}q=${props.defaultCity}&appid=${key}&units=${unit}`;
    axios.get(url).then(handleResponse);

    return `Loading...`;
  }
}
