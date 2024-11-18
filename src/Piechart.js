// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const Piechart = () => {
//   // Data for the chart
//   const data = {
//     labels: ["Apple", "Netflix", "Amazon", "Spotify", "YouTube"], // Months
//     datasets: [
//       {
//         label: "Monthly Spending ($)",
//         data: [1000, 900, 750, 500, 400], // Spending values
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//         borderRadius: 8,
//       },
//     ],
//   };

//   // Options for the chart
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false, // Hide legend
//       },
//       tooltip: {
//         enabled: true,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false, // Hide grid lines on X-axis
//         },
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           stepSize: 200, // Adjust step size for better visibility
//         },
//       },
//     },
//   };

//   return (
//     <div
//       className="graph-container"
//       style={{ width: "100%", maxWidth: "500px", height: "350px" }}
//     >
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default Piechart;
