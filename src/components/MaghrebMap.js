import React, { useState, useRef } from "react";
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

const MontagneIcon = L.icon({
  iconUrl: "/assets/fourthCourse/silslaJabaleya.png", // 🖼️ ton icône personnalisée
  iconSize: [60, 75], // 🪄 taille de l’icône (modifie si besoin)
  iconAnchor: [15, 45], // 🧷 point d’ancrage (le bas de l'icône)
  popupAnchor: [0, -40], // 💬 position du popup par rapport à l’icône
});
const FlagIcon = L.icon({
  iconUrl: "/assets/fourthCourse/sommet.png", // 🖼️ ton icône personnalisée
  iconSize: [60, 75], // 🪄 taille de l’icône (modifie si besoin)
  iconAnchor: [15, 45], // 🧷 point d’ancrage (le bas de l'icône)
  popupAnchor: [0, -40], // 💬 position du popup par rapport à l’icône
});
const oroufIcon = L.icon({
  iconUrl: "/assets/fourthCourse/3orouf.png", // 🖼️ ton icône personnalisée
  iconSize: [60, 75], // 🪄 taille de l’icône (modifie si besoin)
  iconAnchor: [15, 45], // 🧷 point d’ancrage (le bas de l'icône)
  popupAnchor: [0, -40], // 💬 position du popup par rapport à l’icône
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
  "قمة جبل": "/assets/fourthCourse/sommet.png",
  "سلسلة جبلية": "/assets/fourthCourse/silslaJabaleya.png",
  "عروف رملية": "/assets/fourthCourse/3orouf.png",
};
const colorsIcons = {
  "قمة جبل": "#d40a1b",
  "سلسلة جبلية": "#ff810b",
  "عروف رملية": "#3f81d7",
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
    name: "جبل الشعانبي",
    lat: 35.2,
    lng: 8.7,
    desc: "أنا جبل الشعانبي، أعلى قمة في تونس، أرتفع إلى 1544 مترًا فوق سطح البحر. أقع في سلسلة الظهرية ضمن ولاية القصرين، وأشتهر بتنوعي البيولوجي وغطائي النباتي الكثيف، كما أُعتبر محمية طبيعية ومكانًا رمزيًا في الجغرافيا التونسية.",
  },
  {
    id: 2,
    name: "جبل الأوراس",
    lat: 35.5,
    lng: 6.5,
    desc: "أنا جبل الأوراس، أحد أبرز جبال الجزائر، أبلغ ارتفاعي 2328 مترًا. أقع في شرق الجزائر وأشكل امتدادًا لسلسلة الأطلس الصحراوي. أفتخر بمكانتي التاريخية، إذ كنت مسرحًا لانطلاق الثورة الجزائرية، وأتميز بطبيعة خلابة تجمع بين القمم العالية والغابات الكثيفة.",
  },
  {
    id: 3,
    name: "جبل الأحجار (الهقار)",
    lat: 23.3,
    lng: 5.7,
    desc: "أنا جبل الأحجار أو الهقار، أرتفع إلى حوالي 2918 مترًا، وأقع في الجنوب الشرقي للجزائر قرب تمنراست. أتميز بتضاريسي البركانية القديمة وتنوعي البيولوجي في قلب الصحراء الكبرى. أُعتبر من أبرز المعالم الطبيعية في الجزائر ومكانًا روحانيًا وثقافيًا لدى الطوارق.",
  },
  {
    id: 4,
    name: "جبل طوبقال ",
    lat: 31.059,
    lng: -7.918,

    desc: "أنا جبل طوبقال  أعلى قمة في المغرب الأقصى وشمال أفريقيا، حيث يبلغ ارتفاعي 4165 مترًا. أُعتبر جزءًا من سلسلة الأطلس الكبير، وأقع جنوب مدينة مراكش. أُعد مقصدًا شهيرًا لمحبي المغامرة والتسلق والمناظر الطبيعية الخلابة.",
  },
];

