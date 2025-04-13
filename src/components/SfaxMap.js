import React, { useState, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Popup,
  Marker,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { icon } from "leaflet";

// Configuration des icônes personnalisées
const createCustomIcon = (color, symbol = null) => {
  let svgContent = "";

  if (symbol === "gate") {
    svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
      <path d="M11 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z"/>
    </svg>`;
  } else if (symbol === "tower") {
    svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}">
      <path d="M21 9V3h-6v2H9V3H3v6h2v6H3v6h6v-2h6v2h6v-6h-2V9h2zm-10 2H7V7h4v4zm2 6v-4h4v4h-4z"/>
    </svg>`;
  } else {
    svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>`;
  }

  return icon({
    iconUrl: `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
  });
};
// Ajoutez cette nouvelle constante avec les données des zones de fabrication de chaussures
const shoeIndustryZones = [
  {
    id: "shoe-zone-1",
    name: "منطقة صناعة الأحذية",
    type: "Chaussure",
    position: [34.7375, 10.7603],
    description: "المنطقة الرئيسية لصناعة الأحذية التقليدية",
  },
  {
    id: "shoe-zone-2",
    name: "ورش صناعة الأحذية",
    type: "Chaussure",
    position: [34.7373, 10.7601],
    description: "ورش تصنيع الأحذية التقليدية",
  },
  {
    id: "bab-el-khokha",
    name: "باب الخوخة",
    type: "Chaussure",
    position: [34.7375, 10.7602],
    description: "إحدى الأبواب الرئيسية للمدينة العتيقة، تخصص في صناعة الأحذية",
  },
];
// Données des portes historiques
const historicalGates = [
  // Portes mentionnées dans l'image
  {
    id: "bab-el-nar",
    name: "برج النار",
    type: "gate",
    position: [34.7372, 10.7592], // Position à vérifier
    description: "مدخل برج النار التاريخي",
  },
  {
    id: "bab-el-qasr",
    name: "مدخل القصر",
    type: "gate",
    position: [34.7365, 10.7615], // Position à vérifier
    description: "الباب المؤدي إلى القصر القديم",
  },
  {
    id: "bab-el-jalouli",
    name: "باب الجلولي",
    type: "gate",
    position: [34.7372, 10.7608], // Position à vérifier
    description: "باب تاريخي يحمل اسم عائلة الجلولي",
  },
  {
    id: "bab-el-sharqi",
    name: "باب الشرقي",
    type: "gate",
    position: [34.7368, 10.763], // Conserve la position existante
    description: "الباب الشرقي للمدينة",
  },
  {
    id: "bab-el-jebli",
    name: "باب الجبلي",
    type: "gate",
    position: [34.737, 10.758999],
    description: "باب يقع في الجهة الشمالية للمدينة",
  },
  {
    id: "bab-el-kasba",
    name: "باب القصبة",
    type: "gate",
    position: [34.7359, 10.7621], // Conserve la position existante
    description: "الباب المؤدي إلى حي القصبة التاريخي",
  },
  {
    id: "bab-el-diwan",
    name: "باب الديوان",
    type: "gate",
    position: [34.7345, 10.7625], // Conserve la position existante
    description: "الباب الرئيسي المؤدي إلى القصبة",
  },

  // Portes existantes à conserver
  {
    id: "bab-el-khokha",
    name: "باب الخوخة",
    type: "gate",
    position: [34.7375, 10.7602],
    description: "إحدى الأبواب الرئيسية للمدينة العتيقة، تخصص في صناعة الأحذية",
    industries: [
      "صناعة الأحذية",
      "إدارة وخدمات",
      "صناعة الجلود",
      "تجارة مرتبطة بالأحذية",
    ],
  },
  {
    id: "bab-el-bahr",
    name: "باب البحر",
    type: "gate",
    position: [34.736, 10.763],
    description: "الباب المواجه للبحر",
  },
];
// Données الأسواق
const markets = [
  {
    id: "souk-el-taam",
    name: "سوق الطعام",
    type: "market",
    position: [34.7372, 10.7605],
    description: "السوق الرئيسي للمواد الغذائية",
    subMarkets: ["باب النص", "رحبة الخضار", "سوق السمك"],
  },
  {
    id: "souk-el-jdid",
    name: "سوق الجديد",
    type: "market",
    position: [34.7368, 10.7612],
  },
];

