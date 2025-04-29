import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import { LayoutDashboard, Book, Globe } from "lucide-react";
import { Card, CardContent } from "@mui/material";
import "@mui/material/styles/index.js";
import FirstCourse from "./FirstCourse.js";
import SecondCourse from "./SecondCourse.js";
import ThirdCourse from "./ThirdCourse.js";
import FourthCourse from "./FourthCourse.js";
import FifthCourse from "./FifthCourse.js";
import SixthCourse from "./SixthCourse.js";
import SeventhCourse from "./SeventhCourse.js";
import EighthCourse from "./EighthCourse.js";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LoadingScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#F0F0F0",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <DotLottieReact
        src="/assets/Loadingg.lottie"
        loop
        autoplay
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

const Sidebar = ({ hidden = false }) => {
  const [showCourses, setShowCourses] = useState(false);
  const [showCourses1, setShowCourses1] = useState(false);
  if (hidden) return null;

  return (
    <div
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#F0F0F0",
        position: "fixed",
        top: 0,
        right: 0,
        width: "260px",
        height: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
      }}
    >
      <img
        src="/assets/logo2.png"
        alt="Logo"
        style={{ width: "380px", marginTop: "-10px" }}
      />
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        {/* Dashboard Button */}
        <NavLink to="/" style={navLinkStyle} activeStyle={activeNavLinkStyle}>
          <LayoutDashboard /> <span>الصفحة الرئيسية</span>
        </NavLink>

        {/* Courses Button with Toggle List */}
        <div style={{ width: "100%" }}>
          <button
            onClick={() => setShowCourses1(!showCourses1)}
            style={{
              ...navLinkStyle,
              backgroundColor: "#dce3de",
              border: "1px solid #ccc",
              cursor: "pointer",
              display: "flex",
              justifyContent: "right",
              width: "100%",
            }}
          >
            <Book /> <span>دورات السنة الخامسة</span>
          </button>
          {/* Course List - Shows Only When Button is Clicked */}

          {showCourses1 && (
            <div style={dropdownStyle}>
              <NavLink
                to="/courses/4"
                style={courseLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                {" "}
                درس القارات و المحيطات و الوحدات التضارسية الكبرى
              </NavLink>
            </div>
          )}

          {showCourses1 && (
            <div style={dropdownStyle}>
              <NavLink
                to="/courses/7"
                style={courseLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                {" "}
                درس تصميم المدينة{" "}
              </NavLink>
            </div>
          )}
        </div>
        <div style={{ width: "100%" }}>
          <button
            onClick={() => setShowCourses(!showCourses)}
            style={{
              ...navLinkStyle,
              backgroundColor: "#dce3de",
              border: "1px solid #ccc",
              cursor: "pointer",
              display: "flex",
              justifyContent: "right",
              width: "100%",
            }}
          >
            <Book /> <span>دورات السنة السادسة</span>
          </button>
          {/* Course List - Shows Only When Button is Clicked */}
          {showCourses && (
            <div style={dropdownStyle}>
              <NavLink
                to="/courses/1"
                style={courseLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                درس خريطة الموارد الطاقية و المنجمية بالمغرب العربي
              </NavLink>
            </div>
          )}
          {showCourses && (
            <div style={dropdownStyle}>
              <NavLink
                to="/courses/2"
                style={courseLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                التوزع الجغرافي للسكان و الادفاق الهجرية في البلاد التونسية
              </NavLink>
            </div>
          )}
          {showCourses && (
            <div style={dropdownStyle}>
              <NavLink
                to="/courses/3"
                style={courseLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                التوزع الجغرافي للسكان و الادفاق الهجرية في البلاد التونسية (
                الجزء 2 )
              </NavLink>
            </div>
          )}

          {showCourses && (
            <div style={dropdownStyle}>
              <NavLink
                to="/courses/5"
                style={courseLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                {" "}
                درس خصائص المغرب العربي الطبيعية{" "}
              </NavLink>
            </div>
          )}
          {showCourses && (
            <div style={dropdownStyle}>
              <NavLink
                to="/courses/6"
                style={courseLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                {" "}
                درس المغرب العربي: الموقع والمساحة والتقسيم السياسي{" "}
              </NavLink>
            </div>
          )}

          {showCourses && (
            <div style={dropdownStyle}>
              <NavLink
                to="/courses/8"
                style={courseLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                درس الإنتاج الفلاحي في المجال التونسي و تطوره
              </NavLink>
            </div>
          )}
        </div>

        {/* Map Button */}
        <NavLink
          to="/map"
          style={navLinkStyle}
          activeStyle={activeNavLinkStyle}
        >
          <Globe /> <span>الخرائط</span>
        </NavLink>
      </nav>
    </div>
  );
};

/* Styling */
const navLinkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "right",
  gap: "10px",
  padding: "14px",
  borderRadius: "8px",
  textDecoration: "none",
  color: "black",
  backgroundColor: "#f0f0f0",
  border: "1px solid #ddd",
  width: "90%",
  transition: "0.3s",
};

const activeNavLinkStyle = {
  backgroundColor: "#ddd",
};

const dropdownStyle = {
  paddingRight: "20px",
  marginTop: "5px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

const courseLinkStyle = {
  textDecoration: "none",
  color: "black",
  padding: "8px",
  borderRadius: "5px",
  backgroundColor: "#e0e0e0",
  border: "1px solid #ccc",
  width: "100%",
  transition: "0.3s",
};

/* Page Components */


const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeYear, setActiveYear] = useState(null);
  const [voices, setVoices] = useState([]);

  // Initialiser la synthèse vocale
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2100);

    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    if ('speechSynthesis' in window) {
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      clearTimeout(timer);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  const toggleYear = (year) => {
    setActiveYear(activeYear === year ? null : year);
  };

  // Fonction pour lire le texte avec une voix d'enfant
  const speakWithChildVoice = (text) => {
    if (!('speechSynthesis' in window)) {
      alert("Votre navigateur ne supporte pas la synthèse vocale");
      return;
    }

    // Arrêter toute lecture en cours
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA'; // Arabe - Arabie Saoudite
    utterance.rate = 0.9; // Vitesse réduite
    utterance.pitch = 1.3; // Hauteur augmentée pour un effet enfantin

    // Trouver la voix la plus adaptée (féminine de préférence)
    const childVoice = voices.find(voice => 
      voice.lang.includes('ar') && voice.name.toLowerCase().includes('female')
    ) || voices.find(voice => voice.lang.includes('ar'));

    if (childVoice) {
      utterance.voice = childVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  // Composant Micro réutilisable
  const MicroButton = ({ text }) => (
    <button 
      onClick={(e) => {
        e.stopPropagation();
        speakWithChildVoice(text);
      }}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        margin: '0 8px',
        fontSize: '20px',
        color: '#3B82F6',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ':hover': {
          color: '#1D4ED8',
          transform: 'scale(1.1)'
        },
        transition: 'all 0.2s'
      }}
      aria-label="Lire le texte"
    >
      <span role="img" aria-label="Micro">🎤</span>
    </button>
  );

  return (
    <>
      {isLoading && <LoadingScreen />}

      {/* Image d'en-tête pleine largeur */}
      <div style={{ width: "100%", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <img
          src="/assets/titre.gif"
          alt="En-tête Géographie Interactive"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "700px",
            display: "block",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Contenu principal */}
      <div style={{
          background: "white",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
          transform: "rotate(-1deg)",
          textAlign: "center",
          fontFamily: "'Comic Sans MS', cursive",
          margin: "-11px 20px 0 20px",
          padding: "30px 20px",
          position: "relative",
          zIndex: 1,
          borderRadius: "15px",
        }}>
        <div style={{ 
          minHeight: "100vh",
          background: "linear-gradient(to bottom right, #EFF6FF, #ECFDF5)",
          padding: "24px" 
        }}>
          <div style={{ maxWidth: "56rem", margin: "0 auto" }}>

            {/* En-tête avec animation */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
              "@media (min-width: 768px)": {
                flexDirection: "row",
              },
            }}>
              <DotLottieReact
                src="/assets/Hello.lottie"
                autoplay
                loop
                style={{ height: 150, marginRight: "20px" }}
              />
              <div>
                <h1 style={{
                  fontSize: "2.25rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#065F46",
                  marginBottom: "16px",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                  direction: "rtl",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  يحتوى هذا الموقع على مجموعة من دروس الجغرافيا للسّنة الخامسة والسّنة السّادسة من التعليم الإبتدائي بتونس بطريقة تفاعليّة
                  <MicroButton text="يحتوى هذا الموقع على مجموعة من دروس الجغرافيا للسّنة الخامسة والسّنة السّادسة من التعليم الإبتدائي بتونس بطريقة تفاعليّة" />
                </h1>
              </div>
            </div>

            {/* Section d'introduction */}
            <div style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              border: "3px dashed #4CAF50",
              fontFamily: "'Comic Sans MS', cursive",
              animation: "pulse 2s infinite",
              minHeight: "300px",
              margin: "40px 0",
            }}>
              <div style={{ position: "relative", zIndex: 10 }}>
                <img
                  src="/assets/groupe.gif"
                  alt="Équipe d'étudiants"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "700px",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            {/* Section sélection par année */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
              "@media (min-width: 768px)": {
                flexDirection: "row",
              },
            }}>
              <div>
                <h1 style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#064E3B",
                  marginBottom: "16px",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                  direction: "rtl",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  جاهز للإنطلاق ؟
                  <MicroButton text="جاهز للإنطلاق ؟" />
                </h1>
              </div>
              <DotLottieReact
                src="/assets/start.lottie"
                autoplay
                loop
                style={{ height: 150, marginRight: "20px" }}
              />
              <div>
                <h1 style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#064E3B",
                  marginBottom: "16px",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                  direction: "rtl",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  اختر المستوى الدّراسي وابدأ رحلة التّعلّم والإستكشاف
                  <MicroButton text="اختر المستوى الدّراسي وابدأ رحلة التّعلّم والإستكشاف" />
                </h1>
              </div>
            </div>

            {/* Sélection des années */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "32px",
              textAlign: "center",
              marginBottom: "48px",
              "@media (min-width: 768px)": {
                gridTemplateColumns: "1fr 1fr",
              },
            }}>
              {/* Année 5 */}
              <div
                style={{
                  borderRadius: "24px",
                  padding: "24px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor: activeYear === 5 ? "#EFF6FF" : "#FFFFFF",
                  transform: activeYear === 5 ? "scale(1.05)" : "scale(1)",
                  border: "3px solid #FF9800",
                  animation: "pulse 2s infinite",
                  textAlign: "center",
                }}
                onClick={() => toggleYear(5)}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <h3 style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "#FF9800",
                    margin: 0,
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center"
                  }}>
                    السّنة الخامسة
                    <MicroButton text="السّنة الخامسة" />
                  </h3>
                </div>

                {activeYear === 5 && (
                  <ul style={{
                    marginTop: "24px",
                    paddingLeft: "0px",
                    animation: "fadeIn 0.5s",
                    listStyle: "none",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    direction: "rtl",
                  }}>
                    <li style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      marginBottom: "16px",
                      transition: "color 0.3s ease",
                      width: "100%",
                      ":hover": { color: "#FF9800" },
                    }} onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = "/courses/4";
                    }}>
                      <span style={{ color: "#10B981", marginRight: "12px", fontSize: "24px" }}>✦</span>
                      درس القارات والمحيطات والوحدات التّضاريسيّة الكبرى
                      <MicroButton text="درس القارات والمحيطات والوحدات التّضاريسيّة الكبرى" />
                    </li>
                    <li style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      marginBottom: "16px",
                      transition: "color 0.3s ease",
                      width: "100%",
                      ":hover": { color: "#FF9800" },
                    }} onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = "/courses/7";
                    }}>
                      <span style={{ color: "#10B981", marginRight: "12px", fontSize: "24px" }}>✦</span>
                      درس تصميم المدينة
                      <MicroButton text="درس تصميم المدينة" />
                    </li>
                  </ul>
                )}
              </div>

              {/* Année 6 */}
              <div
                style={{
                  borderRadius: "24px",
                  padding: "24px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor: activeYear === 6 ? "#ECFDF5" : "#FFFFFF",
                  transform: activeYear === 6 ? "scale(1.05)" : "scale(1)",
                  border: "3px solid #4CAF50",
                  animation: "pulse 2s infinite",
                  textAlign: "center",
                }}
                onClick={() => toggleYear(6)}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <h3 style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "#4CAF50",
                    margin: 0,
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center"
                  }}>
                    السّنة السّادسة
                    <MicroButton text="السّنة السّادسة" />
                  </h3>
                </div>

                {activeYear === 6 && (
                  <ul style={{
                    marginTop: "24px",
                    paddingLeft: "0px",
                    animation: "fadeIn 0.5s",
                    listStyle: "none",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    direction: "rtl",
                  }}>
                    <li style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      marginBottom: "16px",
                      transition: "color 0.3s ease",
                      width: "100%",
                      ":hover": { color: "#2563EB" },
                    }} onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = "/courses/1";
                    }}>
                      <span style={{ color: "#3B82F6", marginRight: "12px", fontSize: "24px" }}>✦</span>
                      درس الموارد الطّاقيّة والمنجميّة بالمغرب العربي
                      <MicroButton text="درس الموارد الطّاقيّة والمنجميّة بالمغرب العربي" />
                    </li>
                    {/* Autres éléments de liste avec micros... */}
                  </ul>
                )}
              </div>
            </div>

            {/* Section contact */}
            <div style={{
              backgroundColor: "#faf5ff",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              marginBottom: "40px",
              border: "3px dotted #9C27B0",
              animation: "pulse 2s infinite",
            }}>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#7e22ce",
                marginBottom: "16px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                تواصل معنا
                <MicroButton text="تواصل معنا" />
              </h3>

              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#7e22ce",
                marginBottom: "16px",
                textAlign: "center",
                direction: "rtl",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                لأي استفسار أو ملاحظة أو تساؤل عبر البريد الإلكترونى التالــــي :
                <MicroButton text="لأي استفسار أو ملاحظة أو تساؤل عبر البريد الإلكترونى التالــــي" />
              </h3>

              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
                flexWrap: "wrap"
              }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginLeft: "12px", textAlign: "right", direction: "rtl" }}>
                    <p style={{ fontWeight: "800", display: "flex", alignItems: "center" }}>
                      آيـــــــة الغزواني
                      <MicroButton text="آيـــــــة الغزواني" />
                    </p>
                    <p style={{ fontSize: "0.875rem", display: "flex", alignItems: "center" }}>
                      ghazouanieya812@gmail.com
                    </p>
                  </div>
                </div>
                <div>
                  <DotLottieReact
                    src="/assets/call.lottie"
                    autoplay
                    loop
                    style={{ height: 120 }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginLeft: "12px", textAlign: "right", direction: "rtl" }}>
                    <p style={{ fontWeight: "800", display: "flex", alignItems: "center" }}>
                      أمـــــــل الصغير
                      <MicroButton text="أمـــــــل الصغير" />
                    </p>
                    <p style={{ fontSize: "0.875rem", display: "flex", alignItems: "center" }}>
                      sghaireamal355@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <h3 style={{
                textAlign: "center",
                marginTop: "24px",
                color: "#374151",
                direction: "rtl",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                فريقنا في خدمتكم دائما قصد تطوير تعلّماتك الجغرافيّة
                <MicroButton text="فريقنا في خدمتكم دائما قصد تطوير تعلّماتك الجغرافيّة" />
              </h3>
            </div>

            {/* Section appel à l'action */}
            <div style={{
              textAlign: "center",
              backgroundColor: "#fefce8",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              border: "3px solid #FFC107",
              animation: "pulse 2s infinite",
              margin: "20px 0",
            }}>
              <DotLottieReact
                src="/assets/adventure.lottie"
                autoplay
                loop
                style={{ height: 160, width: 160, margin: "0 auto" }}
              />

              <h3 style={{
                fontSize: "1.75rem",
                fontWeight: "bold",
                color: "#ef4444",
                marginBottom: "16px",
                marginTop: "16px",
                direction: "rtl",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                لا تفوّت الفرصة !
                <MicroButton text="لا تفوّت الفرصة !" />
              </h3>

              <p style={{
                fontSize: "1.5rem",
                marginBottom: "16px",
                lineHeight: "1.6",
                direction: "rtl",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                تصفّح الموسوعة التّفاعليّة واكتشف محتوى الحقيبة التّفاعليّة للإنطلاق في رحلة تعلّم حقيقيّة حول العالم.
                <MicroButton text="تصفّح الموسوعة التّفاعليّة واكتشف محتوى الحقيبة التّفاعليّة للإنطلاق في رحلة تعلّم حقيقيّة حول العالم." />
              </p>

              {/* Section pour les deux images en ligne */}
              <div style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "40px",
                marginTop: "30px",
                flexWrap: "wrap",
              }}>
                <div style={{ textAlign: "center" }}>
                  <h4 style={{
                    marginTop: "12px",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#3b82f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    الموسوعة التفاعلية
                    <MicroButton text="الموسوعة التفاعلية" />
                  </h4>
                  <img
                    src="/assets/mawsou3a.png"
                    alt="الموسوعة التفاعلية"
                    style={{
                      width: "250px",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      border: "2px solid #3b82f6",
                    }}
                  />
                </div>

                <div style={{ textAlign: "center" }}>
                  <h4 style={{
                    marginTop: "12px",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    الحقيبة التفاعلية
                    <MicroButton text="الحقيبة التفاعلية" />
                  </h4>
                  <img
                    src="/assets/7a9ibah.png"
                    alt="الحقيبة التفاعلية"
                    style={{
                      width: "250px",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      border: "2px solid #10b981",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles globaux */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-in {
          animation: bounceIn 0.8s;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s;
        }
      `}</style>
    </>
  );
};


const BounceIn = ({ children }) => (
  <div className="animate-bounce-in">{children}</div>
);
const Courses = () => (
  <Card>
    <CardContent style={{ padding: "20px" }}>
      صفحة الدورات الجغرافية
    </CardContent>
  </Card>
);

const Map = () => (
  <Card>
    <CardContent style={{ padding: "20px" }}>
      صفحة الخريطة التفاعلية
    </CardContent>
  </Card>
);

export default function App() {
  const location = useLocation();

  return (
    <div
      style={{ display: "flex", flexDirection: "row-reverse", height: "100vh" }}
    >
      {/* Cache la sidebar uniquement sur la page d'accueil */}
      <Sidebar hidden={location.pathname === "/"} />

      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          marginRight: location.pathname === "/" ? "0" : "300px",
        }}
      >
        <main
          style={{
            flex: "1",
            padding: "20px",
            overflowY: "auto",
            height: "calc(100vh - 60px)",
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses/1" element={<FirstCourse />} />
            <Route path="/courses/2" element={<SecondCourse />} />
            <Route path="/courses/3" element={<ThirdCourse />} />
            <Route path="/courses/4" element={<FourthCourse />} />
            <Route path="/courses/5" element={<FifthCourse />} />
            <Route path="/courses/6" element={<SixthCourse />} />
            <Route path="/courses/7" element={<SeventhCourse />} />
            <Route path="/courses/8" element={<EighthCourse />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
