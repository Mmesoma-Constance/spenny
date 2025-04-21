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

const Piechart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",

    ],
    datasets: [
      {
        label: "Budget",
        data: [500, 600, 800, 400, 500, 450, 700, 600, 600, 300, 800, 400],
        backgroundColor: "rgba(128, 128, 128, 0.651)", // Green
      },
      {
        label: "Limit Exceeded",
        data: [100, 250, 500, 0, 400, 0, 500, 100, 400, 0, 500, 150],
        backgroundColor: "red", // Red
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
      title: {
        display: true,
        text: "Monthly Budget",
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

export default Piechart;