// Données المساجد والزوايا
const religious = [
  {
    id: "jamaa-el-kabir",
    name: "الجامع الكبير",
    type: "mosque",
    position: [34.7378, 10.7601], // Centre de la médina
    description:
      "أقدم مسجد في المدينة العتيقة (سنة 849م)، يحتوي على مئذنة مربعة الشكل",
    constructionYear: 849,
  },
  {
    id: "jamaa-sidi-bou-khrissane",
    name: "جامع سيدي بوكرissan",
    type: "mosque",
    position: [34.7365, 10.7612], // Quartier sud-ouest
    description: "مسجد تاريخي يعود للقرن 11م، يتميز بقبته البيضاء",
    constructionYear: 1050,
  },
  {
    id: "jamaa-el-ain",
    name: "جامع العين",
    type: "mosque",
    position: [34.7382, 10.7598], // Près de باب الخوخة
    description: "مسجد مشهور بعين الماء الموجودة في صحنه",
    constructionYear: 1270,
  },
  {
    id: "jamaa-sidi-amar",
    name: "جامع سيدي عمار",
    type: "mosque",
    position: [34.7363, 10.7618], // Rue Sidi Amar
    description: "ملحق بزاوية سيدي عمار، بني في العهد الحفصي",
    constructionYear: 1390,
  },
  {
    id: "jamaa-el-kasba",
    name: "جامع القصبة",
    type: "mosque",
    position: [34.7359, 10.762], // داخل القصبة
    description: "مسجد الحامية العسكرية سابقاً",
    constructionYear: 1600,
  },
  {
    id: "jamaa-el-jadid",
    name: "الجامع الجديد",
    type: "mosque",
    position: [34.737, 10.7605], // سوق البلاغجة
    description: "بني في القرن 18م على الطراز العثماني",
    constructionYear: 1752,
  },
  {
    id: "jamaa-sidi-belhassen",
    name: "جامع سيدي بلحسن",
    type: "mosque",
    position: [34.738, 10.761], // شمال شرق المدينة
    description: "مسجد صغير بزخارف أندلسية",
    constructionYear: 1650,
  },
  {
    id: "jamaa-el-houmet",
    name: "جامع الحومة",
    type: "mosque",
    position: [34.7368, 10.7595], // حومة السوق
    description: "مسجد الحي التجاري المركزي",
    constructionYear: 1550,
  },
];

