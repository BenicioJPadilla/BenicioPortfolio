'use client';
import styles from './Program.module.scss';

export default function Program() {
  return (
    <section className={styles.programSection} id="program">
      <h1 className={styles.title}>Mentor Mentee Program</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>Mentors</h2>
          <p>
            Mentors lead, encourage, and support a small group of 3–5 mentees.
          </p>
          <ul>
            <div className={styles.bulletsDiv}>
              <strong>Requirements:</strong>
              <ul>
                <li>Active UCD student, 2nd year or above</li>
                <li>Attend 3 mandatory in-person meetings</li>
                <li>Complete online training</li>
              </ul>
            </div>
            <div className={styles.bulletsDiv}>
              <strong>Role:</strong>
              <ul>
                <li>Weekly check-ins, respond promptly to messages from mentees, present mental health topics, attend 80% of meetings</li>
              </ul>
            </div>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Mentees</h2>
          <p>
            Mentees are grouped with mentors and other mentees based on similar interests, majors, hobbies, and personality. Peer mentors organize small group hangouts according to mentees' interests.

          </p>
         
          <p>
            Mentees are free to share what’s on their mind, learn to navigate mental health challenges, and develop healthy coping skills.
          </p>
        </div>
      </div>
    </section>
  );
}