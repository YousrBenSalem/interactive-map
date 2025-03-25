import React, { useEffect, useState } from "react";
import maplibre from "maplibre-gl";
import fieldsData from "../data/fieldsData.json";
import { Dialog, Typography , DialogActions, DialogContent, DialogTitle, Button, Box, Grid } from "@mui/material";

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [hoveredField, setHoveredField] = useState(null);
  const [hoveredPosition, setHoveredPosition] = useState(null);
  const [visibleLayers, setVisibleLayers] = useState({
    oil: false,
    gas: false,
    iron: false,
    phosphate: false,
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [popupField, setPopupField] = useState(null);
  
const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR'; // Langue française
  window.speechSynthesis.speak(utterance);
};

  let activeSpeech = null;

  const speakText = (text) => {
    if (activeSpeech) {
      window.speechSynthesis.cancel();
    }

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "ar-SA";

    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find((voice) => voice.lang.includes("ar"));

    if (arabicVoice) {
      speech.voice = arabicVoice;
    } else {
      console.warn("Arabic voice not available. Defaulting to system voice.");
    }

    activeSpeech = speech;
    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    const maghrebBounds = [
      [-20.0, 12.0],  // Extend further south
    [30.0, 41.0],
  ];

    const mapInstance = new maplibre.Map({
      container: "map",
      style: "https://demotiles.maplibre.org/style.json",
      center: [7.5, 28],
      zoom: 0.4,
      maxBounds: maghrebBounds,
    });

    mapInstance.on("load", () => {

   const fieldTypes = {
  oil: { data: fieldsData.oilFields || [], color: "#FF5733", radius: 20 },
  gas: { data: fieldsData.gasFields || [], color: "#33AFFF", radius: 20 },
  iron: { data: fieldsData.ironFields || [], color: "#FF33A5", radius: 25 },
  phosphate: { data: fieldsData.phosphateFields || [], color: "#FFD700", radius: 18 },
};


      Object.entries(fieldTypes).forEach(([key, { data, color, radius }]) => {
        const geojson = {
          type: "FeatureCollection",
          features: data.map((field) => ({
            type: "Feature",
            properties: field,
            geometry: {
              type: "Point",
              coordinates: field.coordinates,
            },
          })),
        };

        mapInstance.addSource(`${key}-fields`, { type: "geojson", data: geojson });

        mapInstance.addLayer({
          id: `${key}-layer`,
        
          type: "circle",
          source: `${key}-fields`,
          paint: {
            "circle-radius": radius,
            "circle-color": color,
          },
        });

        mapInstance.setLayoutProperty(`${key}-layer`, "visibility", "none");

        mapInstance.on("mouseenter", `${key}-layer`, (e) => {
          const field = e.features[0].properties;
          setHoveredField(field);
          setHoveredPosition({ x: e.point.x, y: e.point.y });
          speakText(field.description);
        });

        mapInstance.on("mouseleave", `${key}-layer`, () => {
          window.speechSynthesis.cancel();
          setHoveredField(null);
          setHoveredPosition(null);
        });

        mapInstance.on("click", `${key}-layer`, (e) => {
          const field = e.features[0].properties;
          setPopupField(field); // Set the field data for the popup
          setOpenPopup(true); // Open the popup window
        });
      });
    });

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
      window.speechSynthesis.cancel();
    };
  }, []);

  const toggleLayerVisibility = (layer) => {
    if (!map) return;
    const isVisible = visibleLayers[layer];
    map.setLayoutProperty(`${layer}-layer`, "visibility", isVisible ? "none" : "visible");
    setVisibleLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };


  console.log("popupField:", popupField);

  const additionalInfos = popupField?.additionalInfos
  ? JSON.parse(popupField.additionalInfos)
  : null;

const additionalImages = popupField?.additionalImages
  ? JSON.parse(popupField.additionalImages)
  : [];


  return (
    <div style={{ position: "relative" }}>
      <center>
        <h1>خريطة الموارد المنجمية والطاقية بالمغرب العربي</h1>
      </center>

      <div id="map" style={{ width: "100%", height: "600px" }}></div>

      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "white",
          padding: "10px",
          borderRadius: "8px",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop:"50px"

        }}
      >
        {["oil", "gas", "iron", "phosphate"].map((field) => (
          <button
            key={field}
            onClick={() => toggleLayerVisibility(field)}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: {
                oil: "#FF5733",
                gas: "#33AFFF",
                iron: "#FF33A5",
                phosphate: "#FFD700",
              }[field],
              fontSize: "22px",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              gap: "8px",
            }}
          >
                      <img src={`/assets/${field}.png`} alt={`${field} Icon`} style={{ width: "30px", height: "30px" }} />

            {field === "oil" && "حقل نفط"}
            {field === "gas" && "حقل غاز"}
            {field === "iron" && "مناجم الحديد"}
            {field === "phosphate" && "مناجم الفسفاط"}
          </button>
        ))}
      </div>

      {hoveredField && hoveredPosition && (
        <div
          style={{
            position: "absolute",
            top: hoveredPosition.y + 10,
            left: hoveredPosition.x + 10,
            background: "white",
            padding: "8px",
            borderRadius: "6px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
            zIndex: 10,
            pointerEvents: "none",
            fontSize: "12px",
            lineHeight: "1.4",
            width: "180px",
          }}
        >
          <img
            src={hoveredField.image}
            alt={hoveredField.name}
            style={{ width: "100%", height: "auto", borderRadius: "4px" }}
          />
          <h4 style={{ margin: "0 0 4px", fontSize: "14px", fontWeight: "600", color: "#333" }}>
            {hoveredField.name}
          </h4>
          <p>{hoveredField.description}</p>
        </div>
      )}

<Dialog open={openPopup} onClose={() => setOpenPopup(false)} maxWidth="lg" fullWidth>
  <DialogTitle style={{ textAlign: "center", fontSize: "2rem" }}>
    {popupField?.name}
  </DialogTitle>
  <DialogContent>
    <Grid container spacing={4}>
      {/* Left Section - Images */}
      <Grid item xs={12} sm={6}>
        {/* Main Image */}
        <img
          src={popupField?.image}
          alt={popupField?.name}
          style={{
            width: "80%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "16px",
          }}
        />
        
        {/* Additional Images */}
        {additionalImages.length > 0 && (
          <>
            <Typography variant="h6" gutterBottom>صور إضافية:</Typography>
            {additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`additional-${index}`}
                style={{
                  width: "80%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginBottom: "16px",
                }}
              />
            ))}
          </>
        )}
      </Grid>

      {/* Right Section - Information */}
      <Grid item xs={12} sm={6}>
        <Box textAlign="right" dir="rtl">
          <Typography variant="h5" gutterBottom>تفاصيل إضافية:</Typography>
          {additionalInfos &&
            Object.entries(additionalInfos).map(([key, value]) => (
              <Box key={key} mb={2}>
                <Typography variant="h6" color="textSecondary">
                  {key.replace(/_/g, " ")}: 
                </Typography>
                <Typography variant="h5">{value}</Typography>
              </Box>
            ))}
        </Box>
      </Grid>
    </Grid>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenPopup(false)} color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>




    </div>
  );
};

export default MapComponent;