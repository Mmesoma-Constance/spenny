import React, { useState } from "react";
import "./goals.css";
import { NavLink } from "react-router-dom";
import SettingInfoEdit from "./SettingInfoEdit";
import ProfilePhoto from "./ProfilePhoto";

const SettingHome = () => {
  // Retrieve stored profile data
  const [profile, setProfile] = useState(() => ({
    firstName: localStorage.getItem("userFirstName") || "Mmesoma",
    lastName: localStorage.getItem("userLastName") || "Constance",
    username: localStorage.getItem("userName") || "Stacy",
    email: localStorage.getItem("userEmail") || "example@gmail.com",
  }));

  const [isEditing, setIsEditing] = useState(false);

  // Function to update profile
  const handleSave = (newProfile) => {
    setProfile(newProfile);
    localStorage.setItem("userFirstName", newProfile.firstName);
    localStorage.setItem("userLastName", newProfile.lastName);
    localStorage.setItem("userName", newProfile.username);
    localStorage.setItem("userEmail", newProfile.email);
    setIsEditing(false);
  };

  return (
    <>
      <section className="setting-personal-information">
        <ProfilePhoto />

        {isEditing ? (
          <SettingInfoEdit
            profile={profile}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <section className="mt-6">
            <div className="border-2 p-5 rounded-md">
              <div className="flex justify-between">
                <h2 className="font-semibold text-xl">Personal Information</h2>
                <h2 className="text-base cursor-pointer border-2 border-yellow-600 p-1 px-5 rounded-full">
                  <button onClick={() => setIsEditing(true)}>Edit</button>
                </h2>
              </div>

              <ul className="mt-4 grid grid-cols-2 gap-8">
                <li>
                  <h4 className="opacity-80 text-base">First Name</h4>
                  <h2>{profile.firstName}</h2>
                </li>
                <li>
                  <h4 className="opacity-80 text-base">Last Name</h4>
                  <h2>{profile.lastName}</h2>
                </li>
                <li>
                  <h4 className="opacity-80 text-base">Username</h4>
                  <h2>{profile.username}</h2>
                </li>
                <li>
                  <h4 className="opacity-80 text-base">Email</h4>
                  <h2>{profile.email}</h2>
                </li>
              </ul>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default SettingHome;
