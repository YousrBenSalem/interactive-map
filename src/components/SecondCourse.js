import React, { useEffect, useState } from "react";

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

const MapComponent1 = () => {
  useState(() => {
    // Ajout dynamique des scripts
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    // Chargement des dépendances
    const mapDataScript = loadScript("/mapdata.js");
    const worldMapScript = loadScript("/countrymap.js");

    // Nettoyage
    return () => {
      document.body.removeChild(mapDataScript);
      document.body.removeChild(worldMapScript);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "1200px", position: "relative" }}>
      {/* Carte */}
      <center>
        <h1>الكثافات السكانية و المدن بالبلاد التونسية</h1>
      </center>
      <div id="map"></div>

      {/* Image de la boussole en haut à gauche */}
      <img
        src="/direc.png" // Change le chemin selon l'emplacement de ton image
        alt="Boussole"
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          width: "200px",
          height: "200px",
          zIndex: 1000, // Pour que l'image soit au-dessus de la carte
        }}
      />
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
    reason1: "أسباب اقتصادية",
    reason2: "أسباب تاريخية ",
    reason3: " أسباب طبيعية",
    reason4: " كثرة فرص العمل في المناطق الساحلية بسبب تمركز الصناعات فيها ",
    reason5:
      "  جُل الحضارات التي عرفتها البلاد التونسية هي حضارات بحرية ركزت جهودها التنموية على السواحل",
    reason6:
      "قرب المناطق الساحلية من البحر يجعل المناخ معتدلا في الصيف والشتاء ",
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
  const correctAnswers = {
    reason1: "مواد فلاحية ",
    reason2: "مواد صناعية ",
    reason3: "مواد منجمية",
    reason4: "مواد طاقية ",
    reason5: "الجزائر و ليبيا",
    reason6: "المغرب الأقصى و تونس",
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

  const [fillInTheBlanks1, setFillInTheBlanks1] = useState({
    blank11: "",
    blank21: "",
    blank31: "",
    blank32: "",
    blank33: "",
    blank34: "",
  });

  const correctFillInTheBlanks1 = {
    blank11: "تونس",
    blank21: "نابل",
    blank31: "سوسة",
    blank32: "بنزرت",
    blank33: "المنستير",
    blank34: "صفاقس",
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
    blank111: "متفاوت",
    blank211: "الساحلية",
    blank311: "العاصمة",
    blank321: "الداخلية",
    blank331: "متنوعة",
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
            الدرس الثاني : التوزع الجغرافي للسكان و الادفاق الهجرية في البلاد
            التونسية{" "}
          </h2>
        </header>
      }
      <br></br>

      {/* First Instruction (Before Image) */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mb: 2,
          marginRight: "30px",
        }}
      >
        : أكمل تعمير الرسم التالي بما يتناسب مع المطلوب
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

      <br></br>
      <br></br>

      {/* Second Instruction (After Image) */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
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
        :دخل سامي إلى غرفة الجلوس فلفتت انتباهه مجلة سياحية موضوعة على الطاولة.
        بدافع الفضول، فتحها وبدأ في تصفحها، ليجد صورًا مختلفة من أنحاء البلاد
        التونسية أثناء استعراضه للصور، أثارت انتباهه المقارنة بين مدينتين
        يعرفهما جيدًا: تونس العاصمة وزغوان، مسقط رأسه .لاحظ سامي أن هناك تباينًا
        واضحًا بين المدينتين، سواء من حيث المشاهد الطبيعية أو نمط العمران أو
        النشاط الاقتصادي
      </Typography>

      <br></br>

      {/* Image with Overlay */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "80%",
          marginLeft: "auto",
        }}
      >
        <img
          src="/assets/Secondcourse/modon_blank.jpeg"
          alt="العجز الغذائي بالمغرب العربي"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

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
        حسب رأيكم، ما هي الفروقات التي اكتشفها سامي عند مقارنة صور مدينة زغوان
        بصور مدينة تونس العاصمة أو مدينة كبيرة أخرى كسوسة ؟
      </Typography>

      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          color: "red",
          marginRight: "30px",
        }}
      >
        : التعلم المنهجي
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
        : نشاط 1 : أتأمل الخريطة التفاعلية التالية والعنوان والمفتاح وأبدي
        ملاحظاتي
      </Typography>

      <br></br>

      {/* Second Instruction (After Image) */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
        }}
      >
        :الاستكشاف
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
        أتأمل الخريطة التفاعلية التالية والعنوان والمفتاح وأبدي ملاحظاتي:
      </Typography>

      {/*<Box sx={{ display: "flex", justifyContent: "center", mt: 3,marginBottom:"20px" }}>
  <Box sx={{ width: "90%", height: "60%", border: "2px solid #333", borderRadius: "8px", overflow: "hidden" }}>
    <MapComponent />
  </Box>
	  </Box>*/}

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
        >
          <img
            src="/assets/Secondcourse/image13.jpg"
            alt="Description 2"
            style={{
              maxWidth: "45%",
              height: "auto",
            }}
          />
          <img
            src="/assets/Secondcourse/image12.jpg"
            alt="Description 1"
            style={{
              maxWidth: "45%",
              height: "auto",
            }}
          />
        </div>
      </div>

      <div></div>

      <Typography
        variant="h5"
        sx={{
          color: "black",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "right",
        }}
      >
        أسمي المدن التي تشهد ارتفاعا كبيرا في عدد السكان
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
                {correctFillInTheBlanks1.blank21}
              </span>
            ) : (
              <TextField
                variant="standard"
                placeholder="....................................."
                value={fillInTheBlanks.blank21}
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
                {correctFillInTheBlanks1.blank31}
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
          <br />
          <span>
            {showAnswers ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                {correctFillInTheBlanks1.blank32}
              </span>
            ) : (
              <TextField
                variant="standard"
                placeholder="....................................."
                value={fillInTheBlanks1.blank32}
                onChange={(e) => handleFillChange1(e, "blank31")}
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
                {correctFillInTheBlanks1.blank33}
              </span>
            ) : (
              <TextField
                variant="standard"
                placeholder="....................................."
                value={fillInTheBlanks1.blank33}
                onChange={(e) => handleFillChange1(e, "blank31")}
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
                {correctFillInTheBlanks1.blank34}
              </span>
            ) : (
              <TextField
                variant="standard"
                placeholder="....................................."
                value={fillInTheBlanks1.blank34}
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
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight: "30px",
        }}
      >
        :نشاط 2<br></br> أ/ أكمل بما يناسب مستأنسا بالكلمات المقترحة أسفله
        والخريطة التفاعلية المعروضة سابقا
        <br></br>متنوعة /الساحلية / متفاوت / الداخلية/ العاصمة/<br></br>
      </Typography>

      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}
        >
          يتوزع السكان جغرافيا في البلاد التونسية بشكل{" "}
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
          حيث ترتفع الكثافة السكانية بالمناطق{" "}
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
          وخاصة بتونس{" "}
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
          في حين تنخفض بالمناطق{" "}
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
          ويعود ذلك لأسباب{" "}
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
      {/* Title */}
      <Typography variant="h4" gutterBottom textAlign="center"></Typography>

      {/* First Instruction (Before Image) */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mb: 2,
          marginRight: "30px",
        }}
      >
        أشاهد الفيديو التالي وأستخرج الأسباب المفسرة لتفاوت توزع السكان بالبلاد
        التونسية ثم أصنفها عن طريق تعمير الخارطة الذهنية التالية
        {/*   <a href="https://www.canva.com/design/DAGf820E97w/r1y08Xm23pwf0jd34pF0LQ/edit">
          {" "}
          أنقر هنا{" "}
        </a> */}
        <div style={{ marginTop: "20px" }}>
          <video controls width="100%" height="500px">
            <source src="/assets/Secondcourse/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
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
          src="/assets/Secondcourse/kharita_dhehneya_blank.png"
          alt="العجز الغذائي بالمغرب العربي"
          style={{ width: "100%", height: "auto" }}
        />

        {Object.keys(correctAnswers1).map((key, index) => {
          const positions = {
            reason1: { top: "32.9%", right: "21%" },
            reason2: { top: "32%", right: "65.8%" },
            reason3: { top: "65%", right: "42%" },
            reason4: { top: "10%", right: "15%" },
            reason5: { top: "21%", right: "85%" },
            reason6: { top: "90%", right: "38%" },
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

      {/* <Typography
        variant="h5"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginRight:"32px"
        }}
      >
        تأمل عنوان الخريطة ومفتاحها. ماذا تلاحظ ؟
      </Typography>
	  
						  <div>
			  	 		    <img src="/assets/Secondcourse/image.png" style={{ width: "30%", height: "auto" }} />
				  	 		    <img src="/assets/Secondcourse/image1.png" style={{ width: "30%", height: "auto" }}  />
				  	 		    <img src="/assets/Secondcourse/image2.png" style={{ width: "30%", height: "auto" }}   />
								</div> */}

      <Typography
        variant="h6"
        sx={{
          textAlign: "right",
          fontWeight: "bold",
          mt: 3,
          marginTop: "20px",
          marginBottom: "20px",

          marginRight: "30px",
        }}
      >
        <span style={{ color: "red" }}>الاستنتاج :</span>أكمل الخارطة الذهنية
        التالية بالمعلومات المناسبة انطلاقا مما تعرفت عليه أثناء الدرس
      </Typography>
      <Typography>
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
            src="/assets/Secondcourse/kathafa_blank.jpg"
            alt="    الكثافات السكانية "
            style={{ width: "100%", height: "auto" }}
          />

          {Object.keys(correctAnswers2).map((key, index) => {
            const positions = {
              reason1: { top: "35%", right: "23%" },
              reason2: { top: "35%", right: "63%" },
              reason3: { top: "50%", right: "44%" },
              reason4: { top: "49%", right: "83%" },
              reason5: { top: "78%", right: "27%" },
              reason6: { top: "78%", right: "47%" },
              reason7: { top: "78%", right: "66%" },
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
                      fontSize: "13px",
                      fontWeight: "bold",
                      textAlign: "center",
                      maxWidth: "120px",
                      lineHeight: "1.4",
                    }}
                  >
                    {correctAnswers2[key]}
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
        التدريب <br></br> أكمل بما يناسب<br></br>
      </Typography>
      <div class="MuiBox-root css-1c2mhw6">
        <Typography
          sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}
        >
          التوزع الجغرافي في البلاد التونسية{" "}
          <span>
            {showAnswers ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                {correctFillInTheBlanks3.blank111}
              </span>
            ) : (
              <TextField
                variant="standard"
                placeholder="....................................."
                value={fillInTheBlanks.blank111}
                onChange={(e) => handleFillChange2(e, "blank111")}
                InputProps={{
                  disableUnderline: true, // Removes the underline
                }}
              />
            )}
          </span>{" "}
          حيث يتميز{" "}
          <span>
            {showAnswers ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                {correctFillInTheBlanks3.blank211}
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
          بكثافة سكنية مرتفعة في حين تكون هذه الكثافة{" "}
          <span>
            {showAnswers ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                {correctFillInTheBlanks3.blank311}
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
          في الجنوب الغربي خاصة {/* Buttons for الاستنتاج Section */}
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
          mt: 3,
          marginRight: "30px",
        }}
      >
        <span style={{ color: "red", fontWeight: "bold" }}>: التقييم</span>
        <br></br> خلال عطلة نهاية الأسبوع، قمتَ مع عائلتك برحلة من تونس العاصمة
        إلى صفاقس. وأثناء الطريق، لاحظتَ تفاوت كثافة السكان بين المناطق، حيث
        كانت بعض المدن مزدحمة وحيوية، خاصة في إقليم تونس، بينما بدت مناطق أخرى
        أقل سكانًا
        <br /> :عند وصولكم إلى صفاقس، سألتك أختك الصغرى بفضول
        <br />
        <ol
          style={{
            direction: "rtl",
            listStylePosition: "inside",
            paddingRight: "10px",
          }}
        >
          <li style={{ textAlign: "right" }}>
            هل توزيع السكان في تونس متساوٍ في جميع المناطق؟
          </li>
          <li style={{ textAlign: "right" }}>
            هل إقليم تونس هو الأكثر كثافة بالسكان؟
          </li>
          <li style={{ textAlign: "right" }}>
            هل السبب الرئيسي لتركّز السكان في المناطق الساحلية هو توفر مواد
            البناء؟
          </li>
        </ol>
        :لمساعدة أختك في فهم التوزيع السكاني في تونس أجب بـ"صحيح" أو "خطأ" ثم
        صحّح الخطأ إن
        <br />
        <span style={{ color: "blue", fontWeight: "bold", paddingTop: "20px" }}>
          :الإصلاح{" "}
        </span>
      </Typography>
      <div
        style={{
          padding: "12px",
          width: "90%",
          direction: "rtl",
          marginRight: "20px",
          marginLeft: "70px",
        }}
      >
        {questions.map((q, index) => (
          <Typography
            key={index}
            style={{
              marginBottom: "16px",
              padding: "16px",
              textAlign: "right",
            }}
          >
            <div>
              <div
                container
                spacing={2}
                direction="column"
                alignItems="flex-end"
              >
                <div item xs={12} style={{ width: "100%" }}>
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: "18px",
                      textAlign: "right",
                    }}
                  >
                    {q.text}
                  </Typography>
                </div>

                {showAnswers[q.name] ? (
                  <Grid item xs={12} style={{ width: "100%" }}>
                    <div
                      style={{
                        fontSize: "16px",
                        color: "black",
                        padding: "12px",
                        marginBottom: "10px",
                        backgroundColor: "#f4f4f4",
                        borderRadius: "5px",
                      }}
                    >
                      {q.answer}
                    </div>
                  </Grid>
                ) : (
                  <TextField
                    fullWidth
                    variant="outlined"
                    name={q.name}
                    value={studentAnswers[q.name] || ""}
                    onChange={handleChange}
                    placeholder="اكتب إجابتك هنا..."
                    InputProps={{
                      style: { textAlign: "right", fontSize: "18px" },
                    }}
                  />
                )}

                <Grid item xs={12} style={{ width: "100%", textAlign: "left" }}>
                  <Button
                    sx={{
                      fontSize: "18px",
                      padding: "12px 24px",
                      backgroundColor: "#60B463",
                      marginLeft: "10px",
                    }}
                    variant="contained"
                    onClick={() => toggleAnswer(q.name)} // Afficher ou masquer les réponses lorsque vous cliquez sur "الإصلاح"
                  >
                    {showAnswers[q.name] ? "إخفاء الإصلاح" : "الإصلاح"}
                  </Button>
                </Grid>

                {inputVisible[q.name] && (
                  <Grid item xs={12} style={{ width: "100%" }}>
                    <TextField
                      label="أدخل إجابتك"
                      variant="outlined"
                      fullWidth
                      sx={{
                        marginTop: "16px",
                      }}
                    />
                  </Grid>
                )}
              </div>
            </div>
          </Typography>
        ))}
        {/*   <Card
          style={{ marginBottom: "16px", padding: "16px", textAlign: "center" }}
        >
          <CardContent>
            <Typography
              sx={{
                color: "black",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "right",
              }}
            >
              الاستنتاج: أن توزع السكان جغرافيا بالبلاد التونسية متفاوت، اذ
              تشهد:
            </Typography>

            <Typography
              sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}
            >
              -مناطق ذات{" "}
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
              ( أكثر من 500 س/ كم المربع) وتتر كز هذه المناطق في تونس الكبرى
              لتوفر مواطن الشغل. <br />
              -مناطق ذات{" "}
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
              ( بين 100 و 500 س/كم مربع) تتركز على السواحل بفضل امتداد الهول و
              توفر الموانئ والخدمات و دور البحر ي تخفيف حدّة المناخ. .<br />
              -مناطق ذات{" "}
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
              ( بين 40 و 100س/كم مربع) وهي المناطق الداخلية. يعود هذا الضعف الى
              جفاف المناخ وقلّة الأمطار لممارسة الأنشطة الفلاحية ونقص الخدمات
              ومواطن الشغل.{" "}
            </Typography>

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
          </CardContent>
        </Card>  */}

        {/*    <Card
          style={{ marginBottom: "16px", padding: "16px", textAlign: "center" }}
        >
          <CardContent>
            <Typography
              sx={{
                color: "black",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "right",
              }}
            >
              تمرين: شاركت في مسابقة " مرطون الجغرافيا" الذي نُظّم في مدينة
              صفاقس. أثناء مرور سيارة الأسرة انطلاقا من تونس العاصمة وصولا الى
              صفاقس لاحظتم تفاوتا في الكثافة السكانية للمدن وكثرة الزحام و
              الحركية في إقليم تونس بالذات. فطرحت عليك أختك الصغرى عدّة أسئلة:
              أجب بصواب أو خطأ وأصلح الخطأ ان وجد
            </Typography>

            <Typography
              sx={{ textAlign: "right", marginTop: "10px", fontSize: "18px" }}
            >
              <div>
                التوزع السكاني بالبلاد التونسية متوازن
                <div>
                  {showAnswers ? (
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      {correctTrueFalseAnswers.q1}
                    </span>
                  ) : (
                    <TextField
                      variant="standard"
                      placeholder="صواب / خطأ"
                      value={trueFalseAnswers.q1}
                      onChange={(e) => handleTrueFalseChange(e, "q1")}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  )}
                </div>
              </div>
              <div>
                إقليم تونس هو الأكثر كثافة من ناحية السكان
                <div>
                  {showAnswers ? (
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      {correctTrueFalseAnswers.q2}
                    </span>
                  ) : (
                    <TextField
                      variant="standard"
                      placeholder="صواب / خطأ"
                      value={trueFalseAnswers.q2}
                      onChange={(e) => handleTrueFalseChange(e, "q2")}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  )}
                </div>
              </div>
              <div>
                من أبرز العوامل الطبيعية المفسرة لتركز السكان في المناطق
                الساحلية هو توفر مواد البناء
                <div>
                  {showAnswers ? (
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      {correctTrueFalseAnswers.q3}
                    </span>
                  ) : (
                    <TextField
                      variant="standard"
                      placeholder="صواب / خطأ"
                      value={trueFalseAnswers.q3}
                      onChange={(e) => handleTrueFalseChange(e, "q3")}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  )}
                </div>
              </div>
            </Typography>
          </CardContent>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            <Button
              onClick={resetAllInputs}
              variant="contained"
              style={{
                fontSize: "17px",
                backgroundColor: "#F6D339",
                color: "white",
                fontSize: "16px",
              }}
            >
              إعادة المحاولة
            </Button>
            <Button
              onClick={toggleAllAnswers}
              variant="contained"
              style={{
                fontSize: "17px",
                backgroundColor: "#60B463",
                color: "white",
                fontSize: "16px",
              }}
            >
              {showAnswers ? "إخفاء الإصلاح" : "الإصلاح"}
            </Button>
          </div>
        </Card>  */}
      </div>
    </Container>
  );
};

export default Course;
