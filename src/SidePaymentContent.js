import React, { useContext, useState } from "react";
import "./payments.css";
import CurrentDate from "./CurrentDate";
import { BalanceContext } from "./Components/BalanceContext";

const SidePaymentContent = ({ setTransactions }) => {
  const { balance, setBalance } = useContext(BalanceContext);
  const [transferAmount, setTransferAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [error, setError] = useState("");

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
    setTransferAmount("");
    setAccountNumber("");
    setBankName("");
    setReceiverName("");
  };

  const isFormValid =
    transferAmount && accountNumber && bankName && receiverName;

  return (
    <>
      <section className="transfer-section">
        <div className="text-center flex flex-col gap-2 py-5">
          <h3 className="font-semibold text-lg">Your account balance</h3>
          <h1 className="text-4xl text-yellow-600 font-extrabold">
            ${balance.toLocaleString()}
          </h1>
          <p className="">
            <CurrentDate />
          </p>
        </div>

        <ul className="mt-5 flex flex-col gap-8">
          <li className="bg-gray-200 p-5 flex flex-col gap-2 rounded-lg">
            <label htmlFor="" className="font-semibold py-1 text-lg">
              Account Number
            </label>
            <input
              type="text"
              className="w-full p-5 pl-6 rounded-md "
              placeholder="658618395"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          </li>

          <li className="bg-gray-200 p-5 flex flex-col gap-2 rounded-lg">
            <label htmlFor="" className="font-semibold py-1 text-lg">
              Amount
            </label>
            <input
              type="text"
              className="w-full p-5 pl-6 rounded-md "
              placeholder="$ Amount"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
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
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
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
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
            />
          </li>

          <button
            onClick={handleTransfer}
            disabled={!isFormValid}
            className={`mt-5 px-4 py-2 rounded transition w-full ${
              isFormValid
                ? "bg-yellow-600 text-white p-3 font-bold text-lg w-full rounded-lg"
                : "bg-opacity-60 bg-yellow-600 text-white p-3 font-bold text-lg w-full rounded-lg cursor-not-allowed"
            }`}
          >
            Send
          </button>
        </ul>
      </section>
    </>
  );
};

export default SidePaymentContent;
