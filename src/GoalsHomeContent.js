import React from "react";
import GoalsEdit from "./Components/GoalsEdit";

const GoalsHomeContent = () => {
  return (
    <>
      <section className="goals-container">
        <h1 className="font-bold text-2xl pb-2 mt-7">My Current Goals</h1>
        <div className="grid grid-cols-2 gap-5 my-4">
          <GoalsEdit
            title="My Birthday Photoshoot"
            storageTitleKey="first-goal"
            storagePriceKey="1"
            initialGoalPrice={21450.89}
            saved={12867.51}
          />
          <GoalsEdit
            title="Buy Washing Machine"
            storageTitleKey="second-goal"
            storagePriceKey="2"
            initialGoalPrice={30600.77}
            saved={8867.51}
          />
          <GoalsEdit
            title="Trip to Dubai"
            storageTitleKey="Third-goal"
            storagePriceKey="3"
            initialGoalPrice={55300.0}
            saved={13867.51}
          />
          <GoalsEdit
            title="Buy New Wig"
            storageTitleKey="fourth-goal"
            storagePriceKey="4"
            initialGoalPrice={10500.42}
            saved={6867.51}
          />
        </div>
      </section>
    </>
  );
};

export default GoalsHomeContent;
