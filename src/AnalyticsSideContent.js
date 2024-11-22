import React from "react";
import AnalyticsGraph from "./AnalyticsGraph";
import "./analytics.css";

const AnalyticsSideContent = () => {
  return (
    <>
      <div className="mt-5">
        <AnalyticsGraph />{" "}
      </div>
      <section className="analytics-circle-div py-10">
        <h1 className="font-bold text-[23px]">Activity</h1>
        <div className="flex gap-4 items-center">
          <div class="analytics-circle-container">
            <div class="analytics-circle"></div>
          </div>

          <div className="activity">
            <ul className="">
              <li className="">
                <h2 className="flex gap-2 items-center">
                  <div className="data-square"></div> <h3>Data Subscription</h3>
                </h2>

                <h4>55%</h4>
              </li>
              <li className="">
                <h2 className="flex gap-2 items-center">
                  <div className="water-square"></div> <h3>Water Bill</h3>
                </h2>

                <h4>39%</h4>
              </li>
              <li className="">
                <h2 className="flex gap-2 items-center">
                  <div className="online-square"></div> <h3>Online Shopping</h3>
                </h2>

                <h4>60%</h4>
              </li>
              <li className="">
                <h2 className="flex gap-2 items-center">
                  <div className="groceries-square"></div> <h3>Groceries</h3>
                </h2>
                <h4>45%</h4>
              </li>

              <li className="">
                <h2 className="flex gap-2 items-center">
                  <div className="home-square"></div> <h3>Home</h3>
                </h2>

                <h4>30%</h4>
              </li>
              <li className="">
                <h2 className="flex gap-2 items-center">
                  <div className="investment-square"></div> <h3>Investment</h3>
                </h2>

                <h4>27%</h4>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnalyticsSideContent;
