import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(35,39,47)";
      document.body.style.color = "#fff";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "rgb(35,39,47)";
    }
  }
  return (
    <>
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
    </>
  );
}

export default App;