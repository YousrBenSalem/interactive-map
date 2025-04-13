import React, { useEffect, useState } from "react";
import maplibre from "maplibre-gl";

import {
  Dialog,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  Grid,
} from "@mui/material";

const PaysMaghrebMap = () => {
  const [map, setMap] = useState(null);
  const [hoveredField, setHoveredField] = useState(null);
  const [hoveredPosition, setHoveredPosition] = useState(null);
  const [visibleLayers, setVisibleLayers] = useState({
    maroc: false,
    algerie: false,
    tunisie: false,
    libye: false,
    mauritanie: false,
    maghreb: false,
    neighbors: false,
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [popupField, setPopupField] = useState(null);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR"; // Langue française
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
      [-35.0, 20.0], // Extend further south
      [40.0, 60.0],
    ];

    const mapInstance = new maplibre.Map({
      container: "map",
      style: "https://demotiles.maplibre.org/style.json",
      center: [10, 30], // Centre approximatif de la zone
      zoom: 3,
      maxBounds: maghrebBounds,
    });

    mapInstance.on("load", () => {
      const layers = mapInstance.getStyle().layers;
      layers.forEach((layer) => {
        if (layer.type === "symbol" && layer.id.includes("label")) {
          mapInstance.setLayoutProperty(layer.id, "visibility", "none");
        }
      });

      const countryData = {
        maroc: {
          coordinates: [-7.0926, 31.7917],
          color: "#FF5733",
          radius: 30,
          description: `أنا المغرب الأقصى يطلقون عليّ اسم بوابة المتوسط أقع في أقصى غرب شمال افريقيا عاصمتي وهي الرباط. أنا بلد لا أزال متمسكا بجذوري فمعظم سكاني يجيدون الامازيغية وهي لغة شمال افريقيا الأصلية قبل الفتوحات الإسلامية.  امتد على مساحة 446550 كيلومتر مربع حيث اطل من الغرب على المحيط الأطلسي و من الشمال على البحر الأبيض المتوسط اما من الشرق فعلى الجزائر و من الجنوب على موريتانيا وقد نلت استقلالي سنة 1956`,
          image: "/assets/sixthcourse/maroccoMap.png",
        },
        algerie: {
          coordinates: [2.6326, 28.0339],
          color: "#33AFFF",
          radius: 30,
          description: `أنا الجزائر بلد المليون شهيد، أعتبر عملاقا نفطيا عالميا كما أمتلك احتياطي هام من الغاز الطبيعي.
أنا أكبر دولة افريقية من حيث المساحة والتي تبلغ 2381741 كيلومتر مربع وعاصمتي هي الجزائر، أشرف شمالا على البحر الأبيض المتوسط وجنوبا على كل من النيجر ومالي اما شرقا فلدي حدود مشتركة مع تونس و ليبيا و غربا مع كل من المغرب الأقصى و موريتانيا. استطعت أن أنال استقلالي من الاحتلال الفرنسي سنة 1962 بعد معارك دمويّة
`,
          image: "/assets/sixthcourse/algeriaMap.png",
        },
        tunisie: {
          coordinates: [9.5375, 33.8869],
          color: "#FF33A5",
          radius: 25,
          description: `أنا تونس الخضراء تبلغ مساحتي  016361 كيلومتر مربع، عاصمتي هي تونس. أنا بلد صغير أقع في شمال افريقيا اطل على البحر الأبيض المتوسط من الشمال والشمال الشرقي تحيط بي الجزائر من الغرب وليبيا من الجنوب الشرقي. أعتبر أجمل بلدان المغرب العربي بسبب الشواطئ الخلابة والطبيعة الساحرة التي أمتلكها وقد نلت استقلالي سنة 1956`,
          image: "/assets/sixthcourse/tunisiaMap.png",
        },
        libye: {
          coordinates: [17.2283, 26.3351],
          color: "#FFD700",
          radius: 25,
          description: `أنا ليبيا بلد نفطي شهير وكبير اذ تبلغ مساحتي 1759540 كيلومتر مربع، عاصمتي هي طرابلس
أتميز بموقع استراتيجي اذ أشرف على البحر الأبيض المتوسط شمالا وعلى التشاد والنيجر جنوبا وعلى مصر والسودان شرقا وتونس غربا وقد نلت استقلالي من الاستعمار الإيطالي سنة 1952
`,
          image: "/assets/sixthcourse/libyaMap.png",
        },
        mauritanie: {
          coordinates: [-10.9408, 20.9425],
          color: "#4CAF50",
          radius: 20,
          description: `أنا موريتانيا أقع في الجنوب الغربي للمغرب العربي عاصمتي هي نواكشوط أتميز بمخزون هام من الحديد والثروة السمكية. تبلغ مساحتي 1030000 كيلومتر مربع
أُطلُّ على المحيط الأطلسي غربا وعلى مالي شرقا وعلى المغرب الأقصى من الشمال وعلى كل من مالي والسنغال جنوبا، استطعت أن أنال استقلالي من الاستعمار الفرنسي سنة1960  
`,
          image: "/assets/sixthcourse/mauritaniaMap.png",
        },
        maghreb: {
          coordinates: [5, 28],
          color: "#9C27B0",
          description: `أنا المغرب العربي أقع في شمال افريقيا وامتد على مساحة 5781441 كيلومتر مربع
أنا منطقة ممتدة على ساحل البحر الأبيض المتوسط وحتى المحيط الأطلسي بالتالي لدي موقع استراتيجي هام، و اشمل بالأساس خمسة دول هي موريتانيا والمغرب والجزائر وتونس وليبيا كما أشكّل ما نسبته 42 بالمائة من مساحة الوطن العربي. و أعرف في بعض المصادر باسم المغرب الكبير أو المنطقة المغاربية`,
          image: "/assets/sixthcourse/maghrebMap.png",
        },
      };

      // Pays voisins et mers/océans
      const neighborsData = {
        espagne: {
          coordinates: [-3.7492, 40.4637],
          color: "#FC4E00",
          radius: 20,
          description: "إسبانيا",
        },
        france: {
          coordinates: [2.0, 46.0],
          color: "##27C7D4",
          radius: 20,
          description: "فرنسا",
        },
        italie: {
          coordinates: [12.5674, 41.8719],
          color: "#4CAF50",
          radius: 20,
          description: "إيطاليا",
        },
        grece: {
          coordinates: [21.8243, 39.0742],
          color: "#607D8B",
          radius: 15,
          description: "اليونان",
        },
        turquie: {
          coordinates: [35.2433, 38.9637],
          color: "#795548",
          radius: 20,
          description: "تركيا",
        },
        egypte: {
          coordinates: [30.8025, 26.8206],
          color: "#009688",
          radius: 20,
          description: "مصر",
        },
        tchad: {
          coordinates: [18.7322, 15.4542],
          color: "#8BC34A",
          radius: 15,
          description: "التشاد",
        },
        niger: {
          coordinates: [8.0817, 17.6078],
          color: "#CDDC39",
          radius: 15,
          description: "النيجر",
        },
        mali: {
          coordinates: [-3.9962, 17.5707],
          color: "#FFC107",
          radius: 15,
          description: "مالي",
        },
        senegal: {
          coordinates: [-14.4524, 14.4974],
          color: "#3F51B5",
          radius: 15,
          description: "السنغال",
        },
        mediterranee: {
          coordinates: [15, 35],
          color: "#00BCD4",
          radius: 30,
          description: "البحر الأبيض المتوسط",
        },
        atlantique: {
          coordinates: [-20, 25],
          color: "#03A9F4",
          radius: 30,
          description: "المحيط الأطلسي",
        },
      };

      // Ajouter les pays du Maghreb
      Object.entries(countryData).forEach(
        ([key, { coordinates, color, radius, description, image }]) => {
          const geojson = {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {
                  name: key,
                  description: description,
                  image: image,
                  additionalInfos: JSON.stringify({
                    العاصمة:
                      key === "maroc"
                        ? "الرباط"
                        : key === "algerie"
                        ? "الجزائر"
                        : key === "tunisie"
                        ? "تونس"
                        : key === "libye"
                        ? "ليبيا"
                        : "موريطانيا",
                  }),
                },
                geometry: {
                  type: "Point",
                  coordinates: coordinates,
                },
              },
            ],
          };

          mapInstance.addSource(`${key}-fields`, {
            type: "geojson",
            data: geojson,
          });

          mapInstance.addLayer({
            id: `${key}-layer`,
            type: "circle",
            source: `${key}-fields`,
            paint: {
              "circle-radius": radius,
              "circle-color": color,
              "circle-opacity": 0.7,
              "circle-stroke-width": 2,
              "circle-stroke-color": "#ffffff",
            },
          });

          mapInstance.setLayoutProperty(`${key}-layer`, "visibility", "none");
        }
      );

      // Ajouter les pays voisins et mers/océans
      Object.entries(neighborsData).forEach(
        ([key, { coordinates, color, radius, description }]) => {
          const geojson = {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {
                  name: key,
                  description: description,
                },
                geometry: {
                  type: "Point",
                  coordinates: coordinates,
                },
              },
            ],
          };

          mapInstance.addSource(`${key}-neighbor-fields`, {
            type: "geojson",
            data: geojson,
          });

          mapInstance.addLayer({
            id: `${key}-neighbor-layer`,
            type: "circle",
            source: `${key}-neighbor-fields`,
            paint: {
              "circle-radius": radius,
              "circle-color": color,
              "circle-opacity": 0.7,
              "circle-stroke-width": 2,
              "circle-stroke-color": "#ffffff",
            },
          });

          mapInstance.setLayoutProperty(
            `${key}-neighbor-layer`,
            "visibility",
            "none"
          );
        }
      );

      // Gestion des événements pour les pays du Maghreb
      Object.keys(countryData).forEach((key) => {
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
          setPopupField(field);
          setOpenPopup(true);
          speakText(field.description);
        });
      });

      // Gestion des événements pour les pays voisins et mers/océans
      Object.keys(neighborsData).forEach((key) => {
        mapInstance.on("mouseenter", `${key}-neighbor-layer`, (e) => {
          const field = e.features[0].properties;
          setHoveredField({
            name: key,
            description: field.description,
          });
          setHoveredPosition({ x: e.point.x, y: e.point.y });
          speakText(field.description);
        });

        mapInstance.on("mouseleave", `${key}-neighbor-layer`, () => {
          window.speechSynthesis.cancel();
          setHoveredField(null);
          setHoveredPosition(null);
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
    map.setLayoutProperty(
      `${layer}-layer`,
      "visibility",
      isVisible ? "none" : "visible"
    );
    setVisibleLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  const toggleNeighborsVisibility = () => {
    if (!map) return;
    const isVisible = visibleLayers.neighbors;

    // Liste des couches de voisins et mers/océans
    const neighborLayers = [
      "espagne-neighbor-layer",
      "france-neighbor-layer",
      "italie-neighbor-layer",
      "grece-neighbor-layer",
      "turquie-neighbor-layer",
      "egypte-neighbor-layer",
      "tchad-neighbor-layer",
      "niger-neighbor-layer",
      "mali-neighbor-layer",
      "senegal-neighbor-layer",
      "mediterranee-neighbor-layer",
      "atlantique-neighbor-layer",
    ];

    neighborLayers.forEach((layer) => {
      map.setLayoutProperty(
        layer,
        "visibility",
        isVisible ? "none" : "visible"
      );
    });

    setVisibleLayers((prev) => ({ ...prev, neighbors: !prev.neighbors }));
  };

  const handleMaghrebClick = () => {
    setPopupField({
      name: "maghreb",
      description: `أنا المغرب العربي أقع في شمال افريقيا وامتد على مساحة 5781441 كيلومتر مربع
أنا منطقة ممتدة على ساحل البحر الأبيض المتوسط وحتى المحيط الأطلسي بالتالي لدي موقع استراتيجي هام، و اشمل بالأساس خمسة دول هي موريتانيا والمغرب والجزائر وتونس وليبيا كما أشكّل ما نسبته 42 بالمائة من مساحة الوطن العربي. و أعرف في بعض المصادر باسم المغرب الكبير أو المنطقة المغاربية`,
      image: "/assets/sixthcourse/maghrebMap.png",
    });
    setOpenPopup(true);
    speakText(`أنا المغرب العربي أقع في شمال افريقيا وامتد على مساحة 5781441 كيلومتر مربع
أنا منطقة ممتدة على ساحل البحر الأبيض المتوسط وحتى المحيط الأطلسي بالتالي لدي موقع استراتيجي هام، و اشمل بالأساس خمسة دول هي موريتانيا والمغرب والجزائر وتونس وليبيا كما أشكّل ما نسبته 42 بالمائة من مساحة الوطن العربي. و أعرف في بعض المصادر باسم المغرب الكبير أو المنطقة المغاربية`);
  };

  return (
    <div style={{ position: "relative" }}>
      <center></center>

      <div id="map" style={{ width: "100%", height: "600px" }}>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 10,

            padding: "5px",
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
      </div>

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
          marginTop: "50px",
        }}
      >
        <button
          onClick={toggleNeighborsVisibility}
          style={{
            backgroundColor: "#673AB7",
            fontSize: "18px",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            textAlign: "right",
            width: "150px",
          }}
        >
          البلدان المجاورة و البحار و المحيطات
        </button>

        <button
          onClick={handleMaghrebClick}
          style={{
            backgroundColor: "#9C27B0",
            fontSize: "22px",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            textAlign: "right",
            width: "150px",
          }}
        >
          المغرب العربي
        </button>

        {[
          { key: "maroc", name: "المغرب", color: "#FF5733" },
          { key: "algerie", name: "الجزائر", color: "#33AFFF" },
          { key: "tunisie", name: "تونس", color: "#FF33A5" },
          { key: "libye", name: "ليبيا", color: "#FFD700" },
          { key: "mauritanie", name: "موريطانيا", color: "#4CAF50" },
        ].map(({ key, name, color }) => (
          <button
            key={key}
            onClick={() => toggleLayerVisibility(key)}
            style={{
              backgroundColor: color,
              fontSize: "22px",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              textAlign: "right",
              width: "150px",
            }}
          >
            {name}
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
          {hoveredField.image && (
            <img
              src={hoveredField.image}
              alt={hoveredField.name}
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          )}
          <h4
            style={{
              margin: "0 0 4px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#333",
            }}
          >
            {hoveredField.name === "maroc"
              ? "المغرب"
              : hoveredField.name === "algerie"
              ? "الجزائر"
              : hoveredField.name === "tunisie"
              ? "تونس"
              : hoveredField.name === "libye"
              ? "ليبيا"
              : hoveredField.name === "maghreb"
              ? "المغرب العربي"
              : hoveredField.description}
          </h4>
          {hoveredField.name && hoveredField.name !== "maghreb" && (
            <p>{hoveredField.description}</p>
          )}
        </div>
      )}

      <Dialog
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        maxWidth="xxl"
        fullWidth
      >
        <DialogTitle style={{ textAlign: "center", fontSize: "2rem" }}>
          {popupField?.name === "maroc"
            ? "المغرب"
            : popupField?.name === "algerie"
            ? "الجزائر"
            : popupField?.name === "tunisie"
            ? "تونس"
            : popupField?.name === "libye"
            ? "ليبيا"
            : popupField?.name === "maghreb"
            ? "المغرب العربي"
            : "موريطانيا"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
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
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box textAlign="right" dir="rtl">
                <Typography variant="h5" gutterBottom>
                  معلومات عن{" "}
                  {popupField?.name === "maghreb" ? "المغرب العربي" : "الدولة"}:
                </Typography>
                <Typography variant="h5" paragraph>
                  {popupField?.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPopup(false)} color="primary">
            إغلاق
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PaysMaghrebMap;
