import React from "react";
import AnalysisTopExpenses from "./AnalyticsTopExpenses";
import MiniGraphData from "./MiniGraphData";

const AnalyticsHome = () => {
  return (
    <>
      <section className="mt-5 flex gap-5">
        <div className="flex flex-col gap-4">
          <div className="bg-red-500 p-10 py-8 text-white text-xl  rounded-xl w-[290px] font-semibold">
            <h1>Total Net Worth</h1>
            <h3 className="text-3xl font-bold">$267,900.00</h3>
          </div>{" "}
          <div className="income-source w-[290px]">
            <h1 className=" font-semibold text-xl">Income Source</h1>
            <h3 className="text-xl font-bold pt-1">$267,900.00</h3>
            <p className="text-[15px] pt-1 pb-4">3.5% up last 30 days</p>
            <ul className="flex gap-5 items-end justify-between">
              <li className="flex flex-col gap-2 justify-center items-center">
                <h2>$12,000.00</h2>
                <div className="income-height1"></div>
                <h4>E-commerce</h4>
              </li>
              <li className="flex flex-col gap-2 justify-center items-center">
                <h2>$23,000.00</h2>
                <div className="income-height2"></div>
                <h4>Salary</h4>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <MiniGraphData />
        </div>
      </section>

      <section className="analytics-top-expenses w-full">
        <h1 className="text-[22px] font-bold pb-2">Top 5 Expenses</h1>

        <div className=" flex">
          <ul className=" right-0 flex flex-col items-end p-4 w-[35%] gap-2">
            <li className="">Rent</li>
            <li className="">Entertainment</li>
            <li className="">Shopping</li> <li className="">Rent</li>
            <li className="">Entertainment</li>
          </ul>

          <ul className="py-4 w-[55%] flex flex-col gap-2">
            <li className="flex gap-3">
              <div className="bg-purple-700 h-6 w-[75%]"></div>
              <span className="font-semibold">$12,000.00</span>
            </li>{" "}
            <li className="flex gap-3">
              <div className="bg-purple-700 h-6 w-[60%]"></div>
              <span className="font-semibold">$12,000.00</span>
            </li>{" "}
            <li className="flex gap-3">
              <div className="bg-purple-700 h-6 w-[50%]"></div>
              <span className="font-semibold">$12,000.00</span>
            </li>{" "}
            <li className="flex gap-3">
              <div className="bg-purple-700 h-6 w-[35%]"></div>
              <span className="font-semibold">$12,000.00</span>
            </li>{" "}
            <li className="flex gap-3">
              <div className="bg-purple-700 h-6 w-[20%]"></div>
              <span className="font-semibold">$12,000.00</span>
            </li>{" "}
          </ul>
        </div>

        {/* <AnalysisTopExpenses /> */}
      </section>
    </>
  );
};

export default AnalyticsHome;
