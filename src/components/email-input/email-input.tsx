import React from "react";
import styles from "./Email-inputs.module.scss";
import email from "../../../assets/svg/email.svg";

const EmailInput: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.referralEmailContainer}>
        <img src={email}></img>
        <input type="text" placeholder="Enter your email address" />
      </div>
      <button className={styles.referralSubmitButton}>Get Referral Link</button>
    </div>
  );
};

export default EmailInput;
