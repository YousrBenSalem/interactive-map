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
      question: "يتسم الغطاء النباتي في جنوب المغرب العربي بالتنوع والكثافة",
      correctAnswer: "خطأ",
      correction: "يتسم الغطاء النباتي في شمال المغرب العربي بالتنوع والكثافة",
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
    reason1: "  شمال   ",
    reason2: " نصف ",
    reason3: " وخمس  ",
    reason4: "  القارة    ",
    reason5: "  الافريقية    ",
    reason6: "  شمالا    ",
    reason7: " على  ",
    reason8: " المحيط الأطلسي  ",
    reason9: "   مصر والسودان     ",
    reason10: "   التشاد ومالي     ",
    reason11: " والسينغال  ",
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
            {" "}
            الدرس الرابع : خصائص المغرب العربي الطبيعية{" "}
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
        تعهد المكتسبات:{" "}
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
        درستم يا أطفال في الحصة الفارطة درس المغرب العربي الموقع والمساحة
        والتقسيم السياسي. هيا حاولوا تعمير الخارطة الذهنية التالية استنادا الى
        مكتسباتكم السابقة:
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
          src="/assets/fifthcourse/Maghreb.jpg"
          alt="    المغرب العربي"
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers1).map((key, index) => {
          const positions = {
            reason1: { top: "22%", right: "14%" },
            reason2: { top: "12%", right: "80%" },
            reason3: { top: "20%", right: "80%" },
            reason4: { top: "20%", right: "95%" },
            reason5: { top: "28%", right: "83%" },
            reason6: { top: "72%", right: "14%" },
            reason7: { top: "80%", right: "28%" },
            reason8: { top: "88%", right: "17%" },

            reason9: { top: "70%", right: "87%" },
            reason10: { top: "79%", right: "85%" },
            reason11: { top: "87%", right: "81%" },
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
        في أحد أيام العطلة جلست صحبة اخيك الأصغر أحمد تشاهدون برنامجا وثائقيا عن
        قارة افريقيا يدعى "افريقيا: مهد الحضارات العريقة". في أحد المشاهد، لاحت
        أمامكم خريطة هذه القارة وقد كانت بلدان المغرب العربي ملونة باللون الأخضر
        وسمعتم المعلّق وهو يقول ان هذه هي بلدان المغرب العربي وهي ذات{" "}
        <span style={{ color: "purple" }}>خصائص طبيعية متنوعة </span>.
        <br />
        فتبادرت الى ذهن اخيك عدّة تساؤلات، طرحها عليك بكل فضول:
        <br />
        ماهي أنواع التضاريس؟
        <br />
        بما يتميز مناخ دول المغرب العربي؟
        <br />
        هل تغطي الغابات كامل المغرب العربي؟
        <br />
        حاول الإجابة عن تساؤلات أخيك الأصغر:
        <br />
        ..................................................................................................................................................................................................
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
        التعلم المنهجي:
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
        حتى تتأكد من صحة اجابتك وتثري معلوماتك الجغرافية، أبحرت في الشبكة
        العنكبوتية فتفاجأت بموقع يدعي اكاديمية الجغرافيا التفاعلية يحتوي جميع
        المعلومات التي تبحث عنها مرفقة بخرائط تفاعلية وتمارين مشوقة.
        <br />
        اتأمل الخريطة التفاعلية التالية وأبدي ملاحظاتي:{" "}
      </Typography>
      <div>
        {" "}
        <MaghrebMap />
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
        نشاط 1: أكمل تعمير الجدول انطلاقا من المعلومات التي اكتشفتها في الخريطة
        التفاعلية:
      </Typography>
      <MontagneTable />
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#9AC8EB",
          marginRight: "30px",
          marginTop: "40px",
          // Active la direction droite à gauche
        }}
      >
        نشاط2: ألاحظ الصور التالية وأحاول تعريف كل من العرق، الحمادة، الهضبة في
        البطاقات المقدّمة:
      </Typography>
      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Ligne 1 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <div style={{ width: "30%" }}>
              {!showInputs ? (
                <input
                  type="text"
                  placeholder="أدخل إجابتك هنا"
                  style={{
                    width: "100%",
                    color: "green",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                  }}
                />
              ) : (
                <p
                  style={{
                    color: "green",
                    textAlign: "right",
                    fontWeight: "bold",
                    direction: "rtl",
                  }}
                >
                  عبارة عن كثبان رملية منبسطة
                </p>
              )}
            </div>
            <div style={{ width: "30%" }}>
              <p
                style={{
                  textAlign: "right",
                  fontWeight: "bold",
                  direction: "rtl",
                }}
              >
                العرق
              </p>
            </div>
            <div style={{ width: "30%" }}>
              {/* Image pour العرق */}
              <img
                src="/assets/fifthcourse/ere9.jpg"
                alt="العرق"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Ligne 2 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <div style={{ width: "30%" }}>
              {!showInputs ? (
                <input
                  type="text"
                  placeholder="أدخل إجابتك هنا"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                  }}
                />
              ) : (
                <p
                  style={{
                    color: "green",
                    textAlign: "right",
                    fontWeight: "bold",
                    direction: "rtl",
                  }}
                >
                  عبارة عن أسطح مرتفعة أحيانا ومنبسطة أخرى وتتميز بملمسها الصخري
                </p>
              )}
            </div>
            <div style={{ width: "30%" }}>
              <p
                style={{
                  textAlign: "right",
                  fontWeight: "bold",
                  direction: "rtl",
                }}
              >
                الحمادة
              </p>
            </div>
            <div style={{ width: "30%" }}>
              {/* Image pour الحمادة */}
              <img
                src="/assets/fifthcourse/hmeda.jpg"
                alt="الحمادة"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Ligne 3 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <div style={{ width: "30%" }}>
              {!showInputs ? (
                <input
                  type="text"
                  placeholder="أدخل إجابتك هنا"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                  }}
                />
              ) : (
                <p
                  style={{
                    color: "green",
                    textAlign: "right",
                    fontWeight: "bold",
                    direction: "rtl",
                  }}
                >
                  تضاريس مرتفعة بعض الشيء عن سطح الأرض تمدد الى أن تصل الى تنتهي
                  بقمم جبال او تلال ويتخللها بعض الأودية التي تكون في الغالب
                  جافة
                </p>
              )}
            </div>

            <div style={{ width: "30%" }}>
              <p
                style={{
                  textAlign: "right",
                  fontWeight: "bold",
                  direction: "rtl",
                }}
              >
                الهضبة
              </p>
            </div>
            <div style={{ width: "30%" }}>
              {/* Image pour الهضبة */}
              <img
                src="/assets/fifthcourse/hadhba.jpg"
                alt="الهضبة"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
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
          onClick={toggleInputsReset}
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
          onClick={toggleInputs}
        >
          الإصلاح
        </Button>
      </div>
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
        الاستنتاج :{" "}
      </Typography>
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
        أواصل تعمير الخارطة الذهنية التالية استنادا الى المعلومات التي تعرفت
        عليها:
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
          src="/assets/fifthcourse/tadharyse.jpg"
          alt="  التضاريس في المغرب العربي   "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers4).map((key, index) => {
          const positions = {
            reason1: { top: "19%", right: "10%" },
            reason2: { top: "41%", right: "10%" },
            reason3: { top: "75%", right: "9%" },

            reason5: { top: "43%", right: "63%" },
            reason6: { top: "80%", right: "49%" },
            reason7: { top: "84%", right: "80%" },

            reason8: { top: "20%", right: "89%" },
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
                maxWidth: "130px",
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
                    maxWidth: "150px",
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
        نال برنامج " افريقيا مهد الحضارات العريقة" إعجابك أنت واخوك فدعوتم كل
        أفراد العائلة لمشاهدته. وقد كانت الحلقة الثانية منه مواصلة للحلقة الأولى
        لكن تناولت هذه المرة الخصائص المناخية لمنطقة المغرب العربي وتأثيراتها
        على الغطاء النباتي.
        <br />
        فصاح أخوك أحمد متعجبا:{" "}
        <span style={{ color: "purple" }}>
          {" "}
          هل يختلف المناخ من منطقة الى أخرى في المغرب العربي وكيف يؤثر ذلك في
          الغطاء النباتي يا ترى؟{" "}
        </span>
        <br />
        فقلت:
        ..................................................................................................{" "}
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
          direction: "rtl",
        }}
      >
        قم بمساعدة أحمد من خلال الإجابة عن الأسئلة التالية:
        <br />
        بما تتميز كميات الأمطار ببلدان المغرب العربي؟
        <br />
        كيف يمكن أن يؤثر ذلك على الغطاء النباتي؟
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
          direction: "rtl",
        }}
      >
        أتـأمل الخريطة التفاعلية التالية ثم أعطي ملاحظاتي:
      </Typography>
      <PrecipitationMap />
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          color: "#9AC8EB",
          marginRight: "30px",
          marginTop: "100px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        نشاط: أكمل تعمير الجدول التالي بالرجوع الى الخريطة التفاعلية:{" "}
      </Typography>
      <PrecipitationTable />
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          marginRight: "30px",
          marginTop: "30px",
          direction: "rtl", // Active la direction droite à gauche
          marginBottom: "10px",
        }}
      >
        ألاحظ خريطة الغطاء النباتي بالمغرب العربي. أعطي ملاحظاتي:
      </Typography>
      <VegetationMap />
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
        نشاط: أملأ الفراغات بما يناسب
      </Typography>
      <NaturalVegetationTable />
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
        الاستنتاج:{" "}
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
        أكمل الخريطة الذهنية التالية:
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
          src="/assets/fifthcourse/ta9es.jpg"
          alt="   المناخ في المغرب العربي  "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers3).map((key, index) => {
          const positions = {
            reason1: { top: "9%", right: "61%" },
            reason2: { top: "15%", right: "58%" },
            reason3: { top: "56%", right: "16%" },
            reason4: { top: "66%", right: "7%" },

            reason5: { top: "75%", right: "13%" },
            reason6: { top: "57%", right: "34%" },
            reason7: { top: "69%", right: "33%" },

            reason8: { top: "69%", right: "33%" },
            reason9: { top: "89%", right: "35%" },
            reason10: { top: "58%", right: "66%" },
            reason11: { top: "67%", right: "55%" },

            reason12: { top: "66%", right: "91%" },
            reason13: { top: "70%", right: "83%" },
            reason14: { top: "70%", right: "91%" },

            reason15: { top: "75%", right: "82%" },
            reason16: { top: "75%", right: "91%" },
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
                maxWidth: "130px",
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
                    maxWidth: "150px",
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
        التدريب:{" "}
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
        أضع كل قمة جبل في البلد المنتمية اليه:{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          marginRight: "30px",
          marginTop: "30px",
          direction: "rtl",
          display: "flex",
          gap: "10px", // espace entre les cadres
          flexWrap: "wrap", // permet de passer à la ligne si nécessaire
          justifyContent: "flex-start", // aligne les éléments à droite
        }}
      >
        {words.map((word, index) => (
          <Box
            key={index}
            sx={{
              border: "2px solid red",
              padding: "5px 10px",
              borderRadius: "8px",
              display: "inline-block",
            }}
          >
            {word}
          </Box>
        ))}
      </Typography>
      <CountriesTable />
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
        التقييم{" "}
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
        اجيب بصواب أو خطأ و أصلح اخطأ ان وجد:
      </Typography>
      <div
        style={{
          direction: "rtl",
          fontFamily: "Arial, sans-serif",
          margin: "20px",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          {quizData.map((item, index) => (
            <div key={index} style={{ marginBottom: "25px" }}>
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  padding: "15px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                {item.question}
              </div>

              {showAnswers ? (
                <div>
                  <div
                    style={{
                      color: "#60B463",
                      fontWeight: "bold",
                      margin: "10px 0",
                    }}
                  >
                    الإجابة الصحيحة: {item.correctAnswer}
                  </div>
                  {item.correction && (
                    <div
                      style={{
                        color: "#60B463",
                        fontStyle: "italic",
                        marginBottom: "15px",
                      }}
                    >
                      {item.correction}
                    </div>
                  )}
                </div>
              ) : (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <input
                    type="text"
                    value={userAnswers[index]}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    style={{
                      width: "100px",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      textAlign: "center",
                      fontSize: "16px",
                    }}
                    placeholder="................"
                  />
                  <span style={{ fontSize: "14px", color: "#666" }}>
                    (صواب/خطا)
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

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
            onClick={resetAll1}
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
            onClick={toggleAnswers}
          >
            الإصلاح
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Course;
