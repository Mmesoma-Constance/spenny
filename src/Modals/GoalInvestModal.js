import React, { useState } from "react";
import { BalanceContext } from "../Components/BalanceContext";

const GoalInvestModal = ({ isOpen, onClose }) => {
  const [paymentName, setPaymentName] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");

  const [error, setError] = useState("");

  const createBill = () => {
    setError("");
    onClose();
  };

  const isFormValid = paymentAmount;

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 text-base inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 pt-5 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-5">Invest in Goal</h2>

        <div className="flex flex-col justify-between gap-2">
          <label>Amount to invest</label>
          <input
            type="number"
            className="w-full bg-gray-200 p-3 pl-6 rounded-lg mb-3"
            placeholder="Enter Amount"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
          />

          <label htmlFor="">Choose goal</label>
          <select
            name="Category"
            id=""
            className="w-full bg-gray-200 p-3 rounded-lg mb-3"
          >
            <option value="income" className="">
              Washing machine
            </option>
            <option value="savings" className="">
              Trip to Dubai
            </option>
            <option value="investment" className="">
              My Birthday Photoshoot
            </option>

            <option value="Others" className="">
              Back to Savings
            </option>
          </select>
          <label htmlFor="">Payment Durations</label>
          <select
            name="Category"
            id=""
            className="w-full bg-gray-200 p-3 rounded-lg mb-3"
          >
            <option value="Others" className="">
              One time
            </option>
            <option value="income" className="">
              Daily
            </option>
            <option value="savings" className="">
              Weekly
            </option>
            <option value="investment" className="">
              Monthly
            </option>
            <option value="Online Payment Platforms" className="">
              Yearly
            </option>
          </select>
        </div>
        <div className="flex justify-between  gap-5">
          <button
            onClick={createBill}
            disabled={!isFormValid}
            className={`mt-5 px-4 py-2 rounded transition w-full ${
              isFormValid
                ? "bg-yellow-600 opacity-80 hover:opacity-100 text-white"
                : "bg-opacity-50 bg-yellow-600 text-white cursor-not-allowed"
            }`}
          >
            Invest
          </button>
          <button
            onClick={onClose}
            className="mt-5 px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded transition w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalInvestModal;
