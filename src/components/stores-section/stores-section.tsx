import React from "react";
import styles from "./stores-section.module.scss";
import star from "../../../assets/svg/star.svg";
import chrome from "../../../assets/svg/chrome.svg";
import apple from "../../../assets/svg/apple.svg";
import StoreComponent from "../store-component/store-component";

const StoresSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.storeComponentContainer}>
        <StoreComponent
          svgString={chrome}
          storeName="chrome web store"
          storeLink="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
        />
        <StoreComponent
          svgString={apple}
          storeName="apple app store"
          storeLink="https://apps.apple.com/app/ratepunk/id1607823726"
        />
      </div>
      <div className={styles.reviewsContainer}>
        <div className={styles.starsContainer}>
          <img src={star} alt="star"></img>
          <img src={star} alt="star"></img>
          <img src={star} alt="star"></img>
          <img src={star} alt="star"></img>
          <img src={star} alt="star"></img>
        </div>
        <div className={styles.reviewsText}>Chrome Store reviews</div>
      </div>
    </div>
  );
};

export default StoresSection;
