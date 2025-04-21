import React, { useState, useEffect } from "react";
import CurrentTime from "./CurrentTime";
import CurrentDate from "./CurrentDate";
import defaultProfile from "./people (9).jpg";
import fmAvatar1 from "./Modals/avatar-imgs/fm-avatars (1).png";
import fmAvatar2 from "./Modals/avatar-imgs/fm-avatars (2).png";
import fmAvatar3 from "./Modals/avatar-imgs/fm-avatars (4).png";
import fmAvatar4 from "./Modals/avatar-imgs/fm-avatars (7).png";
import mAvatar1 from "./Modals/avatar-imgs/m-avatars (2).png";
import mAvatar2 from "./Modals/avatar-imgs/m-avatars (3).png";
import mAvatar3 from "./Modals/avatar-imgs/m-avatars (4).png";
import mAvatar4 from "./Modals/avatar-imgs/m-avatars (5).png";

const avatars = [
  fmAvatar1,
  fmAvatar2,
  fmAvatar3,
  fmAvatar4,
  mAvatar1,
  mAvatar2,
  mAvatar3,
  mAvatar4,
];

export const TopNav = () => {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || defaultProfile
  );

  useEffect(() => {
    const syncData = () => {
      setUserName(localStorage.getItem("userName") || "");
      setProfileImage(localStorage.getItem("profileImage") || defaultProfile);
    };

    window.addEventListener("storage", syncData);

    return () => {
      window.removeEventListener("storage", syncData);
    };
  }, []);

  const date = new Date();
  const time = date.getHours();
  const greetingMsg =
    time < 12 ? "Good Morning" : time < 16 ? "Good Afternoon" : "Good Evening";

  // ✅ Check if the profileImage is an avatar
  const isAvatar = avatars.includes(profileImage);

  return (
    <div className="header-container topNav">
      <header>
        <h1 className="welcome-msg">
          {greetingMsg} {userName}
        </h1>
        <h2 className="text-lg">Welcome back!</h2>
      </header>
      <div className="profile-container">
        <div>
          <h3 className="date">
            <CurrentDate />
          </h3>
          <h3 className="time text-right self-end">
            <CurrentTime />
          </h3>
        </div>
        <img
          src={profileImage}
          alt="Profile"
          className={`profile shadow-xl rounded-full w-14 h-14 object-cover border-2 border-yellow-600 ${
            isAvatar ? "pt-1" : ""
          }`}
        />
      </div>
    </div>
  );
};
