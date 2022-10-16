import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingIcons from "react-loading-icons";

import ForecastDay from "./ForecastDay";

export default function Forecast({ data }) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [data]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div id="forecast">
        {forecast.map(function (dailyForecast, index) {
          if (index > 0 && index < 7) {
            return (
              <div className="iconGroup" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const source = `https://api.openweathermap.org/data/2.5/onecall?`;
    let lat = data.lat;
    let lon = data.lon;
    const key = `96771e971243152d6b8948878c26adde`;
    let unit = `imperial`;
    let url = `${source}lat=${lat}&lon=${lon}&appid=${key}&units=${unit}`;
    axios.get(url).then(handleResponse);

    return (
      <div className="loading">
        <LoadingIcons.TailSpin stroke="#4b9edf" />
      </div>
    );
  }
}
