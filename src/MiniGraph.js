import React from "react";
import { Line } from "react-chartjs-2";

const MiniGraph = ({ dataPoints, color }) => {
  const data = {
    labels: Array(dataPoints.length).fill(""), // No labels
    datasets: [
      {
        data: dataPoints,
        borderColor: color,
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointRadius: 0, // No points
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // No legend
      },
    },
    scales: {
      x: {
        display: false, // Hide X-axis
      },
      y: {
        display: false, // Hide Y-axis
      },
    },
    elements: {
      line: {
        borderJoinStyle: "round",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default MiniGraph;
