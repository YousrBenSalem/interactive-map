import React, { useState } from "react";
import { MapContainer, TileLayer, WMSTileLayer, useMapEvents, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const TopographyLabels = () => {
  const labels = [
    { name: "Atlas Mountains", position: [31.0, -7.0], color: "red" },
    { name: "Sahara Desert", position: [25.0, 10.0], color: "yellow" },
    { name: "Ahaggar Mountains", position: [23.3, 5.5], color: "green" },
    { name: "Tibesti Mountains", position: [21.0, 17.0], color: "blue" },
    { name: "Libyan Desert", position: [23.5, 20.0], color: "orange" }
  ];
  return labels.map((label, index) => (
    <Marker key={index} position={label.position}>
      <Popup>
        <span style={{ color: label.color, fontWeight: "bold" }}>{label.name}</span>
      </Popup>
    </Marker>
  ));
};

const ElevationMarker = ({ position, elevation }) => (
  position ? (
    <Marker position={position}>
      <Popup>Elevation: {elevation} meters</Popup>
    </Marker>
  ) : null
);

const TopologyMap = () => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [elevation, setElevation] = useState(null);

  const fetchElevation = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.opentopodata.org/v1/test-dataset?locations=${lat},${lon}`
      );
      const data = await response.json();
      if (data.results && data.results[0]) {
        setElevation(data.results[0].elevation);
      } else {
        setElevation("N/A");
      }
    } catch (error) {
      console.error("Error fetching elevation:", error);
      setElevation("Error");
    }
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setMarkerPosition([lat, lng]);
        await fetchElevation(lat, lng);
      },
    });
    return null;
  };

  return (
    <MapContainer center={[28, 10]} zoom={4} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution="© Stadia Maps, OpenMapTiles, OpenStreetMap contributors"
      />

      <WMSTileLayer
        url="https://ows.terrestris.de/osm/service?"
        layers="SRTM30-Colored"
        format="image/png"
        transparent={true}
        version="1.3.0"
      />

      <TopographyLabels />
      <MapClickHandler />
      <ElevationMarker position={markerPosition} elevation={elevation} />
    </MapContainer>
  );
};

export default TopologyMap;