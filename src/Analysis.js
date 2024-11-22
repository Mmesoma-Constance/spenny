import React from "react";
import GoalsHomeContent from "./GoalsHomeContent";
import GoalsSideContent from "./GoalsSideContent";
import AnalyticsSideContent from "./AnalyticsSideContent";
import AnalyticsHome from "./AnalyticsHome";

const Analysis = () => {
  return (
    <>
      <div className="analytics-content-area">
        <div className="analytics-content">
          <AnalyticsHome />
        </div>

        <div className="analytics-side-content">
          <AnalyticsSideContent />
        </div>
      </div>
    </>
  );
};

export default Analysis;
