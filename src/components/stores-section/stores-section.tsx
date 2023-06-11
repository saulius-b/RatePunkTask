import React from "react";
import styles from "./stores-section.module.scss";
import star from "../../../assets/svg/star.svg";

const StoresSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <div>comp</div>
        <div>comp</div>
      </div>
      <div className={styles.reviewsContainer}>
        <div className={styles.starsContainer}>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
        </div>
        <div className={styles.reviewsText}>Chrome Store reviews</div>
      </div>
    </div>
  );
};

export default StoresSection;
