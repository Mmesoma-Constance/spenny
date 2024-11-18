import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <div className="sidenav">
        <h1>SPENNY</h1>
        <ul className="">
          <li className="active">
            <Link to="/dashboard">DashBoard</Link>{" "}
          </li>
          <li className="">
            <Link to="/dashboard/transaction">Transaction</Link>
          </li>
          <li className="">
            <Link to="/dashboard/payments">Payments</Link>
          </li>
          <li className="">
            <Link to="/dashboard/cards">Cards</Link>
          </li>
          <li className="">
            <Link to="/dashboard/goals">Goals</Link>
          </li>
          <li className="">
            <Link to="/dashboard/subscription">Subscriptions</Link>
          </li>
          <li className="">
            <Link to="/dashboard/budget">Budgets</Link>
          </li>
          <li className="">
            <Link to="/dashboard/reports">Analysics</Link>
          </li>
        </ul>
        <ul className="side-footer">
          <li className="">Settings</li>
          <li className="">
            {" "}
            <Link to="/login"> Log Out</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideNav;
