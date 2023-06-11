import React from "react";
import "./index.scss";
import Header from "./components/header/header";
import MainSection from "./components/main/main-section";
import StoresSection from "./components/stores-section/stores-section";
import Footer from "./components/footer/footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainSection />
      <StoresSection />
      <Footer />
    </>
  );
};

export default App;
