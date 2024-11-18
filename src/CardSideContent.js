import React from "react";

const CardSideContent = () => {
  return (
    <>
      <section className="circle-div">
        <h1>Activity</h1>
        <div class="circle-container">
          <div class="circle"></div>
          <div class="circle-text">
            <h2> $6,800.27 </h2>
            <span>Spent</span>
          </div>
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
      </section>
    </>
  );
};

export default CardSideContent;
