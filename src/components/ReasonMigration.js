import React, { useState } from "react";
import { Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const ReasonsMigration = () => {
  const [showArrows, setShowArrows] = useState(false);

  const reasons = [
    "أسباب تعليمية",
    "أسباب اجتماعية",
    "أسباب عائلية",
    "أسباب اقتصادية",
  ];

  const motivations = [
    "مصلحية العائلة أو أحد أفرادها",
    "العمل",
    "الدراسة",
    "الزواج",
  ];

  // Configuration des flèches inclinées
  const arrowsConfig = [
    { angle: 150, startY: "25%", length: 180 },
    { angle: 5, startY: "35%", length: 160 },
    { angle: -5, startY: "55%", length: 160 },
    { angle: -15, startY: "75%", length: 180 },
  ];

  return (
    <div
      style={{
        maxWidth: "1000px", // Largeur augmentée
        alignItems: "center", // Centrage global
        direction: "rtl",
        fontFamily: "Arial, sans-serif",
        margin: "0 auto",
        padding: "20px",
        position: "relative",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "30px",
        }}
      >
        أسباب الهجرة والدوافع
      </h2>

      <div
        style={{
          display: "flex",
          position: "relative",
          minHeight: "400px",
          gap: "150px", // Grand espace entre colonnes
          justifyContent: "center", // Centrage horizontal
        }}
      >
        {/* Colonne de droite - الدوافع */}
        <div
          style={{
            width: "300px", // Largeur fixe
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>الدوافع</h3>
          {motivations.map((motivation, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                margin: "10px 0",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                textAlign: "center",
                position: "relative",
              }}
            >
              {motivation}
            </div>
          ))}
        </div>

        {/* Colonne de gauche - الأسباب */}
        <div
          style={{
            width: "300px", // Largeur fixe
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>الأسباب</h3>
          {reasons.map((reason, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                margin: "10px 0",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                textAlign: "center",
                position: "relative",
              }}
            >
              {reason}
            </div>
          ))}
        </div>

        {/* Flèches SVG inclinées */}
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
                  transition={{ delay: index * 0.2 }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: arrow.startY,
                    transform: `translate(-50%, -50%) rotate(${arrow.angle}deg)`,
                    overflow: "visible",
                  }}
                  width="150"
                  height="40"
                  viewBox="0 0 150 40"
                >
                  <path
                    d={`M0,20 L${arrow.length - 30},20 L${
                      arrow.length - 40
                    },5 L${arrow.length},20 L${arrow.length - 40},35 L${
                      arrow.length - 30
                    },20`}
                    fill="#60B463"
                    stroke="#4a8a4d"
                    strokeWidth="1"
                  />
                </motion.svg>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Button
          sx={{
            fontSize: "17px",
            padding: "12px 24px",
            backgroundColor: "#F6D339",
            "&:hover": { backgroundColor: "#e6c233" },
            fontWeight: "bold",
          }}
          variant="contained"
          onClick={() => setShowArrows(false)}
        >
          إعادة المحاولة
        </Button>
        <Button
          sx={{
            fontSize: "18px",
            padding: "12px 24px",
            backgroundColor: "#60B463",
            "&:hover": { backgroundColor: "#4fa352" },
            fontWeight: "bold",
          }}
          variant="contained"
          onClick={() => setShowArrows(true)}
        >
          الإصلاح
        </Button>
      </div>
    </div>
  );
};

export default ReasonsMigration;
