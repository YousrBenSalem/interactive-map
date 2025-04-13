import React, { useState } from "react";
import { Button } from "@mui/material";

const CityDesignTable = () => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [resetInputs, setResetInputs] = useState(false);

  // Données du tableau
  const tableData = [
    {
      design: "الشطرنجي",
      description:
        "المساحات المبنية في شكل رقعة شطرنجية تقسمها شوارع و أنهج مستقيمة و متعامدة",
    },
    {
      design: "دائري",
      description:
        "تنطلق للشوارع من مركز المدينة و تتقاطع مع شوارع دائرية: تتكون المدينة من أحزمة أحياء تحيط بالمركز.",
    },
    {
      design: "خطي",
      description: "تتراصف المباني على طول الشارع الرئيسي",
    },
    {
      design: "غير هندسي",
      description: "أنهج غير مستقيمة، ضيقة ومتعرجة",
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
              تصميم المدينة
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
              }}
            >
              الخصائص
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
                {row.design}
              </td>

              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {resetInputs || !showAnswers ? (
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
                    {row.description}
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

export default CityDesignTable;
