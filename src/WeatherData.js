import React from "react";
import FormattedDate from "./FormattedDate.js";
import Icon from "./Icon.js";
import Temperature from "./Temperature.js";

export default function WeatherData(props) {
  return (
    <div className="topRow">
      <div className="currentWeather">
        <Icon
          src={props.data.icon}
          alt={props.data.iconDescription}
          size={96}
        />
        <Temperature
          temp={props.data.temperature}
          tempHigh={props.data.high}
          tempLow={props.data.low}
          humidity={props.data.humidity}
          wind={props.data.wind}
        />
      </div>

      <div className="location">
        <h2>
          <span id="weather-description">{props.data.description}</span> in{" "}
          <span id="city">{props.data.name}</span>
        </h2>
        <h3 id="date-time">
          <FormattedDate date={props.data.date} />
        </h3>
      </div>
    </div>
  );
}
