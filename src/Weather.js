import React, { useState } from "react";
import axios from "axios";
import LoadingIcons from "react-loading-icons";

import "./Weather.css";
import WeatherData from "./WeatherData.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState(null);
  let [city, setCity] = useState(props.defaultCity);

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

  function handleClickCurrentLocation(event) {
    event.preventDefault();
    function showPosition(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiKey = "96771e971243152d6b8948878c26adde";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

      axios.get(apiUrl).then(handleResponse);
    }
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function handleClickParis(event) {
    event.preventDefault();
    city = "paris";
    search(city);
  }

  function handleClickTokyo(event) {
    event.preventDefault();
    city = "tokyo";
    search(city);
  }

  function handleClickSydney(event) {
    event.preventDefault();
    city = "sydney";
    search(city);
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
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div id="react-weather-app">
        <WeatherData data={data} />
        <Forecast data={data} />

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
                <li id="current-location" onClick={handleClickCurrentLocation}>
                  Current Location
                </li>
                <li onClick={handleClickParis}>Paris</li>
                <li onClick={handleClickTokyo}>Tokyo</li>
                <li onClick={handleClickSydney}>Sydney</li>
              </ul>
            </span>
          </div>
        </div>

        <Footer />
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
