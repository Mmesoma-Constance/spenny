import React from "react";

const BudgetsHome = () => {
  return (
    <>
      <section className="box-container grid grid-cols-4 gap-5 mb-8">
        <div className="total-box">
          <h2 className="box-title">Daily Budgets</h2>
          <h1 className="number">$5,600.89</h1>
          <p className="text-base">Spent: $3,930.88</p>
          <div className="daily-budget-progress-container">
            <div className="daily-budget-progress"></div>
          </div>
        </div>
        <div className="total-box">
          <h2 className="box-title">Weekly Budgets</h2>
          <h1 className="number">$17,000.77</h1>
          <p className="text-base">Spent: $10,520.00</p>
          <div className="weekly-budget-progress-container">
            <div className="weekly-budget-progress"></div>
          </div>
        </div>
        <div className="total-box">
          <h2 className="box-title">Monthly Budgets</h2>
          <h1 className="number">$40,670.00</h1>
          <p className="text-base">Spent: $13,000.69</p>
          <div className="monthly-budget-progress-container">
            <div className="monthly-budget-progress"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BudgetsHome;
