import React, { useEffect, useState } from "react";
import "./Titles.css";

export default function Titles({ weather }) {
  const [time, setTime] = useState("11:45");
  const [date, setDate] = useState("Sunday, 22.06.2022");
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const checkZero = (number) => {
    number = number.toString();
    while (number.length < 2) number = "0" + number;
    return number;
  };

  const showCurrentDate = () => {
    let currentTime = new Date();
    let day = days[currentTime.getDay()];
    let number = currentTime.getDate();
    let month = currentTime.getMonth() + 1;
    let year = currentTime.getFullYear();

    day = checkZero(day);
    month = checkZero(month);

    setDate(`${day}, ${number}.${month}.${year}`);
  };

  const showCurrentTime = () => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    hours = checkZero(hours);
    minutes = checkZero(minutes);
    let time = `${hours}:${minutes}`;

    setTime(time);
  };

  useEffect(() => {
    showCurrentTime();
    showCurrentDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weather]);

  return (
    <div className="Titles">
      <h2 className="title_0" id="city">
        {weather.city}
      </h2>
      <h2 className="title_1">
        Last update: <span id="time">{time}</span>
      </h2>
      <h3 className="title_2" id="date">
        {date}
      </h3>
    </div>
  );
}
