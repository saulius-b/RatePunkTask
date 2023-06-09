import React from "react";
import styles from "./referral-step.module.scss";

interface ReferralStepProps {
  stepNumber: number;
  stepHeaderText: string;
  stepDescription: string;
  svgString: string;
}

const ReferralStep: React.FC<ReferralStepProps> = ({
  stepNumber,
  stepHeaderText,
  stepDescription,
  svgString,
}) => {
  return (
    <div className={styles.individualStepContainer}>
      <img
        className={styles.instructionsSvg}
        src={svgString}
        alt={svgString}
      ></img>
      <div className={styles.stepContainer}>
        <div className={styles.stepNumber}>STEP {stepNumber}</div>
        <div className={styles.stepHeaderText}>{stepHeaderText}</div>
        <div className={styles.stepDescription}>{stepDescription}</div>
      </div>
      {}
    </div>
  );
};

export default ReferralStep;
