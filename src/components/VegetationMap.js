import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Circle,
  LayersControl,
  Popup,
} from "react-leaflet";
import {
  Button,
  Paper,
  Typography,
  Box,
  IconButton,
  Tooltip as MuiTooltip,
} from "@mui/material";
import { Layers, Refresh, Satellite } from "@mui/icons-material";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from 'framer-motion';

// Correction pour les icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const VegetationMap = () => {
  // États pour la visibilité des couches
  const [activeLayers, setActiveLayers] = useState({
    humidForest: false,
    dryForest: false,
    steppe: false,
    desert: false,
    satellite: false,
  });

  // Données des cercles pour chaque type de végétation
  const [vegetationCircles, setVegetationCircles] = useState({
    humidForest: [],
    dryForest: [],
    steppe: [],
    desert: [],
  });

  // Chargement des données
  useEffect(() => {
    // Données des cercles pour les différentes végétations
  const mockData = {
  humidForest: [
    { center: [35.5, -5.5], radius: 70000, name: "غابات رطبة الريف" },
    { center: [34.9, -2.3], radius: 55000, name: "غابات رطبة الأطلس المتوسط" },
    { center: [32.5, -6.5], radius: 60000, name: "غابات رطبة الأطلس الكبير" },
    { center: [35.8, 6.0], radius: 70000, name: "غابات رطبة الأوراس" },
    { center: [36.5, 2.5], radius: 50000, name: "غابات رطبة جبل شنوة" },
    { center: [36.0, 5.0], radius: 60000, name: "غابات رطبة الأطلس التلي" },
    { center: [36.8, 9.2], radius: 60000, name: "غابات رطبة الشمال التونسي" },
    { center: [34.5, 8.3], radius: 50000, name: "غابات رطبة الشمال الشرقي" },
    { center: [36.2, 10.3], radius: 40000, name: "غابات رطبة جبل الجلود" },
    //{ center: [32.8, 20.0], radius: 60000, name: "غابات رطبة جبل الأخضر" },
    { center: [32.0, 13.0], radius: 50000, name: "غابات رطبة الجبل الغربي" },
  ],
  dryForest: [
    { center: [33.5, -4.8], radius: 80000, name: "غابات جافة الأطلس المتوسط" },
    { center: [32.8, -3.5], radius: 60000, name: "غابات جافة الأطلس الصغير" },
    { center: [31.8, -6.0], radius: 65000, name: "غابات جافة أطلس العياشي" },
    { center: [34.5, 7.5], radius: 70000, name: "غابات جافة الأطلس التلي" },
    { center: [35.0, 5.5], radius: 60000, name: "غابات جافة الأوراس" },
    { center: [33.0, 6.8], radius: 65000, name: "غابات جافة الأطلس الصحراوي" },
    { center: [33.0, 8.0], radius: 60000, name: "غابات جافة جبل الشعانبي" },
    { center: [35.5, 11.0], radius: 70000, name: "غابات جافة المهدية" },
    { center: [32.3, 22.0], radius: 65000, name: "غابات جافة الجبل الأخضر" },
    { center: [32.5, 13.5], radius: 55000, name: "غابات جافة جبل نفوسة" },
  ],
  steppe: [
    { center: [33.2, -2.0], radius: 110000, name: "سهوب المغرب الشرقي" },
    { center: [32.7, -5.0], radius: 100000, name: "سهوب الأطلس الكبير" },
    { center: [30.5, -9.5], radius: 120000, name: "سهوب سوس" },
    { center: [35.0, 2.5], radius: 120000, name: "سهوب الجزائر العليا" },
    { center: [34.0, 3.0], radius: 110000, name: "سهوب الشلف" },
    { center: [33.2, 4.5], radius: 100000, name: "سهوب الجلفة" },
    { center: [34.5, 11.2], radius: 75000, name: "سهوب قصر هلال" },
    { center: [33.9, 9.2], radius: 80000, name: "سهوب توزر" },
    { center: [31.0, 12.0], radius: 105000, name: "سهوب الحدود الشرقية" },
    { center: [29.5, 15.0], radius: 110000, name: "سهوب الجنوب الشرقي" },
  ],
  desert: [
    { center: [24.5, -3.5], radius: 450000, name: "الصحراء الغربية" },
    { center: [25.5, -5.0], radius: 600000, name: "الصحراء الكبرى" },
    { center: [27.0, 9.0], radius: 300000, name: "الصحراء الليبية" },
    { center: [26.5, 8.0], radius: 600000, name: "الصحراء الكبرى الجزائرية" },
    { center: [25.8, 9.5], radius: 500000, name: "الصحراء الطاسيلي" },
    { center: [27.0, 6.0], radius: 550000, name: "الصحراء الشاملية" },
    { center: [23.0, -3.0], radius: 400000, name: "الصحراء الغربية" },
    { center: [28.0, 15.0], radius: 480000, name: "الصحراء الغربية الليبية" },
    { center: [23.0, -1.0], radius: 400000, name: "الصحراء الكبرى الموريتانية" },
    { center: [24.0, -9.0], radius: 600000, name: "الصحراء الكبرى التونسية" },
  ],
};

    setVegetationCircles(mockData);
  }, []);

  // Styles pour chaque type de végétation
  const layerStyles = {
    humidForest: {
      color: "#2E7D32",
      fillColor: "#4CAF50",
      fillOpacity: 0.6,
      weight: 2,
    },
    dryForest: {
      color: "#689F38",
      fillColor: "#8BC34A",
      fillOpacity: 0.6,
      weight: 2,
    },
    steppe: {
      color: "#5D4037",
      fillColor: "#795548",
      fillOpacity: 0.6,
      weight: 2,
    },
    desert: {
      color: "#FBC02D",
      fillColor: "#FFEB3B",
      fillOpacity: 0.5,
      weight: 1,
    },
  };

  // Fonction pour basculer une couche
  const toggleLayer = (layer) => {
    setActiveLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  // Basculer la vue satellite
  const toggleSatellite = () => {
    setActiveLayers((prev) => ({ ...prev, satellite: !prev.satellite }));
  };

  // Réinitialiser la carte
  const resetMap = () => {
    setActiveLayers({
      humidForest: false,
      dryForest: false,
      steppe: false,
      desert: false,
      satellite: false,
    });
  };

  return (
    <div
      style={{
        direction: "rtl",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* En-tête avec titre et légende */}
      <Paper elevation={3} style={{ padding: "16px", marginBottom: "10px" }}>
        <Typography variant="h5" align="center" gutterBottom>
          خريطة الغطاء النباتي للمغرب العربي
        </Typography>

        {/* Légende interactive */}
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
          <Button
            variant={activeLayers.humidForest ? "contained" : "outlined"}
            style={{
              backgroundColor: activeLayers.humidForest
                ? layerStyles.humidForest.fillColor
                : "white",
              color: activeLayers.humidForest
                ? "white"
                : layerStyles.humidForest.color,
            }}
            onClick={() => toggleLayer("humidForest")}
            startIcon={<Layers />}
          >
            غابات متوسطية رطبة
          </Button>

          <Button
            variant={activeLayers.dryForest ? "contained" : "outlined"}
            style={{
              backgroundColor: activeLayers.dryForest
                ? layerStyles.dryForest.fillColor
                : "white",
              color: activeLayers.dryForest
                ? "white"
                : layerStyles.dryForest.color,
            }}
            onClick={() => toggleLayer("dryForest")}
            startIcon={<Layers />}
          >
            غابات متوسطية جافة
          </Button>

          <Button
            variant={activeLayers.steppe ? "contained" : "outlined"}
            style={{
              backgroundColor: activeLayers.steppe
                ? layerStyles.steppe.fillColor
                : "white",
              color: activeLayers.steppe ? "white" : layerStyles.steppe.color,
            }}
            onClick={() => toggleLayer("steppe")}
            startIcon={<Layers />}
          >
            سباسب واحراش
          </Button>

          <Button
            variant={activeLayers.desert ? "contained" : "outlined"}
            style={{
              backgroundColor: activeLayers.desert
                ? layerStyles.desert.fillColor
                : "white",
              color: "black",
            }}
            onClick={() => toggleLayer("desert")}
            startIcon={<Layers />}
          >
            نبات صحراوي
          </Button>

          <MuiTooltip title="إعادة تعيين">
            <IconButton color="error" onClick={resetMap}>
              <Refresh />
            </IconButton>
          </MuiTooltip>

          <MuiTooltip title="رؤية القمر الصناعي">
            <IconButton
              color={activeLayers.satellite ? "primary" : "default"}
              onClick={toggleSatellite}
            >
              <Satellite />
            </IconButton>
          </MuiTooltip>
        </Box>
      </Paper>

      {/* Carte Leaflet */}
      <div style={{ flex: 1 }}>
        <MapContainer
          center={[28, 2]} // Centré sur le Maghreb
          zoom={5}
          style={{ width: "100%", height: "100%" }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: "100px",
              right: "50px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",

              padding: "10px",
              borderRadius: "8px",
              zIndex: 1000,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/assets/fourthCourse/chamel.png"
              alt="Logo"
              style={{ width: "50px", height: "auto" }}
            />
          </motion.div>
          <LayersControl position="topright">
            <LayersControl.BaseLayer
              checked={!activeLayers.satellite}
              name="الخريطة العادية"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer
              checked={activeLayers.satellite}
              name="القمر الصناعي"
            >
              <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
              />
            </LayersControl.BaseLayer>

            {/* Affichage conditionnel des cercles */}
            {activeLayers.humidForest &&
              vegetationCircles.humidForest.map((circle, index) => (
                <Circle
                  key={`humid-${index}`}
                  center={circle.center}
                  radius={circle.radius}
                  pathOptions={layerStyles.humidForest}
                >
                  <Popup>
                    <h3>{circle.name}</h3>
                    <p>النوع: غابات متوسطية رطبة</p>
                  </Popup>
                </Circle>
              ))}

            {activeLayers.dryForest &&
              vegetationCircles.dryForest.map((circle, index) => (
                <Circle
                  key={`dry-${index}`}
                  center={circle.center}
                  radius={circle.radius}
                  pathOptions={layerStyles.dryForest}
                >
                  <Popup>
                    <h3>{circle.name}</h3>
                    <p>النوع: غابات متوسطية جافة</p>
                  </Popup>
                </Circle>
              ))}

            {activeLayers.steppe &&
              vegetationCircles.steppe.map((circle, index) => (
                <Circle
                  key={`steppe-${index}`}
                  center={circle.center}
                  radius={circle.radius}
                  pathOptions={layerStyles.steppe}
                >
                  <Popup>
                    <h3>{circle.name}</h3>
                    <p>النوع: سباسب واحراش</p>
                  </Popup>
                </Circle>
              ))}

            {activeLayers.desert &&
              vegetationCircles.desert.map((circle, index) => (
                <Circle
                  key={`desert-${index}`}
                  center={circle.center}
                  radius={circle.radius}
                  pathOptions={layerStyles.desert}
                >
                  <Popup>
                    <h3>{circle.name}</h3>
                    <p>النوع: نبات صحراوي</p>
                  </Popup>
                </Circle>
              ))}
          </LayersControl>
        </MapContainer>
      </div>
    </div>
  );
};

export default VegetationMap;
