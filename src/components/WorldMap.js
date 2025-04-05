import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";
import { Modal } from "antd";

const oceansData = [
  {
    name: "المحيط الهادي",
    coordinates: [-160, 10],
    description:
      "أنا المحيط الهادئ، أكبر مسطح مائي على كوكب الأرض، والذي كان يُعرف تاريخيًا باسم البحر الكاهل. أمتد من القطب الشمالي شمالًا إلى المحيط المتجمد الجنوبي جنوبًا، وأشكل حدودًا طبيعية لقارات آسيا وأستراليا من الجهة الغربية، والأمريكيتين من الجهة الشرقية. بمساحة تُقدَّر بنحو 169.2 مليون كيلومتر مربع ، أُغطي ما يقارب 46% من إجمالي مساحة البحار، وأمثل حوالي 30% من المساحة الكلية للكرة الأرضية. أحتضن شبكة واسعة من التيارات البحرية التي تؤثر بشكل مباشر على المناخ العالمي.",
    image: "/assets/fourthCourse/pacific.jpg",
  },
  {
    name: "المحيط الهادي",
    coordinates: [160, 10],
    description:
      "أنا المحيط الهادئ، أكبر مسطح مائي على كوكب الأرض، والذي كان يُعرف تاريخيًا باسم البحر الكاهل. أمتد من القطب الشمالي شمالًا إلى المحيط المتجمد الجنوبي جنوبًا، وأشكل حدودًا طبيعية لقارات آسيا وأستراليا من الجهة الغربية، والأمريكيتين من الجهة الشرقية. بمساحة تُقدَّر بنحو 169.2 مليون كيلومتر مربع ، أُغطي ما يقارب 46% من إجمالي مساحة البحار، وأمثل حوالي 30% من المساحة الكلية للكرة الأرضية. أحتضن شبكة واسعة من التيارات البحرية التي تؤثر بشكل مباشر على المناخ العالمي.",
    image: "/assets/fourthCourse/pacific.jpg",
  },
  {
    name: "المحيط الأطلسي",
    coordinates: [-35, 10],
    description:
      "أنا المحيط الأطلسي، أو كما كنتُ أُعرف قديمًا ببحر الظلمات أو الأقيانوس. أحتل المرتبة الثانية بين محيطات العالم من حيث المساحة بعد المحيط الهادئ، إذ تمتد مساحتي إلى حوالي 106.4 مليون كيلومتر مربع ، مما يجعلني أغطي نحو 20% من سطح الكرة الأرضية و26% من إجمالي مساحة المياه على الكوكب. من الشرق، أُحدُّ بقارتي إفريقيا وأوروبا، بينما تحدّني الأمريكيتان من الغرب، فاصنع جسرًا مائيًا هائلًا يربط بين الحضارات والشعوب. ",
    image: "/assets/fourthCourse/atlantic.jpg",
  },
  {
    name: "المحيط الهندي",
    coordinates: [80, -10],
    description:
      "أنا ثالث أكبر محيط على وجه الأرض، وأغطي حوالي 20% من المياه التي تغمر كوكبنا. تمتد مساحتي الشاسعة إلى نحو 73.5 مليون كيلومتر مربع ، بما في ذلك البحر الأحمر والخليج العربي.أحيط بالعديد من القارات والبلدان، فمن الشمال تحتضنني شبه القارة الهندية، ومن الغرب أجاور سواحل شرق إفريقيا، بينما تمتد على جانبي الشرقي شبه الجزيرة الهندية الصينية، جزر سوندا، وأستراليا. أما في الجنوب، فألتقي مع المحيط المتجمد الجنوبي.",
    image: "/assets/fourthCourse/indian.png",
  },
  {
    name: " المحيط المتجمد الشمالي",
    coordinates: [0, 90],
    description:
      "أنا أُعرفُ أيضًا باسم المحيط الشمالي. أُشكل أصغر محيطات العالم وأقلها عمقًا، حيث أُحيط بالمناطق القطبية الشمالية، وأمتد بين قارتي أوراسيا وأمريكا الشمالية.تغطي مياهي الجليد البحري على مدار العام، ألعب دورًا محوريًا في تنظيم المناخ العالمي والتيارات المحيطية، مما يجعلني عنصرًا أساسيًا في دراسة التغيرات البيئية والمناخية.",
    image: "/assets/fourthCourse/arctic.png",
  },
  // {
  //   name: "المحيط المتجمد الجنوبي",
  //   coordinates: [0, -70],
  //   description: "Entoure le continent Antarctique et relie tous les océans.",
  //   image: "https://example.com/southern.jpg",
  // },
];
const seasData = [
  { name: "البحر الأصفر", coordinates: [140, 30] },
  { name: "بحر الصين", coordinates: [125, 8] },
  { name: "بحر العرب", coordinates: [70, 1] },
  { name: "بحر القزوين", coordinates: [61, 34] },
  { name: "بحر المتوسط", coordinates: [15, 28] },
  { name: "البحر الأحمر", coordinates: [48.5, 15] },
  { name: "بحر الشمال", coordinates: [-30, 35] },
];
const LettresColors = [
  "#FFD700",
  "#FF6B6B",
  "#4CAF50",
  "#3498db",
  "#E67E22",
  "#9B59B6",
  "#B0C4DE",
];

