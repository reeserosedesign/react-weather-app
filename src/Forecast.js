import React from "react";
import "./Forecast.css";
import IconGroup from "./IconGroup";

export default function Forecast() {
  return (
    <div id="forecast">
      <IconGroup day="Thu" icon="clear-day.svg" high="88" low="75" />
      <IconGroup day="Fri" icon="rain.svg" high="74" low="54" />
      <IconGroup day="Sat" icon="few-clouds-day.svg" high="65" low="60" />
      <IconGroup day="Sun" icon="thunder.svg" high="56" low="44" />
      <IconGroup day="Mon" icon="mist.svg" high="45" low="30" />
      <IconGroup day="Tue" icon="snow.svg" high="32" low="19" />
    </div>
  );
}
