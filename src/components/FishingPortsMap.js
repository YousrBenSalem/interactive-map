import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Tooltip,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Couleurs par niveau de production (dégradé de jaune)
const colorScale = {
  27000: "#FFD700", // Or foncé
  19000: "#FFDF40",
  15000: "#FFE87C",
  13000: "#FFEEA8",
  8000: "#FFF4C2",
  5000: "#FFF8D9",
  1300: "#FFFCE6",
  1000: "#FFFFF0", // Jaune très clair
};

// Données complètes des gouvernorats et ports
const governoratesData = {
  صفاقس: {
    position: [34.7406, 10.7603],
    production: 27000,
    ports: [
      "ميناء صفاقس",
      "ميناء العطايا",
      "ميناء القراطن",
      "ميناء المحرس",
      "ميناء اللوزة اللواتة",
      "ميناء العوابد",
      "ميناء الزبوسة",
      "ميناء الصخيرة",
    ],
    color: colorScale[27000],
  },
  سوسة: {
    position: [35.8254, 10.636],
    production: 19000,
    ports: ["ميناء سوسة", "ميناء هرقلة"],
    color: colorScale[19000],
  },
  المنستير: {
    position: [35.778, 10.827],
    production: 19000,
    ports: [
      "ميناء المنستير",
      "ميناء طبلبة",
      "ميناء صيادة",
      "ميناء البقالطة",
      "ميناء قصيبة المديوني",
    ],
    color: colorScale[19000],
  },
  المهدية: {
    position: [35.504, 11.062],
    production: 19000,
    ports: ["ميناء المهدية", "ميناء الشابة", "ميناء سلقطة", "ميناء ملولش"],
    color: colorScale[19000],
  },
  قابس: {
    position: [33.8815, 10.0982],
    production: 15000,
    ports: ["ميناء قابس", "ميناء الزارات"],
    color: colorScale[15000],
  },
  مدنين: {
    position: [33.355, 10.492],
    production: 13000,
    ports: [
      "ميناء جرجيس",
      "ميناء حومة السوق",
      "ميناء أجيم",
      "ميناء الكتف",
      "ميناء بوغرارة",
      "ميناء أغير",
      "ميناء حسي جلابة",
      "ميناء القرين",
    ],
    color: colorScale[13000],
  },
  نابل: {
    position: [36.4561, 10.7376],
    production: 8000,
    ports: [
      "ميناء قليبية",
      "ميناء بني خيار",
      "ميناء سيدي داود",
      "ميناء الهوارية",
    ],
    color: colorScale[8000],
  },
  بنزرت: {
    position: [37.2744, 9.8739],
    production: 5000,
    ports: ["رصيف رأس زبيب", "ميناء سيدي مشرق", "ميناء منزل عبد الرحمان"],
    color: colorScale[5000],
  },
  أريانة: {
    position: [36.8625, 10.1956],
    production: 1300,
    ports: ["ميناء قلعة الأندلس"],
    color: colorScale[1300],
  },
  تونس: {
    position: [36.8186, 10.1658],
    production: 1300,
    ports: ["ميناء حلق الوادي"],
    color: colorScale[1300],
  },
  جندوبة: {
    position: [36.5, 8.7833],
    production: 1000,
    ports: ["ميناء طبرقة", "ميناء جرزونة", "ميناء غار الملح"],
    color: colorScale[1000],
  },
};

// Création des polygones simplifiés pour chaque gouvernorat
const createGovernorateFeature = (name, position) => ({
  type: "Feature",
  properties: { name },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [position[1] - 0.3, position[0] - 0.2],
        [position[1] + 0.3, position[0] - 0.2],
        [position[1] + 0.3, position[0] + 0.2],
        [position[1] - 0.3, position[0] + 0.2],
        [position[1] - 0.3, position[0] - 0.2],
      ],
    ],
  },
});

const tunisiaGeoJSON = {
  type: "FeatureCollection",
  features: Object.keys(governoratesData).map((name) =>
    createGovernorateFeature(name, governoratesData[name].position)
  ),
};

