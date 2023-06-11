import React from "react";
import styles from "./store-component.module.scss";

interface StoreComponentProps {
  svgString: string;
  storeName: string;
  storeLink: string;
}

const StoreComponent: React.FC<StoreComponentProps> = ({
  svgString,
  storeName,
  storeLink,
}) => {
  return (
    <a
      href={storeLink}
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
