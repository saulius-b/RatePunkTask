import React from "react";
import ReactDOM from "react-dom";
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

ReactDOM.render(<App />, document.getElementById("root"));
