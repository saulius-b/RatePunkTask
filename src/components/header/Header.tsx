import React, { useState } from "react";
import styles from "./header.module.scss";
import logo from "../../../assets/svg/logo.svg";
import menu from "../../../assets/svg/menu.svg";
import close from "../../../assets/svg/close.svg";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const navType = isMobile ? (
    <>
      <img src={isMenuOpen ? close : menu} alt="Menu" onClick={handleMenuToggle} />
      {isMenuOpen && (
        <div className={styles.openedNavMenu}>
          <div className={styles.buttonRow}>
            <img src={logo} alt="logo"></img>
            <img src={isMenuOpen ? close : menu} alt="menu" onClick={handleMenuToggle} />
          </div>
          <nav className={styles.navigationItemContainer}>
            <a href="">Chrome Extension</a>
            <a href="">Price Comparison</a>
            <a href="">Blog</a>
          </nav>
        </div>
      )}
    </>
  ) : (
    <nav className={styles.navContainer}>
      <a href="" className={styles.firstNavItem}>
        Chrome Extension
      </a>
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