// Data for هضاب locations
const hidhabs = [
  {
    id: 1,
    name: "سلسلة الظهرية بتونس",
    lat: 36.8,
    lng: 9.5,
    desc: "تمتد سلسلة الظهرية في شمال تونس من الجنوب الغربي إلى الشمال الشرقي، وهي تُعد جزءًا من الأطلس التلي. تتميز بتضاريسها الجبلية المتوسطة الارتفاع ومناخها المتوسطي، ما يجعلها منطقة زراعية مهمة خاصة لزراعة الحبوب.",
  },
  {
    id: 2,
    name: "سلسلة التل بالجزائر",
    lat: 36.7,
    lng: 3.0,
    desc: "تُعد سلسلة التل من أهم السلاسل الجبلية بالجزائر، تمتد بمحاذاة الساحل الشمالي وتضم مناطق مرتفعة مثل جبال جرجرة وجبال البابور. تتميز بغطاء نباتي كثيف ومناخ معتدل، وتُعد منطقة خصبة للزراعة.",
  },
  {
    id: 3,
    name: "سلسلة الهوقار بالجزائر",
    lat: 23.5,
    lng: 5.5,
    desc: "تقع سلسلة الهوقار (الهُوقار) في جنوب الجزائر، وهي سلسلة جبلية بركانية تتكون من صخور نارية قديمة. تحتوي على أعلى قمة في الجزائر، وهي جبل تاهات، وتتميز بجمالها الطبيعي وتنوعها الجيولوجي.",
  },
  {
    id: 4,
    name: "سلسلة الأطلس الصحراوي بالجزائر",
    lat: 33.0,
    lng: 2.0,
    desc: "تمتد سلسلة الأطلس الصحراوي عبر الأجزاء الجنوبية من الجزائر وتُشكل حاجزًا طبيعيا بين الصحراء الكبرى وشمال البلاد. تتكون من جبال وهضاب شبه قاحلة، وتضم موارد معدنية مهمة.",
  },
  {
    id: 5,
    name: "سلسلة الأطلس بالمغرب الأقصى",
    lat: 32.0,
    lng: -6.0,
    desc: "يتكون الأطلس المغربي من ثلاث سلاسل رئيسية: الأطلس الكبير الذي يضم أعلى قمة في المغرب (توبقال)، الأطلس المتوسط الذي يتميز بالغابات والأنهار، والأطلس الصغير في الجنوب. تلعب هذه السلاسل دورًا كبيرًا في المناخ والزراعة والموارد المائية.",
  },
];

