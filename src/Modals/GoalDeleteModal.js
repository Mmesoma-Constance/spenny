import React, { useState } from "react";
import { BalanceContext } from "../Components/BalanceContext";

const GoalDeleteModal = ({ isOpen, onClose }) => {
  const [paymentName, setPaymentName] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");

  const [error, setError] = useState("");

  const createBill = () => {
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 text-base inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 pt-5 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-5">Delete Goal</h2>

        <p className="pb-3">
          This goal has $12,500.48 savings funds, choose what you will like to
          do with the funds
        </p>
        <div className="flex flex-col justify-between gap-2">
          <label htmlFor="">Transfer to which category</label>
          <select
            name="Category"
            id=""
            className="w-full bg-gray-200 p-3 rounded-lg mb-3"
          >
            <option value="Others" className="">
              Back to Savings
            </option>
            <option value="income" className="">
              Washing machine
            </option>
            <option value="savings" className="">
              Trip to Dubai
            </option>
            <option value="investment" className="">
              My Birthday Photoshoot
            </option>
          </select>
        </div>
        <div className="flex justify-between  gap-5">
          <button
            onClick={createBill}
            className="mt-5 px-4 py-2 rounded transition w-full 
              bg-red-600 opacity-80 hover:opacity-100 text-white"
          >
            Delete
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

export default GoalDeleteModal;
