import React, { useEffect, useState } from "react";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  //   const formattedTime = currentTime.toLocaleDateString("en-US", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit",
  //     hour12: true,

  //     // return: `${hour}:${minute}:${second} ${hour12}`,
  //   });

  const formattedTime = () => {
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    const meridiem = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    return `${padZero(hour)}:${padZero(minute)}:${padZero(
      second
    )} ${meridiem} `;
  };

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div>
      <span>{formattedTime()}</span>
    </div>
  );
};

export default CurrentTime;
