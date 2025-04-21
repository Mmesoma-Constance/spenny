import React, { useState } from "react";
import { BalanceContext } from "../Components/BalanceContext";

const PaymentsPageModal = ({ isOpen, onClose, onCreate }) => {
  const [paymentName, setPaymentName] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [duration, setDuration] = useState("Daily");
  const [autoPayment, setAutoPayment] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!paymentName || !amount || !dueDate) return;

    const createBill = {
      name: paymentName,
      amount: parseFloat(amount),
      dueDate,
      duration,
      autoPayment,
      // setError("");
      // onClose();
    };
    onCreate(createBill);
  };

  const isFormValid = paymentName && amount && dueDate;

  // if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 pt-5 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-5">Create Expected Bill</h2>

        <div className="flex flex-col justify-between gap-2">
          <label>Bill Name</label>
          <input
            type="text"
            className="w-full bg-gray-200 p-3 pl-6 rounded-lg mb-1"
            placeholder="eg: house rent, electricity bills ..."
            value={paymentName}
            onChange={(e) => setPaymentName(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <label>Amount</label>
          <input
            type="number"
            className="w-full bg-gray-200 p-3 pl-6 rounded-lg mb-3"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <label>Due Date</label>
          <input
            type="date"
            className="w-full bg-gray-200 p-3 pl-6 rounded-lg mb-3"
            placeholder="Enter Account Number"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <label htmlFor="">Payment Durations</label>
          <select
            name="Category"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full bg-gray-200 p-3 rounded-lg mb-3"
          >
            <option value="Daily" className="">
              Daily
            </option>
            <option value="Weekly" className="">
              Weekly
            </option>
            <option value="Monthly" className="">
              Monthly
            </option>
            <option value="Yearly" className="">
              Yearly
            </option>
            <option value="Others" className="">
              Others
            </option>
          </select>

          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              checked={autoPayment}
              onChange={(e) => setAutoPayment(e.target.value)}
              className="w-4 h-4 bg-yellow-600"
            />
            <label htmlFor="" className="font-semibold">
              Allow autoPayment?
            </label>
          </div>
        </div>

        <div className="flex gap-5">
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`mt-5 px-4 py-2 rounded transition w-full ${
              isFormValid
                ? "bg-yellow-600 opacity-80 hover:opacity-100 text-white"
                : "bg-opacity-50 bg-yellow-600 text-white cursor-not-allowed"
            }`}
          >
            Create
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

export default PaymentsPageModal;
