import React, { useEffect, useState } from "react";

const TransactionHistory = ({ transactions }) => {
  //   const totalReceived = transactions
  //     .filter((txn) => txn.status === "Credit")
  //     .reduce((acc, txn) => acc + parseFloat(txn.amount), 0);
  //   console.log(totalReceived);

  const totalCredit = transactions
    .filter((txn) => txn.status === "Credit")
    .reduce((acc, txn) => {
      const amount = parseFloat(txn.amount);

      if (isNaN(amount)) {
        return acc + amount;
      }
      return acc;
    }, 0);

  console.log(totalCredit);
  //   const [transactions, setTransactions] = useState([]);

  //   useEffect(() => {
  //     const storedTransactions =
  //       JSON.parse(localStorage.getItem("transactions")) || [];
  //     setTransactions(storedTransactions);
  //   }, []);

  return (
    <div className="table">
      <h1>Transaction History</h1>
      <p>Today</p>

      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Amount</th>
            {/* <th>Bank</th> */}
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((txn, index) => (
              <tr key={index} className="text-center">
                <td
                  className={`p-2 ${
                    txn.status === "Credit"
                      ? "text-[#0be80b]"
                      : "text-[#ff0000]"
                  } `}
                >
                  {txn.status}
                </td>
                <td className="p-2">{txn.name}</td>
                <td className="p-2">{txn.amount}</td>
                {console.log(txn.amount)}
                {/* <td className="p-2">{txn.bank}</td> */}
                <td className="p-2">{txn.date}</td>
                <td className="p-2">{txn.time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">
                No transactions yet today.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
