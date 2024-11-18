import React from "react";
import "./payments.css";
import CurrentDate from "./CurrentDate";

const SidePaymentContent = () => {
  return (
    <>
      <section className="transfer-section">
        <div className="text-center flex flex-col gap-2 py-5">
          <h3 className="font-semibold text-lg">Your account balance</h3>
          <h1 className="text-4xl font-bold">$42,600.77</h1>
          <p className="">
            <CurrentDate />
          </p>
        </div>

        <ul className="mt-5 flex flex-col gap-8">
          <li className="bg-gray-200 p-5 flex flex-col gap-2 rounded-lg">
            <label htmlFor="" className="font-semibold py-1 text-lg">
              Quick transfer
            </label>
            <input
              type="text"
              className="w-full p-5 pl-6 rounded-md "
              placeholder="658618395"
            />
          </li>

          <li className="bg-gray-200 p-5 flex flex-col gap-2 rounded-lg">
            <label htmlFor="" className="font-semibold py-1 text-lg">
              Amount
            </label>
            <input
              type="text"
              className="w-full p-5 pl-6 rounded-md "
              placeholder="$ Amount"
            />
          </li>

          <li className="bg-gray-200 p-5 flex flex-col gap-2 rounded-lg">
            <label htmlFor="" className="font-semibold py-1 text-lg">
              Category
            </label>
            <input
              type="text"
              className="w-full p-5 pl-6 rounded-md "
              placeholder="eg: Electricity Bill"
            />
          </li>

          <li className="bg-gray-200 p-5 flex flex-col gap-2 rounded-lg">
            <label htmlFor="" className="font-semibold py-1 text-lg">
              Name
            </label>
            <input
              type="text"
              className="w-full p-5 pl-6 rounded-md "
              placeholder="Recipient Name"
            />
          </li>

          <li className="bg-gray-200 p-5 flex flex-col gap-2 rounded-lg">
            <label htmlFor="" className="font-semibold py-1 text-lg">
              Bank
            </label>
            <input
              type="text"
              className="w-full p-5 pl-6 rounded-md "
              placeholder="Recipient Bank"
            />
          </li>

          <button className="bg-[gold] text-[brown] p-3 font-bold text-lg w-full rounded-lg">
            Send
          </button>
        </ul>
      </section>
    </>
  );
};

export default SidePaymentContent;
