import React from "react";

export default function FormattedDate(props) {
  let now = new Date();
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[props.date.getDay()];
  let months = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let hour = now.getHours();
  let meridian = `AM`;

  if (hour < 12) {
    meridian = `AM`;
  } else {
    meridian = `PM`;
  }

  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour === 0) {
    hour = "12";
  }

  let minute = now.getMinutes();

  if (minute < 10) {
    minute = "0" + minute;
  }

  let time = `${hour}:${minute} ${meridian}`;
  let fullDate = `${day}, ${month} ${date}`;

  return `${time} on ${fullDate}`;
}
