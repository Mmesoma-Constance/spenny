import React from "react";
import profile from "./people (9).jpg";
import CurrentTime from "./CurrentTime";
import CurrentDate from "./CurrentDate";

export const TopNav = () => {
  const userName = localStorage.getItem("userName");

  const date = new Date();
  const time = date.getHours();
  let greetingMsg;
  if (time >= 0 && time < 12) {
    greetingMsg = "Good Morning";
  } else if (time >= 12 && time < 16) {
    greetingMsg = "Good Afternoon";
  } else {
    greetingMsg = "Good Evening";
  }

  return (
    <div className="header-container topNav">
      <header>
        <h1 className="welcome-msg">
          {greetingMsg}, {userName}
        </h1>
        <h2 className=" text-lg">Welcome back!</h2>{" "}
      </header>
      <div className="profile-container">
        <div className="">
          <h3 className="date">
            <CurrentDate />
          </h3>
          <h3 className="time text-right self-end">
            <CurrentTime />
          </h3>
        </div>
        <img src={profile} alt="" className="profile" />{" "}
      </div>
    </div>
  );
};
