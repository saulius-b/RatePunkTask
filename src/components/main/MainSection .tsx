import React from "react";
import styles from "./MainSection.module.scss";

const MainSection = () => (
  <main className={styles.container}>
    <div className={styles.referralContainer}>
      <div className={styles.referralTextContainer}>
        <div className={styles.referralTextHeader}>
          REFER FRIENDS AND GET REWARDS
        </div>
        <div className={styles.referralTextBody}>
          {`Refer your friends to us and earn hotel booking vouchers. We'll give
            you 1 coin for each friend that installs our extension. Minimum
            cash-out at 20 coins.`}
        </div>
      </div>
      <div className={styles.emailEntryContainer}>email entry</div>
      <div className={styles.referralNote}>Limits on max rewards apply.</div>
    </div>
    <div>instructions</div>
  </main>
);

export default MainSection;
