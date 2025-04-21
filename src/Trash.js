// // RevenueChart.js
// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const Graph1 = () => {
//   const data = {
//     labels: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     datasets: [
//       {
//         label: "Revenue ($)",
//         data: [3, 6, 9, 7, 5, 8, 12, 9, 7, 10, 6, 4],
//         backgroundColor: "rgba(54, 162, 235, 0.6)",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: "Revenue ($)",
//         },
//       },
//     },
//   };

//   return <Bar data={data} options={options} />;
// };

// export default Graph1;

// //////////////////////////////////////////////////////////////////

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graph1 = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Cost 1",
        data: [5, 6, 8, 7, 5, 6, 4],
        backgroundColor: "rgba(75, 192, 192, 0.7)", // Green
      },
      {
        label: "Cost 2",
        data: [3, 4, 3, 2, 4, 5, 3],
        backgroundColor: "rgba(255, 99, 132, 0.7)", // Red
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Customer Acquisition Cost (CAC)",
      },
    },
    scales: {
      x: {
        stacked: true, // Stacking on X-axis
        grid: {
          display: false, // Hide grid lines on X-axis
        },
      },
      y: {
        stacked: true, // Stacking on Y-axis
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph1;

/////////////////////////////////////

// income vs expenses




import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import EmailRecovery from "./EmailRecovery";
import ForgotPassword from "./ForgotPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "./SideNav";
import Transaction from "./Transaction";
import Goals from "./Goals";
import SideContent from "./SideContent";
import { TopNav } from "./TopNav";
import { useLocation } from "react-router-dom";
import Payments from "./Payments";
import Cards from "./Cards";
import Subscription from "./Subscription";
import Budgets from "./Budgets";
import Analysis from "./Analysis";
import Setting from "./Setting";
import SettingPassword from "./SettingPassword";
import SettingHome from "./SettingHome";
import SettingLinks from "./SettingLinks";
import SettingInfoEdit from "./SettingInfoEdit";

function App() {
  return (
    <Router>
      <div className="dashboard-layout">
        <SideNav />
        <div className="main-content">
          <TopNav />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email-recovery" element={<EmailRecovery />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/setting-info-edit" element={<SettingInfoEdit />} />
        <Route path="/setting/setting-home" element={<SettingHome />} />

        {/* <Route path="/dashboard/*" element={<DashboardLayout />} /> */}
      </Routes>
    </Router>
  );
}

// function DashboardLayout() {
//   const location = useLocation();
//   return (
//     <div className="dashboard-layout">
//       <SideNav />
//       <div className="main-content">
//         <TopNav />

//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/transaction" element={<Transaction />} />
//             <Route path="/goals" element={<Goals />} />
//             <Route path="/payments" element={<Payments />} />
//             <Route path="/cards" element={<Cards />} />
//             <Route path="/subscription" element={<Subscription />} />
//             <Route path="/budgets" element={<Budgets />} />
//             <Route path="/analysis" element={<Analysis />} />
//             <Route path="/setting" element={<Setting />} />
//             <Route path="/setting-info-edit" element={<SettingInfoEdit />} />
//             <Route path="/setting/setting-home" element={<SettingHome />} />
//             <Route
//               path="/setting/setting-password"
//               element={<SettingPassword />}
//             />
//           </Routes>
//         </div>
//         {/* {location.pathname === "/" && (
//             <div className="side-content">
//               <SideContent />
//             </div>
//           )} */}
//       </div>
//     </div>
//   );
// }

// function Settings() {
//   return (
//     <>
//       <SettingLinks />

//       <Routes>

//         <Route path="/" element={<Setting />} />
//         <Route path="/setting-home" element={<SettingHome />} />
//         <Route path="/setting-password" element={<SettingPassword />} />
//       </Routes>
//     </>
//   );
// }

   {/* <section className="circle-div">
        <h1>Activity</h1>
        <div class="circle-container">
          <div class="circle"></div>
          <div class="circle-text">
            <h2> $6,800.27 </h2>
            <span>Spent</span>
          </div>
        </div>

        <div className="activity">
          <ul className="">
            <li className="">
              <h2 className="flex gap-2 items-center">
                <div className="data-square"></div> <h3>Data Subscription</h3>
              </h2>

              <h4>55%</h4>
            </li>
            <li className="">
              <h2 className="flex gap-2 items-center">
                <div className="water-square"></div> <h3>Water Bill</h3>
              </h2>

              <h4>39%</h4>
            </li>
            <li className="">
              <h2 className="flex gap-2 items-center">
                <div className="online-square"></div> <h3>Online Shopping</h3>
              </h2>

              <h4>60%</h4>
            </li>
            <li className="">
              <h2 className="flex gap-2 items-center">
                <div className="groceries-square"></div> <h3>Groceries</h3>
              </h2>
              <h4>45%</h4>
            </li>

            <li className="">
              <h2 className="flex gap-2 items-center">
                <div className="home-square"></div> <h3>Home</h3>
              </h2>

              <h4>30%</h4>
            </li>
            <li className="">
              <h2 className="flex gap-2 items-center">
                <div className="investment-square"></div> <h3>Investment</h3>
              </h2>

              <h4>27%</h4>
            </li>
          </ul>
        </div>
      </section> */}

export default App;









/////////////////////////////
  <section className="payment-section">
        <div className="payment-heading">
          <h1 className="font-semibold">Completed Goals</h1>
        </div>
        <ul className="">
          <li className="">
            <h2>
              <h3>Family Trip</h3>
              <p>August 5th 2024</p>{" "}
            </h2>

            <h4>$11,420.00</h4>
          </li>

          <li className="">
            <h2>
              <h3>TV</h3>
              <p>August 12th 2024</p>{" "}
            </h2>

            <h4>$31,500.68</h4>
          </li>

          <li className="">
            <h2>
              <h3>Microwave</h3>
              <p>August 27th 2024</p>{" "}
            </h2>

            <h4>$10,000.00</h4>
          </li>

          {/* <li className="">
            <h2>
              <h3>Interior Designing</h3>
              <p>September 5th 2024</p>{" "}
            </h2>

            <h4>$29,500.59</h4>
          </li> */}
        </ul>
      </section>