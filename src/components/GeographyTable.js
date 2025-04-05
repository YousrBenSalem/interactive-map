import React, { useState } from "react";
import {Button} from "@mui/material";

const GeographyTable = () => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [resetInputs, setResetInputs] = useState(false);

  // Données du tableau
  const tableData = [
    {
      location: "القارة الإفريقية",
      north: "البحر الأبيض المتوسط",
      south: "المحيط الهندي والمحيط الأطلسي",
      east: "البحر الأحمر والمحيط الهندي",
      west: "المحيط الأطلسي",
    },
    {
      location: "القارة الأمريكية",
      north: "المحيط المتجمد الشمالي",
      south: "المحيط القطبي الجنوبي",
      east: "المحيط الأطلسي",
      west: " المحيط الهادئ ",
    },
    {
      location: "المحيط الأطلسي",
      north: "المحيط المتجمد الشمالي",
      south: "المحيط القطبي الجنوبي",
      east: "قارات أوروبا وأفريقيا",
      west: "القارة الأمريكية",
    },
    {
      location: "المحيط الهندي",
      north: "قارة آسيا",
      south: "المحيط القطبي الجنوبي",
      east: "قارة استراليا",
      west: "قارة إفريقيا",
    },
  ];

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
    setResetInputs(false);
  };

  const resetAll = () => {
    setResetInputs(true);
    setShowAnswers(false);
  };

  // Fonction pour déterminer si une ligne doit être statique (seule la 1ère ligne)
  const isStaticRow = (index) => index === 0;

  return (
    
    <div
      style={{
        direction: "rtl",
        fontFamily: "Arial, sans-serif",
        margin: "20px",
      }}
    >
      
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
              }}
            >
              الموقع
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
              }}
            >
              شمال
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
              }}
            >
              جنوب
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
              }}
            >
              شرق
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
              }}
            >
              غرب
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {row.location}
              </td>

              {/* Colonne Nord */}
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {isStaticRow(index) ? (
                  row.north
                ) : resetInputs || !showAnswers ? (
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      textAlign: "center",
                      fontSize: "16px",
                    }}
                    placeholder="........."
                  />
                ) : (
                  <span style={{ color: "#60B463", fontWeight: "bold" }}>
                    {row.north}
                  </span>
                )}
              </td>

              {/* Colonne Sud */}
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {isStaticRow(index) ? (
                  row.south
                ) : resetInputs || !showAnswers ? (
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      textAlign: "center",
                      fontSize: "16px",
                    }}
                    placeholder="........."
                  />
                ) : (
                  <span style={{ color: "#60B463", fontWeight: "bold" }}>
                    {row.south}
                  </span>
                )}
              </td>

              {/* Colonne Est */}
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {isStaticRow(index) ? (
                  row.east
                ) : resetInputs || !showAnswers ? (
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      textAlign: "center",
                      fontSize: "16px",
                    }}
                    placeholder="........."
                  />
                ) : (
                  <span style={{ color: "#60B463", fontWeight: "bold" }}>
                    {row.east}
                  </span>
                )}
              </td>

              {/* Colonne Ouest */}
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {isStaticRow(index) ? (
                  row.west
                ) : resetInputs || !showAnswers ? (
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      textAlign: "center",
                      fontSize: "16px",
                    }}
                    placeholder="........."
                  />
                ) : (
                  <span style={{ color: "#60B463", fontWeight: "bold" }}>
                    {row.west}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <Button
          sx={{
            fontSize: "17px",
            padding: "12px 24px",
            backgroundColor: "#F6D339",
            "&:hover": { backgroundColor: "#e6c233" },
          }}
          variant="contained"
          onClick={resetAll}
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
          onClick={toggleAnswers}
        >
          الإصلاح
        </Button>
      </div>
    </div>
  );
};

export default GeographyTable;