const continentColors = {
  آسيا: "#FFD700",
  أوروبا: "#FF6B6B",
  إفريقيا: "#4CAF",
  "أمريكا الجنوبية": "#FF69B4",
  "أمريكا الشمالية": "#FFA500",
  انتاركتيكا: "#A9A9A9",
  أستراليا: "#9C27B0",
  أوقيانوسيا: "#00BCD4", // Nouveau
};
const continentCentroids = {
  آسيا: [100, 45],
  أوروبا: [15, 55],
  إفريقيا: [20, 0],
  "أمريكا الشمالية": [-100, 45],
  "أمريكا الجنوبية": [-60, -15],
  أستراليا: [135, -25],
  انتاركتيكا: [0, -90],
};
const continentData = {
  آسيا: {
    description:
      "أنا قارة آسيا، أكبر قارات العالم من حيث المساحة وعدد السكان. أمتد عبر نصفي الكرة الشرقي والشمالي، وأشغل ما يقارب 8.7% من إجمالي مساحة سطح الأرض، أي ما يعادل 30% من مساحة اليابسة، بمساحة تقدر بـ 44.579 مليون كيلومتر مربع. أحتضن ما يقارب 4.462 مليار نسمة، مما يشكل نحو 60% من سكان العالم. وخلال القرن العشرين، شهد عدد سكان القارة تضاعفًا يقارب أربع مرات، مما عزز مكانتي كمركز رئيسي للحضارات والتنوع السكاني على مستوى العالم.",
    images: [
      "/assets/fourthCourse/asia1.png",
      "/assets/fourthCourse/asia2.png",
    ],
  },
  أوروبا: {
    description:
      "أنا قارة أوروبا، إحدى قارات العالم السبع، وأُعدّ جغرافيًا شبه جزيرة كبيرة. تمتد حدودي من جبال الأورال وجبال القوقاز وبحر قزوين في الشرق إلى المحيط الأطلسي في الغرب، بينما يحدّني البحر الأبيض المتوسط والبحر الأسود من الجنوب،والمحيط المتجمد الشمالي من الشمال.تبلغ مساحتي حوالي 10.18 مليون كيلومتر مربع، ما يمثل 2% من إجمالي مساحة سطح الأرض و6.8% من مساحة اليابسة، مما يجعلني ثاني أصغر قارة من حيث المساحة. ورغم ذلك، أحتل المرتبة الثالثة عالميًا من حيث عدد السكان",
    images: [
      "/assets/fourthCourse/europe2.jpg",
      "/assets/fourthCourse/europe1.png",
    ],
  },
  إفريقيا: {
    description:
      "أنا  قارة إفريقيا، ثاني أكبر قارات العالم مساحةً وسكانًا بعد آسيا، إذ أمتد على 30.2 مليون كيلومتر مربع، ما يعادل 6% من مساحة سطح الأرض و20.4% من مساحة اليابسة. أحتضن ما يقارب 1.2 مليار نسمة، مما يجعلني أحد المراكز السكانية الرئيسية عالميًا. يحدّني البحر المتوسط شمالًا، وقناة السويس والبحر الأحمر شمالًا شرق، بينما يحيط بي المحيط الهندي من الجنوب الشرقي والشرق، والمحيط الأطلسي من الغرب، مما يمنحني موقعًا جغرافيًا حيويًا يربط بين القارات والمحيطات.",
    images: [
      "/assets/fourthCourse/africa1.png",
      "/assets/fourthCourse/africa1.jpg",
    ],
  },
  "أمريكا الشمالية": {
    description:
      " أنا قارة أمريكا، أو كما يُطلق عليَّ الأمريكتان، أقع في النصف الغربي من الكرة الأرضية، وأُعرف أيضًا بالعالم الجديد. يشير اسمي بصيغة الجمع إلى امتداد أراضيَّ عبر قارتي أمريكا الشمالية وأمريكا الجنوبية، بالإضافة إلى الجزر والمناطق المحيطة بهما. أما في بعض الاستخدامات. أغطي حوالي 8.3% من إجمالي مساحة سطح الأرض، أي ما يعادل 28.4% من مساحة اليابسة. كما أحتضن ما يقارب 900 مليون نسمة.",
    images: [
      "/assets/fourthCourse/northamerica.png",
      "/assets/fourthCourse/america.png",
    ],
  },
  "أمريكا الجنوبية": {
    description:
      " أنا قارة أمريكا، أو كما يُطلق عليَّ الأمريكتان، أقع في النصف الغربي من الكرة الأرضية، وأُعرف أيضًا بالعالم الجديد. يشير اسمي بصيغة الجمع إلى امتداد أراضيَّ عبر قارتي أمريكا الشمالية وأمريكا الجنوبية، بالإضافة إلى الجزر والمناطق المحيطة بهما. أما في بعض الاستخدامات. أغطي حوالي 8.3% من إجمالي مساحة سطح الأرض، أي ما يعادل 28.4% من مساحة اليابسة. كما أحتضن ما يقارب 900 مليون نسمة.",
    images: [
      "/assets/fourthCourse/southamerica.png",
      "/assets/fourthCourse/america.png",
    ],
  },
  أستراليا: {
    description:
      "أنا قارة أستراليا، أصغر قارات العالم وسادس أكبر دولة من حيث المساحة. أقع في نصف الكرة الجنوبي، جنوب شرق آسيا وغرب المحيط الهادئ.تبلغ مساحتي 7,617,930 كيلومتر مربع، مما يجعلني واحدة من أكبر المناطق الجغرافية في العالم، بموقع فريد يعزز تنوعي البيئي والمناخي.",
    images: [
      "/assets/fourthCourse/australia1.png",
      "/assets/fourthCourse/australia2.png",
    ],
  },
  "القارة القطبية الجنوبية": {
    description:
      "أنا القارة القطبية الجنوبية، أو كما يُطلق عليّ أنتاركتيكا، وأقع في أقصى جنوب الأرض. حيث أحيط بالكامل تقريبًا بالدائرة القطبية الجنوبية والمحيط الجنوبي.تبلغ مساحتي حوالي 14,200,000 كيلومتر مربع، مما يجعلني خامس أكبر قارة، بمساحة توازي تقريبًا ضعف مساحة أستراليا. أتمتع بأقل كثافة سكانية في العالم، إذ لا يتواجد فيها إلا نحو 0.00008 شخص لكل كيلومتر مربع. يغطي الجليد حوالي 98% من سطح أراضيّ، مما يجعلني واحدة من أكثر الأماكن الباردة الجليدية على كوكب الأرض. .",
    images: [
      "/assets/fourthCourse/antarctica1.png",
      "/assets/fourthCourse/antarctica2.png",
    ],
  },
};
const continentPositions = [
  { name: "آسيا", coordinates: [100, 40] },
  { name: "أوروبا", coordinates: [10, 50] },
  { name: "إفريقيا", coordinates: [20, 0] },
  { name: "أمريكا الشمالية", coordinates: [-100, 40] },
  { name: "أمريكا الجنوبية", coordinates: [-60, -20] },
  { name: "أستراليا", coordinates: [130, -25] },
  { name: "أنتاركتيكا", coordinates: [0, -80] },
];
function getContinentColor(coordinates) {
  const [long, lat] = coordinates;

  // Trouve le continent le plus proche
  let closestContinent = "";
  let minDistance = Infinity;

  Object.entries(continentCentroids).forEach(([name, centroid]) => {
    const distance = Math.sqrt(
      Math.pow(long - centroid[0], 2) + Math.pow(lat - centroid[1], 2)
    );

    if (distance < minDistance) {
      minDistance = distance;
      closestContinent = name;
    }
  });

  return continentColors[closestContinent] || "#E0E0E0";
}
const continentAreas = [
  {
    name: "آسيا",
    coordinates: [100, 45], // Position approximative de l'Asie
    color: "#FFD700",
    bbox: [
      [25, -20],
      [190, 90],
    ], // Zone approximative couvrant l'Asie
  },
  {
    name: "أوروبا",
    coordinates: [20, 45],
    color: "#FF6B6B",
    bbox: [
      [-25, 35],
      [60, 75],
    ],
  },
  {
    name: "إفريقيا",
    coordinates: [20, 0],
    color: "#4CAF50",
    bbox: [
      [-25, -40],
      [60, 40],
    ],
  },
  {
    name: "أمريكا الشمالية",
    coordinates: [-100, 50],
    color: "#3498db",
    bbox: [
      [-170, 10],
      [-50, 85],
    ],
  },
  {
    name: "أمريكا الجنوبية",
    coordinates: [-60, -15],
    color: "#E67E22",
    bbox: [
      [-85, -60],
      [-30, 15],
    ],
  },
  {
    name: "أستراليا",
    coordinates: [140, -25],
    color: "#9B59B6",
    bbox: [
      [110, -50],
      [180, 0],
    ],
  },
  {
    name: "القارة القطبية الجنوبية",
    coordinates: [0, -75],
    color: "#B0C4CC",
    bbox: [
      [-180, -90],
      [180, -60],
    ],
  },
];
const continentMapping = {
  Asia: "آسيا",
  Europe: "أوروبا",
  Africa: "إفريقيا",
  "South America": "أمريكا الجنوبية",
  "North America": "أمريكا الشمالية",
  Antarctica: "انتاركتيكا",
  Australia: "أستراليا",
};

