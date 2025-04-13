import React, { useState } from "react";
import { Button } from "@mui/material";

const NaturalVegetationTable = () => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [resetInputs, setResetInputs] = useState(false);

  // Données du tableau
  const tableData = [
    {
      vegetationType: "الغابات",
      terrain: "جبال",
      climate: "رطب",
      alwaysVisible: true,
    },
    {
      vegetationType: "السباسب",
      terrain: "هضاب",
      climate: "شبه جاف",
      alwaysVisible: true,
    },
    {
      vegetationType: "النبات الصحراوي",
      terrain: "هضاب وسهول",
      climate: "جاف وقاحل",
      alwaysVisible: true,
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

  // Fonction pour déterminer si une cellule doit toujours être visible
  const shouldAlwaysShow = (value) => {
    const alwaysVisibleValues = [
      "الغابات",
      "السباسب",
      "النبات الصحراوي",
      "هضاب وسهول",
      "رطب",
    ];
    return alwaysVisibleValues.includes(value);
  };

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
              colSpan="1"
              rowSpan="2"
            >
              <b>نوع النبات الطبيعي</b>
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
              }}
              colSpan="2"
            >
              <b>الظروف الطبيعية الملائمة</b>
            </th>
          </tr>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
              }}
            >
              التضاريس
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
              }}
            >
              المناخ
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
                {shouldAlwaysShow(row.vegetationType) || showAnswers ? (
                  <span
                    style={{
                      color: shouldAlwaysShow(row.vegetationType)
                        ? "inherit"
                        : "#60B463",
                      fontWeight: "bold",
                    }}
                  >
                    {row.vegetationType}
                  </span>
                ) : (
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
                )}
              </td>

              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {shouldAlwaysShow(row.terrain) || showAnswers ? (
                  <span
                    style={{
                      color: shouldAlwaysShow(row.terrain)
                        ? "inherit"
                        : "#60B463",
                      fontWeight: "bold",
                    }}
                  >
                    {row.terrain}
                  </span>
                ) : (
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
                )}
              </td>

              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {shouldAlwaysShow(row.climate) || showAnswers ? (
                  <span
                    style={{
                      color: shouldAlwaysShow(row.climate)
                        ? "inherit"
                        : "#60B463",
                      fontWeight: "bold",
                    }}
                  >
                    {row.climate}
                  </span>
                ) : (
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

export default NaturalVegetationTable;
