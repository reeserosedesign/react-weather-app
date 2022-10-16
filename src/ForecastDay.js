import React from "react";
import Icon from "./Icon";

export default function ForecastDay({ data }) {
  let tempHigh = Math.round(data.temp.max);
  let tempLow = Math.round(data.temp.min);
  let src = data.weather[0].icon;
  let alt = data.weather[0].description;

  function formattedDate() {
    let date = new Date(data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();

    return days[day];
  }

  return (
    <div className="iconGroup">
      <h3 className="day">{formattedDate()}</h3>
      <Icon src={src} alt={alt} />
      <p>
        <span className="tempHigh forecast-temp-high">{tempHigh}</span>
        <strong>°</strong>{" "}
        <span className="tempLow forecast-temp-low">{tempLow}</span>°
      </p>
    </div>
  );
}
