import React from "react";

export default function Icon(props) {
  const iconMapping = {
    "01d": "media/clear-day.svg",
    "01n": "media/clear-night.svg",
    "02d": "media/few-clouds-day.svg",
    "02n": "media/clear-night.svg",
    "03d": "media/cloudy.svg",
    "03n": "media/cloudy.svg",
    "04d": "media/cloudy.svg",
    "04n": "media/cloudy.svg",
    "09d": "media/rain.svg",
    "09n": "media/rain.svg",
    "10d": "media/rain.svg",
    "10n": "media/rain.svg",
    "11d": "media/thunder.svg",
    "11n": "media/thunder.svg",
    "13d": "media/snow.svg",
    "13n": "media/snow.svg",
    "50d": "media/mist.svg",
    "50n": "media/mist.svg",
  };

  return (
    <img src={iconMapping[props.src]} alt={props.alt} width={props.size} />
  );
}
