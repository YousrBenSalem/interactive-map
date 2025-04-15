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
import MaghrebMap from "./MaghrebMap.js";
import MontagneTable from "./MontagneTable.js";
import PrecipitationMap from "./PrecipitationMap.js";
import PrecipitationTable from "./PrecipitationTable.js";
import VegetationMap from "./VegetationMap.js";
import NaturalVegetationTable from "./NaturalVegetationTable.js";
import CountriesTable from "./CountriesTable.js";
import InteractiveCountryTable from "./InteractiveCountryTable.js";
import PaysMaghrebMap from "./PaysMaghrebMap.js";

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
    const [showInputs, setShowInputs] = useState(false);
    
      const [userAnswers, setUserAnswers] = useState(["", "", ""]);

      // Données des questions et réponses
      const quizData = [
        {
          question: "تتزايد الأمطار في المغرب العربي كلما اتجهنا جنوبا",
          correctAnswer: "خطا",
          correction:
            "تتزايد الأمطار في المغرب العربي كلما اتجهنا شمالا / تقل الأمطار في المغرب العربي كلما اتجهنا جنوبا",
        },
        {
          question: "الأمطار بالمغرب العربي غير منتظمة فصليا وسنويا",
          correctAnswer: "صواب",
        },
        {
          question:
            "يتسم الغطاء النباتي في جنوب المغرب العربي بالتنوع والكثافة",
          correctAnswer: "خطأ",
          correction:
            "يتسم الغطاء النباتي في شمال المغرب العربي بالتنوع والكثافة",
        },
      ];

      const toggleAnswers = () => {
        setShowAnswers(!showAnswers);
      };

      const resetAll1 = () => {
        setShowAnswers(false);
        setUserAnswers(["", "", ""]);
      };

      const handleAnswerChange = (index, value) => {
        const newAnswers = [...userAnswers];
        newAnswers[index] = value;
        setUserAnswers(newAnswers);
      };
