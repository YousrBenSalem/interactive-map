import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout.js";
import FirstCourse from "./components/FirstCourse.js";
import SecondCourse from "./components/SecondCourse.js";
import MapComponent from "./components/MapComponent.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
