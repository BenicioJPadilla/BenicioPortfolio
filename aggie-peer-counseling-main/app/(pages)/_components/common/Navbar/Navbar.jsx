'use client';
import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { IoMenu } from 'react-icons/io5';


const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isopen, setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isopen)
    }

    const handleClick = () => {
        if (pathname === '/') {
            document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push('/#program'); // Navigate without animation
        }
    };

    const navLinkClass = clsx(
        styles["nav-link"],
        pathname=="/destress" && styles.destressLinkColor,
    );


    return (
        <>
            <nav className={styles.navbar}>
                <img 
                    src="/images/header/logo.svg" 
                    alt="Logo" 
                    className={styles["nav-logo"]} 
                    style={{opacity: pathname=="/contact" ? 0 : 1}} 
                />

                <ul className={styles["nav-links"]}>
                    <li className={navLinkClass}>
                        <Link href="/">About Us</Link>
                    </li>
                    <li className={navLinkClass}>
                        <a onClick={handleClick} style={{ cursor: 'pointer' }}>Program</a>
                    </li>
                    <li className={navLinkClass}>
                        <Link href="/resources">Resources</Link>
                    </li>
                    <li className={navLinkClass}>
                        <Link href="/destress">De-stress</Link>
                    </li>
                    <li className={`${styles["nav-link"]} ${styles["nav-contact"]}`}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>

                <button onClick={toggle} className={styles.hamburger}>
                    <IoMenu size={50} className={clsx(styles.hamburgerIcon, isopen && styles.outline)} />
                </button>
            </nav>

            <div className={`${styles.mobileMenu} ${isopen ? styles.expand : styles.collapse}`}>
                <Link href="/" className={styles.menuLink}>About Us</Link>
                <Link href="/resources" className={styles.menuLink}>Resources</Link>
                <Link href="/destress" className={styles.menuLink}>De-stress</Link>
                <Link href="/contact" className={styles.menuLink}>Contact</Link>
            </div>
        </>
    );
};

export default Navbar;