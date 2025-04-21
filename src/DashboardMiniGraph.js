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

const DashboardMiniGraph = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "August",
      "Sept",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Spent",
        data: [300, 500, 800, 500, 800, 450, 700, 600, 600, 300, 500],
        backgroundColor: " #ca8a04",
        borderRadius: "50%",
      },
      {
        label: "Balance",
        data: [500, 600, 500, 360, 500, 450, 500, 100, 400, 500, 600],
        backgroundColor: "rgb(140, 140, 140, 0.511)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      //   title: {
      //     display: true,
      //     text: "Balance",
      //   },
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
          stepSize: 500, // Adjust step size for better visibility
        },
      },
    },
  };

  return (
    <div
      className="graph-container"
      style={{
        width: "100%",
        // maxWidth: "2500px",
        margin: "auto",

        // maxHeight: "350px",
        height: "350px",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default DashboardMiniGraph;
