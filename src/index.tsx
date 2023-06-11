import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";
import MainSection from "./components/main/main-section";
import Footer from "./components/footer/footer";
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
