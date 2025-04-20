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
  const [showAnswers1, setShowAnswers1] = useState(false);
  const [showAnswers2, setShowAnswers2] = useState(false);
  const [showAnswers3, setShowAnswers3] = useState(false);
  const [showAnswers4, setShowAnswers4] = useState(false);
  const [showAnswers5, setShowAnswers5] = useState(false);
  const [showAnswers6, setShowAnswers6] = useState(false);
  const [showAnswers7, setShowAnswers7] = useState(false);
  const [showAnswers8, setShowAnswers8] = useState(false);
  const [showAnswers12, setShowAnswers12] = useState(false);







  const [showAnswersImage1, setShowAnswersImage1] = useState(false);
    const [showAnswersImage2, setShowAnswersImage2] = useState(false);
    
  const [showArrows, setShowArrows] = useState(false);
    const [showArrows1, setShowArrows1] = useState(false);

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
    " موقع حصين محمى احتياطيا من عدو    ",
    "  موقع به عيون ماء حار الاستحمام والتداوي ",
    "  موضع به مصدر مائي",
    " موضع خليجي لإقامة موانئ ",
  ];
  const reasons1 = [
    "  غالبا ما يتواجد بالقرب من المطار أو الميناء   ",
    "  يتميز بمساكنه المتواضعة و المتلاصقة",
    "  تتركز به المؤسسات و المحلات التي تقدم الخدمات مثل البنوك و المتاجر ",
  ];
  const motivations1 = ["مركز المدينة ", , "الحي الصناعي ", "  الحي الشعبي "];
  const motivations = ["قربص ", , "القيروان ", " حلق الواد ", "مصر "];

  // Configuration des flèches inclinées
  const arrowsConfig = [
    { angle: 160, startY: "20%", length: 260 },
    { angle: 195, startY: "30%", length: 260 },
    { angle: 160, startY: "67%", length: 260 },
    { angle: 195, startY: "77%", length: 260 },
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
    reason1: "باب الديوان",
    reason2: " باب القصبة ",
    reason3: "باب الجبلي ",
    reason4: "  باب الغربي   ",
    reason5: "باب الشرقي",
    reason6: "باب الجلولي",
    reason7: "مدخل القصر ",
    reason8: "مدخل برج النار ",
  };
  const correctAnswers2 = {
    reason1: "المعالم التاريخية: القصبة و المدرسة العباسية",
    reason2: " معالم سكنية: المنازل ",
    reason3: " معالم اقتصادية: الأسواق",
    reason4: " معالم دينية : جوامع و زوايا    ",
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
    const toggleAllAnswers6 = () => {
      setShowAnswers6((prev) => !prev);
    };
        const toggleAllAnswers12 = () => {
          setShowAnswers12((prev) => !prev);
        };
    const toggleAllAnswersImage1 = () => {
      setShowAnswersImage1((prev) => !prev);
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
  const resetAllInputs2 = () => {
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
      setShowAnswers2(false);
    };
      const resetAllInputs12 = () => {
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
        setShowAnswers12(false);
      };
  const resetAllInputs3 = () => {
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
        setShowAnswers3(false);
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
const resetAllInputs5 = () => {
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
                setShowAnswers5(false);
              };
const resetAllInputs6 = () => {
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
                      setShowAnswers6(false);
                    };
const resetAllInputs7 = () => {
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
                      setShowAnswers7(false);
                    };
                    const resetAllInputs8 = () => {
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
                      setShowAnswers8(false);
                    };
    const resetAllInputs10 = () => {
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
      setShowAnswers1(false);
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
  const [resetInputs2, setResetInputs2] = useState(false);
    const [resetInputs3, setResetInputs3] = useState(false);
    const [resetInputs4, setResetInputs4] = useState(false);
        const [resetInputs5, setResetInputs5] = useState(false);
        const [resetInputs7, setResetInputs7] = useState(false);
        const [resetInputs8, setResetInputs8] = useState(false);



  const toggleAllAnswers2 = () => {
    setShowAnswers2(!showAnswers2);
    setResetInputs2(false);
  };
    const toggleAllAnswers4 = () => {
      setShowAnswers4(!showAnswers4);
      setResetInputs4(false);
    };
        const toggleAllAnswers5 = () => {
          setShowAnswers5(!showAnswers5);
          setResetInputs5(false);
        };
    const toggleAllAnswers3 = () => {
      setShowAnswers3(!showAnswers3);
      setResetInputs3(false);
    };
        const toggleAllAnswers7 = () => {
          setShowAnswers7(!showAnswers7);
          setResetInputs7(false);
        };
            const toggleAllAnswers8 = () => {
              setShowAnswers8(!showAnswers8);
              setResetInputs8(false);
            };
    const toggleAllAnswers10 = () => {
      setShowAnswers1(!showAnswers1);
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
      "يمثل هذا الرسم تصميما للمدينة حيث يبين كيفية توزع:\n- المباني\n- الطرقات\n- المرافق العامة كالمستشفى و السوق و المتحف",
    blank12: "يقع منزل سامي جنوب شرق الحديقة العمومية ",
    blank13:
      "يبين الرسم وجود شارعان رئيسيان متوازيان متقابلان : شارع فرحات حشاد وأبن خلدون تنطلق منها أنهج فرعية مثل نهج الإستقلال و نهج  الاتحاد. ",
    blank14:
      " الوثيقة التي تستخدم لهذا الغرض هي مخطط التصميم العمراني أو الرسم التخطيطي للمدينة .",
    blank15:
      "الوثيقة التي تعتمد عليها السائح هي الخريطة السياحية أو دليل المدينة والتي تحتوي على معالم الهامة للمدينة مثل التسوق والمرافق العامة.",
    blank16: " يتميز تصميم مدينة صفاقس العتيقة بسور ضخم يحيط بها",
    blank17: " تظهر الأزقة و الأنهج والشوارع ضيقة ومتعرجة   ",
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
    blank1: "المساحات المبنية",
    blank2: " المجال الحضري ",
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
            الدرس الثاني : تصميم المدينة
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
        تعهد المكتسبات السابقة:{" "}
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
        {" "}
        1 ) اربط المدينة أو الدولة بسبب أختيار موقعها:
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
        {" "}
        قرر سامي دعوة صديقه احمد إلى منزله الجديد لأول مرة قصد المراجعة سويا
        لامتحان الغد في مادة الجغرافيا فأرسل له هذا الرسم ليسهل عليه الوصول إلى
        المنزل بدون عناء و سهولة
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
          src="/assets/seventhcourse/sfax.png"
          alt=" تصميم المدينة "
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
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
        سؤال : أذكر ماذا يمثل الرسم الذي أعده ورسمه سامي ؟{" "}
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{
            textAlign: "right",
            marginTop: "10px",
            fontSize: "18px",
            direction: "rtl",
          }}
        >
          <span>
            {showAnswers1 ? (
              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                  whiteSpace: "pre-line",
                }}
              >
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
              justifyContent: "center",
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
              onClick={resetAllInputs10}
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
              onClick={toggleAllAnswers10}
            >
              {showAnswers1["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
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
        التعلم المنهجي :{" "}
      </Typography>
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
        {" "}
        سؤال عدد 1 : أحدد موقع منزل سامي بالنسبة إلى الحديقة العمومية :
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{
            textAlign: "right",
            marginTop: "10px",
            fontSize: "18px",
            direction: "rtl",
          }}
        >
          <span>
            {showAnswers12 ? (
              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                  whiteSpace: "pre-line",
                }}
              >
                {correctFillInTheBlanks1.blank12}
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
              justifyContent: "center",
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
              onClick={resetAllInputs12}
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
              onClick={toggleAllAnswers12}
            >
              {showAnswers12["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Typography>
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
        {" "}
        سؤال عدد 2 : أحدد المسلك الأقصر الذي سيسلكه سامي للوصول ألى منزل أحمد
        بإستخدام الأسهم على الخريطة
      </Typography>
      <div className="MuiBox-root css-1c2mhw6">
        <Box
          sx={{
            textAlign: "right",
            marginTop: "10px",
            fontSize: "18px",
            direction: "rtl",
          }}
        >
          <span>
            {showAnswers2 ? (
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto",
                  textAlign: "center",
                }}
              >
                <img
                  src="/assets/seventhcourse/sami.png"
                  alt="تصميم المدينة"
                  style={{
                    maxWidth: "100%", // pour éviter le débordement
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            ) : (
              <div></div>
            )}
          </span>

          {/* Buttons for الاستنتاج Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
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
              {showAnswers2["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Box>
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
        سؤال عدد 3 : أبين كيفية انتظام وتقاطع الشوارع و الانهج:
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{
            textAlign: "right",
            marginTop: "10px",
            fontSize: "18px",
            direction: "rtl",
          }}
        >
          <span>
            {showAnswers3 ? (
              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                  whiteSpace: "pre-line",
                }}
              >
                {correctFillInTheBlanks1.blank13}
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
              justifyContent: "center",
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
              {showAnswers3["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Typography>
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
        سؤال عدد 4 : ما هي الوثيقة التي يحتاجها لأعداد أسس البنيات التي سيقيمها
        :
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{
            textAlign: "right",
            marginTop: "10px",
            fontSize: "18px",
            direction: "rtl",
          }}
        >
          <span>
            {showAnswers4 ? (
              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                  whiteSpace: "pre-line",
                }}
              >
                {correctFillInTheBlanks1.blank14}
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
              justifyContent: "center",
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
              {showAnswers4["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Typography>
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
        سؤال عدد 5 : ما هي الوثيقة التي تعتمد عليها السائح التعرف على مواقع
        المدينة :
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{
            textAlign: "right",
            marginTop: "10px",
            fontSize: "18px",
            direction: "rtl",
          }}
        >
          <span>
            {showAnswers5 ? (
              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                  whiteSpace: "pre-line",
                }}
              >
                {correctFillInTheBlanks1.blank15}
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
              justifyContent: "center",
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
              onClick={resetAllInputs5}
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
              onClick={toggleAllAnswers5}
            >
              {showAnswers5["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
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
        الاستنتاج:
      </Typography>
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
        أكمل الفقرة بالكلمات المناسبة: المجال الحضري - المساحات المبنية
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
        مفهوم التصميم: يمثل تصميم المدينة:تخطيط
        <span>
          {showAnswers6 ? (
            <span
              style={{
                color: "green",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
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
        وشبكة الطرقات التي تتخللها حيث تمثل طريقة لتنظيم{" "}
        <span>
          {showAnswers6 ? (
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
        وتهيئته{" "}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        <Button
          sx={{
            fontSize: "18px",
            padding: "12px 24px",
            backgroundColor: "#60B463",
            marginLeft: "10px",
          }}
          variant="contained"
          onClick={toggleAllAnswers6}
        >
          {showAnswers6["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
        </Button>
        <Button
          sx={{
            fontSize: "17px",
            padding: "12px 24px",
            backgroundColor: "#F6D339",
          }}
          variant="contained"
          onClick={resetAllInputs6}
        >
          إعادة المحاولة
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
          direction: "rtl",
        }}
      >
        الوضعية الاستكشافية عدد 2:
      </Typography>
      <DesignLayout />
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
        رصد التصورات و الفرضيات{" "}
      </Typography>
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
        {" "}
        سؤال عدد 1 :أتأمل الرسم التالي و أكمل تعمير الجدول بما يناسب: :
      </Typography>
      <CityDesignTable />
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
          marginTop: "30px",

          textAlign: "right",
          fontWeight: "bold",
          color: "#9AC8EB",
          marginRight: "30px",
          direction: "rtl", // Active la direction droite à gauche
        }}
      >
        أتأمل تصميم مدينة صفاقس العتيقة
      </Typography>
      <SfaxMap />
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
        {" "}
        سؤال عدد 1 : ما الذي يميز تصميم مدينة صفاقس العتيقة:
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{
            textAlign: "right",
            marginTop: "10px",
            fontSize: "18px",
            direction: "rtl",
          }}
        >
          <span>
            {showAnswers7 ? (
              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                  whiteSpace: "pre-line",
                }}
              >
                {correctFillInTheBlanks1.blank16}
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
              justifyContent: "center",
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
              onClick={resetAllInputs7}
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
              onClick={toggleAllAnswers7}
            >
              {showAnswers7["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Typography>
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
        سؤال عدد 2 : كيف تبدو الشوارع و الانهج في المدينة العتيقة ؟
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{
            textAlign: "right",
            marginTop: "10px",
            fontSize: "18px",
            direction: "rtl",
          }}
        >
          <span>
            {showAnswers8 ? (
              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                  whiteSpace: "pre-line",
                }}
              >
                {correctFillInTheBlanks1.blank17}
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
              justifyContent: "center",
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
              onClick={resetAllInputs8}
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
              onClick={toggleAllAnswers8}
            >
              {showAnswers8["conclusion"] ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Typography>
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
        سؤال عدد 3 :ما هي المداخل التي توجد في سور المدينة العتيقة؟ اذكرها :
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
          src="/assets/seventhcourse/port.jpg"
          alt=" أبواب"
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers1).map((key, index) => {
          const positions = {
            reason1: { top: "72%", right: "9%" },
            reason2: { top: "72%", right: "21%" },
            reason3: { top: "72%", right: "32%" },

            reason4: { top: "72%", right: "44%" },
            reason5: { top: "72%", right: "56%" },
            reason6: { top: "72%", right: "68%" },
            reason7: { top: "72%", right: "80%" },

            reason8: { top: "72%", right: "92%" },
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
        سؤال عدد 4 : ما هي أبرز المعالم الموجودة في مدينة صفاقس العتيقة ؟
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
          marginTop: "25px",
        }}
      >
        <img
          src="/assets/seventhcourse/ma3alem.jpg"
          alt=" المعالم "
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers2).map((key, index) => {
          const positions = {
            reason1: { top: "65%", right: "16%" },
            reason2: { top: "65%", right: "39%" },
            reason3: { top: "65%", right: "60%" },
            reason4: { top: "65%", right: "84%" },
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
        الاستنتاج:
      </Typography>
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
        {" "}
        أكمل تعمير الفقرة التالية بالكلمات المناسبة :حصن المدينة- المعالم
        الأثرية-أهم المدن العربية المسورة
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
        المدينة العتيقة بصفاقس من{" "}
        <span>
          {showAnswers ? (
            <span
              style={{
                color: "green",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              {correctFillInTheBlanks4.blank1}
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
        حيث يقف سورها مكتملا من جهاته الأربع باعتباره
        <span>
          {showAnswers ? (
            <span style={{ color: "green", fontWeight: "bold" }}>
              {correctFillInTheBlanks4.blank2}
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
        و شاهدا على مقاومة للاستعمار و تحتوي المدينة العتيقة على العديد{" "}
        <span>
          {showAnswers ? (
            <span style={{ color: "green", fontWeight: "bold" }}>
              {correctFillInTheBlanks4.blank3}
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
        و منها نذكر :سور المدينة ,جامع الكبير,مداخل المدينة,المدرسة العباسية ….
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginTop: "16px",
        }}
      >
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
        مرحلة التقييم :
      </Typography>
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
        {" "}
        أربط كل عنصر من المجال العمراني بالإفادة المناسبة:
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
              {motivations1.map((motivation, index) => (
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
              {reasons1.map((reason, index) => (
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
        </div>{" "}
      </div>
    </Container>
  );
};

export default Course;
