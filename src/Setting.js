import React, { useState } from "react";
import "./Setting.css";

import SettingLinks from "./SettingLinks";
import SettingHome from "./SettingHome";
import SettingInfoEdit from "./SettingInfoEdit";
import SettingPassword from "./SettingPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <>
      <div className="setting-content-area">
        <div className="setting-content">
          <SettingLinks setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>

        <div className="setting-side-content">
          {activeTab === "profile" ? <SettingHome /> : <SettingPassword />}
        </div>
      </div>
    </>
  );
};
export default Setting;
