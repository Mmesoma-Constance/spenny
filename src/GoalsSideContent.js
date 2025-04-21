import React, { useState } from "react";
import "./goals.css";
import GoalInvestModal from "./Modals/GoalInvestModal";

const GoalsSideContent = () => {
  const [isGoalInvestModalOpen, setIsGoalInvestModalOpen] = useState(false);
  return (
    <>
      <section className="savings-container">
        <div className="flex justify-between items-center pb-8">
          <div className="">
            <h1 className="font-semibold text-[19px]">Total Savings</h1>
            <h2 className="text-3xl font-bold">$64,950.00</h2>{" "}
          </div>
          <button
            onClick={() => setIsGoalInvestModalOpen(true)}
            className="bg-[gold] p-2 px-5 text-[brown] font-bold w-fit rounded-lg hover:bg-opacity-85"
          >
            Invest In Goal
          </button>
        </div>

        {/* Payments Modal */}
        {isGoalInvestModalOpen && (
          <GoalInvestModal
            isOpen={isGoalInvestModalOpen}
            onClose={() => setIsGoalInvestModalOpen(false)}
          />
        )}
        <ul className="grid grid-cols-4 gap-5 justify-between text-center items-center">
          <div class="goals-circle-container">
            <div class="goals-circle"></div>
            <div class="goals-circle-text">
              <h2> 23% </h2>
            </div>
          </div>
          <li className="bg-gray-200 p-4 px-8 cursor-pointer rounded-lg font-semibold">
            <h2 className="text-[18px]">Total Goals</h2>

            <h4 className="text-[25px] font-bold">15</h4>
          </li>
          <li className="bg-gray-200 p-4 px-8 cursor-pointer rounded-lg font-semibold">
            <h2 className="text-[18px]">Current Goals</h2>

            <h4 className="text-[25px] font-bold">4</h4>
          </li>
          <li className="bg-gray-200 p-4 px-8 cursor-pointer rounded-lg font-semibold">
            <h2 className="text-[18px]">Completed Goals</h2>

            <h4 className="text-[25px] font-bold">11</h4>
          </li>
          {/* <li className="bg-gray-200 p-4 px-8 cursor-pointer rounded-lg font-semibold">
            <h2 className="text-[18px]"> Goals Achieved</h2>

            <h4 className="text-[25px] font-bold">$28,530.87</h4>
          </li>
        
          <li className="bg-gray-200 p-4 px-8 cursor-pointer rounded-lg font-semibold">
            <h2 className="text-[18px]">
              Goals  Target
            </h2>

            <h4 className="text-[25px] font-bold">$108,200.78</h4>
          </li>  */}
        </ul>
      </section>
    </>
  );
};

export default GoalsSideContent;
