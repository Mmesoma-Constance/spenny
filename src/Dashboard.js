import React from "react";
import HomeContent from "./HomeContent";
import SideContent from "./SideContent";

const Dashboard = () => {
  return (
    <>
      <div className="content-area">
        <div className="content">
          <HomeContent />
        </div>

        <div className="side-content">
          <SideContent />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
