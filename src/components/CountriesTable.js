import React, { useState } from "react";
import { Button } from "@mui/material";

const CountriesTable = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  // Données du tableau avec les réponses à afficher
  const answers = [
    {
      tunisia: "الشعانبي",
      libya: "",
      algeria: "أوراس",
      morocco: "طوبقال",
      mauritania: "",
    },
    {
      tunisia: "خمير",
      libya: "",
      algeria: "",
      morocco: "",
      mauritania: "",
    },
  ];

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  const resetAll = () => {
    setShowAnswers(false);
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
            >
              تونس
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
              }}
            >
              ليبيا
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
              }}
            >
              الجزائر
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
              }}
            >
              المغرب الأقصى
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
              }}
            >
              موريطانيا
            </th>
          </tr>
        </thead>
        <tbody>
          {answers.map((row, index) => (
            <tr key={index}>
              {/* Tunisie */}
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {showAnswers && row.tunisia ? (
                  <span style={{ color: "#60B463", fontWeight: "bold" }}>
                    {row.tunisia}
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
                    placeholder="........................."
                  />
                )}
              </td>

              {/* Libye */}
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {showAnswers && row.libya ? (
                  <span style={{ color: "#60B463", fontWeight: "bold" }}>
                    {row.libya}
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
                    placeholder="........................."
                  />
                )}
              </td>

              {/* Algérie */}
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {showAnswers && row.algeria ? (
                  <span style={{ color: "#60B463", fontWeight: "bold" }}>
                    {row.algeria}
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
                    placeholder="........................."
                  />
                )}
              </td>

              {/* Maroc */}
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {showAnswers && row.morocco ? (
                  <span style={{ color: "#60B463", fontWeight: "bold" }}>
                    {row.morocco}
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
                    placeholder="........................."
                  />
                )}
              </td>

              {/* Mauritanie */}
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {showAnswers && row.mauritania ? (
                  <span style={{ color: "#60B463", fontWeight: "bold" }}>
                    {row.mauritania}
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
                    placeholder="........................."
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

export default CountriesTable;
