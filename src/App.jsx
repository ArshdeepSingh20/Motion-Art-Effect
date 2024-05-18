import React from "react";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import Rating from "./components/Rating";
import SectionSample from "./components/SectionSample";
import BrowserSupport from "./components/BrowserSupport";
import Plugin from "./components/Plugin";

function App() {
  return (
    <div className="px-4 md:px-32 wrapper ">
      <Header />
      <TopSection />
      <Rating />
      <SectionSample />
      <BrowserSupport/>
      <Plugin/>
    </div>
  );
}

export default App;
