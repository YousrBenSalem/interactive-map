import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
} from "@mui/material";

const InteractiveCountryTable = () => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [droppedFlags, setDroppedFlags] = useState({});
  const [droppedCities, setDroppedCities] = useState({});
  const [shuffledCities, setShuffledCities] = useState([]);

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

  // Mélanger les villes au chargement
  useEffect(() => {
    shuffleCities();
  }, []);

  const shuffleCities = () => {
    const cities = countries.map((c) => c.city);
    const shuffled = [...cities].sort(() => Math.random() - 0.5);
    setShuffledCities(shuffled);
  };

  const flags = countries.map((country) => ({
    type: "flag",
    value: country.flag,
    name: country.name,
  }));

  const cities = shuffledCities.map((city, index) => ({
    type: "city",
    value: city,
    id: `city-${index}`, // Identifiant unique pour le suivi
  }));

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.setData("text/plain", item.value);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetCountry, dropType) => {
    e.preventDefault();
    if (draggedItem && draggedItem.type === dropType) {
      if (dropType === "flag") {
        setDroppedFlags((prev) => ({
          ...prev,
          [targetCountry.name]: draggedItem.value,
        }));
      } else {
        setDroppedCities((prev) => ({
          ...prev,
          [targetCountry.name]: draggedItem.value,
        }));
      }
    }
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
  };

  const handleReset = () => {
    setShowAnswers(false);
    setDroppedFlags({});
    setDroppedCities({});
    shuffleCities();
  };

  const isItemDropped = (item) => {
    return (
      Object.values(droppedFlags).includes(item.value) ||
      Object.values(droppedCities).includes(item.value)
    );
  };

  return (
    <div
      style={{
        direction: "rtl",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      {/* Zone de drag pour les drapeaux */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          padding: 2,
          marginBottom: 4,
          border: "1px dashed #ccc",
          borderRadius: 2,
          minHeight: 120,
        }}
      >
        {flags.map((flag, index) => (
          <Box
            key={`flag-${index}`}
            draggable
            onDragStart={(e) => handleDragStart(e, flag)}
            sx={{
              padding: 1.5,
              cursor: "grab",
              "&:active": { cursor: "grabbing" },
              opacity: isItemDropped(flag) ? 0.3 : 1,
            }}
          >
            <img
              src={flag.value}
              alt={`Drapeau ${flag.name}`}
              style={{
                width: 120,
                height: 80,
                objectFit: "cover",
                border: "1px solid #ddd",
                borderRadius: 4,
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Zone de drag pour les villes */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          padding: 2,
          marginBottom: 4,
          border: "1px dashed #ccc",
          borderRadius: 2,
          minHeight: 60,
        }}
      >
        {cities.map((city, index) => (
          <Box
            key={city.id}
            draggable
            onDragStart={(e) => handleDragStart(e, city)}
            sx={{
              padding: 1.5,
              cursor: "grab",
              "&:active": { cursor: "grabbing" },
              opacity: isItemDropped(city) ? 0.3 : 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              {city.value}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Tableau de drop */}
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              {countries.map((country, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
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
                  sx={{
                    padding: "16px",
                    height: "120px",
                    width: "250px",
                    border: !showAnswers ? "2px dashed #aaa" : "none",
                    backgroundColor: !showAnswers ? "#f9f9f9" : "inherit",
                  }}
                >
                  {showAnswers ? (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={country.flag}
                        alt={`Drapeau ${country.name}`}
                        style={{ width: 100, height: 80, objectFit: "cover" }}
                      />
                      <Typography
                        sx={{ fontWeight: "bold", mb: 1, fontSize: "20px" }}
                      >
                        {country.city}
                      </Typography>
                    </Box>
                  ) : (
                    <>
                      <Box
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, country, "flag")}
                        sx={{
                          height: "80px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px dashed #ccc",
                          mb: 1,
                          backgroundColor: droppedFlags[country.name]
                            ? "inherit"
                            : "#f5f5f5",
                        }}
                      >
                        {droppedFlags[country.name] ? (
                          <img
                            src={droppedFlags[country.name]}
                            alt={`Drapeau ${country.name}`}
                            style={{
                              width: 100,
                              height: 80,
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <Typography sx={{ color: "#666" }}>
                            اسحب الصورة هنا
                          </Typography>
                        )}
                      </Box>
                      <Box
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, country, "city")}
                        sx={{
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px dashed #ccc",
                          backgroundColor: droppedCities[country.name]
                            ? "inherit"
                            : "#f5f5f5",
                        }}
                      >
                        {droppedCities[country.name] ? (
                          <Typography sx={{ fontWeight: "bold" }}>
                            {droppedCities[country.name]}
                          </Typography>
                        ) : (
                          <Typography sx={{ color: "#666" }}>
                            اسحب المدينة هنا
                          </Typography>
                        )}
                      </Box>
                    </>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 3 }}>
        <Button
          variant="contained"
          onClick={handleReset}
          sx={{
            backgroundColor: "#F6D339",
            color: "white",
            fontSize: "16px",
            padding: "10px 25px",
            "&:hover": { backgroundColor: "#e6c330" },
          }}
        >
          إعادة المحاولة
        </Button>
        <Button
          variant="contained"
          onClick={handleShowAnswers}
          sx={{
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "16px",
            padding: "10px 25px",
            "&:hover": { backgroundColor: "#3d8b40" },
          }}
        >
          الإصلاح
        </Button>
      </Box>
    </div>
  );
};

export default InteractiveCountryTable;
