import React from "react";
import MiniGraph from "./MiniGraph";

const MiniGraphData = () => {
  const spendingsData = [500, 700, 600, 800, 750, 900]; // Example data
  const incomeData = [2000, 2100, 2500, 2700, 3000, 3500]; // Example data

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "fit-content",
          background: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          fontWeight: "500",
          fontSize: "18px",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h4>Spendings</h4>
        <h3 className="text-xl font-bold pt-1">$267,900.00</h3>
        <p className="text-sm pt-1">3.5% up last 30 days</p>
        <MiniGraph dataPoints={spendingsData} color="#FF7300" />
      </div>

      <div
        style={{
          width: "200px",
          height: "fit-content",
          background: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          fontWeight: "500",
          fontSize: "18px",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h4>Income</h4>
        <h3 className="text-xl font-bold pt-1">$267,900.00</h3>
        <p className="text-sm pt-1">3.5% up last 30 days</p>
        <MiniGraph dataPoints={incomeData} color="#82CA9D" />
      </div>
    </div>
  );
};

export default MiniGraphData;
