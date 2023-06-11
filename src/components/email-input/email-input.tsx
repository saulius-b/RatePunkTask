import React, { useState } from "react";
import styles from "./Email-inputs.module.scss";
import emailSvg from "../../../assets/svg/email.svg";

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (email.trim() === "" || !isValidEmail(email)) {
      setValidationMessage("Error State");
      return;
    }
    const jsonData = JSON.stringify({ email });

    fetch("https://api.jsonbin.io/v3/b/64861ddfb89b1e2299ad694c", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2b$10$qcpG4tU9NeEDALBkBtYwIe4Is/ZzAQA3I9O0NufM67lPufJNr01ke",
      },
      body: jsonData,
    })
      .then((response) => {
        if (response.ok) {
          setEmail("");

          setValidationMessage("Email saved successfully.");
          console.log("Email saved successfully.");
        } else {
          console.error("Failed to save email.", response);
          setValidationMessage("Failed to save email. Please try again.");
        }
      })
      .catch((error) => {
        console.error("An error occurred while saving email:", error);
        setValidationMessage("An error occurred while saving email.");
      });
  };

  return (
    <div className={styles.container}>
      {validationMessage}
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
      <button className={styles.referralSubmitButton} onClick={handleSubmit}>
        Get Referral Link
      </button>
    </div>
  );
};

export default EmailInput;
