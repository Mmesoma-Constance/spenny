import React from "react";

const GoalsHomeContent = () => {
  return (
    <>
      <section className="goals-container">
        <div className="goals-heading">
          <h1>My Goals</h1>
          <button>Add</button>
        </div>
        <div className="activity">
          <ul className="goals-progress">
            <li className="">
              <h2>
                <h3>Vacation</h3>
                <p>$5,000 / $17,000</p>
              </h2>
              <button className="text-red-700 font-bold text-[15px]">
                Withdraw
              </button>
              <button className="text-red-700 font-bold text-[15px]">
                Remove
              </button>
            </li>
            <div className="travel-progress-container">
              <div className="travel-progress">
                <h4 className="font-semibold">20%</h4>
              </div>
            </div>
            <li className="">
              <h2>
                <h3>iPhone 15 </h3>
                <p>$10,000 / $32,000</p>
              </h2>

              <button className="text-red-700 font-bold text-[15px]">
                Withdraw
              </button>
              <button className="text-red-700 font-bold text-[15px]">
                Remove
              </button>
            </li>
            <div className="iphone-progress-container">
              <div className="iphone-progress">
                {" "}
                <h4 className="font-semibold">43%</h4>
              </div>
            </div>
            <li className="">
              <h2>
                <h3>Macbook Pro</h3>
                <p>$12,000 / $40,000</p>
              </h2>

              <button className="text-red-700 font-bold text-[15px]">
                Withdraw
              </button>
              <button className="text-red-700 font-bold text-[15px]">
                Remove
              </button>
            </li>
            <div className="macbook-progress-container">
              <div className="macbook-progress">
                <h4 className="font-semibold">14%</h4>
              </div>
            </div>
            <li className="">
              <h2>
                <h3>Car</h3>
                <p>$5,000 / $53,000</p>
              </h2>

              <button className="text-red-700 font-bold text-[15px]">
                Withdraw
              </button>
              <button className="text-red-700 font-bold text-[15px]">
                Remove
              </button>
            </li>
            <div className="car-progress-container">
              <div className="car-progress">
                <h4 className="font-semibold">8%</h4>
              </div>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};

export default GoalsHomeContent;
