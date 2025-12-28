"use client";
import Image from 'next/image';
import styles from "./FormsSection.module.scss";

const forms = [
    {text: "Intake Form", imagePath: "./images/FormsSection/form1.svg", link: "https://docs.google.com/forms/d/e/1FAIpQLSfrshaspip0QFXMtyzkZzAnKprOvNiQ560dB3LoSYWgz6kGBA/viewform"},
    {text: "Mentor Preference", imagePath: "./images/FormsSection/form2.svg", link: "https://roblox.com/"},
    {text: "Mentor Applications", imagePath: "./images/FormsSection/form3.svg", link: "https://google.com/"}
]

function Form ({ text , image , link }) {
    return (
        <main className={styles.form_background} style={{backgroundImage: `url(${image})`}} onClick={() => {window.open(link, 'blank', 'noopener,noreferrer')}}>
            <h1 className={styles.form_text}>
                {text}
            </h1>
        </main>
    )
}

export default function FormsSection() {
    return (
        <main className={styles.forms_section} id="forms">
            <div className={styles.wrapper}>
                {forms.map((form, index) => (
                    <Form key={index} text={form.text} image={form.imagePath} link={form.link}/>
                ))}
            </div>
            <Image width={0} height={0} src='./images/FormsSection/cloud_left.svg' alt='left cloud' className={styles.cloud_left}/>
            <Image width={0} height={0} src='./images/FormsSection/cloud_right.svg' alt='right cloud' className={styles.cloud_right}/>
            <Image width={0} height={0} src='./images/FormsSection/cloud_mobile.svg' alt='right cloud' className={styles.cloud_mobile}/>
        </main>
    )
}