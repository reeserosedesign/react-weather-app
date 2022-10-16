import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherData(props) {
  return (
    <div className="topRow">
      <div className="currentWeather">
        <img
          src={props.data.icon}
          alt={props.data.iconDescription}
          id="weather-icon"
          width="96px"
        />
        <h1>
          <span id="current-temp">{props.data.temperature}</span>°
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
              {props.data.high}
            </span>
            <strong>° </strong>
            <span id="temp-low">{props.data.low}</span>°
          </li>
          <li>
            Humidity: <span id="humidity">{props.data.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind-speed">{props.data.wind}</span>
            <span id="wind-speed-unit">mph</span>
          </li>
        </ul>
      </div>

      <div className="location">
        <h2>
          <span id="weather-description">{props.data.description}</span> in{" "}
          <span id="city">{props.data.name}</span>
        </h2>
        <p id="date-time">
          <FormattedDate date={props.data.date} />
        </p>
      </div>
    </div>
  );
}
