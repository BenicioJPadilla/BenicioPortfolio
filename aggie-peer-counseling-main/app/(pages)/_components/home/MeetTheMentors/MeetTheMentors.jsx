"use client";

import Image from "next/image";
import styles from "./Mentors.module.scss";

import Background from "@/public/images/mentors/leaves.svg";
import Nirvaan from "@/public/images/mentors/nirvaan.svg";
import Monica from "@/public/images/mentors/monica.svg";
import Megan from "@/public/images/mentors/megan.svg";
import Jay from "@/public/images/mentors/jay.svg";
import Eknoor from "@/public/images/mentors/eknoor.svg";

const mentors = [
  { name: "Nirvaan", pronouns: "he/him", image: Nirvaan },
  { name: "Monica", pronouns: "she/her", image: Monica },
  { name: "Megan", pronouns: "she/her", image: Megan },
  { name: "Jay", pronouns: "he/him", image: Jay },
  { name: "Eknoor", pronouns: "she/her", image: Eknoor },
];

export default function Mentors() {
  return (
    <section className={styles.mentorsSection} id="meetthementors">

      <h1 className={styles.title}>Meet The Mentors</h1>

      <div className={styles.mentorGrid}>
        {mentors.slice(0, 3).map((mentor) => (
            <div className={styles.mentorCard} key={mentor.name}>
            <Image
                src={mentor.image}
                alt={`${mentor.name}'s photo`}
                className={styles.mentorImage}
                width={200}
                height={200}
                priority
            />
                <div className={styles.mentorText}>
                    <h2>{mentor.name}</h2>
                    <p>{mentor.pronouns}</p>
                </div>
            </div>
        ))}

            <div className={styles.bottomRow}>
                {mentors.slice(3).map((mentor) => (
                <div className={styles.mentorCard} key={mentor.name}>
                    <Image
                    src={mentor.image}
                    alt={`${mentor.name}'s photo`}
                    className={styles.mentorImage}
                    width={200}
                    height={200}
                    priority
                    />
                    <div className={styles.mentorText}>
                    <h2>{mentor.name}</h2>
                    <p>{mentor.pronouns}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
}
