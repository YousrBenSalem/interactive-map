import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import MapComponent from "../components/MapComponent.js";
import MapComponent2 from "../components/MapComponent1.js";
import TunisiaMap from "./TunisiaMap.js";
import AfricaMap from "./TunisiaMap.js";
import ReasonsMigration from "./ReasonMigration.js";

const MapComponent1 = () => {
  const [showArrows, setShowArrows] = useState(false);

  useState(() => {
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    const mapDataScript = loadScript("/mapdata1.js");
    const worldMapScript = loadScript("/countrymap1.js");

    return () => {
      document.body.removeChild(mapDataScript);
      document.body.removeChild(worldMapScript);
    };
  }, []);
  const arrows = [
    {
      top: "180px",
      left: "560px",
      rotation: 45, // Changé en nombre pour simplifier
      height: "50px",
    },
    {
      top: "220px",
      left: "560px",
      rotation: -30,

      height: "50px",
    },
    {
      top: "320px",
      left: "610px",
      rotation: -45,

      height: "50px",
    },
    {
      top: "460px",
      left: "590px",
      rotation: 15,

      height: "50px",
    },
    {
      top: "575px",
      left: "565px",
      rotation: -60,

      height: "50px",
    },
    {
      top: "585px",
      left: "470px",
      rotation: 95,

      height: "50px",
    },
    {
      top: "760px",
      left: "715px",
      rotation: -25,

      height: "50px",
    },
  ];
  return (
    <div style={{ width: "100%", height: "1200px", position: "relative" }}>
      <center>
        <h1>الهجرة الداخلية بالبلاد التونسية</h1>
      </center>
      <div id="map"></div>

      {/* Image de la boussole en haut à gauche */}
      <img
        src="/direc.png"
        alt="Boussole"
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          width: "200px",
          height: "200px",
          zIndex: 1000,
        }}
      />

      {/* Bouton de flèche */}
      <div
        style={{
          position: "absolute",
          bottom: "-50x",
          right: "20px",
          cursor: "pointer",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "white",
          padding: "8px 15px",
          borderRadius: "10px",
          //  boxShadow: "2px 2px 10px #f1f1f1",
          marginRight: "740px",
        }}
        onClick={() => setShowArrows(!showArrows)}
      >
        <div></div>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Verdana, Arial, Helvetica, sans-serif", // ✅ Ajout de la police

            color: "#333",
            marginTop: "0px",
            lineHeight: "50px",
          }}
        >
          الأدفاق الهجرة{" "}
        </span>
        <ArrowLeft
          size={30} // ✅ Ajuste la taille de l'icône pour être plus proportionnelle
          color={showArrows ? "red" : "black"}
          style={{ verticalAlign: "middle" }}
        />
      </div>

      {/* Affichage conditionnel des flèches */}
      {showArrows &&
        arrows.map((arrow, index) => (
          <motion.img
            key={index}
            src="/arrow.png"
            alt="Migration arrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{
              position: "absolute",
              top: arrow.top,
              height: arrow.height, // Utilisation de la hauteur personnalisée

              left: arrow.left,
              width: `${arrow.size}px`,
              transform: `rotate(${arrow.rotation}deg)`,
              zIndex: 1000,
              filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.5))", // Ombre pour meilleure visibilité
            }}
          />
        ))}
    </div>
  );
};

{
  /*
const TextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [text, setText] = useState('Bonjour, comment allez-vous ?');
  const [voices, setVoices] = useState([]);
  const [voice, setVoice] = useState(null);
  const synth = window.speechSynthesis;

  // Charger les voix disponibles
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0 && !voice) {
        // Sélectionner une voix française par défaut si disponible
        const arabicVoice  = availableVoices.find(v => v.lang === 'ar-SA');
        setVoice(arabicVoice  || availableVoices[0]);
      }
    };

    loadVoices();
    synth.onvoiceschanged = loadVoices;

    return () => {
      synth.onvoiceschanged = null;
    };
  }, []);

  const speak = () => {
    if (synth.speaking) {
      synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);

    if (voice) {
      utterance.voice = voice;
    }
    utterance.rate = 1; // Vitesse (0.1 à 10)
    utterance.pitch = 1; // Hauteur (0 à 2)
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.lang = 'ar-SA';
    synth.speak(utterance);
  };

  const pause = () => {
    synth.pause();
    setIsSpeaking(false);
  };

  const resume = () => {
    synth.resume();
    setIsSpeaking(true);
  };

  const stop = () => {
    synth.cancel();
    setIsSpeaking(false);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        cols={50}
      />
      
      <div>
        <select 
          value={voice?.name} 
          onChange={(e) => setVoice(voices.find(v => v.name === e.target.value))}
        >
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      </div>

      <div>
        <button onClick={speak} disabled={isSpeaking}>
          🗣 Lire
        </button>
        <button onClick={pause} disabled={!isSpeaking}>
          ⏸ Pause
        </button>
        <button onClick={resume} disabled={isSpeaking}>
          ▶ Reprendre
        </button>
        <button onClick={stop} disabled={!isSpeaking}>
          ⏹ Arrêter
        </button>
      </div>
    </div>
  );
};
*/
}

