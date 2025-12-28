"use client"
import styles from "./Footer.module.scss"; // Importing CSS module for styling
import React from "react"; // Importing React library
import {FaRegCopyright} from "react-icons/fa6"; // Importing icon from react-icons library
import { IoMail } from "react-icons/io5"; // Importing icon from react-icons library
import { BiLogoInstagramAlt } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";

export default function Footer({variant = "Home"}) {
    const router = useRouter();
    const pathname = usePathname();

    let footerBg = styles.HomeFooter; // Default background (Home & Contact)
    // let footerImg = "/HomeBg.svg"; // Default image (Home & Contact)

    if (variant == "Resources") {
        footerBg = styles.ResourcesFooter;
        // footerImg = "/ResourcesBg.svg";
    } else if (variant === "De-Stress") {
        footerBg = styles.DeStressFooter;
        // footerImg = "/DeStressBg.svg"; 
    } 

    {/* Array of all sections for the footer, left to right */}
    const footerSections = [
        {
            heading: 'Home',
            href: '/',
            links: [
                { text: 'Emergency Contact', href: 'emergencycontact' },
                { text: 'Our Mission', href: 'ourmission' },
                { text: 'What We Do', href: 'whatwedo' },
                { text: 'Mentor Mentee Program', href: 'program' },
                { text: 'Meet the Mentors', href: 'meetthementors' },
                { text: 'Application Forms', href: 'forms' }
            ]
        },

        {
            heading: 'Resources',
            href: '/resources',
            links: [
                { text: 'On-Campus', href: 'On-Campus Resources' },
                { text: 'Partner Units', href: 'Partner Units' },
                { text: 'Important Additional Resources', href: 'Important Additional Resources' },
                { text: '24/7 Emergency Resources', href: '24/7 Emergency Resources' },
                { text: 'Referring Mentees', href: 'Referring Mentees' },
                { text: 'Academic Resources', href: 'Academic Resources' }
            ]
        },

        {
            heading: 'De-Stress',
            href: '/destress',
            links: [
                { text: 'Activities', href: 'breathe' },
                { text: 'Sounds', href: 'relaxingsounds' },
                { text: 'Yoga Videos', href: 'exercisesection' }
            ]
        }

    ];

    function handleClick(rootIndex, index) {
        const base = footerSections[rootIndex]
        const id = base.links[index].href

        if (pathname == base.href) {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            let basePath = base.href
            if (basePath == "/") {
                basePath = ""
            }
            router.push(base.href+"/#"+id)
        }  
    }
    // Rendering the footer component 
    return (
        <div className={`${styles.Footer} ${footerBg}`}>
            <footer className={`${styles.FooterContainer} ${footerBg}`}>
                <img 
                    src="/images/footer/cows.svg" 
                    alt="Logo" 
                    className={styles.mobileLogo} 
                />
                <div className={styles.FooterColumnsWrapper}> 
                {/* Main footer section w/ mission & logo*/}
                    <div className={styles.FooterMain}>
                        <h1>Aggie Peer Counseling</h1>
                        <p>A by-student, for-students initiative to create a safe space for conversation, encouragement, and connection.</p>
                    </div>
                    {/* Footer section with links */}
                    {footerSections.map((section,index) => (
                        <div key={index} className={`${styles.FooterColumn} ${footerBg}`}>
                            <h2><a href={section.href}>{section.heading}</a></h2>
                            <ul className={styles.links}>
                                {section.links.map((link,i) => (
                                    <li key={i}>
                                        <a onClick={()=>{handleClick(index, i)}}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div> 
                    ))} 
                </div>
            </footer>

            {/* Footer's Footer */}
            <div className={`${styles.FooterBottom} ${footerBg}`}>
                <p><FaRegCopyright/> 2025 Aggie Peer Counselling</p>
                <div className={styles.FooterIcons}>
                    <a href='#'> <IoMail/></a>
                    <a href='#' target="_blank" rel='noopener noreferrer'> <BiLogoInstagramAlt/></a>
                </div>
            </div>
        </div>
    );
}