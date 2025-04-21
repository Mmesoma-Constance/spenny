import React, { useContext, useState } from "react";
import { BalanceContext } from "../Components/BalanceContext";

const DepositModal = ({ isOpen, onClose, setTransactions }) => {
  const [depositAmount, setDepositAmount] = useState("");
  const [depositorName, setDepositorName] = useState("");
  const [cardType, setCardType] = useState("income"); // 'income' or 'savings'
  const [category, setCategory] = useState("income");
  const { balance, setBalance } = useContext(BalanceContext);

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);

    if (!isNaN(amount) && amount > 0) {
      const newTransaction = {
        status: "Credit",
        name: depositorName,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        amount: `$${amount.toFixed(2)}`,
        cardType,
        category,
      };

      const existing = JSON.parse(localStorage.getItem("transactions")) || [];
      const updated = [newTransaction, ...existing];

      localStorage.setItem("transactions", JSON.stringify(updated));
      setTransactions(updated);

      setBalance(balance + amount);

      // Reset form and close modal
      setDepositAmount("");
      setDepositorName("");
      setCardType("income");
      setCategory("income");
      onClose();
    }
  };

  const isFormValid =
    depositAmount && depositorName && parseFloat(depositAmount) > 0;

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 pt-5 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-5">Make Deposit</h2>

        <div className="flex flex-col justify-between gap-2">
          <label>Deposit Amount</label>
          <input
            type="number"
            className="w-full bg-gray-200 p-3 pl-6 rounded-lg mb-3"
            placeholder="Enter Amount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          />

          <label>Depositor Name</label>
          <input
            type="text"
            className="w-full bg-gray-200 p-3 pl-6 rounded-lg mb-3"
            placeholder="Enter Name"
            value={depositorName}
            onChange={(e) => setDepositorName(e.target.value)}
          />

          <label>Select Card to Deposit</label>
          <select
            className="w-full bg-gray-200 p-3 rounded-lg mb-3"
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
          >
            <option value="income">Primary Card</option>
            <option value="savings">Secondary Card</option>
          </select>

          <label>Depositor Category</label>
          <select
            className="w-full bg-gray-200 p-3 rounded-lg mb-3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="savings">Savings</option>
            <option value="investment">Investment</option>
            <option value="Online Payment Platforms">
              Online Payment Platforms
            </option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="flex justify-between gap-5">
          <button
            onClick={handleDeposit}
            disabled={!isFormValid}
            className={`mt-5 px-4 py-2 rounded text-white transition w-full ${
              isFormValid
                ? "bg-green-500 hover:bg-green-600"
                : "bg-opacity-50 bg-green-600 cursor-not-allowed"
            }`}
          >
            Deposit
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

export default DepositModal;