const words = ["طوبقال", "خمير", "الشعانبي", "أوراس"];

    const toggleInputs = () => {
      setShowInputs(true);
    };
        const toggleInputsReset = () => {
          setShowInputs(false);
        };
          const [showCorrections, setShowCorrections] = useState(false);

          const handleCorrection = () => {
            setShowCorrections(true);
          };

          const handleReset = () => {
            setShowCorrections(false);
          };
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

  const [showAnswers, setShowAnswers] = useState({});
  const [showArrows, setShowArrows] = useState(false);
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
    ["تونس", " الجزائر", " المغرب الأقصى", "ليبيا", "موريطانيا"],

    ["الرباط", "تونس", "طرابلس", "الجزائر", "نواكشوط"],
    ["1962", "1952", "1956", "1960"],
  ];

  // Configuration des flèches (startY, angle, length)
  const arrowsConfig1 = [
    { startY: "23%", angle: 130, length: 220 },
     { startY: "40%", angle: 150, length: 200 },
     { startY: "50%", angle: 190, length: 200 },
     { startY: "60%", angle: 230, length: 220 },
     { startY: "90%", angle: 190, length: 200 },
  ];
  const arrowsConfig2 = [
    { startY: "20%", angle: 162, length: 200 },
    { startY: "40%", angle: 140, length: 220 },
     { startY: "67%", angle: 200, length: 200 },
     { startY: "95%", angle: 180, length: 200 },
     { startY: "43%", angle: 220, length: 220 },
    // { startY: "76%", angle: 180, length: 200 },
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
    reason1: "  آسيا   ",
    reason2: " إفريقيا ",
    reason3: " أوروبا  ",
    reason4: "  أستراليا  ",
    reason5: " أمريكا",
    reason6: "  أنتاركتيكا    ",
  };
  const correctAnswers2 = {
    reason1: "   شمال القارة الافريقية   ",
    reason2: "  القارة الإفريقية ",
    reason3: "   تونس ",
    reason4: "  الجزائر  ",
    reason5: "  موريطانيا ",
    reason6: " الشمال  ",

    reason7: "الجنوب التشاد ",
    reason8: "  والنيجر ومالي ",
    reason9: "   والسنغال ",
    reason10: "  الشرق   ",
    reason11: "  المحيط  ",
    reason12: " الأطلسي  ",
    reason13: "   استراتيجي هام  ",
    reason14: " الجزائر   ",
  };
  const correctAnswers3 = {
    reason1: " بتباينه  ",
    reason2: " الغطاء النباتي    ",
    reason3: "بالشّمال",
    reason4: "400 مم",
    reason5: "الغابات  ",
    reason6: "شبه الجاف ",
    reason7: " بين 200 و400 مم",
    reason9: "بالهضاب",
    reason10: "الجنوب ",
    reason11: "200مم ",
    reason12: "المناطق ",
    reason13: "الساحلية ",
    reason14: "المناطق  ",
    reason15: "الوسطى  ",
    reason16: "الصحراوية ",
  };
  const correctAnswers4 = {
    reason1: "السهول",
    reason2: " وهي الأقل انتشارا في المغرب العربي وهي نوعان ",
    reason3: " سهول ساحلية: ضيقة كسهول الساحل وسهل الجفارة بالبلاد التونسية",
    
    reason5:
      "الجبال في المغرب العربي سلسلتان جبليتان متوازيتان تخترقانه من الغرب الى الشرق:",
    reason6:
      " سلسلة الأطلس التلّي: تبدأ من أقصى شمال المغرب لتمر بالجزائر ثم تصل الى جبال خمير الجزائر ",
    reason7:
      "سلسلة الأطلس الصحراوي: على قمم هذه السلسلة هو جبل طوبقال بالمغرب 4165 م، جبل الأوراس في الجزائر 2328 م وجبل الشعانبي في تونس 1544 م.  كما نجد في الجنوب الجزائر جبال الهوجار والتي تبلغ أعلى قمة بها جبل الأحجار 2918م",
    reason8: " الصحاري ",
    
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
    blank1: " شمال  ",
    blank2: "الإفريقية  ",
    blank3: "البحر الأبيض المتوسط   ",
    blank4: " المحيط الأطلسي ",
    blank5: " مصر والسودان  ",
    blank6: "  .مالي والتشاد والنيجر والسنغال ",
  
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
  const cities = [
    { name: "الجزائر", flag: "/assets/sixthcourse/mauritania.jpg" },
    { name: "نواكشوط", flag: "/assets/sixthcourse/libya.jpg" },
    { name: "تونس", flag: "/assets/sixthcourse/algeria.jpg" },
    { name: "الرباط", flag: "/assets/sixthcourse/morocco.jpg" },
    { name: "طرابلس", flag: "/assets/sixthcourse/tunisia.jpg" },
  ];
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
            {" "}
            الدرس السادس : المغرب العربي: الموقع والمساحة والتقسيم السياسي{" "}
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
          direction: "rtl",
        }}
      >
        تعهد المكتسبات السابقة:{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          direction: "rtl",
        }}
      >
        درستم يا أطفال في السنة الفارطة درس القارات والمحيطات والوحدات
        التضاريسية الكبرى. فهل لكم تذكيري إعادة تذكيري بأسماء قارات العالم:
        <br />
        أساعد معلمتي عبر تعمير الخارطة الذهنية التالية:
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
          src="/assets/sixthcourse/karate.jpg"
          alt="    المغرب العربي"
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers1).map((key, index) => {
          const positions = {
            reason1: { top: "17%", right: "51%" },
            reason2: { top: "38%", right: "85%" },
            reason3: { top: "71%", right: "82%" },
            reason4: { top: "88%", right: "49%" },
            reason6: { top: "26%", right: "14%" },
            reason5: { top: "69%", right: "14%" },
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
                fontSize: "26px",
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
                    fontSize: "30px",
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
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          direction: "rtl",
        }}
      >
        هل يمكنكم تذكيري بموقع البلاد التونسية؟
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "red",
          direction: "rtl",
        }}
      >
        الوضعية الاستكشافية:{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          direction: "rtl",
        }}
      >
        في أحد أيام العطلة جلست صحبة اخيك الأصغر تشاهدون فلما وثائقيا عن قارة
        افريقيا وفي أحد المشاهد، لاحت أمامكم خريطة هذه القارة وقد كانت بلدان
        شمالها ملونة باللون الأخضر ما عدى مصر وسمعتم المعلّق وهو يقول ان هذه هي
        بلدان المغرب العربي وهي ذات تاريخ عريق وحضارات مجيدة.
      </Typography>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "65%",
          margin: "0 auto", // Centre le Box horizontalement
          textAlign: "center",
        }}
      >
        <img
          src="/assets/fifthcourse/image1.jpg"
          alt="المغرب العربي"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
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
        فسألك أخوك بفضول: ماهي بلدان المغربي العربي؟ وهل تونس منتمية إليها؟
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "red",
          direction: "rtl",
        }}
      >
        مرحلة رصد التصورات:{" "}
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
        فأجبته قائلا:
        ....................................................................
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "red",
          direction: "rtl",
        }}
      >
        التعلم المنهجي:{" "}
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
        أتأمل الخريطة التفاعلية المقدّمة وأبدي ملاحظاتي:
      </Typography>
      <div>
        {" "}
        <PaysMaghrebMap />
      </div>
      <Typography
        variant="h6"
        sx={{
          marginTop: "30px",

          textAlign: "right",
          fontWeight: "bold",
          color: "#9AC8EB",
          marginRight: "30px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        نشاط 1: أكمل تعمير الفقرة التالية مستأنسا بالخريطة التفاعلية المقدّمة
        سابقا
      </Typography>
      <Typography
        sx={{
          textAlign: "right",
          marginTop: "10px",
          fontSize: "18px",

          fontWeight: "bold",
          marginRight: "30px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        يقع المغرب العربي في{" "}
        <span>
          {showAnswers ? (
            <span style={{ color: "green", fontWeight: "bold" }}>
              {correctFillInTheBlanks.blank1}
            </span>
          ) : (
            <TextField
              variant="standard"
              placeholder="....................................."
              value={fillInTheBlanks.blank1}
              onChange={(e) => handleFillChange(e, "blank1")}
              InputProps={{
                disableUnderline: true, // Removes the underline
              }}
            />
          )}
        </span>{" "}
        القارة{" "}
        <span>
          {showAnswers ? (
            <span style={{ color: "green", fontWeight: "bold" }}>
              {correctFillInTheBlanks.blank2}
            </span>
          ) : (
            <TextField
              variant="standard"
              placeholder="....................................."
              value={fillInTheBlanks.blank2}
              onChange={(e) => handleFillChange(e, "blank2")}
              InputProps={{
                disableUnderline: true, // Removes the underline
              }}
            />
          )}
        </span>{" "}
        ، يحدّه من الشمال{" "}
        <span>
          {showAnswers ? (
            <span style={{ color: "green", fontWeight: "bold" }}>
              {correctFillInTheBlanks.blank3}
            </span>
          ) : (
            <TextField
              variant="standard"
              placeholder="....................................."
              value={fillInTheBlanks.blank3}
              onChange={(e) => handleFillChange(e, "blank3")}
              InputProps={{
                disableUnderline: true, // Removes the underline
              }}
            />
          )}
        </span>{" "}
        ومن الغرب{" "}
        <span>
          {showAnswers ? (
            <span style={{ color: "green", fontWeight: "bold" }}>
              {correctFillInTheBlanks.blank4}
            </span>
          ) : (
            <TextField
              variant="standard"
              placeholder="....................................."
              value={fillInTheBlanks.blank4}
              onChange={(e) => handleFillChange(e, "blank4")}
              InputProps={{
                disableUnderline: true, // Removes the underline
              }}
            />
          )}
        </span>
        <br />
        ومن الشرق{" "}
        <span>
          {showAnswers ? (
            <span style={{ color: "green", fontWeight: "bold" }}>
              {correctFillInTheBlanks.blank5}
            </span>
          ) : (
            <TextField
              variant="standard"
              placeholder="....................................."
              value={fillInTheBlanks.blank5}
              onChange={(e) => handleFillChange(e, "blank5")}
              InputProps={{
                disableUnderline: true, // Removes the underline
              }}
            />
          )}
        </span>{" "}
        ومن الجنوب
        <span>
          {showAnswers ? (
            <span style={{ color: "green", fontWeight: "bold" }}>
              {correctFillInTheBlanks.blank6}
            </span>
          ) : (
            <TextField
              variant="standard"
              placeholder="....................................."
              value={fillInTheBlanks.blank6}
              onChange={(e) => handleFillChange(e, "blank6")}
              InputProps={{
                disableUnderline: true, // Removes the underline
              }}
            />
          )}
        </span>
      </Typography>
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
      <Typography
        variant="h6"
        sx={{
          marginTop: "30px",

          textAlign: "right",
          fontWeight: "bold",
          color: "#9AC8EB",
          marginRight: "30px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        نشاط 2: أضع لكل بلد مقدم في الجدول عاصمته وعلمه:
      </Typography>
    
      <InteractiveCountryTable />
      <Typography
        variant="h4"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
          color: "red",
          direction: "rtl",
        }}
      >
        الاستنتاج:{" "}
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
          src="/assets/sixthcourse/maghreb.jpg"
          alt="    المغرب العربي"
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers2).map((key, index) => {
          const positions = {
            reason1: { top: "27%", right: "26%" },
            reason2: { top: "43%", right: "34%" },
            reason3: { top: "33%", right: "63%" },
            reason4: { top: "33%", right: "70%" },
            reason5: { top: "38%", right: "73%" },
            reason6: { top: "62%", right: "16%" },

            reason7: { top: "62%", right: "39%" },
            reason8: { top: "66%", right: "37%" },
            reason9: { top: "71%", right: "37%" },
            reason10: { top: "87.5%", right: "13.5%" },
            reason11: { top: "87.5%", right: "40%" },
            reason12: { top: "92%", right: "35%" },
            reason13: { top: "64%", right: "62%" },
            reason14: { top: "67%", right: "80%" },
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
                maxWidth: "250px",
                lineHeight: "1.4",
              }}
            >
              {showAnswers ? (
                <Typography
                  sx={{
                    color: "green",
                    fontSize: "18px",
                    fontWeight: "bold",
                    textAlign: "center",
                    maxWidth: "250px",
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
          direction: "rtl",
        }}
      >
        التدريب:{" "}
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
        أشطب الخطأ:
      </Typography>
      <Box sx={{ direction: "rtl", p: 3 }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "right",
            fontWeight: "bold",
            marginRight: "30px",
            lineHeight: 2,
          }}
        >
          {/* Première phrase */}
          <span
            style={{
              backgroundColor: showCorrections ? "red" : "transparent",
              padding: "2px 5px",
              borderRadius: "3px",
            }}
          >
            يوجد المغرب العربي في جنوب افريقيا
          </span>
          <br />
          {/* Deuxième phrase (toujours normale) */}
          يوجد المغرب العربي غرب الوطن العربي
          <br />
          {/* Troisième phrase */}
          <span
            style={{
              backgroundColor: showCorrections ? "red" : "transparent",
              padding: "2px 5px",
              borderRadius: "3px",
            }}
          >
            مساحة المغرب العربي تساوي نصف مساحة افريقيا
          </span>
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
          <Button
            variant="contained"
            onClick={handleReset}
            sx={{
              fontSize: "17px",
              padding: "12px 24px",
              backgroundColor: "#F6D339",
            }}
          >
            إعادة المحاولة
          </Button>
          <Button
            variant="contained"
            onClick={handleCorrection}
            sx={{
              fontSize: "18px",
              padding: "12px 24px",
              backgroundColor: "#60B463",
            }}
          >
            الإصلاح
          </Button>
        </Box>
      </Box>
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
            </div>
    </Container>
  );
};

export default Course;
