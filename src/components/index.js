import React, { useEffect, useRef, useState } from "react";
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
import fieldsData from "../data/fieldsData.json";

const PaysMaghrebMap = () => {
  const [map, setMap] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [currentCountry, setCurrentCountry] = useState(null);
      const markersRef = useRef({});


  const maghrebCountries = {
    المغرب: {
      name: "المغرب",
      description:
        "المملكة المغربية هي دولة عربية تقع في أقصى غرب شمال أفريقيا",
      fullText: `انا المغرب الأقصى يطلقون عليّ اسم بوابة المتوسط أقع في أقصى غرب شمال افريقيا عاصمتي وهي الرباط. انا بلد لا أزال متمسكا بجذوري فمعظم سكاني يجيدون الامازيغية وهي لغة شمال افريقيا الأصلية قبل الفتوحات الإسلامية.  امتد على مساحة 446550 كيلومتر مربع حيث اطل من الغرب على المحيط الأطلسي و من الشمال على البحر الأبيض المتوسط اما من الشرق فعلى الجزائر و من الجنوب على موريتانيا وقد نلت استقلالي سنة 1956`,
      image: "/assets/sixthcourse/maroccoMap.png",
    },
    الجزائر: {
      name: "الجزائر",
      description:
        "الجمهورية الجزائرية الديمقراطية الشعبية هي أكبر دولة أفريقية وعربية من حيث المساحة",
      fullText: `انا الجزائر بلد المليون شهيد، أعتبر عملاقا نفطيا عالميا كما أمتلك احتياطي هام من الغاز الطبيعي.
أنا أكبر دولة افريقية من حيث المساحة والتي تبلغ 2381741 كيلومتر مربع وعاصمتي هي الجزائر، أشرف شمالا على البحر الأبيض المتوسط وجنوبا على كل من النيجر ومالي اما شرقا فلدي حدود مشتركة مع تونس و ليبيا و غربا مع كل من المغرب الأقصى و موريتانيا. استطعت أن أنال استقلالي من الاحتلال الفرنسي سنة 1962 بعد معارك دمويّة
`,
      image: "/assets/sixthcourse/algeriaMap.png",
    },
    تونس: {
      name: "تونس",
      description: "الجمهورية التونسية هي دولة عربية تقع في شمال أفريقيا",
      fullText: `أنا تونس الخضراء تبلغ مساحتي  016361 كيلومتر مربع، عاصمتي هي تونس. انا بلد صغير أقع في شمال افريقيا اطل على البحر الأبيض المتوسط من الشمال والشمال الشرقي تحيط بي الجزائر من الغرب وليبيا من الجنوب الشرقي. أعتبر أجمل بلدان المغرب العربي بسبب الشواطئ الخلابة والطبيعة الساحرة التي أمتلكها وقد نلت استقلالي سنة 1956`,
      image: "/assets/sixthcourse/tunisiaMap.png",
    },
    ليبيا: {
      name: "ليبيا",
      description: "دولة ليبيا هي دولة عربية تقع في شمال أفريقيا",
      fullText: `أنا ليبيا بلد نفطي شهير وكبير اذ تبلغ مساحتي 1759540 كيلومتر مربع، عاصمتي هي طرابلس
أتميز بموقع استراتيجي اذ أشرف على البحر الأبيض المتوسط شمالا وعلى التشاد والنيجر جنوبا وعلى مصر والسودان شرقا وتونس غربا وقد نلت استقلالي من الاستعمار الإيطالي سنة 1952
`,
      image: "/assets/sixthcourse/libyaMap.png",
    },
    موريطانيا: {
      name: "موريطانيا",
      description: "الجمهورية الإسلامية الموريتانية هي دولة عربية وأفريقية",
      fullText: `أنا موريتانيا أقع في الجنوب الغربي للمغرب العربي عاصمتي هي نواكشوط أتميز بمخزون هام من الحديد والثروة السمكية. تبلغ مساحتي 1030000 كيلومتر مربع
أُطلُّ على المحيط الأطلسي غربا وعلى مالي شرقا وعلى المغرب الأقصى من الشمال وعلى كل من مالي والسنغال جنوبا، استطعت أن أنال استقلالي من الاستعمار الفرنسي سنة1960  
`,
      image: "/assets/sixthcourse/mauritaniaMap.png",
    },
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    window.speechSynthesis.speak(utterance);
  };


  const speakText = (text) => {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "ar-SA";

    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find((voice) => voice.lang.includes("ar"));

    if (arabicVoice) {
      speech.voice = arabicVoice;
    }

    window.speechSynthesis.speak(speech);
  };


  useEffect(() => {
    // Définir les limites pour couvrir tous les pays demandés
    const mapBounds = [
      [-20, 10], // Coin sud-ouest
      [40, 50], // Coin nord-est
    ];

    const mapInstance = new maplibre.Map({
      container: "map",
      style: "https://demotiles.maplibre.org/style.json",
      center: [10, 30], // Centre approximatif de la zone
      zoom: 3,
      maxBounds: mapBounds,
    });

    mapInstance.on("load", () => {
      // Liste des codes ISO des pays à afficher
      // Désactive les étiquettes de pays si elles existent
      const layers = mapInstance.getStyle().layers;
      layers.forEach((layer) => {
        if (layer.type === "symbol" && layer.id.includes("label")) {
          mapInstance.setLayoutProperty(layer.id, "visibility", "none");
        }
      });
      const countryCodes = [
        // Maghreb
        "MA",
        "DZ",
        "TN",
        "LY",
        "MR",
        // Afrique
        "EG",
        "SD",
        "TD",
        "NE",
        "ML",
        "SN",
        // Europe
        "ES",
        "FR",
        "IT",
        "GR",
        "TR",
      ];

      // Ajouter un calque pour mettre en évidence les pays
      mapInstance.addLayer({
        id: "countries-highlight",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://mapbox.country-boundaries-v1",
        },
        "source-layer": "country_boundaries",
        filter: ["in", "iso_3166_1", ...countryCodes],
        paint: {
          "fill-color": "#4CAF50",
          "fill-opacity": 0.3,
        },
      });

      // Ajouter des étiquettes pour les pays en arabe
      // mapInstance.addLayer({
      //   id: "country-labels",
      //   type: "symbol",
      //   source: {
      //     type: "vector",
      //     url: "mapbox://mapbox.country-boundaries-v1",
      //   },
      //   "source-layer": "country_boundaries",
      //   filter: ["in", "iso_3166_1", ...countryCodes],
      //   layout: {
      //     "text-field": ["get", "name_ar"],
      //     "text-size": 12,
      //     "text-font": ["Noto Sans Arabic Regular"],
      //   },
      //   paint: {
      //     "text-color": "#000000",
      //     "text-halo-color": "#FFFFFF",
      //     "text-halo-width": 1,
      //   },
      // });



    
    });

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
      window.speechSynthesis.cancel();
      // Supprimer tous les marqueurs
      Object.values(markersRef.current).forEach((marker) => marker.remove());
    };
  }, []);

