import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Sidebar from "./Components/SidebarMenu/Sidebar";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="app light">
      <Router>
        <NavBar />
        <div className="container">
          <Sidebar />
          {/* Add more routes here */}
        </div>
      </Router>
    </div>
  );
}

export default App;
