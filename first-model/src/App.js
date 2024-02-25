import React from "react";
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Info from "./components/Info"
import Contact from "./components/Contact";
import Services from './components/Services'
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
        <Hero />
        <Info />
      <Contact />
        <Services />
        <Footer />
    </div>
  );
}

export default App;
