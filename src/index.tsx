import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/Header";
import MainSection from "./components/main/MainSection ";
import Footer from "./components/footer/Footer";
import "./index.scss";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
