import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const PrecipitationMap = () => {
  const [precipitationData, setPrecipitationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState("01"); // Janvier par défaut

  // Coordonnées approximatives du Maghreb
  const maghrebBounds = [
    [15, -20], // Sud-Ouest
    [38, 15], // Nord-Est
  ];

  // Données simplifiées des pays du Maghreb (en pratique, vous devriez utiliser un GeoJSON précis)
  const maghrebCountries = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { name: "Maroc", code: "MAR" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-13.0, 27.7],
              [-8.7, 27.7],
              [-8.7, 36.0],
              [-1.0, 36.0],
              [-1.0, 35.0],
              [-5.5, 35.0],
              [-5.5, 32.5],
              [-13.0, 32.5],
              [-13.0, 27.7],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: { name: "Algérie", code: "DZA" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-8.7, 19.0],
              [12.0, 19.0],
              [12.0, 37.0],
              [-1.0, 37.0],
              [-1.0, 36.0],
              [-8.7, 36.0],
              [-8.7, 19.0],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: { name: "Tunisie", code: "TUN" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [7.5, 30.2],
              [11.6, 30.2],
              [11.6, 37.5],
              [7.5, 37.5],
              [7.5, 30.2],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: { name: "Libye", code: "LBY" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [9.5, 19.5],
              [25.0, 19.5],
              [25.0, 33.5],
              [9.5, 33.5],
              [9.5, 19.5],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: { name: "Mauritanie", code: "MRT" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-17.0, 14.7],
              [-5.0, 14.7],
              [-5.0, 27.7],
              [-13.0, 27.7],
              [-13.0, 20.7],
              [-17.0, 20.7],
              [-17.0, 14.7],
            ],
          ],
        },
      },
    ],
  };

  useEffect(() => {
    // Simuler la récupération des données de précipitation
    // En pratique, vous devriez utiliser une API comme WorldBank ou Climate Data Store
    const fetchData = async () => {
      try {
        // Simulation de données - remplacer par un appel API réel
        const simulatedData = {
          MAR: {
            "01": 50,
            "02": 40,
            "03": 45,
            "04": 30,
            "05": 20,
            "06": 5,
            "07": 1,
            "08": 3,
            "09": 15,
            10: 35,
            11: 45,
            12: 55,
          },
          DZA: {
            "01": 30,
            "02": 25,
            "03": 30,
            "04": 25,
            "05": 15,
            "06": 5,
            "07": 2,
            "08": 4,
            "09": 10,
            10: 20,
            11: 30,
            12: 35,
          },
          TUN: {
            "01": 40,
            "02": 35,
            "03": 40,
            "04": 30,
            "05": 20,
            "06": 10,
            "07": 5,
            "08": 8,
            "09": 20,
            10: 30,
            11: 35,
            12: 45,
          },
          LBY: {
            "01": 15,
            "02": 10,
            "03": 12,
            "04": 8,
            "05": 5,
            "06": 1,
            "07": 0,
            "08": 0,
            "09": 3,
            10: 8,
            11: 12,
            12: 18,
          },
          MRT: {
            "01": 5,
            "02": 3,
            "03": 2,
            "04": 1,
            "05": 0,
            "06": 0,
            "07": 0,
            "08": 1,
            "09": 2,
            10: 5,
            11: 8,
            12: 10,
          },
        };

        setPrecipitationData(simulatedData);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fonction pour déterminer la couleur en fonction des précipitations
  const getColor = (value) => {
    if (!value) return "#CCCCCC";

    return value > 80
      ? "#084594"
      : value > 60
      ? "#2171b5"
      : value > 40
      ? "#4292c6"
      : value > 20
      ? "#6baed6"
      : value > 10
      ? "#9ecae1"
      : value > 5
      ? "#c6dbef"
      : value > 0
      ? "#e6550d"
      : "#ffffcc";
  };

  // Style pour les pays
  const countryStyle = (feature) => {
    const countryCode = feature.properties.code;
    const precipitation =
      precipitationData?.[countryCode]?.[selectedMonth] || 0;

    return {
      fillColor: getColor(precipitation),
      weight: 1,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  // Gestionnaire d'événement pour chaque pays
  const onEachCountry = (country, layer) => {
    const countryCode = country.properties.code;
    const countryName = country.properties.name;
    const precipitation =
      precipitationData?.[countryCode]?.[selectedMonth] || "N/A";

    layer.bindTooltip(
      `<b>${countryName}</b><br>Précipitation: ${precipitation} mm`,
      { permanent: false, sticky: true }
    );
  };

  if (loading) {
    return <div>Chargement des données...</div>;
  }

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <div style={{ marginBottom: "20px" }}>
        <label>Sélectionnez un mois: </label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          style={{ padding: "5px", marginLeft: "10px" }}
        >
          <option value="01">Janvier</option>
          <option value="02">Février</option>
          <option value="03">Mars</option>
          <option value="04">Avril</option>
          <option value="05">Mai</option>
          <option value="06">Juin</option>
          <option value="07">Juillet</option>
          <option value="08">Août</option>
          <option value="09">Septembre</option>
          <option value="10">Octobre</option>
          <option value="11">Novembre</option>
          <option value="12">Décembre</option>
        </select>
      </div>

      <MapContainer
        center={[28, 2]}
        zoom={4}
        style={{ height: "100%", width: "100%" }}
        minZoom={4}
        maxBounds={maghrebBounds}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <GeoJSON
          data={maghrebCountries}
          style={countryStyle}
          onEachFeature={onEachCountry}
        />
      </MapContainer>

      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <div style={{ display: "inline-block", marginRight: "20px" }}>
          <span
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              backgroundColor: "#084594",
              marginRight: "5px",
            }}
          ></span>
           80 mm
        </div>
        <div style={{ display: "inline-block", marginRight: "20px" }}>
          <span
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              backgroundColor: "#4292c6",
              marginRight: "5px",
            }}
          ></span>
          40-60 mm
        </div>
        <div style={{ display: "inline-block", marginRight: "20px" }}>
          <span
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              backgroundColor: "#9ecae1",
              marginRight: "5px",
            }}
          ></span>
          10-20 mm
        </div>
        <div style={{ display: "inline-block", marginRight: "20px" }}>
          <span
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              backgroundColor: "#e6550d",
              marginRight: "5px",
            }}
          ></span>
          1-5 mm
        </div>
        <div style={{ display: "inline-block" }}>
          <span
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              backgroundColor: "#ffffcc",
              marginRight: "5px",
            }}
          ></span>
          0 mm
        </div>
      </div>
    </div>
  );
};

export default PrecipitationMap;
