import React from "react";

export default function IconGroup({ day }) {
  return (
    <div className="iconGroup">
      <h3 className="day">{day}</h3>
      <div className="icon">
        <img
          src="clear-day.svg"
          id="forecast-weather-icon"
          alt=""
          width="64px"
        />
      </div>
      <p>
        <span className="tempHigh forecast-temp-high">88</span>
        <strong>°</strong> <span className="tempLow forecast-temp-low">75</span>
        °
      </p>
    </div>
  );
}
