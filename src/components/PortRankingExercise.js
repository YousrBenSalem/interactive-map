import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const PortRankingExercise = () => {
  const [userRankings, setUserRankings] = useState(["", "", "", ""]);
  const [showCorrection, setShowCorrection] = useState(false);
  const [showInputMode, setShowInputMode] = useState(true);

  // Les ports avec leur ordre correct (1 étant le plus important)
  const ports = [
    { name: "ميناء صفاقس", correctRank: 1 },
    { name: "ميناء قابس", correctRank: 2 },
    { name: "ميناء جرجيس", correctRank: 3 },
    { name: "ميناء بنزرت", correctRank: 4 },
  ];

  const handleRankChange = (index, value) => {
    const newRankings = [...userRankings];
    newRankings[index] = value;
    setUserRankings(newRankings);
  };

  const showAnswers = () => {
    setShowCorrection(true);
    setShowInputMode(false);
  };

  const resetAttempt = () => {
    setUserRankings(["", "", "", ""]);
    setShowCorrection(false);
    setShowInputMode(true);
  };

  const renderPortRow = (port, index) => {
    return (
      <Box
        key={index}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 2,
          direction: "rtl",
        }}
      >
        <Box sx={{ width: 200, fontWeight: "bold" }}>{port.name}</Box>

        {showInputMode ? (
          <TextField
            type="number"
            value={userRankings[index]}
            onChange={(e) => handleRankChange(index, e.target.value)}
            size="small"
            sx={{ width: 80 }}
            placeholder="1-4"
            inputProps={{ min: 1, max: 4 }}
          />
        ) : (
          <Box
            sx={{
              width: 80,
              textAlign: "center",
              fontWeight: "bold",
              color: showCorrection
                ? userRankings[index] == port.correctRank
                  ? "success.main"
                  : "error.main"
                : "text.primary",
            }}
          >
            {showCorrection
              ? `${userRankings[index]} → ${port.correctRank}`
              : userRankings[index]}
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Box sx={{ textAlign: "right", direction: "rtl", p: 3 }}>
    

      {ports.map((port, index) => renderPortRow(port, index))}

      <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start", mt: 3 }}>
        <Button
          sx={{
            fontSize: "17px",
            padding: "12px 24px",
            backgroundColor: "#F6D339",
            "&:hover": { backgroundColor: "#e6c233" },
          }}
          variant="contained"
          onClick={resetAttempt}
        >
          إعادة المحاولة
        </Button>
        <Button
          sx={{
            fontSize: "18px",
            padding: "12px 24px",
            backgroundColor: "#60B463",
            "&:hover": { backgroundColor: "#4fa352" },
          }}
          variant="contained"
          onClick={showAnswers}
        >
          الإصلاح
        </Button>
      </Box>

    </Box>
  );
};

export default PortRankingExercise;
