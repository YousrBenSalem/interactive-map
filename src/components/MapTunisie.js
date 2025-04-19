import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import des icônes (vous devrez créer ces images ou les trouver)
import oliveIcon from "../olive.png";
import vegetableIcon from "../vegetable.png";
import citrusIcon from "../lemon.png";
import figueIcon from "../figue.png";
import palmIcon from "../palm.png";
import forestIcon from "../fores.png";
import grainIcon from "../grain.png";
import lakeIcon from "../lake.png";
import riverIcon from "../river.png";
import livestockIcon from "../livestock.png";
import fishingPortIcon from "../fishing-port.png";


// Styles CSS améliorés
const styles = `
  .map-container {
    height: 100vh;
    width: 100%;
    position: relative;
    font-family: 'Arial', sans-serif;
    display: flex;
  }
  
  .sidebar {
    width: 250px;
    background: rgba(255, 255, 255, 0.95);
    padding: 15px;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
    overflow-y: auto;
    z-index: 1000;
  }
  
  .map-content {
    flex: 1;
    height: 100%;
  }
  
  .category {
    margin-bottom: 20px;
  }
  
  .category-title {
    font-weight: bold;
    margin-bottom: 10px;
    color: #2c3e50;
    font-size: 14px;
    padding: 5px;
    background: #f8f9fa;
    border-radius: 4px;
  }
  
  .button-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .map-button {
    padding: 10px 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
    text-align: right;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .map-button:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
  
  .map-button.active {
    box-shadow: 0 0 0 2px white, 0 0 0 4px currentColor;
  }
  
  .button-icon {
    width: 20px;
    height: 20px;
  }
  
  .popup-content {
    min-width: 200px;
  }
  
  .popup-content h3 {
    margin: 0 0 5px 0;
    color: #2c3e50;
    font-size: 16px;
  }
  
  .popup-content p {
    margin: 3px 0;
    font-size: 13px;
    color: #555;
  }
  
  .popup-category {
    display: inline-block;
    padding: 2px 6px;
    background: #f0f0f0;
    border-radius: 4px;
    font-size: 12px;
    margin-top: 5px;
  }
`;
// Couleurs pour chaque type de bouton
const buttonColors = {
  الزياتين: "#8BC34A",
  الخضر: "#4CAF50",
  الكروم: "#CDDC39",
  القوارص: "#FFC107",
  النخيل: "#FF9800",
  الغابات: "#795548",
  "زراعة الحبوب ذات مردود مرتفع وأنشطة متنوعة": "#9C27B0",
  "زراعة الحبوب ذات مردود متوسط وغراسات متنوعة": "#673AB7",
  "زراعة الحبوب ذات مردود غير منتظمة و ذات مردود ضعيف": "#3F51B5",
  "شط أو سبخة": "#00BCD4",
  واد: "#2196F3",
  "مناطق تربية الماشية": "#607D8B",
  "ميناء صيد بحري": "#0097A7",
};
// Icônes pour les boutons
const buttonIcons = {
  الزياتين: oliveIcon,
  الخضر: vegetableIcon,
  الكروم: figueIcon,
  القوارص: citrusIcon,
  النخيل: palmIcon,
  الغابات: forestIcon,
  "زراعة الحبوب ذات مردود مرتفع وأنشطة متنوعة": grainIcon,
  "زراعة الحبوب ذات مردود متوسط وغراسات متنوعة": grainIcon,
  "زراعة الحبوب ذات مردود غير منتظمة و ذات مردود ضعيف": grainIcon,
  "شط أو سبخة": lakeIcon,
  واد: riverIcon,
  "مناطق تربية الماشية": livestockIcon,
  "ميناء صيد بحري": fishingPortIcon,
};
// Données enrichies pour la Tunisie
const agricultureData = {
  الزياتين: [
    {
      id: 1,
      name: "زيتون المهدية",
      lat: 35.504,
      lng: 11.062,
      production: "85,000 tonnes/an",
      description: "أشجار زيتون معمرة تنتج زيتوناً عالي الجودة",
    },
    {
      id: 2,
      name: "زيتون صفاقس",
      lat: 34.7406,
      lng: 10.7603,
      production: "220,000 tonnes/an",
      description: "أكبر منطقة إنتاج زيتون في تونس",
    },
    {
      id: 3,
      name: "زيتون المنستير",
      lat: 35.778,
      lng: 10.827,
      production: "70,000 tonnes/an",
      description: "زيتون مخصص للتعليب والتصدير",
    },
    {
      id: 4,
      name: "زيتون سوسة",
      lat: 35.8254,
      lng: 10.636,
      production: "110,000 tonnes/an",
      description: "منطقة تاريخية لزراعة الزيتون",
    },
    {
      id: 5,
      name: "زيتون مدنين",
      lat: 33.355,
      lng: 10.492,
      production: "45,000 tonnes/an",
      description: "زيتون مقاوم للجفاف",
    },
  ],
  الخضر: [
    {
      id: 4,
      name: "خضار نابل",
      lat: 36.4561,
      lng: 10.7376,
      production: "Tomates, Poivrons, Aubergines",
      superficie: "12,500 hectares",
    },
    {
      id: 5,
      name: "خضار منوبة",
      lat: 36.8081,
      lng: 10.0972,
      production: "Laitues, Épinards, Artichauts",
      superficie: "8,300 hectares",
    },
    {
      id: 26,
      name: "خضار بن عروس",
      lat: 36.743,
      lng: 10.232,
      production: "Carottes, Radis, Choux",
      superficie: "5,700 hectares",
    },
    {
      id: 27,
      name: "خضار بنزرت",
      lat: 37.274,
      lng: 9.874,
      production: "Pommes de terre, Oignons, Ail",
      superficie: "9,200 hectares",
    },
    {
      id: 28,
      name: "خضار سوسة",
      lat: 35.8254,
      lng: 10.636,
      production: "Tomates cerises, Concombres, Courgettes",
      superficie: "7,800 hectares",
    },
    {
      id: 29,
      name: "خضار سيدي بوزيد",
      lat: 35.0381,
      lng: 9.4848,
      production: "Melons, Pastèques, Poivrons",
      superficie: "6,500 hectares",
    },
    {
      id: 30,
      name: "خضار القصرين",
      lat: 35.168,
      lng: 8.836,
      production: "Pommes de terre, Carottes, Navets",
      superficie: "4,900 hectares",
    },
  ],
  الكروم: [
    {
      id: 6,
      name: "كروم قابس",
      lat: 33.8815,
      lng: 10.0982,
      production: "Raisin de table",
    },
    {
      id: 28,
      name: "كروم بئر مشارقة",
      lat: 36.467,
      lng: 10.117,
      production: "Vinification",
    },
  ],
  القوارص: [
    {
      id: 30,
      name: "حمضيات نابل",
      lat: 36.4561,
      lng: 10.7376,
      production: "Oranges sanguines, Mandarines",
      superficie: "4,500 hectares",
      saison: "Janvier à Avril",
    },
  ],
  النخيل: [
    {
      id: 9,
      name: "نخيل توزر",
      lat: 33.9197,
      lng: 8.1435,
      production: "Deglet Nour",
    },
    ,
    {
      id: 32,
      name: "نخيل قفصة",
      lat: 34.425,
      lng: 8.7842,
      production: "Dattes communes",
  
    },
    {
      id: 10,
      name: "نخيل قابس",
      lat: 33.8815,
      lng: 10.0982,
      production: "Dattes diverses",
    },
    {
      id: 30,
      name: "نخيل قبلي",
      lat: 33.702,
      lng: 8.965,
      production: "Deglet Nour",
    },

    {
      id: 31,
      name: "نخيل قبلي 2",
      lat: 33.602,
      lng: 8.18,
      production: "Dattes locales",
    },
  ],
  الغابات: [
    {
      id: 11,
      name: "غابة عين دراهم",
      lat: 36.7754,
      lng: 8.6894,
      area: "12,000 hectares",
    },
    {
      id: 12,
      name: "غابة زغوان",
      lat: 36.4029,
      lng: 10.1425,
      area: "8,500 hectares",
    },
    {
      id: 32,
      name: "غابة الفايجة",
      lat: 36.15,
      lng: 8.706,
      area: "5,300 hectares",
    },
    {
      id: 33,
      name: "غابة سليانة",
      lat: 36.083,
      lng: 9.367,
      area: "7,800 hectares",
    },
  ],
};

