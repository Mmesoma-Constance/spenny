import React from "react";
import Graph1 from "./Graph1";
import "./subscription.css";
import Piechart from "./Piechart";
import SubscriptionSideContent from "./SubscriptionSideContent";
import SubscriptionHomeContent from "./SubscriptionHomeContent";

const Subscription = () => {
  return (
    <>
      <div className="subscribe-content-area">
        <div className="subscribe-flex-area">
          <div className="subscribe-content">
            <Graph1 />
            {/* <Piechart /> */}
          </div>

          <div className="side-content">{<SubscriptionSideContent />}</div>
        </div>
        <SubscriptionHomeContent />
      </div>
    </>
  );
};

export default Subscription;
