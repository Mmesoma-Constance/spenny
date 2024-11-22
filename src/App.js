import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import ForgotEmail from "./ForgotPassword";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotEmail />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

function DashboardLayout() {
  const location = useLocation();
  return (
    <div className="dashboard-layout">
      <SideNav />
      <div className="main-content">
        <TopNav />

        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/analysis" element={<Analysis />} />
          </Routes>
        </div>
        {/* {location.pathname === "/" && (
            <div className="side-content">
              <SideContent />
            </div>
          )} */}
      </div>
    </div>
  );
}

export default App;