const cerealesData = {
  "زراعة الحبوب ذات مردود مرتفع وأنشطة متنوعة": [
    {
      id: 15,
      name: "منطقة باجة",
      lat: 36.7256,
      lng: 9.1817,
      yield: "3.5-4.5 tonnes/ha",
    },
    {
      id: 13,
      name: "سهل مجردة",
      lat: 36.8,
      lng: 10.1,
      production: "Blé, Orge",
    },
    {
      id: 36,
      name: "منطقة جندوبة",
      lat: 36.5,
      lng: 8.783,
      yield: "3.0-4.0 tonnes/ha",
    },
  ],
  "زراعة الحبوب ذات مردود متوسط وغراسات متنوعة": [
    {
      id: 16,
      name: "منطقة سليانة",
      lat: 36.0833,
      lng: 9.3667,
      yield: "2.0-3.0 tonnes/ha",
    },
    {
      id: 37,
      name: "منطقة الكاف",
      lat: 36.182,
      lng: 8.715,
      yield: "1.8-2.8 tonnes/ha",
    },
  ],
  "زراعة الحبوب ذات مردود غير منتظمة و ذات مردود ضعيف": [
    {
      id: 17,
      name: "منطقة قفصة",
      lat: 34.425,
      lng: 8.7842,
      yield: "0.8-1.5 tonnes/ha",
    },
    {
      id: 38,
      name: "منطقة تطاوين",
      lat: 32.929,
      lng: 10.451,
      yield: "0.5-1.2 tonnes/ha",
    },
    {
      id: 39,
      name: "منطقة مدنين",
      lat: 33.355,
      lng: 10.492,
      yield: "1.0-1.8 tonnes/ha",
    },
  ],
};

