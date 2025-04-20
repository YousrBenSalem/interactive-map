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

import MapComponent from "./MapComponent.js";
import MapComponent2 from "./MapComponent1.js";
import TunisiaMap from "./TunisiaMap.js";
import AfricaMap from "./TunisiaMap.js";
import ReasonsMigration from "./ReasonMigration.js";
import WorldMap from "./WorldMap.js";
import WorldMap1 from "./WorldMap1.js";


import GeographyTable from "./GeographyTable.js";
import MountainTable from "./MountainTable.js";
import PieChart from "./PieChart.js";
import MaghrebArabeMap from "./MaghrebArabeMap.js";

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
  const questions1 = [
    {
      question: "ما هي النسبة التقريبية لمساحة القسم اليابس من سطح الأرض؟",
      options: ["¼", "½", "¾", "⅛"],
      correct: 0,
    },
    {
      question: "أي من الخيارات التالية يُمثّل القسم المائي؟",
      options: [
        "المحيطات والبحار",
        "القارات فقط",
        "السهول والهضاب",
        "السلاسل الجبلية",
      ],
      correct: 0,
    },
    {
      question: "يضم القسم اليابس من سطح الأرض.",
      options: ["6 قارات", "5 قارات", "4 قارات", "3 قارات"],
      correct: 0,
    },
    {
      question: "ما اسم المحيط الأكبر على وجه الأرض؟",
      options: [
        "المحيط الهندي",
        "المحيط الأطلسي",
        "المحيط المتجمد",
        "المحيط الهادي",
      ],
      correct: 3,
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions1.length).fill(null)
  );
  const [showCorrection, setShowCorrection] = useState(false);

  const handleSelect = (qIndex, optionIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[qIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const [showAnswers, setShowAnswers] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
    const [showArrows1, setShowArrows1] = useState(false);

  const [showAnswersImage1, setShowAnswersImage1] = useState(false);
  const [showAnswersImage2, setShowAnswersImage2] = useState(false);
  const [showAnswersImage3, setShowAnswersImage3] = useState(false);

  const [studentAnswersImage1, setStudentAnswersImage1] = useState({});
  const [studentAnswersImage2, setStudentAnswersImage2] = useState({});
  const [studentAnswersImage3, setStudentAnswersImage3] = useState({});
  // État pour suivre quelles réponses sont visibles
  const [visibleAnswers, setVisibleAnswers] = useState({});

  // Fonction pour basculer l'affichage d'une réponse
  const toggleAnswer1 = (id) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  // Données pour les trois colonnes
  const columns = [
    ["الهيملايا", "جبل الأنب", "جبل الأطلس"],

    ["أوروبا", "آسيا", "إفريقيا"],
    ["طوبقال", "إيفرست", "الجبل الأبيض"],
  ];

  // Configuration des flèches (startY, angle, length)
  const arrowsConfig1 = [
    { startY: "40%", angle: 130, length: 200 },
    { startY: "54%", angle: 180, length: 160 },
    { startY: "66%", angle: 220, length: 210 },
  ];
  const arrowsConfig2 = [
    { startY: "40%", angle: 165, length: 200 },
    { startY: "45%", angle: 195, length: 200 },
    { startY: "76%", angle: 180, length: 200 },
  ];

  // Fonction pour réinitialiser toutes les réponses
  const resetAll = () => {
    setVisibleAnswers({});
  };

  const reasons = [
    " القارة الإفريقيّة",
    " القارة الأمريكيّ",
    " القارة الآسيويّة",
  ];

  const motivations = ["هضاب الصين", , "هضاب لموند", "هضاب البرازيل"];

  // Configuration des flèches inclinées
  const arrowsConfig = [
    { angle: 155, startY: "30%", length: 270 },
    { angle: 195, startY: "35%", length: 260 },
    { angle: 196, startY: "60%", length: 260 },
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
    reason1: "  المحيط المتجمد الشمالي أو المحيط الأركتيكي    ",
    reason2: "  المحيط الأطلسي     ",
    reason3: "  المحيط الهندي   ",
    reason4: " المحيط الهادي   ",
  };
  const correctAnswers2 = {
    reason1: " البحر الأصفر  ",
    reason2: " البحر المتوسط ",
    reason3: "  بحر الشمال ",
    reason4: " بحر العرب  ",
    reason5: " البحر الأحمر ",
    reason6: "البحر الميت ",
  };
  const correctAnswers3 = {
    reason1: " إفريقيا  ",
    reason2: "آسيا   ",
    reason3: "أوروبا     ",
    reason4: "أستراليا     ",
    reason5: "أمريكا     ",
    reason6: "أنتاركتيكا    ",
  };
  const correctAnswers4 = {
    reason1: "قسم مائي ",
    reason2: " 29% ",
    reason3: " القارات ",
    reason4: " و المحيطات ",
    reason5: "6",
    reason6: " آسيا ",
    reason7: "إفريقيا ",
    reason8: " أمريكا ",
    reason9: "أستراليا ",
    reason10: " أنتاركتيكا  ",
    reason11: " أوروبا  ",
    reason12: " الشمال  ",
    reason13: " العرب  ",
    reason14: " الأحمر  ",
    reason15: "المتوسط ",
    reason16: " الأصفر  ",
    reason17: "الهندي ",
    reason18: " الأطلسي   ",
    reason19: "المتجمد    ",
    reason20: "الهادي  ",
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
    const toggleAllAnswersImage1 = () => {
      setShowAnswersImage1((prev) => !prev);
    };
      const toggleAllAnswersImage2 = () => {
        setShowAnswersImage2((prev) => !prev);
      };
        const toggleAllAnswersImage3 = () => {
          setShowAnswersImage3((prev) => !prev);
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
    const resetAllInputsImage1 = () => {
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
      setShowAnswersImage1(false);
    };
        const resetAllInputsImage2 = () => {
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
          setShowAnswersImage2(false);
        };
            const resetAllInputsImage3 = () => {
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
              setShowAnswersImage3(false);
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
            الدرس الأول : القارات و المحيطات و الوحدات التضارسية الكبرى
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
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "blue",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "right",
            fontWeight: "bold",
            mt: 3,
            marginRight: "30px",
          }}
        >
          مرحبًا بك في درس "القارات والمحيطات و الوحدات التضاريسية الكبرى"! في
          هذا الدرس ستبدأ رحلتك لاستكشاف أسرار كوكب الأرض. قبل أن نبدأ، نود أن
          نسمع أفكارك وملاحظاتك حول هذا الموضوع المثير. تذكر أن لا توجد إجابة
          صحيحة أو خاطئة، نحن هنا لنستكشف ونتعلم معًا!
        </Typography>
      </Typography>
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
        في مساءٍ هادئ، بينما كان أحمد يجلس في غرفة الجلوس بجانب والديه , يشاهد
        برنامجًا من ناشيونال جيوغرافيك، صُدم بمعلومة مذهلة: يغطي الماء سطح الأرض
        نسبة تفوق اليابسة! اندهش أحمد وتملكه فضولٌ لا يُقاوم، فبدأ يتساءل ما
        المقصود باليابسة وكيف تتكون؟ و ما هي أشكال الماء التي تُشكل وجه كوكبنا؟
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
        هذا السؤال دفعه للغوص في عالم الجغرافيا والاستكشاف، باحثًا عن إجابات
        تكشف أسرار طبيعتنا المائية واليابسة، وعن كيفية تفاعلها لتشكيل مناخ الأرض
        وروعتها
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
        استعدوا مع أحمد للانطلاق في رحلة استكشافية عبر معالم الأرض، حيث سنكتشف
        معًا أسرار تكوين اليابسة وأنواع المياه التي تزين كوكبنا
      </Typography>
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
        مرحلة رصد التصورات: أسئلة لاستكشاف أفكار المتعلم{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        أجب على الأسئلة التالية:
        <ol>
          <li>ما هي الأشكال التي يظهر بها الماء على سطح الأرض؟</li>
          <li>ما هي أشكال اليابسة على سطح الأرض؟</li>
          <li>ما هو الجزء الذي يغطي سطح الأرض أكثر: الماء أم اليابسة؟</li>
        </ol>
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
        مرحلة التعلم المنهجي: "استكشاف خريطة العالم"{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        استخدم خريطة العالم التفاعلية للتعرف على القارات والمحيطات.
        <br />
        ابدأ اكتشافك الآن!
      </Typography>
      <div>
        {" "}
        <WorldMap />
      </div>
      <br></br>
      <br></br>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          color: "#9AC8EB",
          marginRight: "30px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        {" "}
        1) قم بإكمال وإتمام تعمير الخرائط الذهنية التالية:
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
          src="/assets/Secondcourse/mou7yte.jpg"
          alt="   أسماء المحيطات"
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers1).map((key, index) => {
          const positions = {
            reason1: { top: "25%", right: "20%" },
            reason2: { top: "78%", right: "18%" },
            reason3: { top: "25%", right: "77%" },

            reason4: { top: "82%", right: "80%" },
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
              {showAnswersImage1 ? (
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
          onClick={resetAllInputsImage1}
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
          onClick={toggleAllAnswersImage1}
        >
          الإصلاح
        </Button>
      </Box>
      {/* Image with Overlay */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "65%",
          marginLeft: "auto",
          marginTop: "25px",
        }}
      >
        <img
          src="/assets/Secondcourse/mers.jpg"
          alt="    أسماء البحار "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers2).map((key, index) => {
          const positions = {
            reason1: { top: "12%", right: "26%" },
            reason2: { top: "49%", right: "18%" },
            reason3: { top: "85%", right: "26%" },
            reason4: { top: "20%", right: "80%" },
            reason5: { top: "54%", right: "85%" },
            reason6: { top: "84%", right: "80%" },
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
              {showAnswersImage2 ? (
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
                  {correctAnswers2[key]}
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
          onClick={resetAllInputsImage2}
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
          onClick={toggleAllAnswersImage2}
        >
          الإصلاح
        </Button>
      </Box>
      {/* Image with Overlay */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "65%",
          marginLeft: "auto",
          marginTop: "20px",
        }}
      >
        <img
          src="/assets/Secondcourse/9arate.jpg"
          alt="     القارات  "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers3).map((key, index) => {
          const positions = {
            reason1: { top: "15%", right: "32%" },
            reason2: { top: "46%", right: "17%" },
            reason3: { top: "85%", right: "38%" },
            reason4: { top: "14%", right: "67%" },
            reason5: { top: "47%", right: "87%" },
            reason6: { top: "77%", right: "78%" },
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
              {showAnswersImage3 ? (
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
          onClick={resetAllInputsImage3}
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
          onClick={toggleAllAnswersImage3}
        >
          الإصلاح
        </Button>
      </Box>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          color: "#9AC8EB",
          marginRight: "30px",
          marginTop: "40px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        2) قم بإنشاء رسم بياني يُمثّل نسبة اليابسة والمياه على سطح الكرة الأرضية
        انطلاقا من المعلومات المعروضة في الخريطة .
      </Typography>
      <PieChart />
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          color: "#9AC8EB",
          marginRight: "30px",
          marginTop: "30px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        {" "}
        3) باستخدام اتجاه الشمال كمرجع على الخريطة أعلاه ، حدّد موقع القارة أو
        المحيط بدقة لاكتشاف موقعهم الجغرافي:{" "}
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/assets/Secondcourse/sens.jpg"
          alt="الاتجاهات"
          style={{ width: "50%", height: "50%" }}
        />
      </div>
      <GeographyTable />
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          color: "#A7001E",
          marginRight: "30px",
          marginTop: "30px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        مرحلة الاستنتاج: "ما تعلمناه عن الكرة الأرضية"
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          color: "#9AC8EB",
          marginRight: "30px",
          marginTop: "40px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        قم بإتمام هذا الرسم للحصول على الاستنتاج النهائي:
      </Typography>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "65%",
          marginLeft: "auto",
          marginTop: "20px",
        }}
      >
        <img
          src="/assets/Secondcourse/Diagram.jpg"
          alt="     الكرة الأرضية  "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers4).map((key, index) => {
          const positions = {
            reason1: { top: "27%", right: "72%" },
            reason2: { top: "41%", right: "40%" },
            reason3: { top: "55.5%", right: "40%" },

            reason4: { top: "59%", right: "81%" },

            reason5: { top: "70.2%", right: "39%" },
            reason6: { top: "66%", right: "6%" },
            reason7: { top: "79%", right: "8%" },

            reason8: { top: "92%", right: "12%" },
            reason9: { top: "92%", right: "28%" },
            reason10: { top: "84%", right: "38%" },
            reason11: { top: "80%", right: "51%" },
            reason12: { top: "85%", right: "59%" },
            reason13: { top: "92%", right: " 62%" },
            reason14: { top: "92%", right: "69%" },
            reason15: { top: "88%", right: "70%" },
            reason16: { top: "83%", right: "73%" },
            reason17: { top: "92%", right: "76.5%" },
            reason18: { top: "86%", right: "82%" },
            reason19: { top: "85%", right: "90%" },

            reason20: { top: "81%", right: "93%" },
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
      <Box
        sx={{
          display: "flex",
          gap: 3,
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
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        الوضعية الاستكشافية :
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          marginRight: "30px",
          marginTop: "30px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        بينما كان الأب يجلس في غرفة المعيشة يتصفح الجريدة، التفتت سلمى بفضول نحو
        العنوان الكبير الذي يعلن عن تحطيم رقم قياسي جديد في تسلق قمة جبل الألب.
        ومع اشتعال روح المغامرة بداخلها، سألته بفضول:ماذا عن باقي الجبال حول
        العالم؟ و هل توجد أنواع تضاريس أخرى تجعل كوكبنا متنوعًا ومثيرًا؟{" "}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "red",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        مرحلة رصد التصورات: أسئلة لاستكشاف أفكار المتعلم
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          marginRight: "30px",
          marginTop: "30px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        و أنت، ما هي الجبال التي تعرفها حول العالم؟ وهل ترى أن هناك أنواع تضاريس
        أخرى تُسهم في جعل كوكبنا أكثر تنوعًا؟
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "red",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        مرحلة التعلم المنهجي: "استكشاف خريطة العالم"
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          marginRight: "30px",
          marginTop: "30px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        تعليمة: استكشف الوحدات التضاريسية الكبرى على الخريطة!
        <ul>
          <li>انظر إلى الخريطة وحدد مناطق الجبال، الهضاب، والسهول.</li>
          <li> استخدم خاصية التكبير لتفحص التفاصيل الدقيقة لكل وحدة.</li>
          <li> قم بتسجيل أبرز الأسماء الخاصة بكل نوع من التضاريس.</li>
        </ul>
      </Typography>
      {/* <WorldMap1 /> */}
      <MaghrebArabeMap />
      {/* Image with Overlay */}
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "35px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        {" "}
        1 ) قم بتوصيل كل هضبة بالقارة التي تقع ضمنها.
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <div
          style={{
            marginTop: "1000px",

            maxWidth: "1000px", // Largeur augmentée
            alignItems: "center", // Centrage global
            direction: "rtl",
            fontFamily: "Arial, sans-serif",
            margin: "0 auto",
            padding: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              minHeight: "250px",
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
                width: "200px", // Largeur fixe
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
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
      {/* Single Buttons for the Entire Exercise */}
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
        مرحلة التدريب{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "35px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        2) أربط السلسلة الجبلية بموقعها و أعلى قمة فيها :
      </Typography>
      <div
        style={{
          maxWidth: "1000px",
          direction: "rtl",
          fontFamily: "Arial, sans-serif",
          margin: "0 auto",
          padding: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "relative",
            minHeight: "300px",
            gap: "100px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {columns[0].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "15px",
                  margin: "10px 0",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {columns[1].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "15px",
                  margin: "10px 0",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {columns[2].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "15px",
                  margin: "10px 0",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <AnimatePresence>
            {showArrows1 && (
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
                {arrowsConfig1.map((arrow, index) => (
                  <motion.svg
                    key={`arrow1-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      position: "absolute",
                      left: "35%",
                      top: arrow.startY,
                      transform: `translate(-50%, -50%) rotate(${arrow.angle}deg)`,
                      overflow: "visible",
                    }}
                    width="100"
                    height="20"
                    viewBox="0 0 100 20"
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

                {arrowsConfig2.map((arrow, index) => (
                  <motion.svg
                    key={`arrow2-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      position: "absolute",
                      left: "75%",
                      top: arrow.startY,
                      transform: `translate(-50%, -50%) rotate(${arrow.angle}deg)`,
                      overflow: "visible",
                    }}
                    width="100"
                    height="20"
                    viewBox="0 0 100 20"
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
            onClick={() => setShowArrows1(false)}
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
            onClick={() => setShowArrows1(true)}
          >
            الإصلاح
          </Button>
        </div>
      </div>
      {/*       <MountainTable/>
       */}{" "}
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
        مرحلة التقييم{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "35px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        سؤال متعدد الاختيارات :
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          marginRight: "35px",
          direction: "rtl",
        }}
      >
        {questions1.map((q, qIndex) => (
          <div key={qIndex} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">
                {qIndex + 1}- {q.question}
              </h5>
              {q.options.map((option, optionIndex) => (
                <div key={optionIndex} className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`question-${qIndex}`}
                    checked={selectedAnswers[qIndex] === optionIndex}
                    onChange={() => handleSelect(qIndex, optionIndex)}
                  />
                  <label className="form-check-label">{option}</label>
                </div>
              ))}
              {showCorrection && (
                <p
                  style={{
                    marginTop: "2px",
                    color: "green",
                    fontSize: "18px",
                    direction: "rtl",
                    fontWeight: "bold",
                  }}
                >
                  الإجابة الصحيحة: {q.options[q.correct]}
                </p>
              )}
            </div>
          </div>
        ))}

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            sx={{
              fontSize: "18px",
              mt: "3px",
              padding: "12px 24px",
              backgroundColor: "#F6D339",
              "&:hover": { backgroundColor: "#e6c330" },
              fontWeight: "bold",
            }}
            variant="contained"
            onClick={() => {
              setShowCorrection(false);
              // Réinitialiser les sélections si nécessaire
              setSelectedAnswers({});
            }}
          >
            إعادة المحاولة
          </Button>

          <Button
            sx={{
              fontSize: "18px",
              mt: "3px",
              padding: "12px 24px",
              backgroundColor: "#60B463",
              "&:hover": { backgroundColor: "#4fa352" },
              fontWeight: "bold",
            }}
            variant="contained"
            onClick={() => setShowCorrection(true)}
          >
            الإصلاح
          </Button>
        </Box>
      </Typography>
    </Container>
  );
};

export default Course;
