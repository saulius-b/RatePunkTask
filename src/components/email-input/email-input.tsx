import React, { useState } from "react";
import styles from "./Email-inputs.module.scss";
import emailSvg from "../../../assets/svg/email.svg";
import success from "../../../assets/svg/success.svg";
import handleSubmit from "./handle-submit";

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [validationMessage, setValidationMessage] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (): void => {
    handleSubmit({ email, setValidationMessage, setEmail, setIsEmailValid });
  };

  const validationNotification = isEmailValid ? (
    <div className={styles.successMessageContainer}>
      <img src={success} alt="success"></img>
      <div>Your email is confirmed!</div>
    </div>
  ) : (
    <div className={styles.errorMessage}>{validationMessage}</div>
  );

  return (
    <div className={styles.container}>
      {validationNotification}

      <div className={styles.referralEmailContainer}>
        <img src={emailSvg} alt="email"></img>
        <input
          placeholder="Enter your email address"
          id="emailInput"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <button
        className={styles.referralSubmitButton}
        onClick={handleFormSubmit}
      >
        Get Referral Link
      </button>
    </div>
  );
};

export default EmailInput;
