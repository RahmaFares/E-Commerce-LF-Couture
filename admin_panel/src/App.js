import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Sidebar from "./Components/SidebarMenu/Sidebar";
import GeneralSettings from "./Pages/Settings/GeneralSettings";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className={`app ${theme}`}>
      <Router>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <div className="content-container">
          <Sidebar theme={theme} />
          {/* <Routes>
            <Route path="/general-settings" element={<GeneralSettings />} />
          </Routes> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