const hydroData = {
  "شط أو سبخة": [
    { id: 18, name: "شط الجريد", lat: 33.7, lng: 8.4, area: "5,000 km²" },
    {
      id: 19,
      name: "سبخة أريانة",
      lat: 36.8625,
      lng: 10.1956,
      area: "120 km²",
    },
    {
      id: 40,
      name: "سبخة سيدي الهاني",
      lat: 35.671,
      lng: 10.101,
      area: "85 km²",
    },
    { id: 41, name: "شط الغرسة", lat: 34.329, lng: 8.401, area: "320 km²" },
  ],
  واد: [
    { id: 20, name: "وادي مجردة", lat: 36.8, lng: 10.1, length: "450 km" },
    { id: 21, name: "وادي مليان", lat: 36.45, lng: 9.9167, length: "160 km" },
    { id: 42, name: "وادي زرقون", lat: 36.433, lng: 9.217, length: "120 km" },
    { id: 43, name: "وادي باي", lat: 36.543, lng: 8.785, length: "95 km" },
  ],
  "مناطق تربية الماشية": [
    {
      id: 22,
      name: "منطقة سيدي بوزيد",
      lat: 35.0381,
      lng: 9.4848,
      livestock: "Ovins, Caprins",
    },
    {
      id: 23,
      name: "منطقة الكاف",
      lat: 36.1822,
      lng: 8.7148,
      livestock: "Bovins, Ovins",
    },
    {
      id: 44,
      name: "منطقة جندوبة",
      lat: 36.5,
      lng: 8.783,
      livestock: "Bovins laitiers",
    },
    {
      id: 45,
      name: "منطقة القصرين",
      lat: 35.168,
      lng: 8.836,
      livestock: "Ovins, Camélidés",
    },
  ],
  "ميناء صيد بحري": [
    {
      id: 46,
      name: "ميناء صيد حلق الوادي",
      lat: 36.8186,
      lng: 10.3056,
      description: "أكبر ميناء صيد في تونس",
      production: "30% من الإنتاج الوطني",
    },
    {
      id: 47,
      name: "ميناء صيد صفاقس",
      lat: 34.7472,
      lng: 10.7614,
      description: "ثاني أهم ميناء صيد",
      production: "25% من الإنتاج الوطني",
    },
    {
      id: 48,
      name: "ميناء صيد بنزرت",
      lat: 37.2742,
      lng: 9.8739,
      description: "ميناء متخصص في صيد التونة",
      production: "15% من الإنتاج الوطني",
    },
    {
      id: 49,
      name: "ميناء صيد قابس",
      lat: 33.8815,
      lng: 10.0982,
      description: "ميناء مهم للصيد الساحلي",
      production: "10% من الإنتاج الوطني",
    },
    {
      id: 50,
      name: "ميناء صيد المهدية",
      lat: 35.504,
      lng: 11.062,
      description: "ميناء تقليدي للصيد الصغير",
      production: "5% من الإنتاج الوطني",
    },
  ],
};