// Données الديار التاريخية
const historicalHouses = [
  {
    id: "madrasa-abbasiyin",
    name: "مدرسة العباسيين",
    type: "house", // Gardez "house" ou changez pour "school" si vous préférez
    position: [34.7365, 10.761], // À ajuster selon l'emplacement exact
    description:
      "مدرسة تاريخية تعود إلى العهد العباسي، من أهم المعالم التعليمية القديمة في صفاقس",
  },
];
// Ajoutez cette nouvelle constante
const cityWallPoints = [
  {
    id: "wall-north-1",
    name: "سور المدينة - الجزء الشمالي",
    type: "wall",
    position: [34.7373, 10.7595],
    description: "جزء من السور التاريخي للمدينة العتيقة",
  },

  {
    id: "wall-east-1",
    name: "سور المدينة - الجهة الشرقية",
    type: "wall",
    position: [34.737, 10.7638],
    description: "الجزء الشرقي من السور المحيط بالمدينة",
  },
  {
    id: "wall-south-1",
    name: "سور المدينة - الجهة الجنوبية",
    type: "wall",
    position: [34.7343, 10.762],
    description: "جزء السور الجنوبي بالقرب من البحر",
  },
  {
    id: "wall-west-1",
    name: "سور المدينة - الجهة الغربية",
    type: "wall",
    position: [34.7347, 10.7575],
    description: "الجزء الغربي من السور التاريخي",
  },
];
// Ajoutez cette nouvelle constante avec les données des zones de commerce et services
const serviceCommerceZones = [
  {
    id: "service-zone-1",
    name: "منطقة الخدمات التجارية",
    type: "Service",
    position: [34.737, 10.7606],
    description: "المنطقة الرئيسية للخدمات والتجارة",
  },
  {
    id: "service-zone-2",
    name: "مركز الخدمات",
    type: "Service",
    position: [34.7369, 10.7607],
    description: "مركز تقديم الخدمات المختلفة",
  },
  {
    id: "bab-el-diwan",
    name: "باب الديوان",
    type: "Service",
    position: [34.7368, 10.7615],
    description: "منطقة الخدمات الإدارية والتجارية",
  },
];
// Ajoutez cette nouvelle constante avec les données des zones de bijoux
const jewelryCommerceZones = [
  {
    id: "jewelry-zone-1",
    name: "سوق الحلي التقليدية",
    type: "Or",
    position: [34.7371, 10.7604],
    description: "المنطقة الرئيسية لتجارة الحلي والمجوهرات التقليدية",
  },
  {
    id: "jewelry-zone-2",
    name: "ورش صناعة الحلي",
    type: "Or",
    position: [34.7368, 10.7603],
    description: "ورش تصنيع الحلي والمجوهرات",
  },
];
// Ajoutez cette nouvelle constante
const shoeRelatedCommerceZones = [
  {
    id: "shoe-commerce-1",
    name: "سوق الأدوات الجلدية",
    type: "CommerceChaussure",
    position: [34.7374, 10.76],
    description: "سوق بيع الأدوات والمواد الخام لصناعة الأحذية",
  },
  {
    id: "shoe-commerce-2",
    name: "سوق إكسسوارات الأحذية",
    type: "CommerceChaussure",
    position: [34.7372, 10.7602],
    description: "متاجر إكسسوارات وزينة الأحذية",
  },
  {
    id: "bab-el-khokha-market",
    name: "سوق باب الخوخة",
    type: "CommerceChaussure",
    position: [34.7375, 10.7601],
    description: "منطقة البيع بالتجزئة للأحذية الجاهزة",
  },
];
// Ajoutez cette nouvelle constante
const kasbahZones = [
  {
    id: "kasbah-tower",
    name: "برج القصبة",
    type: "tower",
    position: [34.7357, 10.7619],
    description: "برج المراقبة الرئيسي للقصبة",
  },
];
// Ajoutez cette nouvelle constante
const zawiyas = [
  {
    id: "zawya-sidi-amar",
    name: "زاوية سيدي عمار",
    type: "zawya",
    position: [34.7362, 10.7618],
    description: "أشهر زوايا المدينة، تأسست في القرن 13م",
    founder: "سيدي عمار العباسي",
    constructionYear: 1250,
  },
  {
    id: "zawya-sidi-bou-khrissane",
    name: "زاوية سيدي بوكرissan",
    type: "zawya",
    position: [34.7368, 10.7605],
    description: "زاوية تاريخية معروفة بالقرآن الكريم",
    constructionYear: 1400,
  },
  {
    id: "zawya-sidi-belhassen",
    name: "زاوية سيدي بلحسن",
    type: "zawya",
    position: [34.7375, 10.7612],
    description: "زاوية صوفية بطراز أندلسي",
    constructionYear: 1550,
  },
  {
    id: "zawya-sidi-ali-nouri",
    name: "زاوية سيدي علي النوري",
    type: "zawya",
    position: [34.7358, 10.76],
    description: "زاوية تعليم القرآن والعلوم الشرعية",
    constructionYear: 1700,
  },

  {
    id: "zawya-sidi-ahmed",
    name: "زاوية سيدي أحمد",
    type: "zawya",
    position: [34.736, 10.7625],
    description: "زاوية صغيرة بالقرب من باب البحر",
    constructionYear: 1600,
  },
];

