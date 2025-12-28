"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// import "./Breathe.modules.scss";
import styles from "./Breathe.module.scss"
import Background from "@/public/images/destress/breathe.svg";

export default function Breathe() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev >= 360 ? 0 : prev + 0.5));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.breatheWrapper} id="breathe">
      <div className={styles.circleContainer}>
        <div className={styles.outerCircle}></div>
        <div
          className={styles.timerRing}
          style={{
            background: `conic-gradient(#6F8EBC ${angle}deg, transparent ${angle}deg)`,
          }}
        ></div>
        <div className={styles.innerCircle}></div>
        <h2 className={styles.breatheText}>breathe</h2>
      </div>
    </div>

  );
}
