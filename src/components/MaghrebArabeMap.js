import React, { useState, useRef, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Control } from "leaflet";
import { motion } from "framer-motion";
import { Modal } from "antd";

// Correction icône de marqueur
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";




const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});



const { BaseLayer, Overlay } = LayersControl;

// Couleurs des paysages
const colors = {
  هضاب: "#60b658",
  صحاري: "#fff7c1",
  جبال: "#b15951",
  سهول: "#7ecb7a",
};
const icones = {
  هضاب: "/assets/fourthCourse/hidhab.png",
  جبال: "/assets/fourthCourse/montagne.png",
  سهول: "/assets/fourthCourse/souhoul.png",
};

// Composant pour zoomer sur un marqueur
// const ZoomToMarker = ({ position }) => {
//   const map = useMap();
//   if (position) {
//     map.flyTo(position, 6, { duration: 1.5 });
//   }
//   return null;
// };

// Données des montagnes
const montagnes = [
  {
    id: 1,
    name: "جبل كليمنجارو",
    lat: -3.0674,
    lng: 37.3556,
    imgs: [
      "/assets/fourthCourse/Kilimanjaro.png",
      "/assets/fourthCourse/Kilimanjaro1.png",
    ],
    desc: " أنا جبل كليمنجارو. يُعرف جبلي في العالم العربي باسم جبال القمر. أنا أعلى جبل في إفريقيا، حيث يبلغ ارتفاعي 5,895 مترًا فوق سطح البحر. أقع في شمال شرق تنزانيا، بالقرب من الحدود الكينية.. كما أنني أمثل  أعلى قمة بركانية في إفريقيا وثاني أعلى قمة من بين القمم البركانية السبع في العالم. ",
  },
  {
    id: 2,
    name: "جبل توبقال",
    lat: 31.059,
    lng: -7.918,
    imgs: [
      "/assets/fourthCourse/Toubkal.png",
      "/assets/fourthCourse/Toubkal1.png",
    ],
    desc: "أنا جبل توبقال، أعلى قمة في سلسلة جبال الأطلس، وأرتفع في جنوب غرب المغرب. أنا أعلى قمة جبلية في المغرب وشمال أفريقيا والوطن العربي، وسابع أعلى قمة في أفريقيا، حيث يبلغ ارتفاعي 4167 مترًا. أنتمي إلى جبال الأطلس الكبير و أتواجد في جزئها الغربي.",
  },
  {
    id: 3,
    name: "جبل الأبيض ",
    lat: 45.8326,
    lng: 6.865,
    imgs: [
      "/assets/fourthCourse/Mont_Blanc.png",
      "/assets/fourthCourse/Mont_Blanc1.png",
    ],
    desc: "أنا أعلى قمة في سلسلة جبال الألب. أنا جزء من هذه السلسلة العظيمة التي تمتد عبر أوروبا من النمسا وسلوفينيا شرقاً، مروراً بإيطاليا وسويسرا وليختنشتاين وألمانيا، ووصولاً إلى فرنسا غرباً. يرمز اسمي الأبيض إلى كلمة ألب التي تعني أبيض باللغة اللاتينية، في إشارة إلى قمة ناصعة البياض تبرز بين الثلوج. أرتفع إلى 4810 متراً، وأفخر بكوني أعلى قمة في هذه السلسلة المهيبة، الواقعة على الحدود بين فرنسا وإيطاليا.",
  },
  {
    id: 4,
    name: "جبل ماكينلي",
    lat: 63.0695,
    lng: -151.0074,
    imgs: [
      "/assets/fourthCourse/Denali_Mt_McKinley.png",
      "/assets/fourthCourse/Denali_Mt_McKinley1.png",
    ],
    desc: "أنا أعلى قمة جبلية في أمريكا الشمالية وأحد القمم السبعة في العالم. يبلغ ارتفاعي 20,310 قدمًا (6,190 مترًا) فوق سطح البحر، وأتميز ببروز طوبوغرافي يصل إلى 20,156 قدمًا (6,144 مترًا). أنا جزء من سلسلة جبال ألاسكا في قلب ولاية ألاسكا، و أقع في منتصف منتزه ومحمية دينالي الوطنية. ",
  },
  {
    id: 5,
    name: "جبال الأند",
    lat: -32.6532,
    lng: -70.0117,
    imgs: ["/assets/fourthCourse/Andes.png", "/assets/fourthCourse/Andes1.png"],
    desc: "أنا سلسلة جبلية واسعة تمتد على طول الساحل الغربي لأمريكا الجنوبية، إذ يبلغ طولي حوالي 7100 كيلومتر وعرضي يصل إلى 500 كيلومتر، مع متوسط ارتفاع يقارب 4000 متر. أحتضن في رحابي سبع دول هي الأرجنتين، الإكوادور، بوليفيا، بيرو، تشيلي، كولومبيا، وفنزويلا. أنا رمز للطبيعة الخلابة والتنوع الجغرافي الذي يذهل العقول.",
  },
  {
    id: 6,
    name: "جبال روكي",
    lat: 39.5501,
    lng: -105.7821,
    imgs: ["/assets/fourthCourse/Roche.png", "/assets/fourthCourse/Roche1.png"],
    desc: "أنا سلسلة جبلية شامخة تمتد غرب قارة أمريكا الشمالية، حيث أعبُر مسافة تصل إلى 4,800 كيلومتر؛ من أطراف ولاية بريتيش كولومبيا في كندا شمالاً إلى ولاية نيومكسيكو في الجنوب الغربي للولايات المتحدة. أفتخر بأن أضم أعلى قمة و هي قمة ألبيرت، التي ترتفع إلى 4,399 متر.وأنا أيضًا منبع لأربعة عشر نهرًا، من بينها نهر كولورادو ونهر ميسوري.",
  },
];
// Data for هضاب locations
const hidhabs = [
  {
    id: 1,
    name: "هضاب الصين بالقارة الأسيوية",
    lat: 35.0,
    lng: 100.0,
    imgs: ["/assets/fourthCourse/hidhab_china1.png"],
    desc: "الصين بها أربع هضاب كبيرة هي: هضبة تشينغهاي – التبت (تشينغتسانغ) وهي أعلى هضبة في العالم، وتسمى سقف العالم ، يزيد متوسط ارتفاعها عن 4000 متر؛ هضبة منغوليا الداخلية في منطقة منغوليا الداخلية؛  هضبة التراب الأصفر (اللوس) التي تغطي معظم مناطق ست مقاطعات من بينها شنشي وشانشي؛ هضبة يوننان- قويتشو التي تغطي شرقي مقاطعة يوننان ومعظم مناطق مقاطعة قويتشو وأهم سماتها التضاريس الكارستية العجيبة.",
  },
  {
    id: 2,
    name: "هضاب البرازيل بالقارة الأمريكية",
    lat: -15.0,
    lng: -50.0,
    imgs: ["/assets/fourthCourse/hidhab_brazil.png"],
    desc: "نظرًا لحجمها وتنوعها، تُقسم المرتفعات البرازيلية عادةً إلى ثلاث مناطق رئيسية : هضبة الأطلسي: تمتد على طول الساحل الشرقي للبرازيل وتضم سلاسل جبلية متعددة. كانت تغطيها الغابات الأطلسية المطيرة بشكل شبه كامل، مما جعلها من أغنى مناطق التنوع البيولوجي في العالم، رغم أن 7.3٪ فقط منها ما زال محفوظًا اليوم.\nالهضبة الجنوبية: تقع في الأجزاء الجنوبية والجنوبية الوسطى من البلاد. تتميز بصخور رسوبية تغطيها جزئيًا انسكابات الحمم البازلتية، مما يُشكل تربة خصبة تُعرف بـ 'الأرض الأرجوانية'. تغطيها غابات مطيرة أطلسية إلى جانب غابات المرتفعات الشمسية ومراعي سيرادو.\nالهضبة الوسطى: تشغل المناطق الوسطى من البرازيل، وتتألف من تكوينات رسوبية وبلورية. كانت نباتات سيرادو تغطي نحو 85% من مساحتها، ولكن اليوم تبقى نسبة صغيرة منها فقط.",
  },
  {
    id: 3,
    name: "هضاب لموند بالقارة الإفريقية",
    lat: 25.0,
    lng: 10.0,
    imgs: [],
    desc: "تعتبر هضاب لموند إحدى الهضاب البارزة في القارة الإفريقية، حيث تتميز بتنوع تضاريسي يشمل مناطق مرتفعة وسهول واسعة وسلاسل جبال منخفضة. وتشكل هذه الهضاب نظامًا بيئيًا غنيًا بالتنوع البيولوجي، إذ تحتضن مجموعة متنوعة من الأنواع النباتية والحيوانية. كما تعد المنطقة ذات أهمية اقتصادية نظرًا لاحتوائها على موارد مائية ومعادن قيمة، مما يسهم في دعم الأنشطة الزراعية والصناعية. تلعب هضاب لموند دورًا محوريًا في تنظيم المناخ المحلي من خلال تأثيرها على أنماط هطول الأمطار وتوزيع الرياح.",
  },

  // Add more هضاب here
];
const sohouls = [
  {
    id: 1,
    name: "سهل سيبيريا الغربية",
    lat: 55.0,
    lng: 95.0,
    imgs: [],
    desc: "هو سهل ضخم يقع في الجزء الغربي من سيبيريا في روسيا، ويمتد من جبال الأورال غربًا إلى نهر ينسي شرقًا ويمر بجبال ألتاي جنوب شرقًا. يغطي السهل حوالي 2.6–2.7 مليون كيلومتر مربع، ما يُشكل تقريبًا ثلث مساحة سيبيريا، ويُعتبر أكبر مساحة أرض منخفضة متكاملة في العالم، حيث يمتد أكثر من 50% منه على ارتفاع أقل من 100 متر فوق سطح البحر. يمتد السهل من الشمال إلى الجنوب لمسافة 2400 كم، ومن الغرب إلى الشرق لمسافة 1900 كم.",
  },
  {
    id: 2,
    name: "السهل الأوروبي العظيم",
    lat: 48.0,
    lng: 14.0,
    imgs: [],
    desc: "هو سهل يمتد من روسيا إلى فرنسا ويغطي الجزء الأوروبي من روسيا، كما يشمل جزءًا من جنوب شرقي إنجلترا. في روسيا، يمتد السهل من المحيط المتجمد الشمالي حتى جبال القوقاز على مسافة تزيد عن 2410 كم. يضيق تدريجيًا داخل بولندا وألمانيا ليصبح عرضه 80 كم في أضيق نقطة له ببلجيكا، قبل أن يتسع مرة أخرى في غرب فرنسا. يتميز السهل بأراضٍ منبسطة و متموجة تتخللها تلال، ويضم بقاعًا زراعية تعد من أكثر الأراضي خصوبة في العالم.",
  },
  {
    id: 3,
    name: "سهول أمريكا",
    lat: 40.0,
    lng: -100.0,
    imgs: [],
    desc: "السهول العظمى هي هضبة مرتفعة شاسعة تمتد شرقًا من جبال الروكي في أمريكا الشمالية. تشمل هذه المنطقة في الولايات المتحدة ولايات نيو مكسيكو وتكساس وأوكلاهوما وكولورادو وكنزاس ونبراسكا ووايومنغ ومونتانا وداكوتا الجنوبية وداكوتا الشمالية، كما تشمل المقاطعات الكندية ألبرتا وساسكاتشوان ومانيتوبا.",
  },
  {
    id: 4,
    name: "سهول الأمازون",
    lat: -3.0,
    lng: -60.0,
    imgs: ["/assets/fourthCourse/souhl_amazon.png"],
    desc: "تُعد جزءًا رئيسيًا من الأراضي الأمريكية الجنوبية وتشكل حوض تصريف نهر الأمازون وروافده، الذي يُصنف كثاني أطول أنهار العالم. تغطي هذه السهول مساحة تُقدر بحوالي 7,500,000 كيلومتر مربع، أي ما يقرب من 40% من مساحة القارة الأمريكية الجنوبية، مما يبرز أهميتها البيئية والتنوع الحيوي في المنطقة.",
  },
];
const MaghrebArabeMap = () => {
  const [selectedType, setSelectedType] = useState("");
  //const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedMontagne, setSelectedMontagne] = useState(null);

  const markersRef = useRef([]);
  // Fonction pour parler en arabe
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ar-SA";

    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find((voice) => voice.lang.includes("ar"));

    if (arabicVoice) {
      utterance.voice = arabicVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  // Effet pour lire automatiquement la description quand la modale s'ouvre
  useEffect(() => {
    if (selectedMontagne) {
      speakText(selectedMontagne.desc);
    }
  }, [selectedMontagne]);

  return (
    <div style={{ position: "relative" }}>
      {/* Légende des types de paysages */}

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
      {/* Boutons flottants */}
      <motion.div
        style={{
          position: "absolute",
          top: "100px",
          right: "950px",
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
        {["هضاب", "جبال", "سهول"].map((type) => (
          <motion.button
            key={type}
            style={{
              padding: "8px",
              backgroundColor: selectedType === type ? colors[type] : "white",
              border: `2px solid ${colors[type]}`,
              cursor: "pointer",
              fontSize: "14px",
              borderRadius: "5px",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedType(type)}
          >
            <img
              src={icones[type]}
              alt={type}
              style={{ width: "30px", marginRight: "10px" }}
            />

            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Carte interactive */}
      <MapContainer
        center={[0, 0]} // Centrer la carte sur le monde
        zoom={2}
        style={{ height: "80vh", width: "100%" }}
      >
        <LayersControl position="topright">
          <BaseLayer checked name="Topographique">
            <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
          </BaseLayer>

          <BaseLayer name="Satellite">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </BaseLayer>
          {selectedType === "هضاب" && (
            <Overlay checked name="هضاب">
              {hidhabs.map((hidhab) => (
                <Marker
                  key={hidhab.id}
                  position={[hidhab.lat, hidhab.lng]}
                  icon={defaultIcon} // Use custom icon for "هضاب"
                  eventHandlers={{
                    click: () => {
                      setSelectedMontagne(hidhab);
                      //  setSelectedPosition([hidhab.lat, hidhab.lng]);
                    },
                  }}
                ></Marker>
              ))}
            </Overlay>
          )}
          {/* Marqueurs des montagnes */}
          {selectedType === "جبال" && (
            <Overlay checked name="جبال">
              {montagnes.map((montagne) => (
                <Marker
                  key={montagne.id}
                  position={[montagne.lat, montagne.lng]}
                  icon={defaultIcon}
                  eventHandlers={{
                    click: () => {
                      setSelectedMontagne(montagne);
                      //  setSelectedPosition([montagne.lat, montagne.lng]);
                    },
                  }}
                ></Marker>
              ))}
            </Overlay>
          )}
          {selectedType === "سهول" && (
            <Overlay checked name="سهول">
              {sohouls.map((hidhab) => (
                <Marker
                  key={hidhab.id}
                  position={[hidhab.lat, hidhab.lng]}
                  icon={defaultIcon} // Use custom icon for "هضاب"
                  eventHandlers={{
                    click: () => {
                      setSelectedMontagne(hidhab);
                      //  setSelectedPosition([hidhab.lat, hidhab.lng]);
                    },
                  }}
                ></Marker>
              ))}
            </Overlay>
          )}
        </LayersControl>

        {/* Modal affichant les détails de la montagne */}
        {selectedMontagne && (
          <Modal
            title={selectedMontagne.name}
            visible={!!selectedMontagne}
            onCancel={() => {
              setSelectedMontagne(null);
              window.speechSynthesis.cancel();
            }}
            footer={null}
            afterOpenChange={(open) => {
              if (!open) window.speechSynthesis.cancel();
            }}
          >
            <p style={{ fontSize: "14px", marginTop: "5px", direction: "rtl" }}>
              {selectedMontagne.desc}
            </p>
            <div
              style={{ display: "flex", gap: "10px", justifyContent: "center" }}
            >
              {selectedMontagne.imgs.length > 0 ? (
                selectedMontagne.imgs.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${selectedMontagne.name} ${index + 1}`}
                    style={{ width: "48%", borderRadius: "10px" }}
                  />
                ))
              ) : (
                <p> </p>
              )}
            </div>
          </Modal>
        )}
        {/* Zoom sur marqueur sélectionné */}
        {/* {selectedPosition && <ZoomToMarker position={selectedPosition} />} */}
      </MapContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "10px",
          padding: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
        }}
      >
        {Object.keys(colors).map((type) => (
          <div key={type} style={{ display: "flex", alignItems: "center" }}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
            <span
              style={{
                width: "35px",
                height: "15px",
                backgroundColor: colors[type],
                display: "inline-block",
                marginLeft: "8px",
              }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaghrebArabeMap;
