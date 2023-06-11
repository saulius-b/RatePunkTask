import React, { useState } from "react";
import styles from "./Email-inputs.module.scss";
import emailSvg from "../../../assets/svg/email.svg";
import success from "../../../assets/svg/success.svg";
import handleSubmit from "./handle-submit";
import copy from "copy-to-clipboard";

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [validationMessage, setValidationMessage] = useState("");
  const [referralCode, setReferralCode] = useState("Enter your email address");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setReferralCode("Enter your email address");
  };

  const handleCopyUrl = (): void => {
    copy(referralCode);
    setIsEmailValid(null);
    setReferralCode("Enter your email address");
  };

  const handleFormSubmit = (): void => {
    handleSubmit({
      email,
      setValidationMessage,
      setEmail,
      setIsEmailValid,
      setReferralCode,
    });
  };

  const validationNotification = isEmailValid ? (
    <div className={styles.successMessageContainer}>
      <img src={success} alt="success"></img>
      <div className={styles.successMessageText}>Your email is confirmed!</div>
    </div>
  ) : (
    <div className={styles.errorMessage}>{validationMessage}</div>
  );

  return (
    <div className={styles.container}>
      {validationNotification}

      <div className={styles.referralEmailContainer}>
        <img
          src={emailSvg}
          alt="email"
          style={isEmailValid ? { display: "none" } : undefined}
        ></img>
        <input
          placeholder={referralCode}
          id="emailInput"
          type="email"
          value={email}
          onChange={handleEmailChange}
          disabled={isEmailValid || false}
        />
      </div>

      <button
        className={styles.referralSubmitButton}
        onClick={isEmailValid ? handleCopyUrl : handleFormSubmit}
      >
        {isEmailValid ? "Copy URL" : "Get Referral Link"}
      </button>
    </div>
  );
};

export default EmailInput;
