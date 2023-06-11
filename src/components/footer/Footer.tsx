import React from "react";
import styles from "./footer.module.scss";
import logo from "../../../assets/svg/logo.svg";
import email from "../../../assets/svg/email-footer.svg";
import instagram from "../../../assets/svg/instagram.svg";
import facebook from "../../../assets/svg/facebook.svg";
import linkedin from "../../../assets/svg/linkedin.svg";
import twitter from "../../../assets/svg/twitter.svg";
import tiktok from "../../../assets/svg/tiktok.svg";

const Footer = () => (
  <footer className={styles.container}>
    <div>
      <img src={logo} alt="logo"></img>
      <div className={styles.ratepunkDescription}>
        Ratepunk compares hotel room prices across the major online travel
        agencies. When you search for a room, Ratepunk extension scans the top
        booking sites and runs a price comparison, so you can be confident in
        knowing you’re getting the best deal!
      </div>
    </div>
    <div className={styles.quickLinksContainer}>
      <div className={styles.headerStyling}>QUICK LINKS</div>
      <div className={styles.quickLinksAnchorContainer}>
        <a href="#" target="_blank" className={styles.quickLinksItem}>
          Price Comparison
        </a>
        <a href="#" target="_blank" className={styles.quickLinksItem}>
          Chrome Extension
        </a>
        <a href="#" target="_blank" className={styles.quickLinksItem}>
          How It Works
        </a>
        <a href="#" target="_blank" className={styles.quickLinksItem}>
          Ratepunk Blog
        </a>
        <a href="#" target="_blank" className={styles.quickLinksItem}>
          Privacy Policy
        </a>
      </div>
    </div>
    <div>
      <div className={styles.headerStyling}>CONTACT</div>
      <div className={styles.emailContainer}>
        <img src={email}></img>
        <a href="hi@ratepunk.com" className={styles.email}>
          hi@ratepunk.com
        </a>
      </div>

      <div className={styles.headerStyling}>SOCIAL</div>
      <div className={styles.socialIconsContainer}>
        <a href="#" target="_blank" className={styles.socialIconContainer}>
          <img src={instagram} alt="instagram"></img>
        </a>
        <a href="#" target="_blank" className={styles.socialIconContainer}>
          <img src={facebook} alt="facebook"></img>
        </a>
        <a href="#" target="_blank" className={styles.socialIconContainer}>
          <img src={linkedin} alt="linkedin"></img>
        </a>
        <a href="#" target="_blank" className={styles.socialIconContainer}>
          <img src={twitter} alt="twitter"></img>
        </a>
        <a href="#" target="_blank" className={styles.socialIconContainer}>
          <img src={tiktok} alt="tiktok"></img>
        </a>
      </div>
      <div className={styles.watermark}>
        © 2021 Ratepunk. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
