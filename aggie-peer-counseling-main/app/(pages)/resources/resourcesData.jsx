import styles from "./resourcesData.module.scss"

const handleLinkClick = (e) => {
    e.stopPropagation();
};

function Link({ link, text }) {
    return <a className={styles.link} href={link} onClick={handleLinkClick} target="_blank" rel="noopener noreferrer">{text}</a>;
}

export const cards = [
    {
        id: "On-Campus Resources",
        buttons: [
            {
                heading: "Aggie Mental Health",
                text: (<>Comprehensive map of mental health resources on campus for any situation: crisis cases, setting up appointments, or generally caring for yourself
                    <br /> <br />
                    Link: <Link link="https://mentalhealth.ucdavis.edu/" text="https://mentalhealth.ucdavis.edu/" />
                </>),
            },
            {
                heading: "Student Health and Counseling Services (SHCS)",
                text: (<>Individual counseling, urgent care, group therapy, <Link link="https://shcs.ucdavis.edu/online-visits" text="online counseling/psychiatry/medical services," />
                    &nbsp;and a self-help library
                    <ul className={styles.bullet}>
                        <li>Phone: (530) 752-2349</li>
                        <li>Location: second floor of the Student Health and Wellness Center (across from the ARC) and second floor of North Hall (above the WRRC)</li>
                    </ul>
                    <br />
                    Link: <Link link="https://shcs.ucdavis.edu/" text="https://shcs.ucdavis.edu/" />
                </>),
            },
            {
                heading: "Community Advising Network (CAN) Counselors",
                text: (<>Support for all students, especially underserved and marginalized communities, through individual counseling, group therapy, and campus workshops
                    <br /> <br />
                    Link: <a className={styles.link} href="https://shcs.ucdavis.edu/services/can" onClick={handleLinkClick}>https://shcs.ucdavis.edu/services/can</a>
                </>),
            }
        ]
    },

    {
        id: "Partner Units",
        buttons: [
            {
                heading: "Therapy Assistance Online (TAO)",
                text: (<> Free online resource available to all students with self-help modules and online counseling appointments
                    <ul className={styles.bullet}>
                        <li>
                            Sign up: use your UC Davis email and <Link link="https://shcs.ucdavis.edu/tao" text="follow the steps listed here" />
                        </li>
                    </ul>
                    <br />
                    Link: <Link link="https://www.taoconnect.org/" text="https://www.taoconnect.org/" />
                </>)
            },
            {
                heading: "BetterHelp.com",
                text: (<> Licensed, trained, experienced, and accredited psychologists (PhD/PsyD), marriage and family therapists (LMFT), clinical social workers (LCSW/LMSW), and board licensed professional counselors (LPC) on an online platform for an affordable cost
                    <br /><br />
                    Link: <Link link="https://www.betterhelp.com/" text="https://www.betterhelp.com/" />
                </>)
            }
        ]
    },

    {
        id: "24/7 Emergency Resources",
        buttons: [
            {
                heading: "Sutter Davis Emergency Room",
                text: (<> Phone: (530) 757-5111 <br />
                    Location: 2000 Sutter Place, Davis, CA, 95616 <br /> <br />
                    Link: <Link link="https://www.sutterhealth.org/find-location/facility/sutter-davis-hospital-emergency-department" text="https://www.sutterhealth.org/find-location/facility/sutter-davis-hospital-emergency-department" />
                </>)
            },
            {
                heading: "Student Health & Wellness Center Urgent Care",
                text: (<> Phone: (530) 752-0871 <br />
                    Hours: Monday, Tuesday, Thursday, Friday 8am-5pm, Wednesday 9am-5pm <br /> <br />
                    Link: <Link link="https://shcs.ucdavis.edu/acute-care-clinic" text="https://shcs.ucdavis.edu/acute-care-clinic" />
                </>)
            },
            {
                heading: "National Suicide Prevention Hotline",
                text: (<> Phone: 1 (800) 273-8255 <br /><br />
                    Link: <Link link="https://suicidepreventionlifeline.org/" text="https://suicidepreventionlifeline.org/" />
                </>)
            },
            {
                heading: "Davis Suicide Prevention Hotline",
                text: (<> Phone: (530) 756-5000 <br /><br />
                    Link: <Link link="http://www.suicidepreventionyolocounty.org/" text="http://www.suicidepreventionyolocounty.org/" />
                </>)
            },
            {
                heading: "Crisis Text Line",
                text: (<> Text: 741741 <br /><br />
                    Link: <Link link="https://www.crisistextline.org/" text="https://www.crisistextline.org/" />
                </>)
            }
        ]
    },

    {
        id: "Referring Mentees",
        buttons: [
            {
                heading: "Health 34",
                text: (<> Team of healthcare educators and providers who deliver free, non-emergency support and service navigation for mental health and basic medical care to every segment of the UC Davis campus. <br />
                    Phone: 530-754-3434 <br /><br />
                    Link: <Link link="https://fire.ucdavis.edu/health34" text="https://fire.ucdavis.edu/health34" />
                </>)
            },
            {
                heading: "UC Davis Counseling (24/7 Mental Health Crisis Consultation)",
                text: (<> Available after hours <br />
                    Phone: 530-752-0871 <br /> <br />
                    Link: <Link link="https://shcs.ucdavis.edu/crisis-care-and-urgent-help-resources" text="https://shcs.ucdavis.edu/crisis-care-and-urgent-help-resources" />
                </>)
            },
            {
                heading: "Aggie Compass Basic Needs Center",
                text: (<> Financial, housing, and food insecurity resources
                    <ul className={styles.bullet}>
                        <li>
                            Referral link for student facing food or housing insecurity: <Link link="https://ucdavis-advocate.symplicity.com/collections/acbn-referral" text="https://ucdavis-advocate.symplicity.com/collections/acbn-referral" />
                        </li>
                    </ul> <br />
                    Link: <Link link="https://aggiecompass.ucdavis.edu" text="https://aggiecompass.ucdavis.edu" />
                </>)
            }
        ]
    },

    {
        id: "Important Additional Resources",
        buttons: [
            {
                heading: "Center for Advocacy Resources and Education (CARE)",
                text: (<>
                    <ul className={styles.bullet}>
                        <li>Support services for survivors of sexual assault, intimate partner violence, and/or stalking</li>
                        <li>A victim advocate is available 24/7 via the number listed below</li>
                        <ul className={styles.bullet}>
                            <li>Phone: (530) 752-3299</li>
                        </ul>
                    </ul> <br />
                    Link: <Link link="https://care.ucdavis.edu/" text="https://care.ucdavis.edu/" />
                </>)
            },
            {
                heading: "Family Protection and Legal Assistance Clinic",
                text: (<>
                    <ul className={styles.bullet}>
                        <li>Free civil legal assistance to victims of intimate partner violence and sexual assault</li>
                        <ul className={styles.bullet}>
                            <li>Phone: (530) 752-6532</li>
                        </ul>
                    </ul> <br />
                    Link: <Link link="https://law.ucdavis.edu/clinics/family-protection-clinic.html" text="https://law.ucdavis.edu/clinics/family-protection-clinic.html" />
                </>)
            },
            {
                heading: "Office of the Ombuds: A Safe Place to Talk",
                text: (<>
                    <ul className={styles.bullet}>
                        <li>Confidential, independent, impartial, and informal problem-solving and conflict management resource for all members of the UCD and UCDH campus communities with university-related issues and concerns</li>
                        <ul className={styles.bullet}>
                            <li>Phone: (530) 754-7233</li>
                        </ul>
                    </ul> <br />
                    Link: <Link link="https://ombuds.ucdavis.edu/" text="https://ombuds.ucdavis.edu/" />
                </>)
            }
        ]
    },

    {
        id: "Academic Resources",
        buttons: [
            {
                heading: "Academic Advising",
                text: (<>
                    <ul className={styles.bullet}>
                        <li><Link link="https://caes.ucdavis.edu/students/advising" text="College of Agriculture Advising" /></li>
                        <li><Link link="https://biology.ucdavis.edu/undergraduate/advising/basc" text="College of Biological Sciences Advising" /></li>
                        <li><Link link="https://engineering.ucdavis.edu/undergraduates/academic-advising" text="College of Engineering Advising" /></li>
                        <li><Link link="https://lettersandscience.ucdavis.edu/students/advising" text="College of Letters and Science Advising" /></li>
                        <li>Health Professions Advising: pre-medical resources</li>
                        <li>Drop-in Peer Advising at Katherine Esau Hall (9 AM-12 PM; 1 PM-4 PM)</li>
                    </ul>
                </>)
            },
            {
                heading: "Academic Assistance and Tutoring Centers (AATC)",
                text: (<>
                    <ul className={styles.bullet}>
                        <li><Link link="https://tutoring.ucdavis.edu/" text="Academic Assistance and Tutoring Centers (AATC)" /></li>
                        <ul className={styles.bullet}>
                            <li>Basement of Shields Library</li>
                            <li>First-year residence halls: Segundo, Tercero, Cuarto Service Center</li>
                        </ul>
                    </ul>
                </>)
            },
            {
                heading: "Writing Center",
                text: (<>
                    <ul className={styles.bullet}>
                        <li>Assistance with writing papers, statement of purpose, personal statements, etc.</li>
                        <li>4th Floor of TLC</li>
                    </ul>
                </>)
            }
        ]
    }
]