const FishingPortsMap = () => {
  const [activeGov, setActiveGov] = useState(null);
  const [showColors, setShowColors] = useState(false);

  const styleFeature = (feature) => {
    const govName = feature.properties.name;
    const govData = governoratesData[govName] || {};

    return {
      fillColor: showColors ? govData.color : "#FFFFFF",
      weight: 2,
      opacity: 1,
      color: "#666",
      fillOpacity: 0.7,
      dashArray: showColors ? null : "5, 5",
    };
  };

  const highlightFeature = (e) => {
    const layer = e.target;
    layer.setStyle({
      weight: 3,
      color: "#000",
      fillOpacity: 0.9,
    });
    setActiveGov(layer.feature.properties.name);
  };

  const resetHighlight = (e) => {
    const layer = e.target;
    layer.setStyle(styleFeature(layer.feature));
    setActiveGov(null);
  };

  const onEachFeature = (feature, layer) => {
    const govName = feature.properties.name;
    const govData = governoratesData[govName] || {};

    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: () => setActiveGov(govName),
    });

    layer.bindTooltip(
      `<div style="text-align: right;">
        <b>${govName}</b><br/>
        ${govData.ports?.join("، ") || "لا توجد بيانات"}
      </div>`,
      { direction: "top" }
    );
  };

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "250px",
          transform: "translateX(-50%)",
          zIndex: 1000,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "10px 30px",
          borderRadius: "5px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#2c3e50",
          fontFamily: "Arial, sans-serif",
          border: "2px solid #4CAF50",
          maxWidth: "calc(100% - 40px)", // Pour éviter que le titre ne dépasse sur les bords
        }}
      >
        نشاط الموانئ الصيد البحري بالبلاد التونسية
      </div>
      <MapContainer
        center={[34.0, 9.0]}
        zoom={7}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Image en haut à droite */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 1000,
          }}
        >
          <img
            src="/assets/fourthCourse/chamel.png"
            alt="Logo Chameau"
            style={{
              width: "50px",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        {/* Image en bas à gauche */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            zIndex: 1000,
          }}
        >
          <img
            src="/assets/EighthCourse/ligne.jpg"
            alt="Ligne"
            style={{
              width: "200px",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <GeoJSON
          data={tunisiaGeoJSON}
          style={styleFeature}
          onEachFeature={onEachFeature}
        />
      </MapContainer>

      {/* Légende */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          background: "white",
          padding: "15px",
          borderRadius: "5px",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)",
          textAlign: "right",
          direction: "rtl",
        }}
      >
        <button
          onClick={() => setShowColors(!showColors)}
          style={{
            padding: "8px 15px",
            marginBottom: "15px",
            backgroundColor: showColors ? "#f0f0f0" : "#4CAF50",
            color: showColors ? "#333" : "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {showColors ? "إخفاء الألوان" : "إظهار الألوان حسب الإنتاج"}
        </button>

        {showColors && (
          <div>
            <h4 style={{ marginTop: 0, marginBottom: "10px" }}>
              مفتاح الألوان حسب كمية الإنتاج
            </h4>
            {Object.entries(colorScale)
              .sort((a, b) => b[0] - a[0])
              .map(([prod, color]) => (
                <div
                  key={prod}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                    direction: "ltr",
                  }}
                >
                  <div
                    style={{
                      width: "25px",
                      height: "25px",
                      backgroundColor: color,
                      marginLeft: "10px",
                      borderRadius: "50%",
                      border: "1px solid #999",
                    }}
                  ></div>
                  <span style={{ fontSize: "14px" }}>{prod} طن</span>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Popup détaillé */}
      {activeGov && governoratesData[activeGov] && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 1000,
            background: "white",
            padding: "15px",
            borderRadius: "5px",
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            maxWidth: "300px",
            textAlign: "right",
            direction: "rtl",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              color: "#2c3e50",
              borderBottom: "1px solid #eee",
              paddingBottom: "8px",
            }}
          >
            {activeGov}
          </h3>

          <p style={{ margin: "10px 0" }}>
            <strong style={{ color: "#0066cc" }}>كمية الإنتاج:</strong>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {governoratesData[activeGov].production.toLocaleString()} طن
            </span>
          </p>

          <p style={{ margin: "10px 0 5px 0" }}>
            <strong style={{ color: "#0066cc" }}>الموانئ:</strong>
          </p>

          <ul
            style={{
              paddingRight: "15px",
              marginTop: "5px",
              listStyleType: "none",
            }}
          >
            {governoratesData[activeGov].ports.map((port, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "5px",
                  paddingRight: "10px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "0",
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#4CAF50",
                    borderRadius: "50%",
                    marginTop: "7px",
                  }}
                ></span>
                {port}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FishingPortsMap;
