import React from "react";
import { NavLink } from "react-router-dom";

// const SideNav = () => {
//   return (
//     <>
//       <div className="sidenav">
//         <h1>SPENNY</h1>
//         <ul className="">
//           <li className="">
//             <NavLink to="/dashboard">DashBoard</NavLink>{" "}
//           </li>
//           <li className="">
//             <NavLink to="/dashboard/transaction">Transaction</NavLink>
//           </li>
//           <li className="">
//             <NavLink to="/dashboard/payments">Payments</NavLink>
//           </li>
//           <li className="">
//             <NavLink to="/dashboard/cards">Cards</NavLink>
//           </li>
//           <li className="">
//             <NavLink to="/dashboard/goals">Goals</NavLink>
//           </li>
//           <li className="">
//             <NavLink to="/dashboard/subscription">Subscriptions</NavLink>
//           </li>
//           <li className="">
//             <NavLink to="/dashboard/budgets">Budgets</NavLink>
//           </li>
//           <li className="">
//             <NavLink to="/dashboard/analysis">Analysis</NavLink>
//           </li>
//         </ul>
//         <ul className="side-footer">
//           <li className="">
//             <NavLink to="/dashboard/setting">Setting</NavLink>
//           </li>

//           <li className="">
//             {" "}
//             <NavLink to="/login"> Log Out</NavLink>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

const SideNav = () => {
  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Transaction", path: "/dashboard/transaction" },
    { name: "Payments", path: "/dashboard/payments" },
    // { name: "Cards", path: "/dashboard/cards" },
    { name: "Goals", path: "/dashboard/goals" },
    // { name: "Subscriptions", path: "/dashboard/subscription" },
    // { name: "Budgets", path: "/dashboard/budgets" },
    { name: "Analysis", path: "/dashboard/analysis" },
    { name: "Settings", path: "/dashboard/setting" },
  ];

  return (
    <div className="sidenav">
      <h1>SPENNY</h1>
      <ul className="relative h-[100vh]">
        {" "}
        {navItems.map((item) => (
          <li key={item.path} className="mb-1">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block p-3 pl-6 ${
                  isActive ? "bg-yellow-600" : "hover:bg-[#2d4857]"
                }`
              }
            >
              {item.name}
            </NavLink>{" "}
          </li>
        ))}{" "}
        <NavLink to="/login">
          {" "}
          <li className="absolute p-3 pl-6 flex bottom-32 left-0 right-0 hover:bg-[#2d4857] cursor-pointer">
            {" "}
            Log Out
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideNav;
