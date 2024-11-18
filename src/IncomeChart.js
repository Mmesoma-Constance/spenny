import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const IncomeChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const incomeChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          // "Aug",
          // "Sep",
          // "Oct",
          // "Nov",
          // "Dec",
        ],
        datasets: [
          {
            label: "Total Expenses",
            data: [
              3000, 1500, 3200, 4500, 2800, 5200, 4900, 5600, 5000, 5300, 4900,
              5100,
            ],
            backgroundColor: "rgba(255, 217, 0, 0.193)",
            borderColor: "rgba(75, 192, 192, 1)",

            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => {
                const customLabels = {
                  0: "$0",
                  1000: "$1,000",
                  2000: "$2,000",
                  3000: "$3,000",
                  4000: "$4,000",
                  5000: "$5,000",
                  6000: "$6,000",
                };
                return customLabels[value] || "";
              },
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              color: "#333",
            },
          },
        },
      },
    });

    return () => {
      incomeChart.destroy();
    };
  }, []);

  return (
    <div style={styles.container}>
      <canvas ref={chartRef} />
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "1000px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
  },
};

export default IncomeChart;
