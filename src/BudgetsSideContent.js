import React from "react";
import Piechart from "./Piechart";
import "./budget.css";

const BudgetsSideContent = () => {
  return (
    <>
      {/* <Piechart /> */}

      <section className="budgets-spent-section">
        <div className="payment-heading">
          <h1 className="font-extrabold text-yellow-600">Top 4 Most Spent</h1>
        </div>
        <ul className="">
          <li className="">
            <h2>
              <h3>Data Subscription</h3>
              <p>$7,000.00 more than the budget</p>{" "}
            </h2>

            <h4>$11,420.00</h4>
          </li>

          <li className="">
            <h2>
              <h3>Data Subscription</h3>
              <p>$7,000.00 more than the budget</p>{" "}
            </h2>

            <h4>$11,420.00</h4>
          </li>

          <li className="">
            <h2>
              <h3>Online Shopping</h3>
              <p>$7,000.00 more than the budget</p>{" "}
            </h2>

            <h4>$31,500.68</h4>
          </li>

          <li className="">
            <h2>
              <h3>Food</h3>
              <p>$7,000.00 more than the budget</p>{" "}
            </h2>

            <h4>$10,000.00</h4>
          </li>

          {/* <li className="">
            <h2>
              <h3>Interior Designing</h3>
              <p>September 5th 2024</p>{" "}
            </h2>

            <h4>$29,500.59</h4>
          </li> */}
        </ul>
      </section>
    </>
  );
};

export default BudgetsSideContent;
