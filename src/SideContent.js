import React from "react";
import profile from "./people (9).jpg";
import "./sideContent.css";

const SideContent = () => {
  return (
    <>
      <section className="payment-section">
        <div className="payment-heading">
          <h1>Next Payment</h1>
          <button>Add</button>
        </div>
        <ul className="">
          <li className="">
            <h2>
              <h3>Netfix Subscription</h3>
              <p>August 5th 2024</p>{" "}
            </h2>

            <h4>$1,420.00</h4>
          </li>

          <li className="">
            <h2>
              <h3>Electricity Bill</h3>
              <p>August 12th 2024</p>{" "}
            </h2>

            <h4>$3,500.68</h4>
          </li>

          <li className="">
            <h2>
              <h3>Student Loan</h3>
              <p>August 27th 2024</p>{" "}
            </h2>

            <h4>$10,000.00</h4>
          </li>

          <li className="">
            <h2>
              <h3>Gym Membership</h3>
              <p>September 5th 2024</p>{" "}
            </h2>

            <h4>$2,500.59</h4>
          </li>
        </ul>
      </section>

      <section className="transaction">
        <h1>Quick Transaction</h1>
        <div className="img-container">
          <div className="">
            <img src={profile} alt="" className="img" />
            <p>Mom</p>
          </div>{" "}
          <div className="">
            <img src={profile} alt="" className="img" />
            <p>Mom</p>
          </div>{" "}
          <div className="">
            <img src={profile} alt="" className="img" />
            <p>Mom</p>
          </div>{" "}
          <div className="">
            <img src={profile} alt="" className="img" />
            <p>Mom</p>
          </div>
        </div>

        <div className="">
          <input type="text" placeholder="$ Amount" />
          <button>Send</button>
        </div>
      </section>

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

      <section className="goals-div">
        <div className="goals-heading">
          <h1>My Goals</h1>
          <button>Add</button>
        </div>
        <div className="activity">
          <ul className="">
            <li className="">
              <h2>
                <h3>Vacation</h3>
                <p>$5,000 / $17,000</p>
              </h2>

              <h4>20%</h4>
            </li>
            <div className="travel-progress-container">
              <div className="travel-progress"></div>
            </div>
            <li className="">
              <h2>
                <h3>iPhone 15 </h3>
                <p>$10,000 / $32,000</p>
              </h2>

              <h4>43%</h4>
            </li>
            <div className="iphone-progress-container">
              <div className="iphone-progress"></div>
            </div>
            <li className="">
              <h2>
                <h3>Macbook Pro</h3>
                <p>$12,000 / $40,000</p>
              </h2>

              <h4>14%</h4>
            </li>
            <div className="macbook-progress-container">
              <div className="macbook-progress"></div>
            </div>
            <li className="">
              <h2>
                <h3>Car</h3>
                <p>$5,000 / $53,000</p>
              </h2>

              <h4>8%</h4>
            </li>
            <div className="car-progress-container">
              <div className="car-progress"></div>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideContent;
