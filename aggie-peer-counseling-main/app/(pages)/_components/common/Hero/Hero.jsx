'use client';
import React from 'react';
import styles from './Hero.module.scss';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Navbar from '../Navbar/Navbar';

const Hero = ({ title, subtitle }) => {
  const pathname = usePathname();

  const backgroundClass = clsx(
    styles.hero,
    styles.content,
    pathname=="/" && styles.morning,
    pathname=="/resources" && styles.noon,
    pathname=="/destress" && styles.night,
    pathname=="/contact" && styles.spring,
  );

  return (
    <section className={backgroundClass}>
      <Navbar />
      <h1 className={styles.h1}>{title}</h1>
      <p className={styles.p}>{subtitle}</p>
    </section>
  )
};

export default Hero;