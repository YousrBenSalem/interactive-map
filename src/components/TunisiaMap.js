/* import React, { useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const tunisiaRegions = {
  Tunis: {
    color: "#E60000", // Rouge
    message: "مرحبا بكم في تونس",
    coordinates: [
      [
        [10.191, 36.803],
        [10.2, 36.81],
        [10.19, 36.81],
        [10.191, 36.803],
      ],
    ],
  },
  Sfax: {
    color: "#007F00", // Vert
    message: "هذه مدينة صفاقس",
    coordinates: [
      [
        [10.7, 34.7],
        [11.0, 34.7],
        [11.0, 35.0],
        [10.7, 35.0],
        [10.7, 34.7],
      ],
    ],
  },
  Sousse: {
    color: "#0000FF", // Bleu
    message: "هذه مدينة سوسة",
    coordinates: [
      [
        [10.625, 35.825],
        [10.7, 35.825],
        [10.7, 35.9],
        [10.625, 35.9],
        [10.625, 35.825],
      ],
    ],
  },
  Kairouan: {
    color: "#FFD700", // Jaune
    message: "هذه مدينة القيروان",
    coordinates: [
      [
        [10.1, 35.6],
        [10.2, 35.6],
        [10.2, 35.7],
        [10.1, 35.7],
        [10.1, 35.6],
      ],
    ],
  },
};

const MapTunisie = () => {
  const [map, setMap] = useState(null);
  const [showColors, setShowColors] = useState(false);

  useEffect(() => {
    const mapInstance = new maplibregl.Map({
      container: "map",
      style: "https://demotiles.maplibre.org/style.json",
      center: [9.5375, 33.8869],
      zoom: 5.5,
    });

    mapInstance.on("load", () => {
      Object.keys(tunisiaRegions).forEach((region) => {
        const geojson = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: tunisiaRegions[region].coordinates,
              },
              properties: { name: region },
            },
          ],
        };

        mapInstance.addSource(region, {
          type: "geojson",
          data: geojson,
        });

        mapInstance.addLayer({
          id: region,
          type: "fill",
          source: region,
          paint: {
            "fill-color": showColors ? tunisiaRegions[region].color : "#FFFFFF",
            "fill-opacity": 0.7,
            "fill-outline-color": "#000",
          },
        });

        mapInstance.on("click", region, () => {
          const message = tunisiaRegions[region].message;
          speakText(message);
          alert(message);
        });
      });
    });

    setMap(mapInstance);

    return () => mapInstance.remove();
  }, [showColors]);

  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "ar-SA";
    window.speechSynthesis.speak(speech);
  };

  return (
    <div style={{ position: "relative" }}>
      <h2 style={{ textAlign: "center" }}>🗺️ خريطة تونس التفاعلية</h2>
      <div id="map" style={{ width: "100%", height: "600px" }}></div>
      <button
        onClick={() => setShowColors(!showColors)}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          padding: "10px 15px",
          background: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {showColors ? "Réinitialiser" : "Afficher les couleurs"}
      </button>
    </div>
  );
};

export default MapTunisie;

 */

/* import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AfricaMap = () => {
  return (
    <div style={{ width: "700px", height: "637px" }}>
      <MapContainer
        center={[9.082, 8.6753]} // Center of Africa
        zoom={4}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[36.8065, 10.1815]}>
          <Popup>Tunis, Tunisia</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default AfricaMap;
 */

import React from "react";
import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const tunisiaRegions = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "تونس",
        color: "#E60000",
        message: "مرحبا بكم في تونس",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [10.191, 36.803],
            [10.2, 36.81],
            [10.19, 36.81],
            [10.191, 36.803],
          ],
        ],
      },
    },
    // Add other regions
  ],
};

const TunisiaMap = () => {
  return (
    <MapContainer
      center={[34, 9]}
      zoom={6}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON
        data={tunisiaRegions}
        style={(feature) => ({
          fillColor: feature.properties.color,
          fillOpacity: 0.7,
          color: "#000",
          weight: 1,
        })}
        onEachFeature={(feature, layer) => {
          layer.bindPopup(
            `<b>${feature.properties.name}</b><br>${feature.properties.message}`
          );
        }}
      />
    </MapContainer>
  );
};

export default TunisiaMap;