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
import DesignLayout from "./DesignLayout.js";
import CityDesignTable from "./CityDesignTable.js";
import SfaxMap from "./SfaxMap.js";
import MapTunisie from "./MapTunisie.js";
import FishingPortsMap from "./FishingPortsMap.js";
import PortRankingExercise from "./PortRankingExercise.js";
import QuizComponent from "./QuizComponent.js";

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

  const [showAnswers, setShowAnswers] = useState({});
    const [showAnswers1, setShowAnswers1] = useState({});
      const [showAnswers2, setShowAnswers2] = useState({});
        const [showAnswers3, setShowAnswers3] = useState({});
              const [showAnswers4, setShowAnswers4] = useState({});
  const [showAnswersImage1, setShowAnswersImage1] = useState(false);
    const [showAnswersImage6, setShowAnswersImage6] = useState(false);
  const [showAnswersImage2, setShowAnswersImage2] = useState(false);
    const [showAnswersImage4, setShowAnswersImage4] = useState(false);
      const [showAnswersImage5, setShowAnswersImage5] = useState(false);
        const [showAnswersImage7, setShowAnswersImage7] = useState(false);
            const [showAnswersImage9, setShowAnswersImage9] = useState(false);


  const [showArrows, setShowArrows] = useState(false);
  // État pour suivre quelles réponses sont visibles
  const [visibleAnswers, setVisibleAnswers] = useState({});

  // Fonction pour basculer l'affichage d'une réponse
  const toggleAllAnswersImage3 = () => {
    setShowAnswersImage3((prev) => !prev);
  };
    const toggleAllAnswersImage9 = () => {
      setShowAnswersImage9((prev) => !prev);
    };
    const toggleAllAnswersImage7 = () => {
      setShowAnswersImage7((prev) => !prev);
    };
    const toggleAllAnswersImage6 = () => {
      setShowAnswersImage6((prev) => !prev);
    };
    const toggleAllAnswersImage4 = () => {
      setShowAnswersImage4((prev) => !prev);
    };
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
    { startY: "40%", angle: 140, length: 200 },
    { startY: "35%", angle: 200, length: 200 },
    { startY: "60%", angle: 200, length: 200 },
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
    " الشمال   ",
    " الوطن القبلي",
    " الوسط",
    " الساحل",
    "الجنوب ",
  ];
  const reasons1 = [
    "  غالبا ما يتواجد بالقرب من المطار أو الميناء   ",
    "  يتميز بمساكنه المتواضعة و المتلاصقة",
    "  تتركز به المؤسسات و المحلات التي تقدم الخدمات مثل البنوك و المتاجر ",
  ];
  const motivations1 = ["مركز المدينة ", , "الحي الصناعي ", "  الحي الشعبي "];

  const motivations = [
    "الزيتون ",
    ,
    "الخضر ",
    "  النخيل ",
    "زراعة الحبوب ذات المردود المرتفع بأقصى ",
    " زراعة الحبوب ذات المردود المتوسّط",
    "القوارص و الكروم",
  ];

  // Configuration des flèches inclinées
  const arrowsConfig = [
    { angle: 140, startY: "25%", length: 290 },
    { angle: 180, startY: "26%", length: 290 },
    { angle: 155, startY: "53%", length: 260 },
    { angle: 215, startY: "50%", length: 350 },
    { angle: 210, startY: "66%", length: 280 },
    { angle: 220, startY: "76%", length:370 },
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
    const resetAllInputsImage9 = () => {
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
      setShowAnswersImage9(false);
    };
    const resetAllInputsImage7 = () => {
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
      setShowAnswersImage7(false);
    };
    const resetAllInputsImage5 = () => {
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
      setShowAnswersImage5(false);
    };
    const resetAllInputsImage4 = () => {
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
      setShowAnswersImage4(false);
    };
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
    reason1: " الشمال",
    reason2: "  الجنوب  ",
    reason3: " شبه  ",
    reason4: "   جاف   ",
    reason5: " أكثر من 400 مم سنويا ",
    reason6: " بين 400مم و200مم سنويا ",
    reason7: "تربة خصبة  ",
    reason8: "  تربة فقيرة ",
  };
  const correctAnswers2 = {
    reason1: " 9 ألوان ",
    reason2: "  4 رموز  ",
  };
  const correctAnswers3 = {
    reason1:
      " اللون البني الفاتح ، الذي يرمز إلى زراعة الحبوب ذات المردود المتوسط والغراسات المتنوعة،  ",
    reason2:
      "اللون الأصفر الذي يرمز إلى زراعة الحبوب ذات المردود غير المنتظم والمنخفض.   ",
  };
  const correctAnswers4 = {
    reason1: " شعير  ",
    reason2: " قمح صلب ",
    reason3: " تريتيكال ",
    reason4: " قمح لين ",
  };
    const correctAnswers5 = {
      reason1: " احترام  فترات الراحة البيولوجية لحماية الثروة السمكية. ",
      reason2: "  امتداد السواحل ",
      reason3: " امتداد الجرف القاري  ",
      reason4: "تقديم الدعم المالي للصيادين لشراء المراكب",
      reason5: "استخدام أساليب حديثة لتربية الأسماك في الأحواض",
    };

        const correctAnswers9 = {
          reason1:
            "العوامل المناخية مثل الجفاف أو الأمطار تؤثر بشكل كبير على المحاصيل. ",
          reason2:
            " التربة والموارد الطبيعية مثل خصوبة التربة التي تؤثر في الإنتاج.",
          reason3: " الأساليب الزراعية والتقنيات المستخدمة في الزراعة. ",
        
        };
        const correctAnswers6 = {
          reason1:
            " انخفض إنتاج اللحوم الحمراء من الأغنام بنسبة تراجع قدرها 3.5%.   ",
          reason2:
            "زيادة في إنتاج اللحوم البيضاء (الدواجن) بنسبة زيادة قدرها 9.5%. نتيجة لزيادة الطلب أو تحسين تقنيات التربية والإنتاج. ",
          reason3:
            "  يظهر أن إنتاج اللحوم الأخرى قد شهد زيادة طفيفة بنسبة زيادة بلغت 1.33%. هذا يشير إلى استقرار نسبي في الإنتاج ",
        };
                const correctAnswers7 = {
                  reason1: "الحبوب ",
                  reason2: "النخيل ",
                  reason3: " الأسماك ",
                  reason4: "السواحل ",
                  reason5: "منطقة الوطن القبلي ",
                  reason6: " الطماطم والفلفل ",
                  reason7: "إنتاج اللحوم الحمراء، مثل لحوم الأغنام ",
                  reason8: " إنتاج اللحوم البيضاء، وخاصة الدواجن. ",
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


    const toggleAllAnswersImage5 = () => {
      setShowAnswersImage5((prev) => !prev);
    };
  const toggleAllAnswersImage2 = () => {
    setShowAnswersImage2((prev) => !prev);
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
    const resetAllInputs4 = () => {
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
      setShowAnswers4(false);
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
    const resetAllInputsImage6 = () => {
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
      setShowAnswersImage6(false);
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
  const [showAnswersImage3, setShowAnswersImage3] = useState(false);
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
    setShowAnswers1(!showAnswers1);
    setResetInputs1(false);
  };
  const toggleAllAnswers4 = () => {
    setShowAnswers4(!showAnswers4);
    setResetInputs1(false);
  };
  const resetAllInputs1 = () => {
    setUserInputsFrom(Array(5).fill(""));
    setUserInputsTo(Array(5).fill(""));
    setShowAnswers1(false);
    setResetInputs1(true);
  };
    const toggleAllAnswers2 = () => {
      setShowAnswers2(!showAnswers2);
      setResetInputs1(false);
    };

    const resetAllInputs2 = () => {
      setUserInputsFrom(Array(5).fill(""));
      setUserInputsTo(Array(5).fill(""));
      setShowAnswers2(false);
      setResetInputs1(true);
    };
      const toggleAllAnswers3 = () => {
        setShowAnswers3(!showAnswers3);
        setResetInputs1(false);
      };

      const resetAllInputs3 = () => {
        setUserInputsFrom(Array(5).fill(""));
        setUserInputsTo(Array(5).fill(""));
        setShowAnswers3(false);
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
  blank11: (
    <span>
      استنادا على الاحصائيات الموجودة في الجدول ، يمكن ملاحظة أن إنتاج الحبوب في
      تونس شهد تذبذبًا من سنة إلى أخرى. ففي سنة
      <span style={{ color: "blue" }}> 1999</span>، بلغ إجمالي الإنتاج
      <span style={{ color: "blue" }}> 1812 طن</span>، ثم انخفض بشكل ملحوظ في
      سنة
      <span style={{ color: "blue" }}> 2002</span> ليصل إلى
      <span style={{ color: "blue" }}> 513,4 طن</span>. ولكن في سنة
      <span style={{ color: "blue" }}> 2003</span>، ارتفع الإنتاج بشكل كبير
      ليبلغ
      <span style={{ color: "blue" }}> 2904,1 طن</span>.
    </span>
  ),
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
    blank1:
      "كان إنتاج الزيتون في أعلى مستوياته في سنة 2000، حيث بلغ 1125 ألف طن",
    blank2:
      "  شهد إنتاج القوارص تطورًا تدريجيًا بين 1999 و2002، حيث بلغ 210,5 ألف طن في سنة 1999، ثم ارتفع إلى 225,5 ألف طن في 2000. استمر هذا الارتفاع في 2001 ليصل إلى 240 ألف طن، ثم بقي الإنتاج مستقرًا عند نفس المستوى في 2002. ",
    blank3:
      "شهد إنتاج التمور استقرارًا نسبيًا بين 1999 و2002، حيث لم يطرأ عليه سوى تغيرات طفيفة، مما يعكس ثبات الإنتاج مقارنة بالمحاصيل الأخرى.",
    blank4:
      "إنتاج  الخضروات في ارتفاع متواصل فمثلا تطوّر إنتاج البطاطا من 290 ألف طن سنة 2000 إلى 310 ألف طن كما ارتفع إنتاج البطيخ والدلّاع من 370 ألف طن سنة 2000 إلى 395 ألف طن سنة 2003.",
    blank5:
      "شهد إنتاج السمك في تونس ارتفاعًا، حيث انتقل من 83.7 ألف طن عام 1993 إلى 94.78 ألف طن عام 2003",
  };
  const correctFillInTheBlanks4 = {
    blank1: " أهم المدن العربية المسورة ",
    blank2: "  حصن المدينة  ",
    blank3: "   من المعالم الأثرية   ",
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
    blank111: " متفاوت  ",
    blank211: " مرتفعًا ",
    blank311: " صفاقس (27,000 طن) و سوسة و المنستير و المهدية  (19,000 طن)  ",
    blank321: " تونس  ( 1300طن) وطبرقة (1,000 طن)",
    blank331: "أقل",
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
            الدرس السادس : الإنتاج الفلاحي في المجال التونسي و تطوره
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
      {/* Image with Overlay */}
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
        تعهد المكتسبات المكتسبات السابقة :{" "}
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
        قم بإتمام الرسم التالي بما هو مناسب:
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
          src="/assets/EighthCourse/tn.jpg"
          alt=" التونسية البلاد "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers1).map((key, index) => {
          const positions = {
            reason1: { top: "37%", right: "40%" },
            reason2: { top: "37%", right: "84%" },
            reason3: { top: "55%", right: "61%" },
            reason4: { top: "55%", right: "84%" },

            reason5: { top: "75%", right: "40%" },
            reason6: { top: "74%", right: "62%" },

            reason7: { top: "92%", right: "40%" },

            reason8: { top: "92%", right: "84%" },
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
                fontSize: "18px",
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
                    fontSize: "17px",
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
          marginRight: "35px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        في صباح يوم أحد، توجه سامي مع والده إلى السوق الأسبوعية لشراء
        المستلزمات. عند دخولهما السوق والتجول بين الباعة، لاحظ سامي أن كل بائع
        يفتخر بأصل منتوجه، مشيرًا إلى أن مصدره منطقة معينة من البلاد التونسية.
        فسمع أحدهم يقول:{" "}
        <span style={{ color: "blue" }}>
          "لدينا هنا أجود أنواع الزيتون من الساحل"
        </span>
        ، فيرد عليه آخر:
        <span style={{ color: "blue" }}>
          {" "}
          "أما أنا، فأوفر لكم أفضل أنواع البرتقال من نابل"
        </span>
        . بينما ينادي بائع آخر بفخر:{" "}
        <span style={{ color: "blue" }}>
          "تفاح القصرين هو الأجود بلا منازع"
        </span>
        ، ويضيف آخر:{" "}
        <span style={{ color: "blue" }}>
          "أما القمح والشعير، فهما خيرات ولاية باجة"
        </span>
        . <br />
        بعد أن لفت انتباهه تنوع المنتجات في السوق وتعدد مصدرها ، استفسر سامي من
        والده قائلاً:{" "}
        <span style={{ color: "blue" }}>
          لماذا يختلف نوع المحاصيل الزراعية من منطقة إلى أخرى في تونس؟
        </span>{" "}
        <br />
        ساعد سامي لإيجاد إجابة لسؤاله
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
        مرحلة رصد التصورات: أسئلة لاستكشاف أفكار المتعلم:{" "}
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
        <ol>
          <li> ما هي العوامل التي تؤثر في توزيع الإنتاج الفلاحي في تونس؟</li>
          <li>
            ما هي أبرز المحاصيل الزراعية التي تميز تونس وتعد من أفضل أنواع
            الإنتاج الزراعي فيها ؟
          </li>
        </ol>
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
        مرحلة التعلم المنهجي :{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: "30px",

          textAlign: "right",
          fontWeight: "bold",
          marginRight: "30px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        عند عرض الخريطة، قم بتوجيه المتعلمين للملاحظة الدقيقة من خلال طرح أسئلة
        تركز على تحليل الألوان، الرموز، والتوزيع الجغرافي للظاهرة على الخريطة{" "}
      </Typography>
      <MapTunisie />
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
        نشاط1:
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          // Active la direction droite à gauche
        }}
      >
        سؤال عدد1 : كم عدد الألوان المستخدمة في الخريطة؟
      </Typography>
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
          src="/assets/EighthCourse/couleur.jpg"
          alt="    عدد الألوان المستخدمة في الخريطة  "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers2).map((key, index) => {
          const positions = {
            reason1: { top: "20%", right: "55%" },
            reason2: { top: "85%", right: "55%" },
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
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          // Active la direction droite à gauche
        }}
      >
        سؤال عدد2 :ما هي الألوان الأكثر ظهورًا على الخريطة، وماذا تمثل كل منها؟{" "}
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
          marginTop: "20px",
        }}
      >
        <img
          src="/assets/EighthCourse/couleurSurMap.jpg"
          alt="     الألوان الأكثر ظهورًا في الخريطة   "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers3).map((key, index) => {
          const positions = {
            reason1: { top: "67%", right: "25%" },
            reason2: { top: "67%", right: "76%" },
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
                fontSize: "25px",
                fontWeight: "bold",
                textAlign: "center",
                maxWidth: "160px",
                lineHeight: "1.4",
              }}
            >
              {showAnswersImage3 ? (
                <Typography
                  sx={{
                    color: "green",
                    fontSize: "25px",
                    fontWeight: "bold",
                    textAlign: "center",
                    maxWidth: "160px",
                    lineHeight: "1.2",
                    direction: "rtl",
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
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          marginTop: "30px",
          // Active la direction droite à gauche
        }}
      >
        سؤال عدد3 :تتوزّع الإنتاجات الفلاحيّة بالبلاد التّونسيّة حسب ما تتميّز
        به كلّ منطقة من مناخات ونوعيّة التربة، وكذلك كميّات الأمطار:
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
        نشاط3:
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/assets/EighthCourse/evolution.jpg"
          alt="تطور إنتاج الحبوب في البلاد التونسية "
          style={{ width: "50%", height: "50%" }}
        />
      </div>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          marginRight: "30px",
          marginTop: "30px",
          // Active la direction droite à gauche
        }}
      >
        بالاعتماد على الوثيقة أعلاه أجب عن الأسئلة التالية :
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          // Active la direction droite à gauche
        }}
      >
        سؤال عدد1 : ما هي الأنواع الرئيسية للحبوب؟
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
          src="/assets/EighthCourse/type.jpg"
          alt=" الأنواع  الرئيسية للحبوب  "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers4).map((key, index) => {
          const positions = {
            reason1: { top: "12%", right: "52%" },
            reason2: { top: "52%", right: "87%" },
            reason3: { top: "50%", right: "16%" },
            reason4: { top: "87%", right: "52%" },
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
                fontSize: "25px",
                fontWeight: "bold",
                textAlign: "center",
                maxWidth: "160px",
                lineHeight: "1.4",
              }}
            >
              {showAnswersImage4 ? (
                <Typography
                  sx={{
                    color: "green",
                    fontSize: "25px",
                    fontWeight: "bold",
                    textAlign: "center",
                    maxWidth: "160px",
                    lineHeight: "1.2",
                    direction: "rtl",
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
          onClick={resetAllInputsImage4}
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
          onClick={toggleAllAnswersImage4}
        >
          الإصلاح
        </Button>
      </Box>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          marginTop: "30px",
          // Active la direction droite à gauche
        }}
      >
        سؤال عدد 2: كيف تلاحظ إنتاج الحبوب في البلاد التونسية؟{" "}
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
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          marginTop: "30px",
          // Active la direction droite à gauche
        }}
      >
        سؤال عدد 3 : ما هي العوامل التي تؤثر في تغير إنتاج الحبوب من سنة إلى
        أخرى؟
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
          src="/assets/EighthCourse/houboub.jpg"
          alt="    العوامل التي تؤثر في تغير إنتاج الحبوب من سنة إلى أخرى  "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers9).map((key, index) => {
          const positions = {
            reason1: { top: "66%", right: "49%" },
            reason2: { top: "66%", right: "83%" },
            reason3: { top: "66%", right: "16%" },
            reason4: { top: "66%", right: "83%" },
            reason5: { top: "66%", right: "16%" },
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
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                maxWidth: "160px",
                lineHeight: "1.4",
              }}
            >
              {showAnswersImage9 ? (
                <Typography
                  sx={{
                    color: "green",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    maxWidth: "160px",
                    lineHeight: "1.2",
                    direction: "rtl",
                  }}
                >
                  {correctAnswers9[key]}
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
          onClick={resetAllInputsImage9}
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
          onClick={toggleAllAnswersImage9}
        >
          الإصلاح
        </Button>
      </Box>
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
        نشاط3:أنظر الوثيقة التالية وأجب عن الأسئلة التالية:
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/assets/EighthCourse/tawazo3.png"
          alt="إنتاج الزيتون "
          style={{ width: "50%", height: "50%" }}
        />
      </div>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          marginTop: "30px",
          // Active la direction droite à gauche
        }}
      >
        {" "}
        سؤال عدد1 : في أي سنة كان إنتاج الزيتون في أعلى مستوياته؟
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}
        >
          <span>
            {showAnswers1 ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                {correctFillInTheBlanks.blank1}
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
              onClick={resetAllInputs1}
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
              onClick={toggleAllAnswers1}
            >
              {showAnswers1["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Typography>
      </div>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          marginTop: "30px",
          // Active la direction droite à gauche
        }}
      >
        سؤال عدد 2 : كيف تطور إنتاج القوارص عبر السنوات من 1999 إلى 2002؟
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}
        >
          <span>
            {showAnswers2 ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                {correctFillInTheBlanks.blank2}
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
              onClick={resetAllInputs2}
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
              onClick={toggleAllAnswers2}
            >
              {showAnswers1["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Typography>
      </div>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          marginTop: "30px",
          // Active la direction droite à gauche
        }}
      >
        {" "}
        سؤال عدد 3: كيف تطور إنتاج التمور بين 1999 و2002؟
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}
        >
          <span>
            {showAnswers3 ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                {correctFillInTheBlanks.blank3}
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
              onClick={resetAllInputs3}
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
              onClick={toggleAllAnswers3}
            >
              {showAnswers1["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Typography>
      </div>
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
        النشاط عدد4 :
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/assets/EighthCourse/khodhar.png"
          alt="إنتاج الخضروات  "
          style={{ width: "50%", height: "50%" }}
        />
      </div>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          marginRight: "30px",
          marginTop: "40px",
          // Active la direction droite à gauche
        }}
      >
        اعتمدا على الوثيقة أعلاه:{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          // Active la direction droite à gauche
        }}
      >
        {" "}
        سؤال : قم بتحليل إنتاج الخضروات، ثم قدم ملاحظاتك حول تطور وكمياتها عبر
        السنوات؟
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}
        >
          <span>
            {showAnswers4 ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                {correctFillInTheBlanks.blank4}
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
              onClick={resetAllInputs4}
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
              onClick={toggleAllAnswers4}
            >
              {showAnswers1["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Typography>
      </div>
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
        النشاط عدد 6:{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          marginRight: "30px",
          // Active la direction droite à gauche
        }}
      >
        اعتمد على الوثيقة عدد 5 ص151 :{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#9AC8EB",
          marginRight: "30px",
          // Active la direction droite à gauche
        }}
      >
        أكمل الرسم التالي بالاستنتاج المناسب، مستخدما شكل السهم المناسب :{" "}
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
          src="/assets/EighthCourse/dessin.jpg"
          alt="   الاستنتاج  "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers6).map((key, index) => {
          const positions = {
            reason1: { top: "35%", right: "83%" },
            reason2: { top: "59%", right: "83%" },
            reason3: { top: "85%", right: "83%" },
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
                maxWidth: "160px",
                lineHeight: "1.4",
              }}
            >
              {showAnswersImage6 ? (
                <Typography
                  sx={{
                    color: "green",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textAlign: "center",
                    maxWidth: "160px",
                    lineHeight: "1.2",
                    direction: "rtl",
                  }}
                >
                  {correctAnswers6[key]}
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
          onClick={resetAllInputsImage6}
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
          onClick={toggleAllAnswersImage6}
        >
          الإصلاح
        </Button>
      </Box>
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
        النشاط عدد 6:{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          marginRight: "30px",
          marginTop: "40px",
          // Active la direction droite à gauche
        }}
      >
        مستندا على الوثيقة 6 ص 151 من الكتاب المدرسي أجب عن السؤال التالي :{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          // Active la direction droite à gauche
        }}
      >
        سؤال عدد 1 : كيف تطور إنتاج السمك من سنة 1993 إلى سنة 2003 و ما هي
        العوامل المفسرة لهذا ؟
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}
        >
          <span>
            {showAnswers4 ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                {correctFillInTheBlanks.blank5}
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
              onClick={resetAllInputs4}
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
              onClick={toggleAllAnswers4}
            >
              {showAnswers1["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Typography>
      </div>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          // Active la direction droite à gauche
        }}
      >
        سؤال عدد 2 :ما هي العوامل المفسرة لهذا: أكمل الرسم بما يناسب:
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
          src="/assets/EighthCourse/fish.jpg"
          alt="عوامل في زيادة إنتاج السمك في تونس، "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers5).map((key, index) => {
          const positions = {
            reason1: { top: "18%", right: "42%" },
            reason2: { top: "52%", right: "12%" },
            reason3: { top: "80%", right: "26%" },
            reason4: { top: "80%", right: "70%" },
            reason5: { top: "45%", right: "81%" },
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
                maxWidth: "160px",
                lineHeight: "1.4",
              }}
            >
              {showAnswersImage4 ? (
                <Typography
                  sx={{
                    color: "green",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textAlign: "center",
                    maxWidth: "160px",
                    lineHeight: "1.2",
                    direction: "rtl",
                  }}
                >
                  {correctAnswers5[key]}
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
          onClick={resetAllInputsImage4}
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
          onClick={toggleAllAnswersImage4}
        >
          الإصلاح
        </Button>
      </Box>
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
        النشاط عدد 6:{" "}
      </Typography>

      <FishingPortsMap />
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          marginTop: "30px",

          // Active la direction droite à gauche
        }}
      >
        سؤال عدد 1 : أكمل الفقرة التالية بما يناسب:{" "}
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}
        >
          إنتاج الصيد البحري في تونس
          <span>
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
          متفاوت بين مختلف الموانئ، حيث تسجل بعض الموانئ إنتاجًا
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
          مثل{" "}
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
          </span>{" "}
          ، في حين أن موانئ أخرى مثل{" "}
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
          تسجل كميات{" "}
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
          direction: "rtl",
        }}
      >
        الاستنتاج :{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          marginTop: "30px",

          // Active la direction droite à gauche
        }}
      >
        أكمل الرسم بما يناسب : الأسماك - النخيل - السواحل - منطقة الوطن
        القبلي-إنتاج اللحوم الحمراء، مثل لحوم الأغنام- منطقة الوطن القبلي -
        الطماطم ,الفلفل,بطاطا -إنتاج اللحوم البيضاء، وخاصة الدواجن-الحبوب
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
          src="/assets/EighthCourse/conclusion.jpg"
          alt="   الاستنتاج  "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers7).map((key, index) => {
          const positions = {
            reason1: { top: "31%", right: "39%" },
            reason2: { top: "31%", right: "55%" },
            reason3: { top: "31%", right: "87%" },
            reason4: { top: "63%", right: "9%" },
            reason5: { top: "69%", right: "25%" },
            reason6: { top: "85%", right: "25%" },
            reason7: { top: "60%", right: "71%" },
            reason8: { top: "82%", right: "71%" },
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
                fontSize: "15px",
                fontWeight: "bold",
                textAlign: "center",
                maxWidth: "90px",
                lineHeight: "1.4",
              }}
            >
              {showAnswersImage7 ? (
                <Typography
                  sx={{
                    color: "green",
                    fontSize: "15px",
                    fontWeight: "bold",
                    textAlign: "center",
                    maxWidth: "90px",
                    lineHeight: "1.2",
                    direction: "rtl",
                  }}
                >
                  {correctAnswers7[key]}
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
          onClick={resetAllInputsImage7}
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
          onClick={toggleAllAnswersImage7}
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
        التدريب :{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          marginTop: "30px",

          // Active la direction droite à gauche
        }}
      >
        {" "}
        سؤال : رتب موانئ الصيد البحري في تونس حسب أهميتها من 1 إلى 4:
      </Typography>
      <PortRankingExercise />
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
        التقييم :{" "}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          direction: "rtl",
          color: "#80586D",
          marginRight: "30px",
          marginTop: "30px",

          // Active la direction droite à gauche
        }}
      >
        سؤال: ضع علامة أمام الإجابة الصحيحة :
      </Typography>
      <QuizComponent/>
    </Container>
  );
};

export default Course;
