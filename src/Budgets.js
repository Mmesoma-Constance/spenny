import React from "react";

import BudgetsHome from "./BudgetsHome";
import BudgetsSideContent from "./BudgetsSideContent";

import "./budget.css";
import Piechart from "./Piechart";
import Graph1 from "./Graph1";
import BudgetsTableContent from "./BudgetsTableContent";

const Budgets = () => {
  return (
    <>
      {/* <div className="budgets-content-area mt-[80px]">
        <BudgetsSideContent />
        <div className="flex gap-5">
          <BudgetsHome />
          <Piechart />
        </div>
      </div> */}

      <div className="budgets-content-area">
        <BudgetsHome />{" "}
        <div className="subscribe-flex-area ">
          <div className="budgets-content">
            <Piechart />
          </div>
          <div className="budgets-side-content">{<BudgetsSideContent />}</div>
        </div>{" "}
        <BudgetsTableContent />{" "}
      </div>
    </>
  );
};

export default Budgets;