const Course = () => {
  const [showAnswers, setShowAnswers] = useState({});
  const [showArrows, setShowArrows] = useState(false);
  // État pour suivre quelles réponses sont visibles
  const [visibleAnswers, setVisibleAnswers] = useState({});

  // Données des questions et réponses
  const questions1 = [
    {
      id: 1,
      question: "ما هي الوجهة الرئيسية للتونسيين في الهجرة الخارجية؟",
      answer: "تعد فرنسا الوجهة الأولى للهجرة التونسية",
    },
    {
      id: 2,
      question: "كيف تصف تطور عدد المهاجرين التونسيين بين سنة 1970 وسنة 2003",
      answer:
        "شهد عدد المهاجرين التونسيين زيادة ملحوظة، حيث ارتفع من 171,000 سنة إلى 1970 إلى 843,203 سنة، مما يعكس تطوراً إيجابياً في وثيرة الهجرة.",
    },
    {
      id: 3,
      question: "كيف تصف تطور نسبة المهاجرين التونسيين بين سنتي 2003 و1970",
      answer:
        "تراجعت نسبة المهاجرين إلى فرنسا من 70% سنة إلى 1970 إلى 59% سنة، لكنها ظلت مرتفعة أكثر من نصف المهاجرين)",
    },
  ];

  // Fonction pour basculer l'affichage d'une réponse
  const toggleAnswer1 = (id) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Fonction pour réinitialiser toutes les réponses
  const resetAll = () => {
    setVisibleAnswers({});
  };

  const reasons = [
    "أسباب تعليمية",
    "أسباب اجتماعية",
    "أسباب عائلية",
    "أسباب اقتصادية",
  ];

  const motivations = [
    "مصلحية العائلة أو أحد أفرادها",
    "العمل",
    "الدراسة",
    "الزواج",
  ];

  // Configuration des flèches inclinées
  const arrowsConfig = [
    { angle: 150, startY: "33%", length: 290 },
    { angle: 190, startY: "35%", length: 290 },
    { angle: 170, startY: "65%", length: 290 },
    { angle: 205, startY: "65%", length: 290 },
  ];

  const [studentAnswers, setStudentAnswers] = useState({
    reason1: "",
    reason2: "",
    reason3: "",
    reason4: "",
    reason5: "",
    reason6: "",
  });
  const [studentAnswers1, setStudentAnswers1] = useState({
    reason1: "",
    reason2: "",
    reason3: "",
    reason4: "",
    reason5: "",
    reason6: "",
  });
  const [inputVisible, setInputVisible] = useState({});
  const resetInput = (questionName) => {
    setInputVisible((prev) => ({
      ...prev,
      [questionName]: false,
    }));
  };
  const [studentAnswers2, setStudentAnswers2] = useState({
    reason1: "",
    reason2: "",
    reason3: "",
    reason4: "",
    reason5: "",
    reason6: "",
    reason7: "",
  });
  const correctAnswers1 = {
    reason1: " إيجاد فرص عمل جديدة",
    reason2: "تدهور الشريط الساحلي   ",
    reason3: "  التوسع العمراني على حساب الأراضي الفلاحية ",
    reason4: "تحسين مستوى المعيشة",
    reason5: "ارتفاع القيم العقارية ",
    reason6: " التلوث  ",
  };
  const correctAnswers2 = {
    reason1: "  منطقة ذات كثافة سكانية مرتفعة جدّا ( أكثر من 500س/ كم²)  ",
    reason2: " منطقة ذات كثافة سكّانيّة ضعيفة (بين 40 و100 س/ كم²) ",
    reason3: " االمناطق السّاحلية",
    reason4: "الجنوب التونسي ",
    reason5: " أين تتواجد  السّلطة المركزيّة وتتوفر  مواطن الشغل",
    reason6:
      "بسبب توفر السهول والموانئ والخدمات على السواحل، بالإضافة إلى تأثير البحر في تحسين المناخ. هذا ما يجعل السواحل مناطق جاذبة للسكان الباحثين عن فرص عمل ومناخ ملائم. ",
    reason7:
      "بسبب المناخ الصعب و قلة الأمطار التي تعيق النشاط الزراعي و بسبب نقص الخدمات و فرص العمل. ",
  };
  const correctAnswers3 = {
    reason1:
      "  تتمثل في زيادة عائدات الدولة من العملة الصعبة بفضل تحويلات المهاجرين التونسيين من الخارج ",
    reason2:
      " و تدعى بهجرة الأدمغة أو هجرة الكفاءات التي تؤدي إلى نقص في اليد العاملة المؤهلة داخل البلاد مما يؤثر سلبا على الاقتصاد و التطور العلمي  ",
  };
    const correctAnswers4 = {
      reason1: "  اكتظاظ المدن",
      reason2: " توفير مواطن شغل للعاطلين عن العمل",
      reason3: " كثرة البناء الفوضوي",
      reason4: " تفاقم المشاكل الاجتماعية (كالسرقة)",
      reason5: " التمتع بخدمات ذات جودة عالية",
      reason6: "     هجرة الأدمغة",
      reason7: " عائدات من العملة الصعبة  ",
      reason8: " فقدان الروابط الاجتماعية والأسرية     ",
      reason9: " انخفاض نسب البطالة في تونس     ",
    };

  // Toggle correct answers for a specific question
  const showCorrectAnswers = (questionId) => {
    setShowAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  // Reset inputs for a specific question
  const resetInputs = (questionId) => {
    setStudentAnswers((prev) => ({
      ...prev,
      [questionId]: "",
    }));
    setShowAnswers((prev) => ({
      ...prev,
      [questionId]: false,
    }));
  };

  // Toggle visibility of all answers
  const toggleAllAnswers = () => {
    setShowAnswers((prev) => !prev);
  };

  // Reset all inputs and hide answers
  const resetAllInputs = () => {
    setStudentAnswers({
      reason1: "",
      reason2: "",
      reason3: "",
      reason4: "",
      reason5: "",
      reason6: "",
    });
    setStudentAnswers1({
      reason1: "",
      reason2: "",
      reason3: "",
      reason4: "",
      reason5: "",
      reason6: "",
    });
    setShowAnswers(false);
  };

  const toggleAnswer = (questionName) => {
    setShowAnswers((prev) => ({
      ...prev,
      [questionName]: !prev[questionName],
    }));
  };
  const showInput = (questionName) => {
    setInputVisible((prev) => ({
      ...prev,
      [questionName]: true,
    }));
  };
  //third quest//
  const [fosfatAnswers, setFosfatAnswers] = useState([
    { country: "تونس", amount: "7566 ألف طن", rank: "الثانية" },
    { country: "المغرب", amount: "23028 ألف طن", rank: "الأولى" },
  ]);

  const [naftAnswers, setNaftAnswers] = useState([
    { country: "الجزائر", amount: "79000 ألف طن", rank: "الأولى" },
    { country: "ليبيا", amount: "70000 ألف طن", rank: "الثانية" },
    { country: "تونس", amount: "3100 ألف طن", rank: "الثالثة" },
  ]);

  const [hadidAnswers, setHadidAnswers] = useState([
    { country: "موريتانيا", amount: "6760 ألف طن", rank: "الأولى" },
    { country: "تونس", amount: "130 ألف طن", rank: "الثانية" },
  ]);

  const [gazAnswers, setGazAnswers] = useState([
    { country: "الجزائر", amount: "82400 مليون م مكعب", rank: "الأولى" },
    { country: "ليبيا", amount: "8400 مليون م مكعب", rank: "الثانية" },
    { country: "تونس", amount: "239 مليون م مكعب", rank: "الثالثة" },
  ]);

  const updateFosfat = (index, field, value) => {
    const updatedAnswers = [...fosfatAnswers];
    updatedAnswers[index][field] = value;
    setFosfatAnswers(updatedAnswers);
  };

  const updateNaft = (index, field, value) => {
    const updatedAnswers = [...naftAnswers];
    updatedAnswers[index][field] = value;
    setNaftAnswers(updatedAnswers);
  };

  const updateHadid = (index, field, value) => {
    const updatedAnswers = [...hadidAnswers];
    updatedAnswers[index][field] = value;
    setHadidAnswers(updatedAnswers);
  };

  const updateGaz = (index, field, value) => {
    const updatedAnswers = [...gazAnswers];
    updatedAnswers[index][field] = value;
    setGazAnswers(updatedAnswers);
  };

  const questions = [
    {
      name: "q1",
      text: "هل توزيع السكان في تونس متساوٍ في جميع المناطق؟",
      answer: (
        <>
          <span style={{ color: "green" }}>خطأ: </span>التوزع السكاني في تونس{" "}
          <span style={{ color: "green" }}>متفاوت</span> في جميع المناطق
        </>
      ),
    },
    {
      name: "q2",
      text: "هل إقليم تونس هو الأكثر كثافة بالسكان؟",
      answer: <div style={{ color: "green" }}>صواب</div>,
    },
    {
      name: "q3",
      text: "هل السبب الرئيسي لتركّز السكان في المناطق الساحلية هو توفر مواد البناء؟",
      answer: (
        <>
          <span style={{ color: "green" }}>خطأ: </span>السبب الرئيسي لتركّز
          السكان في المناطق الساحلية هو{" "}
          <span style={{ color: "green" }}>
            {" "}
            امتداد السهول حيث تتميز هذه المناطق بمناخ رطب
          </span>
        </>
      ),
    },
  ];

  const [tableAnswers, setTableAnswers] = useState({
    row1: [""],
    row2: [""],
    row3: [""],
    row4: [""],
    row5: [""],
    row6: [""],
  });

  const correctTableAnswers = {
    row1: ["تونس / نابل"],
    row2: ["بنزرت / جندوبة"],
    row3: ["سوسة / المنستير / المهدية / صفاقس"],
    row4: ["القيروان / القصرين"],
    row5: ["مدنين"],
    row6: ["تطاوين"],
  };

  const handleTableChange = (rowKey, index, value) => {
    setTableAnswers((prev) => ({
      ...prev,
      [rowKey]: prev[rowKey].map((cell, i) => (i === index ? value : cell)),
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentAnswers((prev) => ({
      ...prev,
      [name]: value, // Update the specific question's answer
    }));
  };
  const [userInputsFrom, setUserInputsFrom] = useState(Array(5).fill(""));
  const [userInputsTo, setUserInputsTo] = useState(Array(5).fill(""));

  const tableData = [
    {
      from: "الشمال الغربي",
      fromAnswer: "الشمال الغربي",
      to: "إقليم تونس الكبرى",
      toAnswer: "إقليم تونس الكبرى",
    },
    {
      from: "الوسط الغربي",
      fromAnswer: "الوسط الغربي",
      to: "الشمال الشرقي",
      toAnswer: "الشمال الشرقي",
    },
    {
      from: "الجنوب (تطاوين)",
      fromAnswer: "الجنوب (تطاوين)",
      to: "الوسط الشرقي",
      toAnswer: "الوسط الشرقي",
    },
    {
      from: " ",
      fromAnswer: " ",
      to: "الجنوب الغربي",
      toAnswer: "الجنوب الغربي",
    },
    {
      from: " ",
      fromAnswer: " ",
      to: "الجنوب الشرقي",
      toAnswer: "الجنوب الشرقي",
    },
  ];

  const [resetInputs1, setResetInputs1] = useState(false);

  const toggleAllAnswers1 = () => {
    setShowAnswers(!showAnswers);
    setResetInputs1(false);
  };

  const resetAllInputs1 = () => {
    setUserInputsFrom(Array(5).fill(""));
    setUserInputsTo(Array(5).fill(""));
    setShowAnswers(false);
    setResetInputs1(true);
  };

  const handleInputFromChange = (index, value) => {
    const newInputs = [...userInputsFrom];
    newInputs[index] = value;
    setUserInputsFrom(newInputs);
  };
  const handleInputToChange = (index, value) => {
    const newInputs = [...userInputsTo];
    newInputs[index] = value;
    setUserInputsTo(newInputs);
  };
  const [fillInTheBlanks1, setFillInTheBlanks1] = useState({
    blank11: "",
    blank21: "",
    blank31: "",
    blank32: "",
    blank33: "",
    blank34: "",
  });

  const correctFillInTheBlanks1 = {
    blank11:
      "من أبرز أسباب الهجرة الداخلية بالبلاد التونسية هي: مصاحبة العائلة , البحث عن عمل , الدراسة , الزواج ",
  };
  const correctFillInTheBlanks14 = {
    blank11:
      "️ توفير فرص عمل في المناطق الداخلية: حتى لا يضطر السكان للانتقال إلى المدن الكبيرة بحثًا عن عمل",
    blank12:
      "️  ️ تحسين الخدمات الأساسية : مثل بناء مستشفيات ومدارس جديدة ليعيش الناس في ظروف أفضل.    ",
    blank13:
      "️   تنمية المشاريع الفلاحية والصناعية لمساعدة السكان على العمل في مناطقهم دون الحاجة للهجرة.",
  };

  const handleFillChange1 = (event, key) => {
    setFillInTheBlanks1((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const [fillInTheBlanks, setFillInTheBlanks] = useState({
    blank1: "",
    blank2: "",
    blank3: "",
    blank4: "",
    blank5: "",
    blank6: "",
    blank7: "",
    blank8: "",
  });

  const correctFillInTheBlanks = {
    blank1: "كثافة سكانية مرتفعة جدّا ",
    blank2: "كثافة سكانية مرتفعة",
    blank3: "كثافة سكانية ضعيفة ",
    blank4: "باختلاف الأقطار.",
    blank5: "كثافة سكانية مرتفعة",
    blank6: "كثافة سكانية مرتفعة",
    blank7: "الموارد الطّاقيّة",
    blank8: "كثافة سكانية ضعيفة ",
  };

  const handleFillChange = (event, key) => {
    setFillInTheBlanks((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const [trueFalseAnswers, setTrueFalseAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });

  const correctTrueFalseAnswers = {
    q1: "←خطأ: التوزع السكاني بالبلاد التونسية متفاوت",
    q2: "←صواب",
    q3: "←خطأ: من أبرز العوامل الطبيعية المفسرة لتركز السكان في المناطق الساحلية هو امتداد السهول وتميز هذه المناطق بمناخ رطب ",
  };

  const handleTrueFalseChange = (event, key) => {
    setTrueFalseAnswers((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleFillChange2 = (event, key) => {
    setFillInTheBlanks2((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const [fillInTheBlanks2, setFillInTheBlanks2] = useState({
    blank111: "",
    blank211: "",
    blank311: "",
    blank321: "",
    blank331: "",
  });

  const correctFillInTheBlanks2 = {
    blank111: "المناطق الداخلية ",
    blank211: "المناطق الساحلية أو المدن الكبرى",
    blank311: "فرص العمل ",
    blank321: "ظروف العيش",
    blank331: "بلدان أخرى ",
    blank341: " فرنسا وإيطاليا ",
  };
  const correctFillInTheBlanks3 = {
    blank111: "متفاوت",
    blank211: "الشمال الشرقي ",
    blank311: "منخفضة ",
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "transparent", // No extra background
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "20px 80px", // Adjust to fit inside the white space
        overflowY: "auto", // Ensures scrolling within the white area
      }}
    >
      {
        <header
          style={{
            width: "100%",
            backgroundColor: "#F0F0F0",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
            الدرس الثالث : التوزع الجغرافي للسكان و الادفاق الهجرية في البلاد
            التونسية ( الجزء 2 )
          </h2>
        </header>
      }
      <br></br>

      {/* First Instruction (Before Image) */}
      {/*   <Typography
        variant="h5"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mb: 2,
          marginRight: "30px",
        }}
      >
         : الوضعية الإستكشافية 
      </Typography> */}

      {/* Image with Overlay */}
      {/*   <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "65%",
          marginLeft: "auto",
        }}
      >
        <img
          src="/assets/Secondcourse/Rassem_blank.png"
          alt="العجز الغذائي بالمغرب العربي"
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers).map((key, index) => {
          const positions = {
            reason1: { top: "45%", right: "26%" },
            reason2: { top: "45%", right: "48%" },
            reason3: { top: "45%", right: "70%" },
            reason4: { top: "45%", right: "89%" },
            reason5: { top: "67%", right: "80%" },
            reason6: { top: "85%", right: "80%" },
          };

          return (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: positions[key].top,
                right: positions[key].right,
                transform: "translate(50%, -50%)",
                color: "green",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
                maxWidth: "120px",
                lineHeight: "1.4",
              }}
            >
              {showAnswers ? (
                <Typography
                  sx={{
                    color: "green",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textAlign: "center",
                    maxWidth: "120px",
                    lineHeight: "1.4",
                  }}
                >
                  {correctAnswers[key]}
                </Typography>
              ) : (
                <TextField
                  name={key}
                  variant="standard"
                  placeholder="............."
                  value={studentAnswers[key]}
                  onChange={(e) =>
                    setStudentAnswers({
                      ...studentAnswers,
                      [key]: e.target.value,
                    })
                  }
                  InputProps={{
                    disableUnderline: true,
                  }}
                  inputProps={{
                    style: { textAlign: "right" },
                    dir: "rtl",
                  }}
                  sx={{
                    width: "90px",
                    height: "40px",
                    textAlign: "right",
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box> */}

      {/* Single Buttons for the Entire Exercise */}
      {/* <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 2,
          marginLeft: "700px",
          textAlign: "right",
        }}
      >
        <Button
          sx={{
            fontSize: "17px",
            padding: "12px 24px",
            backgroundColor: "#F6D339",
          }}
          variant="contained"
          onClick={resetAllInputs}
        >
          إعادة المحاولة
        </Button>
        <Button
          sx={{
            fontSize: "18px",
            padding: "12px 24px",
            backgroundColor: "#60B463",
          }}
          variant="contained"
          onClick={toggleAllAnswers}
        >
          الإصلاح
        </Button>
      </Box>

      <br></br>
      <br></br> */}

      {/* Second Instruction (After Image) */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "red",
        }}
      >
        :الوضعية الإستكشافية
      </Typography>

      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
        }}
      >
        خلال العطلة الصيفية، زار رامي صحبة عائلته بيت جدّه في إحدى مناطق ولاية
        القصرين. عند وصوله، لاحظ رامي أن المنطقة تبدو هادئة ولا تعجّ بالسكان كما
        .هو الحال في تونس العاصمة، مما أثار فضوله
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
        }}
      >
        سأل رامي جدّه عن السبب، فأخبره أن العديد من السكان وخاصة الشباب منهم، قد
        غادروا نحو إقليم تونس العاصمة و عدد من المدن الساحلية أثارت هذه الإجابة
        فضوله أكثر
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
        }}
      >
        فبدأ يتساءل في نفسه: لماذا يهاجر سكان القصرين إلى مناطق أخرى مثل إقليم
        تونس العاصمة والمدن الساحلية؟
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
        }}
      >
        ساعد رامي في العثور عن الإجابة لهذا السؤال؟
      </Typography>

      <br></br>
      <Typography
        variant="h4"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "red",
        }}
      >
        : التعلم المنهجي{" "}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "#e0abe5",
        }}
      >
        قسم 1: الهجرة الداخلية{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "35px",
        }}
      >
        <span style={{ color: "blue", fontWeight: "bold", marginLeft: "10px" }}>
          النشاط عدد 1:{" "}
        </span>{" "}
        قراءة الخريطة التفاعلية{" "}
      </Typography>

      <div>
        <MapComponent1 />
        {/*   <TunisiaMap /> */}
        {/*     <img
          src="/assets/Secondcourse/image3.png"
          style={{ width: "40%", height: "auto", marginLeft: "55%" }}
        /> */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        ></div>
      </div>

      <br></br>
      <br></br>

      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
        }}
      >
        {" "}
        أتمعّن في العنوان والمفتاح المرفقين بالخريطة بعناية، ثم شارك ملاحظاتك من
        خلال الإجابة عن السؤال التالي
      </Typography>

      <div
        style={{
          direction: "rtl",
          fontFamily: "Arial, sans-serif",
          margin: "20px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                الأقاليم التي يهاجر منها السكان
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                الأقاليم التي يهاجر إليها السكان
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  {resetInputs1 || !showAnswers ? (
                    <input
                      type="text"
                      value={userInputsFrom[index]}
                      onChange={(e) =>
                        handleInputFromChange(index, e.target.value)
                      }
                      style={{
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        textAlign: "center",
                        fontSize: "16px",
                      }}
                      placeholder="........."
                    />
                  ) : (
                    <span style={{ color: "#60B463", fontWeight: "bold" }}>
                      {row.fromAnswer}
                    </span>
                  )}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  {resetInputs1 || !showAnswers ? (
                    <input
                      type="text"
                      value={userInputsTo[index]}
                      onChange={(e) =>
                        handleInputToChange(index, e.target.value)
                      }
                      style={{
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        textAlign: "center",
                        fontSize: "16px",
                      }}
                      placeholder="........."
                    />
                  ) : (
                    <span style={{ color: "#60B463", fontWeight: "bold" }}>
                      {row.toAnswer}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Button
            sx={{
              fontSize: "17px",
              padding: "12px 24px",
              backgroundColor: "#F6D339",
              "&:hover": { backgroundColor: "#e6c233" },
            }}
            variant="contained"
            onClick={resetAllInputs}
          >
            إعادة المحاولة
          </Button>
          <Button
            sx={{
              fontSize: "18px",
              padding: "12px 24px",
              backgroundColor: "#60B463",
              "&:hover": { backgroundColor: "#4fa352" },
            }}
            variant="contained"
            onClick={toggleAllAnswers}
          >
            الإصلاح
          </Button>
        </div>
      </div>

      <Typography
        variant="h5"
        sx={{
          color: "black",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "right",
        }}
      >
        <span style={{ color: "orange", fontWeight: "bold" }}>
          النشاط عدد 2:
        </span>
        اقرأ الوثيقة عدد4 صفحة 134 من الكتاب المدرسي لمادة الجغرافيا و أجب عن
        الأسئلة التالية{" "}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "black",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "right",
          marginTop: "10px",
        }}
      >
        <span
          style={{ color: "orange", fontWeight: "bold", marginLeft: "10px" }}
        >
          أ)
        </span>
        استخرج أبرز أسباب الهجرة الداخلية بالبلاد التونسية
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}
        >
          <span>
            {showAnswers ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                {correctFillInTheBlanks1.blank11}
              </span>
            ) : (
              <TextField
                variant="standard"
                style={{ height: "100px" }}
                placeholder="............................................................................................................................................................................."
                value={fillInTheBlanks1.blank11}
                onChange={(e) => handleFillChange1(e, "blank11")}
                InputProps={{
                  disableUnderline: true, // Removes the underline
                }}
              />
            )}
          </span>

          {/* Buttons for الاستنتاج Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            <Button
              sx={{
                fontSize: "17px",
                padding: "12px 24px",
                backgroundColor: "#F6D339",
              }}
              variant="contained"
              onClick={resetAllInputs}
            >
              إعادة المحاولة
            </Button>
            <Button
              sx={{
                fontSize: "18px",
                padding: "12px 24px",
                backgroundColor: "#60B463",
                marginLeft: "10px",
              }}
              variant="contained"
              onClick={toggleAllAnswers}
            >
              {showAnswers["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Typography>
      </div>
      <Typography
        variant="h5"
        sx={{
          color: "black",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "right",
          marginTop: "10px",
        }}
      >
        <span
          style={{ color: "orange", fontWeight: "bold", marginLeft: "10px" }}
        >
          ب)
        </span>
        قم بربط كل سبب من أسباب الهجرة الداخلية بالفئة التي ينتمي إليها{" "}
      </Typography>

      <div class="MuiBox-root css-1c2mhw6">
        <div
          style={{
            maxWidth: "1000px", // Largeur augmentée
            alignItems: "center", // Centrage global
            direction: "rtl",
            fontFamily: "Arial, sans-serif",
            margin: "0 auto",
            padding: "20px",
            position: "relative",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#333",
              marginBottom: "30px",
            }}
          >
            أسباب الهجرة والدوافع
          </h2>

          <div
            style={{
              display: "flex",
              position: "relative",
              minHeight: "400px",
              gap: "250px", // Grand espace entre colonnes
              justifyContent: "center", // Centrage horizontal
            }}
          >
            {/* Colonne de droite - الدوافع */}
            <div
              style={{
                width: "300px", // Largeur fixe
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
                الدوافع
              </h3>
              {motivations.map((motivation, index) => (
                <div
                  key={index}
                  style={{
                    padding: "15px",
                    margin: "10px 0",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  {motivation}
                </div>
              ))}
            </div>

            {/* Colonne de gauche - الأسباب */}
            <div
              style={{
                width: "300px", // Largeur fixe
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
                الأسباب
              </h3>
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  style={{
                    padding: "15px",
                    margin: "10px 0",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  {reason}
                </div>
              ))}
            </div>

            {/* Flèches SVG inclinées */}
            <AnimatePresence>
              {showArrows && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: "none",
                  }}
                >
                  {arrowsConfig.map((arrow, index) => (
                    <motion.svg
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: index * 0.2 }}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: arrow.startY,
                        transform: `translate(-50%, -50%) rotate(${arrow.angle}deg)`,
                        overflow: "visible",
                      }}
                      width="150"
                      height="40"
                      viewBox="0 0 150 40"
                    >
                      <path
                        d={`M0,20 L${arrow.length - 30},20 L${
                          arrow.length - 40
                        },5 L${arrow.length},20 L${arrow.length - 40},35 L${
                          arrow.length - 30
                        },20`}
                        fill="#60B463"
                        stroke="#4a8a4d"
                        strokeWidth="1"
                      />
                    </motion.svg>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <Button
              sx={{
                fontSize: "17px",
                padding: "12px 24px",
                backgroundColor: "#F6D339",
                "&:hover": { backgroundColor: "#e6c233" },
                fontWeight: "bold",
              }}
              variant="contained"
              onClick={() => setShowArrows(false)}
            >
              إعادة المحاولة
            </Button>
            <Button
              sx={{
                fontSize: "18px",
                padding: "12px 24px",
                backgroundColor: "#60B463",
                "&:hover": { backgroundColor: "#4fa352" },
                fontWeight: "bold",
              }}
              variant="contained"
              onClick={() => setShowArrows(true)}
            >
              الإصلاح
            </Button>
          </div>
        </div>{" "}
      </div>

      {/* First Instruction (Before Image) */}
      <Typography
        variant="h5"
        sx={{
          color: "black",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "right",
          marginTop: "10px",
        }}
      >
        <span
          style={{ color: "orange", fontWeight: "bold", marginLeft: "10px" }}
        >
          ج)
        </span>
        للهجرة الداخلية في تونس آثار إيجابية وسلبية. ضع كل تأثير في الصندوق
        المناسب حسب نوعه (إيجابي أو سلبي)
      </Typography>

      {/* Image with Overlay */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "65%",
          marginLeft: "auto",
        }}
      >
        <img
          src="/assets/Secondcourse/en3ikasate.jpg"
          alt="العجز الغذائي بالمغرب العربي"
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers1).map((key, index) => {
          const positions = {
            reason1: { top: "20%", right: "15%" },
            reason2: { top: "48%", right: "12.8%" },
            reason3: { top: "17%", right: "57%" },
            reason4: { top: "38%", right: "48%" },
            reason5: { top: "44%", right: "87%" },
            reason6: { top: "18%", right: "87%" },
          };

          return (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: positions[key].top,
                right: positions[key].right,
                transform: "translate(50%, -50%)",
                color: "green",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
                maxWidth: "120px",
                lineHeight: "1.4",
              }}
            >
              {showAnswers ? (
                <Typography
                  sx={{
                    color: "green",
                    fontSize: "15px",
                    fontWeight: "bold",
                    textAlign: "center",
                    maxWidth: "120px",
                    lineHeight: "1.2",
                  }}
                >
                  {correctAnswers1[key]}
                </Typography>
              ) : (
                <TextField
                  name={key}
                  variant="standard"
                  placeholder="............."
                  value={studentAnswers1[key]}
                  onChange={(e) =>
                    setStudentAnswers1({
                      ...studentAnswers1,
                      [key]: e.target.value,
                    })
                  }
                  InputProps={{
                    disableUnderline: true,
                  }}
                  inputProps={{
                    style: { textAlign: "right" },
                    dir: "rtl",
                  }}
                  sx={{
                    width: "90px",
                    height: "1px",
                    textAlign: "right",
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>

      {/* Single Buttons for the Entire Exercise */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 2,
          marginLeft: "700px",
          textAlign: "right",
        }}
      >
        <Button
          sx={{
            fontSize: "17px",
            padding: "12px 24px",
            backgroundColor: "#F6D339",
          }}
          variant="contained"
          onClick={resetAllInputs}
        >
          إعادة المحاولة
        </Button>
        <Button
          sx={{
            fontSize: "18px",
            padding: "12px 24px",
            backgroundColor: "#60B463",
          }}
          variant="contained"
          onClick={toggleAllAnswers}
        >
          الإصلاح
        </Button>
      </Box>

      <Typography
        variant="h5"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "#e0abe5",
        }}
      >
        قسم 2: الهجرة الخارجية{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "35px",
        }}
      >
        <span style={{ color: "blue", fontWeight: "bold", marginLeft: "10px" }}>
          النشاط عدد 1:{" "}
        </span>{" "}
        اقرأ الوثيقة عدد 5 صفحة 134 من الكتاب المدرسي لمادة الجغرافيا و أجب عن
        الأسئلة التالية
      </Typography>
      <Typography>
        {/* Image with Overlay */}

        <img
          src="/assets/Secondcourse/wathy9a.jpg"
          alt="     الهجرة الخارجية  "
          style={{ width: "100%", height: "auto" }}
        />
        <div
          style={{
            direction: "rtl",
            fontFamily: "Arial, sans-serif",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: "40px" }}>
            {questions1.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  marginBottom: "30px",
                  padding: "20px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  borderRight: visibleAnswers[item.id]
                    ? "4px solid #60B463"
                    : "4px solid #f8f9fa",
                }}
              >
                <h3
                  style={{
                    color: "#34495e",
                    marginBottom: "15px",
                    fontSize: "20px",
                  }}
                >
                  {item.question}
                </h3>

                {visibleAnswers[item.id] && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    style={{
                      color: "#60B463",
                      fontWeight: "bold",
                      fontSize: "18px",
                      lineHeight: "1.6",
                      margin: "10px 0 15px 0",
                    }}
                  >
                    {item.answer}
                  </motion.p>
                )}

                <Button
                  sx={{
                    fontSize: "16px",
                    padding: "8px 20px",
                    backgroundColor: visibleAnswers[item.id]
                      ? "#4fa352"
                      : "#60B463",
                    "&:hover": { backgroundColor: "#4fa352" },
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                  variant="contained"
                  onClick={() => toggleAnswer1(item.id)}
                >
                  {visibleAnswers[item.id] ? "إخفاء الجواب" : "الإصلاح"}
                </Button>
              </motion.div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Button
              sx={{
                fontSize: "18px",
                padding: "12px 30px",
                backgroundColor: "#F6D339",
                "&:hover": { backgroundColor: "#e6c233" },
                fontWeight: "bold",
              }}
              variant="contained"
              onClick={resetAll}
            >
              إعادة المحاولة
            </Button>
          </div>
        </div>

        {/* Single Buttons for the Entire Exercise */}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "35px",
          color: "blue",
        }}
      >
        النشاط عدد 2:
      </Typography>
      <Typography>
        {/* Image with Overlay */}

        <img
          src="/assets/Secondcourse/wathy9a2.jpg"
          alt="     الهجرة الخارجية  "
          style={{ width: "100%", height: "auto" }}
        />
      </Typography>

      {/* Image with Overlay */}
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "35px",
        }}
      >
        استنادًا إلى الوثيقة 6 ص 135، ونظرًا لأهمية عدد ونسبة المهاجرين
        التونسيين إلى الخارج، فإن لهذه الظاهرة تأثيرات متعددة، منها الإيجابية
        ومنها السلبية. أذكرها
      </Typography>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "65%",
          marginLeft: "auto",
        }}
      >
        <img
          src="/assets/Secondcourse/ta2thyr.jpg"
          alt="   تطور قيمة عائدات الهجرة الخارجية "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers3).map((key, index) => {
          const positions = {
            reason1: { top: "25%", right: "80%" },
            reason2: { top: "75%", right: "80%" },
          };

          return (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: positions[key].top,
                right: positions[key].right,
                transform: "translate(50%, -50%)",
                color: "green",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
                maxWidth: "120px",
                lineHeight: "1.4",
              }}
            >
              {showAnswers ? (
                <Typography
                  sx={{
                    color: "green",
                    fontSize: "17px",
                    fontWeight: "bold",
                    textAlign: "center",
                    maxWidth: "120px",
                    lineHeight: "1.2",
                  }}
                >
                  {correctAnswers3[key]}
                </Typography>
              ) : (
                <TextField
                  name={key}
                  variant="standard"
                  placeholder="............."
                  value={studentAnswers1[key]}
                  onChange={(e) =>
                    setStudentAnswers1({
                      ...studentAnswers1,
                      [key]: e.target.value,
                    })
                  }
                  InputProps={{
                    disableUnderline: true,
                  }}
                  inputProps={{
                    style: { textAlign: "right" },
                    dir: "rtl",
                  }}
                  sx={{
                    width: "90px",
                    height: "1px",
                    textAlign: "right",
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>

      {/* Single Buttons for the Entire Exercise */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 2,
          marginLeft: "700px",
          textAlign: "right",
        }}
      >
        <Button
          sx={{
            fontSize: "17px",
            padding: "12px 24px",
            backgroundColor: "#F6D339",
          }}
          variant="contained"
          onClick={resetAllInputs}
        >
          إعادة المحاولة
        </Button>
        <Button
          sx={{
            fontSize: "18px",
            padding: "12px 24px",
            backgroundColor: "#60B463",
          }}
          variant="contained"
          onClick={toggleAllAnswers}
        >
          الإصلاح
        </Button>
      </Box>
      <Typography
        variant="h4"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "red",
        }}
      >
        الإستنتاج{" "}
      </Typography>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "65%",
          marginLeft: "auto",
        }}
      >
        <img
          src="/assets/Secondcourse/conclusion.jpg"
          alt="   تطور قيمة عائدات الهجرة الخارجية "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers4).map((key, index) => {
          const positions = {
            reason1: { top: "8%", right: "27%" },
            reason2: { top: "10%", right: "87%" },
            reason3: { top: "22%", right: "11%" },
            reason4: { top: "43%", right: "16%" },
            reason5: { top: "40%", right: "85%" },
            reason6: { top: "66%", right: "15%" },
            reason7: { top: "69%", right: "86%" },
            reason8: { top: "89%", right: "12%" },
            reason9: { top: "92%", right: "87%" },
          };

          return (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: positions[key]?.top,
                right: positions[key]?.right,
                transform: "translate(50%, -50%)",
                color: "green",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
                maxWidth: "120px",
                lineHeight: "1.4",
              }}
            >
              {showAnswers ? (
                <Typography
                  sx={{
                    color: "green",
                    fontSize: "17px",
                    fontWeight: "bold",
                    textAlign: "center",
                    maxWidth: "120px",
                    lineHeight: "1.2",
                  }}
                >
                  {correctAnswers4[key]}
                </Typography>
              ) : (
                <TextField
                  name={key}
                  variant="standard"
                  placeholder="............."
                  value={studentAnswers1[key]}
                  onChange={(e) =>
                    setStudentAnswers1({
                      ...studentAnswers1,
                      [key]: e.target.value,
                    })
                  }
                  InputProps={{
                    disableUnderline: true,
                  }}
                  inputProps={{
                    style: { textAlign: "right" },
                    dir: "rtl",
                  }}
                  sx={{
                    width: "90px",
                    height: "1px",
                    textAlign: "right",
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>

      {/* Single Buttons for the Entire Exercise */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 2,
          marginLeft: "700px",
          textAlign: "right",
        }}
      >
        <Button
          sx={{
            fontSize: "17px",
            padding: "12px 24px",
            backgroundColor: "#F6D339",
          }}
          variant="contained"
          onClick={resetAllInputs}
        >
          إعادة المحاولة
        </Button>
        <Button
          sx={{
            fontSize: "18px",
            padding: "12px 24px",
            backgroundColor: "#60B463",
          }}
          variant="contained"
          onClick={toggleAllAnswers}
        >
          الإصلاح
        </Button>
      </Box>
      <Typography
        variant="h4"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "red",
        }}
      >
        التدريب{" "}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "black",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "right",
        }}
      >
        اذكر ثلاث حلول يمكن تثبيت السكان ومقاومة الهجرة الداخلية{" "}
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}
        >
          <span>
            {showAnswers ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                {correctFillInTheBlanks14.blank11}
              </span>
            ) : (
              <TextField
                variant="standard"
                placeholder="....................................."
                value={fillInTheBlanks1.blank11}
                onChange={(e) => handleFillChange1(e, "blank11")}
                InputProps={{
                  disableUnderline: true, // Removes the underline
                }}
              />
            )}
          </span>
          <br />
          <span>
            {showAnswers ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                {correctFillInTheBlanks14.blank12}
              </span>
            ) : (
              <TextField
                variant="standard"
                placeholder="....................................."
                value={fillInTheBlanks.blank7}
                onChange={(e) => handleFillChange1(e, "blank21")}
                InputProps={{
                  disableUnderline: true, // Removes the underline
                }}
              />
            )}
          </span>{" "}
          <br />
          <span>
            {showAnswers ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                {correctFillInTheBlanks14.blank13}
              </span>
            ) : (
              <TextField
                variant="standard"
                placeholder="....................................."
                value={fillInTheBlanks1.blank31}
                onChange={(e) => handleFillChange1(e, "blank31")}
                InputProps={{
                  disableUnderline: true, // Removes the underline
                }}
              />
            )}
          </span>{" "}
          {/* Buttons for الاستنتاج Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            <Button
              sx={{
                fontSize: "17px",
                padding: "12px 24px",
                backgroundColor: "#F6D339",
              }}
              variant="contained"
              onClick={resetAllInputs}
            >
              إعادة المحاولة
            </Button>
            <Button
              sx={{
                fontSize: "18px",
                padding: "12px 24px",
                backgroundColor: "#60B463",
                marginLeft: "10px",
              }}
              variant="contained"
              onClick={toggleAllAnswers}
            >
              {showAnswers["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Typography>
      </div>
      <Typography
        variant="h4"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "red",
        }}
      >
        التقييم{" "}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "black",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "right",
        }}
      >
        أكمل الفراغات بما يناسب{" "}
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}
          style={{ direction: "rtl", textAlign: "right" }}
        >
          <ol>
            <li>
              {" "}
              <span></span> تحدث الهجرة الداخلية عندما ينتقل السكان من
              <span style={{ marginRight: "2px" }}>
                {showAnswers ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {correctFillInTheBlanks2.blank111}
                  </span>
                ) : (
                  <TextField
                    variant="standard"
                    placeholder="....................................."
                    value={fillInTheBlanks2.blank111}
                    onChange={(e) => handleFillChange2(e, "blank111")}
                    InputProps={{
                      disableUnderline: true, // Removes the underline
                    }}
                  />
                )}
              </span>{" "}
              إلى{" "}
              <span>
                {showAnswers ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {correctFillInTheBlanks2.blank211}
                  </span>
                ) : (
                  <TextField
                    variant="standard"
                    placeholder="....................................."
                    value={fillInTheBlanks2.blank211}
                    onChange={(e) => handleFillChange2(e, "blank211")}
                    InputProps={{
                      disableUnderline: true, // Removes the underline
                    }}
                  />
                )}
              </span>{" "}
              داخل نفس البلد
            </li>
            <li>
              {" "}
              من أبرز أسباب الهجرة الداخلية في تونس البحث عن
              <span>
                {showAnswers ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {correctFillInTheBlanks2.blank311}
                  </span>
                ) : (
                  <TextField
                    variant="standard"
                    placeholder="....................................."
                    value={fillInTheBlanks2.blank311}
                    onChange={(e) => handleFillChange2(e, "blank311")}
                    InputProps={{
                      disableUnderline: true, // Removes the underline
                    }}
                  />
                )}
              </span>
              وتحسين{" "}
              <span>
                {showAnswers ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {correctFillInTheBlanks2.blank321}
                  </span>
                ) : (
                  <TextField
                    variant="standard"
                    placeholder="....................................."
                    value={fillInTheBlanks2.blank321}
                    onChange={(e) => handleFillChange2(e, "blank321")}
                    InputProps={{
                      disableUnderline: true, // Removes the underline
                    }}
                  />
                )}
              </span>{" "}
            </li>
            <li>
              {" "}
              الهجرة الخارجية تعني انتقال الأشخاص من تونس إلى
              <span>
                {showAnswers ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {correctFillInTheBlanks2.blank331}
                  </span>
                ) : (
                  <TextField
                    variant="standard"
                    placeholder="....................................."
                    value={fillInTheBlanks2.blank331}
                    onChange={(e) => handleFillChange2(e, "blank331")}
                    InputProps={{
                      disableUnderline: true, // Removes the underline
                    }}
                  />
                )}
              </span>{" "}
              مثل{" "}
              <span>
                {showAnswers ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {correctFillInTheBlanks2.blank341}
                  </span>
                ) : (
                  <TextField
                    variant="standard"
                    placeholder="....................................."
                    value={fillInTheBlanks2.blank331}
                    onChange={(e) => handleFillChange2(e, "blank341")}
                    InputProps={{
                      disableUnderline: true, // Removes the underline
                    }}
                  />
                )}
              </span>{" "}
            </li>
          </ol>

          {/* Buttons for الاستنتاج Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            <Button
              sx={{
                fontSize: "17px",
                padding: "12px 24px",
                backgroundColor: "#F6D339",
              }}
              variant="contained"
              onClick={resetAllInputs}
            >
              إعادة المحاولة
            </Button>
            <Button
              sx={{
                fontSize: "18px",
                padding: "12px 24px",
                backgroundColor: "#60B463",
                marginLeft: "10px",
              }}
              variant="contained"
              onClick={toggleAllAnswers}
            >
              {showAnswers["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Typography>
      </div>
    </Container>
  );
};

export default Course;
