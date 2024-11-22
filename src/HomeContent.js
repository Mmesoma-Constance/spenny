import React from "react";
import { Link } from "react-router-dom";
import IncomeChart from "./IncomeChart";
import DeleteAccount from "./DeleteAccount";
import profile from "./people (9).jpg";
import "./homeContent.css";

const HomeContent = () => {
  // const userName = localStorage.getItem("userName");
  // const day = new Date();
  // const time = day.getHours();
  // let greetingMsg;
  // if (time >= 0 || time > 12) {
  //   greetingMsg = "Good Morning";
  // } else if (time >= 12 || time < 16) {
  //   greetingMsg = "Good Afternoon";
  // } else {
  //   greetingMsg = "Good Evening";
  // }

  return (
    <div className="dashboard-content">
      {/* <div className="header-container">
        <header>
          <h1 className="welcome-msg">
            {greetingMsg}, {userName}
          </h1>
          <span>Welcome back!</span>{" "}
        </header>
        <div className="profile-container">
          <h3 className="date">November 12, 2024</h3>
          <img src={profile} alt="" className="profile" />{" "}
        </div>
      </div> */}

      <section className="finance-container">
        <div className="balance">
          <h2 className="box-title">Total Balance</h2>
          <h1 className="number">$42,600.89</h1>
          <div className="flex gap-5">
            {" "}
            <button>Add Money</button> <button>Transfer</button>
          </div>{" "}
        </div>
        <div className="income box">
          <h2 className="box-title">Santander</h2>
          <p className="">65 **** 8945</p>
          <h1 className="number">$28,600.12</h1>
        </div>
        <div className="expenses box">
          <h2 className="box-title">CityBank</h2>
          <p className="">43 **** 8021</p>
          <h1 className="number">$14,000.77</h1>
        </div>
        {/* <div className="savings box">
          <h2 className="box-title">Total Savings</h2>
          <h1 className="number">$4,000.12</h1>
        </div> */}
      </section>

      <section className="income-chart">
        <div style={appStyles}>
          <h1 style={titleStyles}>Finance</h1>
          <IncomeChart />
        </div>
      </section>

      <section className="home-budget-div flex gap-4 mt-6">
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
