import React from "react";
import BudgetEdit from "./Components/BudgetEdit";

const BudgetsHome = () => {
  return (
    <>
      <section className="box-container grid grid-cols-3 gap-5 mb-8">
        <BudgetEdit
          title="Daily Budgets"
          storageKey="daily-budget"
          initialBudget={4600.89}
          spent={3867.51}
        />
        <BudgetEdit
          title="Weekly Budgets"
          storageKey="weekly-budget"
          initialBudget={14620.76}
          spent={9867.51}
        />
        <BudgetEdit
          title="Monthly Budgets"
          storageKey="monthly-budget"
          initialBudget={40490.0}
          spent={13867.51}
        />
      </section>
    </>
  );
};

export default BudgetsHome;
