import React from "react";
import { useGlobalAppleReveal } from './hooks/useAppleReveal';
import ScrollProgressBar from './components/ScrollProgressBar';
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import SocialMedia from "./components/SocialMedia";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TouchMeteorTrail from "./components/TouchMeteorTrail";
import { Toaster } from "./components/ui/toaster";

function App() {
  // This single call activates all .apple-reveal elements on the page
  useGlobalAppleReveal();

  return (
    <div className="App">
      <ScrollProgressBar />   {/* thin line at top of page */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <SocialMedia />
      <Contact />
      <Footer />
      <TouchMeteorTrail />
      <Toaster />
    </div>
  );
}

export default App;
