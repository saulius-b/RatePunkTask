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
        <img src={invite} alt="Invite"></img>
        <div>
          <div className={styles.stepCounter}>STEP 1</div>
          <div className={styles.stepHeaderText}>INVITE FRIENDS</div>
          <div className={styles.stepDescription}>
            Refer friends with your unique referral link.
          </div>
        </div>
      </div>
      <div>
        <img src={collectCoins} alt="Collect coins"></img>
        <div>
          <div>STEP 2</div>
          <div>COLLECT COINS</div>
          <div>
            Get 1 coin for each friend that installs our extension using your
            referral link.
          </div>
        </div>
      </div>
      <div>
        <img src={voucher} alt="Voucher"></img>
        <div>
          <div>STEP 3</div>
          <div>GET VOUCHER</div>
          <div>
            Redeem for a $20 hotel booking voucher once you collect 20 coins.
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default MainSection;