const SfaxMap = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activePopup, setActivePopup] = useState(null);

  const filters = [
    { id: "all", label: "عرض الكل", color: "#2c3e50" },
    { id: "gate", label: "الأبواب", color: "#00a8ff" },
    { id: "tower", label: "القصبة ", color: "#9c88ff" },
    { id: "market", label: "الأسواق", color: "#fbc531" },
    { id: "mosque", label: "المساجد", color: "#4cd137" },
    { id: "zawya", label: "الزوايا", color: "#e84118" },
    { id: "house", label: "المدارس", color: "#8c7ae6" },
    { id: "Sour", label: "سور المدينة (محيط المدينة) ", color: "#430C05" },
    { id: "Chaussure", label: "صناعة الأحذية ", color: "#D46F4D" },
    { id: "Service", label: "تجارة و خدمات  ", color: "#FFBF66" },
    { id: "Or", label: "تجارة الحلي  ", color: "#08C5D1" },
    {
      id: "CommerceChaussure",
      label: "تجارة مرتبطة بالأحذية ",
      color: "#00353F",
    },
  ];

  const filteredGates = useMemo(() => {
    if (
      activeFilter === "Service" ||
      activeFilter === "Chaussure" ||
      activeFilter === "CommerceChaussure"
    ) {
      return []; // Ne pas afficher les portes quand d'autres filtres sont actifs
    }
    return activeFilter === "all" || activeFilter === "gate"
      ? historicalGates
      : [];
  }, [activeFilter]);
  const filteredZawiyas = useMemo(() => {
    return activeFilter === "all" || activeFilter === "zawya" ? zawiyas : [];
  }, [activeFilter]);
  const filteredServiceCommerce = useMemo(() => {
    const zones = [...serviceCommerceZones];
    if (activeFilter === "all" || activeFilter === "Service") {
      // Ajouter باب الديوان si on filtre pour les services ou tout afficher
      const babElDiwan = historicalGates.find(
        (gate) => gate.id === "bab-el-diwan"
      );
      if (babElDiwan) zones.push({ ...babElDiwan, type: "Service" });
    }
    return activeFilter === "all" || activeFilter === "Service" ? zones : [];
  }, [activeFilter]);
  const filteredTowers = useMemo(() => {
    return activeFilter === "all" || activeFilter === "tower"
      ? kasbahZones
      : [];
  }, [activeFilter]);

  const filteredMarkets = useMemo(() => {
    return activeFilter === "all" || activeFilter === "market" ? markets : [];
  }, [activeFilter]);

  const filteredReligious = useMemo(() => {
    return activeFilter === "all" ||
      activeFilter === "mosque" ||
      activeFilter === "zawya"
      ? religious.filter(
          (r) => activeFilter === "all" || r.type === activeFilter
        )
      : [];
  }, [activeFilter]);
  const filteredWalls = useMemo(() => {
    return activeFilter === "all" || activeFilter === "Sour"
      ? cityWallPoints
      : [];
  }, [activeFilter]);
  const filteredHouses = useMemo(() => {
    return activeFilter === "all" || activeFilter === "house"
      ? historicalHouses
      : [];
  }, [activeFilter]);
  const filteredJewelryCommerce = useMemo(() => {
    return activeFilter === "all" || activeFilter === "Or"
      ? jewelryCommerceZones
      : [];
  }, [activeFilter]);
  const filteredShoeIndustry = useMemo(() => {
    const zones = [...shoeIndustryZones];
    if (activeFilter === "all" || activeFilter === "Chaussure") {
      // Ajouter باب الخوخة si on filtre pour les chaussures ou tout afficher
      const babElKhokha = historicalGates.find(
        (gate) => gate.id === "bab-el-khokha"
      );
      if (babElKhokha) zones.push({ ...babElKhokha, type: "Chaussure" });
    }
    return activeFilter === "all" || activeFilter === "Chaussure" ? zones : [];
  }, [activeFilter]);
  const filteredShoeRelatedCommerce = useMemo(() => {
    const zones = [...shoeRelatedCommerceZones];
    if (activeFilter === "all" || activeFilter === "CommerceChaussure") {
      // Lier باب الخوخة à cette catégorie aussi
      const babElKhokha = historicalGates.find(
        (gate) => gate.id === "bab-el-khokha"
      );
      if (babElKhokha) {
        zones.push({
          ...babElKhokha,
          type: "CommerceChaussure",
          description: "مركز تجاري مرتبط بصناعة الأحذية",
        });
      }
    }
    return activeFilter === "all" || activeFilter === "CommerceChaussure"
      ? zones
      : [];
  }, [activeFilter]);
  return (
    <div
      style={{
        direction: "rtl",
        fontFamily: "Arial, sans-serif",
        marginTop: "10px",
      }}
    >
      <MapContainer
        center={[34.737, 10.7605]}
        zoom={15} // Zoom légèrement réduit pour voir toutes les portes
        style={{
          height: "70vh",
          width: "100%",
          borderRadius: "10px",
          zIndex: 1,
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Render Gates */}
        {filteredGates.map((gate) => (
          <Marker
            key={gate.id}
            position={gate.position}
            icon={createCustomIcon("#00a8ff", "gate")}
            eventHandlers={{
              click: () => setActivePopup(gate.id),
            }}
          >
            <Popup>
              <div
                style={{
                  direction: "rtl",
                  textAlign: "right",
                  minWidth: "200px",
                }}
              >
                <h3 style={{ color: "#00a8ff", marginTop: "0" }}>
                  {gate.name}
                </h3>
                <p>{gate.description}</p>
                {gate.industries && (
                  <div>
                    <h4 style={{ marginBottom: "5px" }}>النشاطات:</h4>
                    <ul style={{ paddingRight: "20px", margin: "0" }}>
                      {gate.industries.map((industry, i) => (
                        <li key={i}>{industry}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Popup>
            {/* <Tooltip direction="top" opacity={1} permanent>
              {gate.name}
            </Tooltip> */}
          </Marker>
        ))}

        {/* Render Markets */}
        {filteredMarkets.map((market) => (
          <Marker
            key={market.id}
            position={market.position}
            icon={createCustomIcon("#fbc531")}
          >
            <Popup>
              <div
                style={{
                  direction: "rtl",
                  textAlign: "right",
                  minWidth: "200px",
                }}
              >
                <h3 style={{ color: "#fbc531", marginTop: "0" }}>
                  {market.name}
                </h3>
                {market.description && <p>{market.description}</p>}
                {market.subMarkets && (
                  <div>
                    <h4 style={{ marginBottom: "5px" }}>أقسام السوق:</h4>
                    <ul style={{ paddingRight: "20px", margin: "0" }}>
                      {market.subMarkets.map((subMarket, i) => (
                        <li key={i}>{subMarket}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Popup>
            {/* <Tooltip direction="top" opacity={1} permanent>
              {market.name}
            </Tooltip> */}
          </Marker>
        ))}

        {/* Render Religious Sites */}
        {filteredReligious.map((site) => (
          <Marker
            key={site.id}
            position={site.position}
            icon={createCustomIcon(
              site.type === "mosque" ? "#4cd137" : "#e84118"
            )}
          >
            <Popup>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <h3
                  style={{
                    color: site.type === "mosque" ? "#4cd137" : "#e84118",
                    marginTop: "0",
                  }}
                >
                  {site.name}
                </h3>
                {site.description && <p>{site.description}</p>}
              </div>
            </Popup>
            {/* <Tooltip direction="top" opacity={1} permanent>
              {site.name}
            </Tooltip> */}
          </Marker>
        ))}

        {/* Render Historical Houses */}
        {filteredHouses.map((house) => (
          <Marker
            key={house.id}
            position={house.position}
            icon={createCustomIcon("#8c7ae6")}
          >
            <Popup>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <h3 style={{ color: "#8c7ae6", marginTop: "0" }}>
                  {house.name}
                </h3>
                {house.description && <p>{house.description}</p>}
              </div>
            </Popup>
            {/* <Tooltip direction="top" opacity={1} permanent>
              {house.name}
            </Tooltip> */}
          </Marker>
        ))}
        {/* Render Shoe Industry Zones */}
        {filteredShoeIndustry.map((zone) => (
          <Marker
            key={zone.id}
            position={zone.position}
            icon={createCustomIcon("#D46F4D")}
          >
            <Popup>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <h3 style={{ color: "#D46F4D", marginTop: "0" }}>
                  {zone.name}
                </h3>
                <p>{zone.description}</p>
              </div>
            </Popup>
            {/* <Tooltip direction="top" opacity={1} permanent>
              {zone.name}
            </Tooltip> */}
          </Marker>
        ))}
        {/* Render Service & Commerce Zones */}
        {filteredServiceCommerce.map((zone) => (
          <Marker
            key={zone.id}
            position={zone.position}
            icon={createCustomIcon("#FFBF66")}
          >
            <Popup>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <h3 style={{ color: "#FFBF66", marginTop: "0" }}>
                  {zone.name}
                </h3>
                <p>{zone.description}</p>
              </div>
            </Popup>
            {/* <Tooltip direction="top" opacity={1} permanent>
              {zone.name}
            </Tooltip> */}
          </Marker>
        ))}
        {/* Render Jewelry Commerce Zones */}
        {filteredJewelryCommerce.map((zone) => (
          <Marker
            key={zone.id}
            position={zone.position}
            icon={createCustomIcon("#08C5D1")}
          >
            <Popup>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <h3 style={{ color: "#08C5D1", marginTop: "0" }}>
                  {zone.name}
                </h3>
                <p>{zone.description}</p>
              </div>
            </Popup>
            {/* <Tooltip direction="top" opacity={1} permanent>
              {zone.name}
            </Tooltip> */}
          </Marker>
        ))}
        {/* Render Shoe Related Commerce Zones */}
        {filteredShoeRelatedCommerce.map((zone) => (
          <Marker
            key={zone.id}
            position={zone.position}
            icon={createCustomIcon("#00353F")}
          >
            <Popup>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <h3 style={{ color: "#00353F", marginTop: "0" }}>
                  {zone.name}
                </h3>
                <p>{zone.description}</p>
              </div>
            </Popup>
            {/* <Tooltip direction="top" opacity={1} permanent>
              {zone.name}
            </Tooltip> */}
          </Marker>
        ))}
        {filteredTowers.map((tower) => (
          <Marker
            key={tower.id}
            position={tower.position}
            icon={createCustomIcon("#9c88ff", "tower")}
          >
            <Popup>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <h3 style={{ color: "#9c88ff", marginTop: "0" }}>
                  {tower.name}
                </h3>
                <p>{tower.description}</p>
              </div>
            </Popup>
            {/* <Tooltip direction="top" opacity={1} permanent>
              {tower.name}
            </Tooltip> */}
          </Marker>
        ))}
        {/* Render City Walls */}
        {filteredWalls.map((wall) => (
          <Marker
            key={wall.id}
            position={wall.position}
            icon={createCustomIcon("#430C05", "tower")} // Utilisez une icône de tour ou créez-en une spécifique
          >
            <Popup>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <h3 style={{ color: "#430C05", marginTop: "0" }}>
                  {wall.name}
                </h3>
                <p>{wall.description}</p>
              </div>
            </Popup>
            {/* <Tooltip direction="top" opacity={1} permanent>
              {wall.name}
            </Tooltip> */}
          </Marker>
        ))}
        {/* Render Zawiyas */}
        {filteredZawiyas.map((zawya) => (
          <Marker
            key={zawya.id}
            position={zawya.position}
            icon={createCustomIcon("#e84118", "tower")} // Utilisez la couleur rouge spécifiée
          >
            <Popup>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <h3 style={{ color: "#e84118", marginTop: "0" }}>
                  {zawya.name}
                </h3>
                <p>{zawya.description}</p>
                {zawya.founder && (
                  <p>
                    <strong>الواقف:</strong> {zawya.founder}
                  </p>
                )}
                <p>
                  <strong>سنة التأسيس:</strong> {zawya.constructionYear}م
                </p>
              </div>
            </Popup>
            {/* <Tooltip direction="top" opacity={1} permanent>
              {zawya.name}
            </Tooltip> */}
          </Marker>
        ))}
      </MapContainer>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          margin: "20px 0",
          padding: "10px",
          backgroundColor: "#f5f6fa",
          borderRadius: "8px",
        }}
      >
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            style={{
              backgroundColor: filter.color,
              color: "white",
              padding: "10px 15px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "14px",
              boxShadow:
                activeFilter === filter.id ? "0 0 0 3px #2c3e50" : "none",
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SfaxMap;
