import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import themeColor from './theme.json';

function App() {
  const [mode, setMode] = useState("light");
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }
  return (
    <div style={themeColor[mode].container} className="h-100">
      <Router>
        <Navbar
          title="TextUtils"
          homeText="Home"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About Us"
        />
        <div className="container mt-3">
          <Routes>
            <Route exact path="/" element={<TextForm textHeading="Enter the text to analyze below" />}/>
            <Route exact path="/about" element={ <About />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;