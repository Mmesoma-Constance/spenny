import React from "react";
import "./goals.css";

const GoalsSideContent = () => {
  return (
    <>
      <section className="savings-container">
        <div className="flex justify-between items-center pb-8">
          <div className="">
            <h1 className="font-semibold text-[19px]">Total Savings</h1>
            <h2 className="text-3xl font-bold">$64,950.00</h2>{" "}
          </div>
          <button className="bg-[gold] p-2 px-5 text-[brown] font-bold w-fit rounded-lg hover:bg-opacity-85">
            Invest Now
          </button>
        </div>

        <ul className="flex justify-between text-center items-center">
          <div class="goals-circle-container">
            <div class="goals-circle"></div>
            <div class="goals-circle-text">
              <h2> 23% </h2>
              {/* <span>Spent</span> */}
            </div>
          </div>{" "}
          <li className=" font-semibold">
            <h2 className="text-[18px]">Total Goals</h2>

            <h4 className="text-[25px] font-bold">4</h4>
          </li>
          <li className=" font-semibold">
            <h2 className="text-[17px]">
              Goals <br /> Achieved
            </h2>

            <h4 className="text-[22px] font-bold">$36,560.00</h4>
          </li>
          <li className=" font-semibold">
            <h2 className="text-[17px]">
              Goals <br /> Target
            </h2>

            <h4 className="text-[22px] font-bold">$108,200.78</h4>
          </li>
        </ul>
      </section>

      <section className="payment-section">
        <div className="payment-heading">
          <h1 className="font-semibold">Completed Goals</h1>
        </div>
        <ul className="">
          <li className="">
            <h2>
              <h3>Family Trip</h3>
              <p>August 5th 2024</p>{" "}
            </h2>

            <h4>$11,420.00</h4>
          </li>

          <li className="">
            <h2>
              <h3>TV</h3>
              <p>August 12th 2024</p>{" "}
            </h2>

            <h4>$31,500.68</h4>
          </li>

          <li className="">
            <h2>
              <h3>Microwave</h3>
              <p>August 27th 2024</p>{" "}
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

export default GoalsSideContent;
