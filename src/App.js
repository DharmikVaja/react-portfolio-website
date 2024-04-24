import React, { useState, useEffect, useRef } from "react";
import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";
import NavBar from "./components/Navbar";

function App() {
  const [load, updateLoad] = useState(true);
  const aboutRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
      <Preloader load={load} />
        <NavBar aboutRef={aboutRef} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About ref={aboutRef} />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