const addMarker = (countryName) => {
  if (!map) return;

  // Supprimer le marqueur existant s'il y en a un
  if (markersRef.current[countryName]) {
    markersRef.current[countryName].remove();
  }

  // Vérification des coordonnées
  const coordinates = getCountryCoordinates(countryName);
  console.log(`Coordonnées pour ${countryName}:`, coordinates); // Debug

  // Vérifier que les coordonnées sont valides
  if (
    !coordinates ||
    coordinates.length !== 2 ||
    isNaN(coordinates[0]) ||
    isNaN(coordinates[1])
  ) {
    console.error(`Coordonnées invalides pour ${countryName}`);
    return;
  }

  // Créer un élément personnalisé pour le marqueur
  const el = document.createElement("div");
  el.className = "custom-marker";
  el.innerHTML = `
    <div style="
      width: 30px;
      height: 30px;
      background: #4CAF50;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      position: relative;
    ">
      <div style="
        position: absolute;
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        left: 5px;
        top: 5px;
        transform: rotate(45deg);
      "></div>
    </div>
  `;
  el.style.cursor = "pointer";

  // Ajouter un événement de clic sur le marqueur
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    setCurrentCountry(maghrebCountries[countryName]);
    setOpenPopup(true);
  });

  // Ajouter le marqueur à la carte
  const marker = new maplibre.Marker(el).setLngLat(coordinates).addTo(map);

  // Stocker le marqueur dans la ref
  markersRef.current[countryName] = marker;

  // Centrer la carte sur le marqueur avec un zoom approprié
  map.flyTo({
    center: coordinates,
    zoom: 5,
    essential: true,
  });
};

// Vérifiez aussi votre fonction getCountryCoordinates
const getCountryCoordinates = (countryName) => {
  // Notez l'ordre [longitude, latitude]
  const coordinates = {
    المغرب: [-6.85, 34.02], // Rabat
    الجزائر: [3.04, 36.75], // Alger
    تونس: [10.18, 36.8], // Tunis
    ليبيا: [13.19, 32.88], // Tripoli
    موريطانيا: [-15.97, 18.09], // Nouakchott
  };
  return coordinates[countryName] || null;
};


  const handleCountryButtonClick = (countryName) => {
    // Ajouter un marqueur pour le pays sélectionné
    addMarker(countryName);

    // Masquer toutes les étiquettes de pays
    Object.keys(maghrebCountries).forEach((name) => {
      if (map.getLayer(`${name}-label`)) {
        map.setLayoutProperty(`${name}-label`, "visibility", "none");
      }
    });
  };

  return (
    <div style={{ position: "relative", direction: "rtl" }}>
      <div
        id="map"
        style={{
          width: "100%",
          height: "600px",
          border: "2px solid #4CAF50",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      ></div>

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
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {Object.keys(maghrebCountries).map((countryName) => (
          <button
            key={countryName}
            onClick={() => handleCountryButtonClick(countryName)}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#4CAF50",
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
            {countryName}
          </button>
        ))}
      </div>

      <Dialog
        open={openPopup}
        onClose={() => {
          window.speechSynthesis.cancel();
          setOpenPopup(false);
        }}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle style={{ textAlign: "center", fontSize: "2rem" }}>
          {currentCountry?.name}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <img
                src={currentCountry?.image}
                alt={currentCountry?.name}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box textAlign="right" dir="rtl">
                <Typography
                  variant="body1"
                  style={{
                    whiteSpace: "pre-line",
                    fontSize: "1.2rem",
                    lineHeight: "2",
                  }}
                >
                  {currentCountry?.fullText}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              window.speechSynthesis.cancel();
              setOpenPopup(false);
            }}
            color="primary"
          >
            إغلاق
          </Button>
          <Button
            onClick={() => speakText(currentCountry?.fullText)}
            color="secondary"
          >
            إعادة القراءة
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PaysMaghrebMap;
