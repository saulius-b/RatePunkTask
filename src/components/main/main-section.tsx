import React from "react";
import styles from "./main-section.module.scss";
import invite from "../../../assets/svg/invite.svg";
import collectCoins from "../../../assets/svg/collect-coins.svg";
import voucher from "../../../assets/svg/voucher.svg";
import ReferralStep from "../referral-step/referral-step";

const MainSection = () => {
  return (
    <main className={styles.container}>
      <section className={styles.referralContainer}>
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
      </section>
      <section className={styles.instructionsContainer}>
        <ReferralStep
          stepNumber={1}
          stepHeaderText={"INVITE FRIENDS"}
          stepDescription={"Refer friends with your unique referral link."}
          svgString={invite}
        />
        <ReferralStep
          stepNumber={2}
          stepHeaderText={"COLLECT COINS"}
          stepDescription={
            "Get 1 coin for each friend that installs our extension using your referral link."
          }
          svgString={collectCoins}
        />
        <ReferralStep
          stepNumber={3}
          stepHeaderText={"GET VOUCHER"}
          stepDescription={
            "Redeem for a $20 hotel booking voucher once you collect 20 coins."
          }
          svgString={voucher}
        />
      </section>
    </main>
  );
};

export default MainSection;
