import React from "react";
import SidePaymentContent from "./SidePaymentContent";
import HomePaymentContent from "./HomePaymentContent";

const Payments = () => {
  return (
    <>
      <div className="content-area">
        <div className="content">
          <HomePaymentContent />
        </div>

        <div className="side-content">
          <SidePaymentContent />
        </div>
      </div>
    </>
  );
};

export default Payments;
