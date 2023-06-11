import React from "react";
import styles from "./MainSection.module.scss";
import invite from "../../../assets/svg/invite.svg";
import collectCoins from "../../../assets/svg/collect-coins.svg";
import voucher from "../../../assets/svg/voucher.svg";

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
    <div className={styles.instructionsContainer}>
      <div>
        <img className={styles.instructionsSvg} src={invite} alt="Invite"></img>
        <div className={styles.stepContainer}>
          <div className={styles.stepNumber}>STEP 1</div>
          <div className={styles.stepHeaderText}>INVITE FRIENDS</div>
          <div className={styles.stepDescription}>
            Refer friends with your unique referral link.
          </div>
        </div>
      </div>
      <div>
        <img src={collectCoins} alt="Collect coins"></img>
        <div className={styles.stepContainer}>
          <div className={styles.stepNumber}>STEP 2</div>
          <div className={styles.stepHeaderText}>COLLECT COINS</div>
          <div className={styles.stepDescription}>
            Get 1 coin for each friend that installs our extension using your
            referral link.
          </div>
        </div>
      </div>
      <div>
        <img src={voucher} alt="Voucher"></img>
        <div className={styles.stepContainer}>
          <div className={styles.stepNumber}>STEP 3</div>
          <div className={styles.stepHeaderText}>GET VOUCHER</div>
          <div className={styles.stepDescription}>
            Redeem for a $20 hotel booking voucher once you collect 20 coins.
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default MainSection;