function WorldMap() {
  const [showOceans, setShowOceans] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [showEquator, setShowEquator] = useState(false); // Etat pour afficher/masquer la ligne de l'Equateur
  const [showEquatorModal, setShowEquatorModal] = useState(false);

  const [showContinents, setShowContinents] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState(null);

  const [showSeas, setShowSeas] = useState(false);
  const [oceanColor, setOceanColor] = useState("#c9e7fa");
  const [selectedOcean, setSelectedOcean] = useState(null);
  const showModal = (continentName) => {
    setSelectedContinent(continentData[continentName]);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toggleOceans = () => {
    setShowOceans(!showOceans);
    setOceanColor(showOceans ? "#c9e7fa" : "#5CAFE7");
  };
  const toggleContinents = () => {
    console.log("Show continents:", !showContinents); // Pour vérifier que l'état change

    setShowContinents(!showContinents); // Change l'état pour afficher ou masquer les continents
  };
  const handleContinentClick = (continent) => {
    console.log("Continent sélectionné :", continent);
    setSelectedContinent(continent);
  };
  const toggleEquator = () => {
    setShowEquator(!showEquator); // Inverse l'état pour afficher ou masquer l'Equateur
  };
  const handleEquatorClick = () => {
    setShowEquatorModal(true);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <ComposableMap
        projection="geoEqualEarth"
        key={`map-${showContinents}`}
        projectionConfig={{ scale: 150 }}
        style={{ width: "100%", height: "auto", backgroundColor: oceanColor }}
      >
        <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              const continent = geo.properties.CONTINENT;
              const fillColor =
                showContinents && continentColors[continent]
                  ? continentColors[continent]
                  : "#f6f4c5";
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#f6f4c5"
                  stroke="#FFF"
                  strokeWidth={0.5}
                  style={{
                    cursor: "pointer",
                    outline: "none",
                  }}
                />
              );
            })
          }
        </Geographies>
        {showContinents &&
          continentAreas.map((continent, i) => (
            <Annotation key={i} subject={continent.coordinates} dx={0} dy={0}>
              <text
                fontSize={14}
                fill={continent.color}
                fontWeight="bold"
                textAnchor="middle"
                style={{ cursor: "pointer" }}
                onClick={() => showModal(continent.name)}
              >
                {continent.name}
              </text>
            </Annotation>
          ))}
        {showEquator && (
          <>
            <path
              d="M-800,290 L800,290"
              stroke="red"
              strokeWidth={2}
              fill="none"
              onClick={handleEquatorClick}
              style={{ cursor: "pointer" }}
            />
            <Annotation subject={[0, 0]} dx={0} dy={5}>
              <text
                fontSize={12}
                fill="red"
                fontWeight="bold"
                textAnchor="middle"
              >
                خط الاستواء
              </text>
            </Annotation>
          </>
        )}
        {showOceans &&
          oceansData.map((ocean, index) => (
            <Annotation
              key={index}
              subject={ocean.coordinates}
              dx={0}
              dy={0}
              onClick={() => setSelectedOcean(ocean)}
              style={{ cursor: "pointer" }}
            >
              <text
                fontSize={12}
                fill="black"
                fontWeight="bold"
                textAnchor="middle"
              >
                {ocean.name}
              </text>
            </Annotation>
          ))}
        {showSeas &&
          seasData.map((sea, index) => (
            <Annotation key={index} subject={sea.coordinates} dx={0} dy={0}>
              {/* Groupe pour la bulle */}
              <g transform="translate(-30,-40)">
                {/* Rectangle arrondi pour la bulle */}
                <rect
                  x="-30"
                  y="-30"
                  width="80"
                  height="25"
                  rx="10"
                  ry="10"
                  fill="#CACACA"
                  stroke="black"
                  strokeWidth="1"
                />
                {/* Triangle pour la pointe de la bulle */}
                <polygon
                  points="-5,0 5,0 0,10"
                  fill="#CACACA"
                  stroke="black"
                  strokeWidth="1"
                />
                {/* Texte à l'intérieur de la bulle */}
                <text
                  x="10"
                  y="-12"
                  fontSize={12}
                  fill="black"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {sea.name}
                </text>
              </g>
            </Annotation>
          ))}
        {/* Ajouter l'image en bas à gauche */}
        <image
          href="/assets/fourthCourse/chamel.png" // Remplacer avec le chemin de votre image
          width={50} // Largeur de l'image
          height={50} // Hauteur de l'image
          style={{
            border: "none", // Supprime toute bordure autour de l'image
            outline: "none", // Éviter les contours autour de l'image
          }}
        />
      </ComposableMap>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "10px",
        }}
      >
        <button
          onClick={toggleOceans}
          style={{
            color: "black", // Texte noir
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            gap: "10px", // Espacement entre texte et carré bleu
          }}
        >
          <span>المحيطات</span>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#5CAFE7", // Même couleur que le bouton
              border: "1px solid black",
            }}
          ></div>
        </button>
        <button
          onClick={() => setShowSeas(!showSeas)}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            color: "black",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span>البحار</span>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#CACACA",
              border: "1px solid black",
            }}
          ></div>
        </button>
        <button
          onClick={toggleContinents}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            color: "black",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              background: `linear-gradient(90deg, ${LettresColors.join(", ")})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
            }}
          >
            القارات
          </span>

          <div
            style={{
              width: "24px",
              height: "24px",
              background: `linear-gradient(45deg, ${LettresColors.join(", ")})`,
              border: "1px solid black",
            }}
          ></div>
        </button>
        {/* Equator button */}
        <button
          onClick={toggleEquator}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          خط الاستواء
          <span
            style={{
              display: "inline-block",
              width: "25px", // Largeur de la ligne rouge
              height: "2px", // Épaisseur de la ligne
              backgroundColor: "red", // Couleur de la ligne
              marginLeft: "8px", // Espacement entre la ligne et le texte
            }}
          />
        </button>
      </div>
      {/* Modal for Equator info */}
      <Modal
        title="خط الاستواء"
        open={showEquatorModal}
        onCancel={() => setShowEquatorModal(false)}
        footer={null}
      >
        <p style={{ direction: "rtl", fontSize: "14px", fontWeight: "bold" }}>
          و هو خط وهمي يقسم الكرة الأرضية إلى نصفين متساويين:
          <br />
          _ نصف شمالي يشمل الجزء الأكبر من اليابسة
          <br />_ نصف جنوبي يغطي أغلبه الماء
        </p>
      </Modal>
      <Modal
        title={selectedContinent ? selectedContinent.name : ""}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {selectedContinent && (
          <div style={{ textAlign: "center" }}>
            <p
              style={{ direction: "rtl", fontSize: "14px", fontWeight: "bold" }}
            >
              {selectedContinent.description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              {" "}
              {/* Flexbox pour aligner les images côte à côte */}
              <img
                src={selectedContinent.images[0]}
                alt={selectedContinent.name}
                style={{
                  width: "48%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }} // Ajustez la largeur de l'image à 48%
              />
              <img
                src={selectedContinent.images[1]}
                alt={selectedContinent.name}
                style={{
                  width: "48%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }} // Ajustez la largeur de l'image à 48%
              />
            </div>
          </div>
        )}
      </Modal>

      {selectedOcean && (
        <Modal
          title={selectedOcean.name}
          open={!!selectedOcean}
          onCancel={() => setSelectedOcean(null)}
          footer={null}
        >
          <p>{selectedOcean.description}</p>
          <img
            src={selectedOcean.image}
            alt={selectedOcean.name}
            style={{ width: "100%" }}
          />
        </Modal>
      )}
    </div>
  );
}

export default WorldMap;
