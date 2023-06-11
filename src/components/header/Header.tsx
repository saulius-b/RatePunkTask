import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/svg/logo.svg";
import menu from "../../../assets/svg/menu.svg";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navType = isMobile ? (
    <img src={menu} alt="Menu" />
  ) : (
    <nav className={styles.navContainer}>
      <a href="">Chrome Extension</a>
      <a href="">Price Comparison</a>
      <a href="">Blog</a>
    </nav>
  );
  return (
    <header className={styles.container}>
      <img src={logo} className={styles.imgContainer} alt="Logo"></img>
      {navType}
    </header>
  );
};

export default Header;
