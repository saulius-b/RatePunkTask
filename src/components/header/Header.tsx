import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/logo.svg";

const Header = () => (
  <header className={styles.container}>
    <img src={logo} className={styles.imgContainer}></img>
    <nav className={styles.navContainer}>
      <a href="">Chrome Extension</a>
      <a href="">Price Comparison</a>
      <a href="">Blog</a>
    </nav>
  </header>
);

export default Header;
