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

const Graph2 = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
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
        ticks: {
          stepSize: 1, // Adjust step size for better visibility
        },
      },
    },
  };

  return (
    <div
      className="graph-container"
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "auto",
        maxHeight: "350px",
        height: "100%",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph2;
