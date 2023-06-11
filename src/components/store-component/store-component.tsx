import React from "react";
import styles from "./store-component.module.scss";

interface StoreComponentProps {
  svgString: string;
  storeName: string;
}

const StoreComponent: React.FC<StoreComponentProps> = ({
  svgString,
  storeName,
}) => {
  return (
    <a
      href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <img src={svgString}></img>
      <div className={styles.storeTextContainer}>
        <div className={styles.storeHeaderText}>available in the</div>
        <div className={styles.storeNameText}>{storeName}</div>
      </div>
    </a>
  );
};

export default StoreComponent;
