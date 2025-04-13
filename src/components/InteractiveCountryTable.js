import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";





const InteractiveCountryTable = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  // Données des pays avec villes et drapeaux
  const countries = [
    { name: "ليبيا", city: "طرابلس", flag: "/assets/sixthcourse/libya.jpg" },
    { name: "تونس", city: "تونس", flag: "/assets/sixthcourse/tunisia.jpg" },
    {
      name: "الجزائر",
      city: "الجزائر",
      flag: "/assets/sixthcourse/algeria.jpg",
    },
    { name: "المغرب", city: "الرباط", flag: "/assets/sixthcourse/morocco.jpg" },
    {
      name: "موريتانيا",
      city: "نواكشوط",
      flag: "/assets/sixthcourse/mauritania.jpg",
    },
  ];

  const handleShowAnswers = () => {
    setShowAnswers(true);
  };

  const handleReset = () => {
    setShowAnswers(false);
  };

  return (
    <div
      style={{
        direction: "rtl",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              {countries.map((country, index) => (
                <TableCell
                  key={index}
                  align="center"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    padding: "16px",
                  }}
                >
                  {country.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {countries.map((country, index) => (
                <TableCell
                  key={index}
                  align="center"
                  style={{
                    padding: "16px",
                    height: "120px",
                    width: "250px",
                  }}
                >
                  {showAnswers ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{ fontWeight: "bold" , marginBottom : "10px" , fontSize:"20px"}}
                      >
                        {country.city}
                      </div>
                      <img
                        src={country.flag}
                        alt={`Drapeau ${country.name}`}
                        style={{
                          width: "100px",
                          height: "80px",
                          objectFit: "cover",
                          marginBottom: "10px",
                        }}
                      />
                    </div>
                  ) : (
                    <TextField
                      placeholder="........."
                      inputProps={{
                        style: {
                          textAlign: "center",
                          height: "40px",
                        },
                      }}
                      fullWidth
                      style={{ marginTop: "10px" }}
                    />
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

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
          onClick={handleReset}
          style={{
            backgroundColor: "#F6D339",
            color: "white",
            fontSize: "16px",
            padding: "10px 25px",
          }}
        >
          إعادة المحاولة
        </Button>
        <Button
          variant="contained"
          onClick={handleShowAnswers}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "16px",
            padding: "10px 25px",
          }}
        >
          الإصلاح
        </Button>
      </div>
    </div>
  );
};

export default InteractiveCountryTable;
