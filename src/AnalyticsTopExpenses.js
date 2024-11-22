// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// // import ChartDataLabels from "chartjs-plugin-datalabels";

// // Register only the core components globally (no plugins globally)
// ChartJS.register(CategoryScale, LinearScale, BarElement);

// const AnalyticsTopExpenses = () => {
//   const expenseData = [
//     { category: "Rent", amount: 9000 },
//     { category: "Groceries", amount: 6454.1 },
//     { category: "Clothes", amount: 4303.6 },
//     { category: "Entertainment", amount: 1812.6 },
//     { category: "Cash Loan", amount: 1500 },
//   ];

//   const labels = expenseData.map((expense) => expense.category);
//   const amounts = expenseData.map((expense) => expense.amount);

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "Expenses ($)",
//         data: amounts,
//         backgroundColor: [
//           "#4caf50",
//           "#2196f3",
//           "#ff9800",
//           "#e91e63",
//           "#9c27b0",
//         ],
//         borderRadius: 8,
//       },
//     ],
//   };

//   const options = {
//     indexAxis: "y",
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         enabled: true,
//       },
//       datalabels: {
//         anchor: "end",
//         align: (context) => (context.raw < 2000 ? "start" : "end"),
//         formatter: (value) => `$${value.toLocaleString()}`,
//         color: (context) => (context.raw < 2000 ? "#000" : "#fff"),
//         clip: false,
//         font: {
//           weight: "bold",
//           size: 12,
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//         ticks: {
//           display: false,
//         },
//         max: 10000,
//       },
//       y: {
//         grid: {
//           display: false,
//         },
//         ticks: {
//           color: "#000",
//           font: {
//             size: 14,
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ width: "100%", height: "500px", padding: "20px" }}>
//       <h3 style={{ marginBottom: "10px" }}>Top 5 Expenses</h3>
//       {/* Pass ChartDataLabels plugin locally */}
//       <Bar data={data} options={options} plugins={[ChartDataLabels]} />
//     </div>
//   );
// };

// export default AnalyticsTopExpenses;
