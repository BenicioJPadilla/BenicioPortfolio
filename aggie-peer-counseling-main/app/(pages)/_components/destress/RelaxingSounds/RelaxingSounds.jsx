"use client";
import Image from "next/image";
import styles from "./RelaxingSounds.module.scss";
import MusicCard from "./musicCard";
import { useRef, useState, useEffect } from "react";

export default function RelaxingSounds() {
    const containerRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const checkScrollPosition = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            setIsAtStart(container.scrollLeft === 0);
            setIsAtEnd(
                Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth
            );
        }
    };

    const scrollNext = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollAmount = container.clientWidth; // Scroll 3 cards at a time (including gaps)
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            setTimeout(checkScrollPosition, 500);
        }
    };

    const scrollPrev = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollAmount = container.clientWidth; // Scroll 3 cards at a time (including gaps)
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            setTimeout(checkScrollPosition, 500);
        }
    };

    useEffect(() => {
        checkScrollPosition();
    }, []);

    return (
        <div className={styles.background} id="relaxingsounds">
            <h1 className={styles.title}>Relaxing Sounds</h1>
            <div className={styles.musicCardContainer}>
                <Image
                    src="/images/destress_relaxing_sounds/leftScroll.svg"
                    alt="Scroll Left"
                    width={20}
                    height={32}
                    className={`${styles.scrollButtons} ${isAtStart ? styles.hidden : ''}`}
                    onClick={scrollPrev}
                />
                <div 
                    ref={containerRef}
                    className={styles.cardsTrack}
                    onScroll={checkScrollPosition}
                >
                    <MusicCard imagePath="rain" altText="Rain" />
                    <MusicCard imagePath="piano" altText="Piano" />
                    <MusicCard imagePath="Ocean" altText="Ocean" />
                    <MusicCard imagePath="rain" altText="Forest" />
                    <MusicCard imagePath="piano" altText="Fire" />
                    <MusicCard imagePath="Ocean" altText="Waves" />
                </div>
                <Image
                    src="/images/destress_relaxing_sounds/rightScroll.svg"
                    alt="Scroll Right"
                    width={20}
                    height={32}
                    className={`${styles.scrollButtons} ${isAtEnd ? styles.hidden : ''}`}
                    onClick={scrollNext}
                />
            </div>
        </div>
    );
}

