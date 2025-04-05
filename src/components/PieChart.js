import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Box, Button } from "@mui/material";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
  const [showChart, setShowChart] = useState(false);

  const data = {
    labels: ["المسطحات المائية", "اليابسة"],
    datasets: [
      {
        data: [71, 29],
        backgroundColor: ["#60B6E0", "#A96D3A"],
        hoverBackgroundColor: ["#4A9ACF", "#8B5A2B"],
      },
    ],
  };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            font: {
              size: 16,
            },
          },
        },
      },
    };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {showChart && (
        <div style={{ width: "400px", margin: "auto" }}>
          <Pie data={data} options={options} />
        </div>
      )}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 3,
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Button
          sx={{
            fontSize: "17px",
            padding: "12px 24px",
            backgroundColor: "#F6D339",
          }}
          variant="contained"
          onClick={() => setShowChart(false)}
        >
          إعادة المحاولة
        </Button>
        <Button
          sx={{
            fontSize: "18px",
            padding: "12px 24px",
            backgroundColor: "#60B463",
          }}
          variant="contained"
          onClick={() => setShowChart(true)}
        >
          الإصلاح
        </Button>
      </Box>
    </div>
  );
};

export default PieChartComponent;
