import React, { useState } from "react";
import axios from "axios";
import LoadingIcons from "react-loading-icons";
import IconGroup from "./IconGroup.js";

import "./Weather.css";
import WeatherData from "./WeatherData.js";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState(null);
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const source = `https://api.openweathermap.org/data/2.5/weather?`;
    const key = `3a94f3778290bfeee61278505dbbe51d`;
    let unit = `imperial`;
    let url = `${source}q=${city}&appid=${key}&units=${unit}`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setData({
      icon: response.data.weather[0].icon,
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
      <div id="react-weather-app">
        <WeatherData data={data} />
        <div id="forecast">
          <IconGroup day="Thu" icon="media/clear-day.svg" high="88" low="75" />
          <IconGroup day="Fri" icon="media/rain.svg" high="74" low="54" />
          <IconGroup
            day="Sat"
            icon="media/few-clouds-day.svg"
            high="65"
            low="60"
          />
          <IconGroup day="Sun" icon="media/thunder.svg" high="56" low="44" />
          <IconGroup day="Mon" icon="media/mist.svg" high="45" low="30" />
          <IconGroup day="Tue" icon="media/snow.svg" high="32" low="19" />
        </div>

        <div className="bottomRow">
          <form id="form" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter City Here"
              id="search-form"
              autoComplete="off"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" id="change-city" />
          </form>
          <div className="quickLookup">
            ex.
            <span className="cities">
              <ul>
                <li id="current-location">Current Location</li>
                <li id="paris">Paris</li>
                <li id="tokyo">Tokyo</li>
                <li id="sydney">Sydney</li>
              </ul>
            </span>
          </div>
        </div>

        <div className="footer">
          <p>
            <a
              href="https://github.com/reeserosedesign/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open Source Code
            </a>{" "}
            by{" "}
            <a
              href="https://www.reeserosedesign.com"
              target="_blank"
              rel="noreferrer"
            >
              Reese Rose
            </a>
          </p>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="loading">
        <LoadingIcons.TailSpin stroke="#4b9edf" />
      </div>
    );
  }
}
