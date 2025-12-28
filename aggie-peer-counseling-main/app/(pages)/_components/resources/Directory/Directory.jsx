"use client";
import styles from "./Directory.module.scss";

export default function Directory({ whereToScroll, textData }) { 
    return (
        <main>
            <div className={styles.directory}>
                <h1 className={styles.titleBox}>
                    Directory
                </h1>
                <div className={styles.body}>
                    {textData.map((card, index) => (
                        <h1 className={styles.text} key={index} onClick={() => whereToScroll(card.id)}>
                            {card.id}
                        </h1>
                    ))}
                    <h1 className={styles.accommodationsText}>
                        Accommodations: <a className={styles.link} href="https://sdc.ucdavis.edu/">Student Disability Center</a> located in Cowell Building
                    </h1>
                </div>
            </div>
        </main>
    )
}