import React from "react";
import "./transaction.css";

const Transaction = () => {
  return (
    <>
      <section className=" transaction-content">
        <section className="box-container grid grid-cols-4 gap-5">
          <div className="total-box">
            <h2 className="box-title">Total Balance</h2>
            <h1 className="number">$42,600.89</h1>
          </div>
          <div className="total-box">
            <h2 className="box-title">Incomes</h2>
            <h1 className="number">$23,000.77</h1>
          </div>
          <div className="total-box">
            <h2 className="box-title">Savings</h2>
            <h1 className="number">$28,670.00</h1>
          </div>
          <div className="total-box">
            <h2 className="box-title">Expenses</h2>
            <h1 className="number">$3,459.00</h1>
          </div>
        </section>

        <section className="transaction-summary-container w-full bg-white p-10 mt-8 rounded-lg grid grid-cols-3 gap-5 text-xl font-semibold">
          <div className="transaction-summary">
            <h2 className="box-title">Total Transactions</h2>
            <h1 className="number">429</h1>
          </div>
          <div className="transaction-summary">
            <h2 className="box-title">Transactions this Month</h2>
            <h1 className="number">123</h1>
          </div>
          <div className="transaction-summary ">
            <div className="flex gap-5 items-center">
              <ul className="flex flex-col gap-2 ">
                <li className="flex gap-2 items-center text-[17px] uppercase">
                  <h2 className="flex items-center gap-2">
                    <div className="data-transfered-square"></div>{" "}
                    <h3>Transfered</h3>
                  </h2>

                  <h4>$52,485.00</h4>
                </li>
                <li className="flex gap-2 items-center text-[17px] uppercase">
                  <h2 className="flex items-center gap-2">
                    <div className="data-received-square"></div>{" "}
                    <h3>Received</h3>
                  </h2>

                  <h4>$31,852.00</h4>
                </li>
              </ul>
              <div class="transaction-circle-container">
                <div class="transaction-circle"></div>
              </div>{" "}
            </div>
          </div>
        </section>

        <div className="table">
          <h1>Transaction History</h1>
          <p>Today</p>

          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Receiver</th>
                <th>Type</th>
                <th>Date</th>
                <th>Time</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="debit">Debit</td>
                <td>Amazon</td>
                <td>Online Shopping</td>
                <td>20 July 2024</td>
                <td>10:35.26 PM</td>
                <td>$23.67.00</td>
              </tr>{" "}
              <tr>
                <td className="credit">Crebit</td>
                <td>Amazon</td>
                <td>Online Shopping</td>
                <td>20 July 2024</td>
                <td>10:35.26 PM</td>
                <td>$23.67.00</td>
              </tr>
              <tr>
                <td className="debit">Debit</td>
                <td>Amazon</td>
                <td>Online Shopping</td>
                <td>20 July 2024</td>
                <td>10:35.26 PM</td>
                <td>$23.67.00</td>
              </tr>{" "}
              <tr>
                <td className="credit">Crebit</td>
                <td>Amazon</td>
                <td>Online Shopping</td>
                <td>20 July 2024</td>
                <td>10:35.26 PM</td>
                <td>$23.67.00</td>
              </tr>
            </tbody>
          </table>

          <p>Yesterday</p>

          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Receiver</th>
                <th>Type</th>
                <th>Date</th>
                <th>Time</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="debit">Debit</td>
                <td>Amazon</td>
                <td>Online Shopping</td>
                <td>20 July 2024</td>
                <td>10:35.26 PM</td>
                <td>$23.67.00</td>
              </tr>{" "}
              <tr>
                <td className="credit">Crebit</td>
                <td>Amazon</td>
                <td>Online Shopping</td>
                <td>20 July 2024</td>
                <td>10:35.26 PM</td>
                <td>$23.67.00</td>
              </tr>
              <tr>
                <td className="debit">Debit</td>
                <td>Amazon</td>
                <td>Online Shopping</td>
                <td>20 July 2024</td>
                <td>10:35.26 PM</td>
                <td>$23.67.00</td>
              </tr>{" "}
              <tr>
                <td className="debit">Debit</td>
                <td>Amazon</td>
                <td>Online Shopping</td>
                <td>20 July 2024</td>
                <td>10:35.26 PM</td>
                <td>$23.67.00</td>
              </tr>{" "}
              <tr>
                <td className="debit">Debit</td>
                <td>Amazon</td>
                <td>Online Shopping</td>
                <td>20 July 2024</td>
                <td>10:35.26 PM</td>
                <td>$23.67.00</td>
              </tr>{" "}
              <tr>
                <td className="debit">Debit</td>
                <td>Amazon</td>
                <td>Online Shopping</td>
                <td>20 July 2024</td>
                <td>10:35.26 PM</td>
                <td>$23.67.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Transaction;
