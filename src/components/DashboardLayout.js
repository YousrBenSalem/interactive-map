import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { LayoutDashboard, Book, Globe } from "lucide-react";
import { Card, CardContent } from "@mui/material";
import "@mui/material/styles/index.js";
import FirstCourse from "./FirstCourse.js";
import SecondCourse from "./SecondCourse.js";
import ThirdCourse from "./ThirdCourse.js";
import FourthCourse from "./FourthCourse.js";
import FifthCourse from "./FifthCourse.js";
import SixthCourse from "./SixthCourse.js";
import SeventhCourse from "./SeventhCourse.js"



const Sidebar = () => {
  const [showCourses, setShowCourses] = useState(false);

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
            <Book /> <span>الدورات</span>
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
                to="/courses/4"
                style={courseLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                {" "}
                درس القارات و المحيطات و الوحدات التضارسية الكبرى
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
                to="/courses/7"
                style={courseLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                {" "}
                درس تصميم المدينة {" "}
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
  backgroundColor: "#ddd"
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

export default function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "row-reverse", height: "100vh" }}
    >
      <Sidebar />
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          marginRight: "300px", // Prevent content from going under the sidebar
        }}
      >
        {/* <header style={{
        width: "100%", backgroundColor: "#F0F0F0",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "16px", display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <h2 style={{ fontSize: "20px", fontWeight: "600" }}>الدرس الاول:  درس خريطة الموارد الطاقية و المنجمية بالمغرب العربي</h2>
      </header> */}
        <main
          style={{
            flex: "1",
            padding: "20px",
            overflowY: "auto", // Enable scrolling in the content
            height: "calc(100vh - 60px)", // Adjust height to avoid overflowing
          }}
        >
          {" "}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses/1" element={<FirstCourse />} />
            <Route path="/courses/2" element={<SecondCourse />} />
            <Route path="/courses/3" element={<ThirdCourse />} />
            <Route path="/courses/4" element={<FourthCourse />} />
            <Route path="/courses/5" element={<FifthCourse />} />
            <Route path="/courses/6" element={<SixthCourse />} />
            <Route path="/courses/7" element={<SeventhCourse />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

/* Page Components */
const Dashboard = () => (
  <Card><CardContent style={{ padding: "20px" }}>لوحة التحكم الرئيسية</CardContent></Card>
);

const Courses = () => (
  <Card><CardContent style={{ padding: "20px" }}>صفحة الدورات الجغرافية</CardContent></Card>
);

const Map = () => (
  <Card><CardContent style={{ padding: "20px" }}>صفحة الخريطة التفاعلية</CardContent></Card>
);