// Création des icônes personnalisées
const createIcon = (iconUrl, size = 32) => {
  return new L.Icon({
    iconUrl: iconUrl,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
};

const iconMapping = {
  الزياتين: createIcon(oliveIcon),
  الخضر: createIcon(vegetableIcon),
  الكروم: createIcon(citrusIcon), // Vous pouvez créer une icône spécifique pour les vignes
  القوارص: createIcon(citrusIcon),
  النخيل: createIcon(palmIcon),
  الغابات: createIcon(forestIcon),
  "زراعة الحبوب ذات مردود مرتفع وأنشطة متنوعة": createIcon(grainIcon),
  "زراعة الحبوب ذات مردود متوسط وغراسات متنوعة": createIcon(grainIcon),
  "زراعة الحبوب ذات مردود غير منتظمة و ذات مردود ضعيف": createIcon(grainIcon),
  "شط أو سبخة": createIcon(lakeIcon),
  واد: createIcon(riverIcon),
  "مناطق تربية الماشية": createIcon(livestockIcon),
  "ميناء صيد بحري": createIcon(fishingPortIcon),
};

const MapTunisie = () => {
  const [activeLayer, setActiveLayer] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeFeatures, setActiveFeatures] = useState([]);

  const handleButtonClick = (category, layer) => {
    setActiveCategory(category);
    setActiveLayer(layer);

    if (category === "الزراعات المتعددة") {
      setActiveFeatures(agricultureData[layer] || []);
    } else if (category === "زراعة الحبوب و مردوديتها") {
      setActiveFeatures(cerealesData[layer] || []);
    } else if (category === "المظاهر الهيدروغرافي") {
      setActiveFeatures(hydroData[layer] || []);
    }
  };

  const getIconForFeature = (layer) => {
    return new L.Icon({
      iconUrl: buttonIcons[layer],
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16],
    });
  };

  return (
    <div className="map-container">
      <style>{styles}</style>

      <div className="sidebar" style={{ direction: "rtl" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#2c3e50",
            fontSize: "20px",
            paddingBottom: "10px",
            borderBottom: "2px solid #eee",
          }}
        >
          توزع الإنتاج الفلاحي في المجال التونسي
        </h1>
        <div className="category">
          <div className="category-title">1) الزراعات المتعددة</div>
          <div className="button-container">
            {Object.keys(agricultureData).map((item) => (
              <button
                key={item}
                className={`map-button ${
                  activeLayer === item && activeCategory === "الزراعات المتعددة"
                    ? "active"
                    : ""
                }`}
                onClick={() => handleButtonClick("الزراعات المتعددة", item)}
                style={{
                  backgroundColor: buttonColors[item],
                  color: "white",
                }}
              >
                <img src={buttonIcons[item]} alt="" className="button-icon" />
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="category">
          <div className="category-title">2) زراعة الحبوب و مردوديتها</div>
          <div className="button-container">
            {Object.keys(cerealesData).map((item) => (
              <button
                key={item}
                className={`map-button ${
                  activeLayer === item &&
                  activeCategory === "زراعة الحبوب و مردوديتها"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleButtonClick("زراعة الحبوب و مردوديتها", item)
                }
                style={{
                  backgroundColor: buttonColors[item],
                  color: "white",
                }}
              >
                <img src={buttonIcons[item]} alt="" className="button-icon" />
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="category">
          <div className="category-title">3) المظاهر الهيدروغرافي</div>
          <div className="button-container">
            {Object.keys(hydroData).map((item) => (
              <button
                key={item}
                className={`map-button ${
                  activeLayer === item &&
                  activeCategory === "المظاهر الهيدروغرافي"
                    ? "active"
                    : ""
                }`}
                onClick={() => handleButtonClick("المظاهر الهيدروغرافي", item)}
                style={{
                  backgroundColor: buttonColors[item],
                  color: "white",
                }}
              >
                <img src={buttonIcons[item]} alt="" className="button-icon" />
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <MapContainer
        center={[34.0, 9.5]}
        zoom={7}
        minZoom={6}
        maxBounds={[
          [29.0, 7.0],
          [38.0, 12.0],
        ]}
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

        {activeFeatures.map((feature) => (
          <Marker
            key={feature.id}
            position={[feature.lat, feature.lng]}
            icon={getIconForFeature(activeLayer)}
          >
            <Popup>
              <div className="popup-content">
                <h3>{feature.name}</h3>

                <div className="popup-category">{activeLayer}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapTunisie;
