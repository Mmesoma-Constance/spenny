import React, { useState } from "react";
import SidePaymentContent from "./SidePaymentContent";
import HomePaymentContent from "./HomePaymentContent";

const Payments = () => {
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <>
      <div className="content-area">
        <div className="content">
          <HomePaymentContent />
        </div>

        <div className="side-content">
          <SidePaymentContent setTransactions={setTransactions} />
        </div>
      </div>
    </>
  );
};

export default Payments;
