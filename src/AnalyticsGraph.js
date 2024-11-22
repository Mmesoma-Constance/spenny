import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AnalyticsGraph = () => {
  // Data for the chart
  // const data = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
  //   datasets: [
  //     {
  //       label: "Income",
  //       data: [5, 6, 8, 7, 5, 6, 4],
  //       backgroundColor: "rgba(75, 192, 192, 0.7)", // Green
  //     },
  //     {
  //       label: "Expenses",
  //       data: [3, 4, 3, 2, 4, 5, 3],
  //       backgroundColor: "rgba(255, 99, 132, 0.7)", // Red
  //     },
  //   ],
  // };

  // Options for the chart
  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       display: false, // Hide legend
  //     },
  //     tooltip: {
  //       enabled: true,
  //     },
  //   },
  //   scales: {
  //     x: {
  //       grid: {
  //         display: false, // Hide grid lines on X-axis
  //       },
  //     },
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };

  // return (
  //   <div
  //     className="graph-container"
  //     style={{
  //       width: "100%",
  //       // maxWidth: "2500px",
  //       margin: "auto",

  //       // maxHeight: "350px",
  //       height: "300px",
  //     }}
  //   >
  //     {/* <h1 className="font-bold text-2xl py-2 p-8 pb-7 ">Total Spent</h1> */}
  //     <Bar data={data} options={options} />
  //   </div>
  // );

  const data = {
    labels: ["Mar", "Apr", "May", "June", "Shopping", "Shopping"],
    datasets: [
      {
        label: "Income",
        data: [800, 400, 500, 450, 700, 600],
        backgroundColor: "rgba(75, 192, 192, 0.7)", // Green
      },
      {
        label: "Expenses",
        data: [500, 110, 400, 330, 500, 100],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
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
        text: "Daily Budget",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on X-axis
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
        // ticks: {
        //   stepSize: 500, // Adjust step size for better visibility
        // },
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

export default AnalyticsGraph;
