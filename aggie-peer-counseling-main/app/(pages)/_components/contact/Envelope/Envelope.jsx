"use client";
import styles from "./Envelope.module.scss"
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


export default function Envelope() {
    return (
        <main className={styles.envelope}>
            <h1 className={styles.title}>
                Let's get in touch
            </h1>
            <h2 className={styles.subtext}>
                Have a question about our club? <br/> Feel free to send us a DM on instagram or email us?
            </h2>
            <div className={styles.logosWrapper}>
                <div className={styles.logoWrapper}>
                    <div className={styles.logobubble} onClick={() => (window.open("https://www.instagram.com/aggiepeercounseling/", 'blank', 'noopener,noreferrer'))}> 
                        <div className={styles.logoSize}>
                            <FaInstagram color="white" />
                        </div>
                    </div>
                    <h2 className={styles.subtext}>
                        aggiepeercounseling
                    </h2>
                </div>
                <div className={styles.logoWrapper}>
                    <div className={styles.logobubble} onClick={() => (window.open("mailto:aggiepeercounseling@gmail.com", 'blank', 'noopener,noreferrer'))}> 
                        <div className={styles.logoSize}>
                            <FiMail color="white" />    
                        </div>
                    </div>
                    <h2 className={styles.subtext}>
                        aggiepeercounseling@gmail.com
                    </h2>
                </div>
            </div>
        </main>
    )
}