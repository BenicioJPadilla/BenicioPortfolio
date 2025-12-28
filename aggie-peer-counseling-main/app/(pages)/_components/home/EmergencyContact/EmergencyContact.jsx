import styles from "./EmergencyContact.module.scss";
import { FiPhoneCall } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";

export default function EmergencyContact() {
  return (
    <section className={styles.section} id="emergencycontact">
      <h2 className={styles.heading}>Emergency Contact</h2>
      <div className={styles.iconRow}>
        {/* phone SOS */}
        <a href="tel:911" className={styles.iconLink}>
          <div className={styles.iconWrapper}>
            <FiPhoneCall className={styles.icon} />
            <span className={styles.label}>SOS</span>
          </div>
        </a>

        {/* Chat 988 */}
        <a href="sms:988" className={styles.iconLink}>
          <div className={styles.iconWrapper}>
            <BsChatDots className={styles.icon} />
            <span className={styles.label}>988</span>
          </div>
        </a>
      </div>
    </section>
  );
}