const sohouls = [
  {
    id: 1,
    name: "العروف الرملية بتونس",
    lat: 33.9,
    lng: 10.2,
    desc: "العروف الرملية في تونس تمتد على طول المناطق الصحراوية في الجنوب، حيث تشكل هضابًا وكثبانًا رملية ضخمة. تتميز هذه العروف بارتفاعاتها المتفاوتة وألوانها الذهبية التي تنعكس تحت ضوء الشمس. هذه المنطقة تعتبر جزءًا من صحراء الشطوط.",
  },
  {
    id: 2,
    name: "العروف الرملية بالجزائر",
    lat: 31.5,
    lng: 4.5,
    desc: "تنتشر العروف الرملية في مناطق الجزائر الجنوبية خاصة في صحراء الجزائر الكبرى. هذه العروف تتميز بالكثبان الرملية الكبيرة التي تتغير شكلاً مع الرياح الموسمية. تعد هذه المناطق من أهم الوجهات السياحية لمحبي المغامرة والرحلات الصحراوية.",
  },
  {
    id: 3,
    name: "العروف الرملية بالمغرب الأقصى",
    lat: 29.0,
    lng: -7.5,
    desc: "العروف الرملية في المغرب تتوزع في مناطق مثل صحراء مراكش، حيث تجد الكثبان الرملية الضخمة التي تشكل منظراً طبيعياً خلاباً. هذه العروف تعرف بتنوعها البيولوجي وتحتوي على العديد من الأنواع النباتية والحيوانية المتكيفة مع البيئة الصحراوية.",
  },
  {
    id: 4,
    name: "العروف الرملية بالصحراء الكبرى",
    lat: 25.0,
    lng: 6.0,
    desc: "تعد الصحراء الكبرى واحدة من أكبر الصحاري الرملية في العالم. تتميز بكثبانها الرملية العملاقة التي تمتد لآلاف الكيلومترات. تعرف الصحراء الكبرى بتنوع بيئي فريد وتاريخ غني بالثقافات القديمة التي سكنت فيها.",
  },
  {
    id: 5,
    name: "العروف الرملية بالصحراء الغربية",
    lat: 27.0,
    lng: -8.0,
    desc: "العروف الرملية في الصحراء الغربية تمتد على مساحة شاسعة، وتحتوي على العديد من الكثبان الرملية التي تعد من أبرز المعالم الجغرافية في المنطقة. وتعتبر من الأماكن التي تجذب محبي المغامرة والنزهات الصحراوية.",
  },
  {
    id: 6,
    name: "العروف الرملية بالصحراء التونسية (الجنوب الشرقي)",
    lat: 32.0,
    lng: 9.5,
    desc: "تتمركز العروف الرملية في الجنوب الشرقي التونسي، وتوجد في مناطق مثل دوز وبوغرارة. الكثبان الرملية هناك تعكس جمالًا طبيعيًا بفضل التضاريس المتنوعة التي تتراوح بين التلال الرملية والصحاري الواسعة.",
  },
  {
    id: 7,
    name: "العروف الرملية في صحراء ليبيا الكبرى",
    lat: 24.0,
    lng: 14.0,
    desc: "العروف الرملية في صحراء ليبيا الكبرى تعتبر من أبرز المظاهر الطبيعية في المنطقة. تتنوع الكثبان الرملية من حيث الشكل والارتفاع، مما يجعلها من الوجهات المفضلة للباحثين عن المغامرات الصحراوية.",
  },
  {
    id: 8,
    name: "العروف الرملية بالصحراء الموريتانية",
    lat: 20.5,
    lng: -10.5,
    desc: "العروف الرملية في صحراء موريتانيا تعد واحدة من أوسع مناطق الكثبان الرملية في شمال غرب أفريقيا. المنطقة غنية بالحياة البرية والنباتات الصحراوية الفريدة التي تتكيف مع بيئة الرمال الجافة.",
  },
  {
    id: 9,
    name: "العروف الرملية في صحراء النقب (الجزء الجزائري)",
    lat: 23.0,
    lng: 5.0,
    desc: "العروف الرملية في صحراء النقب الجزائرية هي جزء من المنطقة الصحراوية الكبيرة التي تضم كثباناً عالية وسهولاً رملية، مع تاريخ طويل مرتبط بالحضارات القديمة التي سكنت هذه الأرض.",
  },

];
const MaghrebMap = () => {
  const [selectedType, setSelectedType] = useState("");
  //const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedMontagne, setSelectedMontagne] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const descriptions = {
      سهول: `أنا السهول مناطق منبسطة، لا توجد بي ارتفاعات او انخفاضات كثيرة وانا الأقل انتشارا في المغرب العربي. أظهر في شكل نوعين هما:
- سهول ساحلية ضيقة كسهل الساحل و سهول الجفارة بالبلاد التونسية
- سهول داخلية مثل سهول الكاف، الجريد و نفزاوة في تونس و التي تحتوي بعض المنخفضات و الشطوط كشط الجريد.`,

      هضاب: `أنا الهضاب تضاريس مرتفعة بعض الشيء عن سطح الأرض مثال هضاب الظاهر بالجنوب التونسي.`,

      جبال: `أنا الجبال أجزاء مرتفعة جدا عن سطح الأرض مقارنة بالهضاب، أتميّز عموما بجوانب شديدة الإنحدار وقمم شاهقة. وأنا نوعان:
- سلاسل جبلية منعزلة في الشمال تمتد على كامل الجزء الشمالي للمحيط الأطلسي غربا الى غاية الوطن القبلي شرقا وينخفض ارتفاعي من الغرب الى الشرق حيث يصل ارتفاع أعلى قممها الى 4165 م في جبل طوبقال بالمغرب الأقصى و 2328 م بجبل أوراس بالجزائر و 1544م في جبل الشعانبي بتونس
أتكون أساسا من سلسلتين جبليتين هما:
* سلسلة جبلية شمالية: تتكون من جبال الريف في المغرب الأقصى وجبال الاطلس التلي في الجزائر وجبال خمير في تونس
* سلسلة جبلية جنوبية: تتألف من الأطلس الكبير والأطلس المتوسط والأطلس الصغير في المغرب الاقصى والاطلس الصحراوي وجبال أوراس في الجزائر والسلسلة الظهرية في تونس.
- الكتل الجبلية المنعزلة وهي ترتفع في قلب الصحراء الكبرى و أهمها جبال تيبستي جنوب ليبيا ( أعلى قممها 3450م ) و جبال الهقار جنوب الجزائر ( أعلى قممها 3003م ).`,
    };
  const showModal = (description, type) => {
    // Vérifier si le type n'est pas "صحاري"
    if (type !== "صحاري") {
      setModalContent(description);
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const markersRef = useRef([]);

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
        {["قمة جبل", "سلسلة جبلية", "عروف رملية"].map((type) => (
          <motion.button
            key={type}
            style={{
              padding: "8px",
              backgroundColor:
                selectedType === type ? colorsIcons[type] : "white",
              border: `2px solid ${colorsIcons[type]}`,
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
        center={[30, 5]}
        zoom={5}
        style={{ height: "80vh", width: "100%" }}
      >
        <LayersControl position="topright">
          <BaseLayer checked name="Topographique">
            <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
          </BaseLayer>

          <BaseLayer name="Satellite">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </BaseLayer>
          {selectedType === "سلسلة جبلية" && (
            <Overlay checked name="سلسلة جبلية">
              {hidhabs.map((hidhab) => (
                <Marker
                  key={hidhab.id}
                  position={[hidhab.lat, hidhab.lng]}
                  icon={MontagneIcon} // Use custom icon for "هضاب"
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
          {selectedType === "قمة جبل" && (
            <Overlay checked name="قمة جبل">
              {montagnes.map((montagne) => (
                <Marker
                  key={montagne.id}
                  position={[montagne.lat, montagne.lng]}
                  icon={FlagIcon}
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
          {selectedType === "عروف رملية" && (
            <Overlay checked name="عروف رملية">
              {sohouls.map((hidhab) => (
                <Marker
                  key={hidhab.id}
                  position={[hidhab.lat, hidhab.lng]}
                  icon={oroufIcon} // Use custom icon for "هضاب"
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
            onCancel={() => setSelectedMontagne(null)}
            footer={null}
          >
            <p style={{ fontSize: "14px", marginTop: "5px", direction: "rtl" }}>
              {selectedMontagne.desc}
            </p>
            <div
              style={{ display: "flex", gap: "10px", justifyContent: "center" }}
            >
              {selectedMontagne?.imgs?.length > 0 ? (
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
            <span>
              <button
                key={type}
                onClick={() => showModal(descriptions[type], type)}
                style={{
                  width: "45px",
                  height: "20px",
                  backgroundColor: colors[type],
                  display: "inline-block",
                  marginLeft: "8px",
                }}
              ></button>
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p style={{ fontSize: "14px", marginTop: "5px", direction: "rtl" }}>
          {modalContent}
        </p>
      </Modal>
    </div>
  );
};

export default MaghrebMap;
