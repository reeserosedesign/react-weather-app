import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("imperial");

  function convertMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <div className="currentWeather">
        <h1>
          <span id="current-temp">{props.temp}</span>°
        </h1>
        <span id="unit">
          <a href="/" id="fahrenheit" className="active">
            F
          </a>{" "}
          |
          <a href="/" id="celsius" onClick={convertMetric}>
            C
          </a>
        </span>
        <ul>
          <li>
            <span id="temp-high" className="tempHigh">
              {props.tempHigh}
            </span>
            <strong>° </strong>
            <span id="temp-low">{props.tempLow}</span>°
          </li>
          <li>
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind-speed">{props.wind}</span>
            <span id="wind-speed-unit">mph</span>
          </li>
        </ul>
      </div>
    );
  }

  if (unit === "metric") {
    return (
      <div className="currentWeather">
        <h1>
          <span id="current-temp">
            {Math.round(((props.temp - 32) * 5) / 9)}
          </span>
          °
        </h1>
        <span id="unit">
          <a href="/" id="fahrenheit" onClick={convertImperial}>
            F
          </a>{" "}
          |
          <a href="/" id="celsius" className="active">
            C
          </a>
        </span>
        <ul>
          <li>
            <span id="temp-high" className="tempHigh">
              {Math.round(((props.tempHigh - 32) * 5) / 9)}
            </span>
            <strong>° </strong>
            <span id="temp-low">
              {Math.round(((props.tempLow - 32) * 5) / 9)}
            </span>
            °
          </li>
          <li>
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind-speed">{Math.round(props.wind * 1.609)}</span>
            <span id="wind-speed-unit">km/h</span>
          </li>
        </ul>
      </div>
    );
  }
}
