import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import IncomeChart from "./IncomeChart";
import DeleteAccount from "./DeleteAccount";
import profile from "./people (9).jpg";
import "./homeContent.css";
import MiniGraphData from "./MiniGraphData";
import DashboardMiniGraph from "./DashboardMiniGraph";
import AnalyticsGraph from "./AnalyticsGraph";
import { BalanceContext } from "./Components/BalanceContext";
import DepositModal from "./Modals/DepositModal";
import TransferModal from "./Modals/TransferModal";
import TransactionHistory from "./Components/TransactionHistory";

const HomeContent = () => {
  const { balance, setBalance } = useContext(BalanceContext);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  // const navigate = useNavigate();

  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <div className="dashboard-content">
      <section className="finance-container">
        <div className=" flex justify-between item-center w-full">
          <div className="">
            <h2 className="box-title text-white">Total Balance</h2>
            <h1 className="text-4xl font-extrabold text-yellow-600 ">
              ${balance.toLocaleString()}
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            {" "}
            <button
              className=" bg-yellow-600 h-9 px-6 rounded-full text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => setIsDepositModalOpen(true)}
            >
              Deposit
            </button>{" "}
            <button
              className="text-white border-2 border-yellow-600 h-9 px-6 rounded-full hover:bg-white hover:text-black transition-colors hover:border-white"
              onClick={() => setIsTransferModalOpen(true)}
            >
              Transfer
            </button>
          </div>{" "}
        </div>

        {/*  Deposit Modal */}
        {isDepositModalOpen && (
          <DepositModal
            isOpen={isDepositModalOpen}
            onClose={() => setIsDepositModalOpen(false)}
            setTransactions={setTransactions}
          />
        )}

        {/* Transfer Modal */}
        {isTransferModalOpen && (
          <TransferModal
            isOpen={isTransferModalOpen}
            onClose={() => setIsTransferModalOpen(false)}
            setTransactions={setTransactions}
          />
        )}

        {/* <div className="income box">
          <h2 className="box-title">Santander</h2>
          <p className="">65 **** 8945</p>
          <h1 className="number">$28,600.12</h1>
        </div>
        <div className="expenses box">
          <h2 className="box-title">CityBank</h2>
          <p className="">43 **** 8021</p>
          <h1 className="number">$14,000.77</h1>
        </div> */}
        {/* <div className="savings box">
          <h2 className="box-title">Total Savings</h2>
          <h1 className="number">$4,000.12</h1>
        </div> */}
      </section>

      {/* <section className="income-chart">
        <div style={appStyles}>
          <h1 style={titleStyles}>Finance</h1>
          <IncomeChart />
        </div>
      </section> */}

      <section className=" mt-7">
        <h1 className="font-bold text-2xl pb-2">Financial Record</h1>
        <div className="box-container grid grid-cols-3 gap-5">
          <div className="total-box ">
            <h2 className="box-title">Incomes</h2>
            <h1 className="number">$23,000.77</h1>
          </div>
          <div className="total-box ">
            <h2 className="box-title">Savings</h2>
            <h1 className="number">$28,670.00</h1>
          </div>
          <div className="total-box ">
            <h2 className="box-title">Expenses</h2>
            <h1 className="number">$3,459.00</h1>
          </div>
        </div>
      </section>

      <section className="mt-7">
        {/* <DashboardMiniGraph />*/}
        <AnalyticsGraph />
      </section>

      {/* <section className="home-budget-div flex gap-4 mt-6">
        <div className="budget w-[50%]">
          <div className="heading">
            <h1>Monthly Income</h1>
            <span>$10,000.00</span>
          </div>
          <div className="budget-container">
            <div className="limit">
              <h2>Monthly Budget limit</h2>
              <h4>$8,500.00</h4>
            </div>
            <div className="line"></div>
            <div className="spent">
              <h2>Spent</h2>
              <h4>$6,800.27</h4>
            </div>
          </div>

          <div className="progress-container">
            <div className="progress"></div>
          </div>
        </div>

        <div className="top-expenses w-[50%]">
          <h1>Top Expenses</h1>
          <ul className="">
            <li className="">
              <h2>
                <h3>Data Subscription</h3>
              </h2>

              <h4>$2,900.39</h4>
            </li>

            <li className="">
              <h2>
                <h3>Water Bill</h3>
              </h2>

              <h4>$1,230.55</h4>
            </li>
            <li className="">
              <h2>
                <h3>Online Shopping</h3>
              </h2>

              <h4>$3,600.89</h4>
            </li>
            <li className="">
              <h2>
                <h3>Groceries</h3>
              </h2>

              <h4>$1,710.49</h4>
            </li>
          </ul>
        </div>
      </section> */}

      {/* <div className="table">
        <h1 className="font-bold text-2xl text-yellow-600">
          Transaction History
        </h1>
        <p>Today</p>

        <table className="">
          <thead>
            <tr>
              <th>Status</th>
              <th>Receiver</th>

              <th>Date</th>
              <th>Time</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="">
              <td className="debit">Debit</td>
              <td>Amazon</td>

              <td>20 July 2024</td>
              <td>10:35.26 PM</td>
              <td>$23.67.00</td>
            </tr>{" "}
            <tr>
              <td className="credit">Crebit</td>
              <td>Amazon</td>

              <td>20 July 2024</td>
              <td>10:35.26 PM</td>
              <td>$23.67.00</td>
            </tr>
            <tr>
              <td className="debit">Debit</td>
              <td>Amazon</td>

              <td>20 July 2024</td>
              <td>10:35.26 PM</td>
              <td>$23.67.00</td>
            </tr>{" "}
            <tr>
              <td className="credit">Crebit</td>
              <td>Amazon</td>

              <td>20 July 2024</td>
              <td>10:35.26 PM</td>
              <td>$23.67.00</td>
            </tr>{" "}
          </tbody>
        </table>
      </div> */}

      <TransactionHistory transactions={transactions} />
    </div>
  );
};

const appStyles = {
  textAlign: "center",
  // backgroundColor: "#f3f4f6",
  // minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  width: "100%",
  marginTop: "30px",
  background: "white",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "20px 0 0 0",
  borderRadius: "10px",
};

const titleStyles = {
  fontFamily: "Arial, sans-serif",
  color: "#333",
  // marginBottom: "10px",
};

export default HomeContent;
