import React from "react";
import GoalsHomeContent from "./GoalsHomeContent";
import GoalsSideContent from "./GoalsSideContent";

const Goals = () => {
  return (
    <>
      <div className="goals-content-area">
     <div className="goals-side-content">
          <GoalsSideContent />
        </div>
        
           <div className="goals-content">
          <GoalsHomeContent />
        </div>

        
      </div>
    </>
  );
};

export default Goals;
