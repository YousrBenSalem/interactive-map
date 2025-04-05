import React, { useState } from "react";
import { Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const MountainTable = () => {
  const [showArrows, setShowArrows] = useState(false);

  // Données organisées en 3 colonnes
  const columns = [
    ["الهيمالايا ", "جبل الألب", "جبال الأطلس "], // Colonne 1
    ["أوروبا", "آسيا", "إفريقيا "], // Colonne 2
    ["طوبقال", "إيفرست ", "الجبل الأبيض"], // Colonne 3
  ];

  // Configuration des flèches (startY, startX, endX)
  const arrowsConfig = [
    // Flèches entre colonne 1 et 2
    { startY: "10%", startX: "calc(50% - 100px)", endX: "calc(50% - 0px)" },
    { startY: "50%", startX: "calc(50% - 100px)", endX: "calc(50% - 0px)" },
    { startY: "83%", startX: "calc(50% - 100px)", endX: "calc(50% - 0px)" },

    // Flèches entre colonne 2 et 3
    { startY: "17%", startX: "calc(50% + 0px)", endX: "calc(50% + 100px)" },
    { startY: "50%", startX: "calc(50% + 0px)", endX: "calc(50% + 100px)" },
    { startY: "83%", startX: "calc(50% + 0px)", endX: "calc(50% + 100px)" },
  ];

  return (
    <div
      style={{
        maxWidth: "1000px",
        direction: "rtl",
        fontFamily: "Arial, sans-serif",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {/* Conteneur des colonnes */}
      <div
        style={{
          display: "flex",
          position: "relative",
          minHeight: "400px",
          gap: "100px",
          justifyContent: "center",
        }}
      >
        {/* Colonnes */}
        {columns.map((col, colIndex) => (
          <div
            key={colIndex}
            style={{
              width: "200px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {col.map((item, itemIndex) => (
              <div
                key={itemIndex}
                style={{
                  padding: "15px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  textAlign: "center",
                  minHeight: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        ))}

        {/* Flèches */}
        <AnimatePresence>
          {showArrows && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: "none",
              }}
            >
              {arrowsConfig.map((arrow, index) => (
                <motion.svg
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: "absolute",
                    left: arrow.startX,
                    top: arrow.startY,
                    width: "100px",
                    height: "20px",
                  }}
                >
                  <path
                    d="M0,10 L80,10 L70,5 L100,10 L70,15 L80,10"
                    fill="#60B463"
                    stroke="#4a8a4d"
                    strokeWidth="1"
                    transform={arrow.startX.includes("+") ? "scaleX(-1)" : ""}
                  />
                </motion.svg>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Boutons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F6D339",
            "&:hover": { backgroundColor: "#e6c233" },
            fontWeight: "bold",
          }}
          onClick={() => setShowArrows(false)}
        >
          إعادة المحاولة
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#60B463",
            "&:hover": { backgroundColor: "#4fa352" },
            fontWeight: "bold",
          }}
          onClick={() => setShowArrows(true)}
        >
          الإصلاح
        </Button>
      </div>
    </div>
  );
};

export default MountainTable;
