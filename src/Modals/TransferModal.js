import React, { useContext, useState } from "react";
import { BalanceContext } from "../Components/BalanceContext";
import NumberFormat from "../Components/NumberFormat";

const TransferModal = ({ isOpen, onClose, setTransactions }) => {
  const [transferAmount, setTransferAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [error, setError] = useState("");
  const { balance, setBalance } = useContext(BalanceContext);
  // const [transactions, setTransactions] = useState(
  //   JSON.parse(localStorage.getItem("transactions")) || []
  // );

  const handleTransfer = () => {
    const amount = parseFloat(transferAmount);
    if (amount > balance) {
      setError("Insufficient balance");

      return;
    }

    const newTransaction = {
      status: "Debit",
      name: receiverName,
      bank: bankName,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      amount: `$${amount.toFixed(2)}`,
    };

    // update transactions
    const existing = JSON.parse(localStorage.getItem("transactions")) || [];

    const updated = [newTransaction, ...existing];

    localStorage.setItem("transactions", JSON.stringify(updated));
    setTransactions(updated);

    //  const updatedTransations = [newTransaction, ...transactions];
    //     setTransactions(updatedTransations);
    //     localStorage.setItem("transactions", JSON.stringify(updatedTransations));

    setBalance(balance - amount);
    setError("");
    onClose();
  };

  const isFormValid =
    transferAmount && accountNumber && bankName && receiverName;

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 pt-5 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-5">Make Transfer</h2>

        <div className="flex flex-col justify-between gap-2">
          <label>Transfer Amount</label>
          <input
            type="number"
            className="w-full bg-gray-200 p-3 pl-6 rounded-lg mb-1"
            placeholder="Enter Amount"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <label>Receiver's Account Number</label>
          <input
            type="number"
            className="w-full bg-gray-200 p-3 pl-6 rounded-lg mb-3"
            placeholder="Enter Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />

          <label>Receiver's Bank Name</label>
          <input
            type="text"
            className="w-full bg-gray-200 p-3 pl-6 rounded-lg mb-3"
            placeholder="Enter Bank Name"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />

          <label>Receiver's Name</label>
          <input
            type="text"
            className="w-full bg-gray-200 p-3 pl-6 rounded-lg mb-3"
            placeholder="Enter Name"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
          />

          <label htmlFor="">Select Card to Transfer</label>
          <select
            name="Category"
            id=""
            className="w-full bg-gray-200 p-3 rounded-lg mb-3"
          >
            <option value="income" className="">
              Primary Card
            </option>
            <option value="savings" className="">
              Secondary Card
            </option>
          </select>
        </div>

        <div className="flex justify-between gap-5">
          <button
            onClick={handleTransfer}
            disabled={!isFormValid}
            className={`mt-5 px-4 py-2 rounded transition w-full ${
              isFormValid
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-opacity-50 bg-red-600 text-white cursor-not-allowed"
            }`}
          >
            Transfer
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

export default TransferModal;
