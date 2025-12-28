import Image from "next/image";
import styles from "./musicCard.module.scss";
import { useState, useRef } from "react";

export default function MusicCard({ imagePath, altText }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const playAudio = () => {
        if (typeof window !== "undefined") {
            if (!audioRef.current) {
                // Add all your sounds here
                if (altText === "Rain sound") {
                    audioRef.current = new Audio("/sound/rain.mp3");
                } else if (altText === "Piano sound") {
                    audioRef.current = new Audio("/sound/piano.mp3");
                } else if (altText === "Ocean sound") {
                    audioRef.current = new Audio("/sound/ocean.mp3");
                } else if (altText === "Forest sound") {
                    audioRef.current = new Audio("/sound/forest.mp3");
                } else if (altText === "Fire sound") {
                    audioRef.current = new Audio("/sound/fire.mp3");
                } else if (altText === "Waves sound") {
                    audioRef.current = new Audio("/sound/waves.mp3");
                }
            }
            // Only play if audioRef.current is set
            if (audioRef.current) {
                audioRef.current.play();
            } else {
                console.warn("No audio file found for", altText);
            }
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    const togglePlayer = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            playAudio();
        } else {
            setIsPlaying(false);
            pauseAudio();
        }
    };

    return (
        <div>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image 
                        src={`/images/destress_relaxing_sounds/${imagePath}MusicCard.svg`}
                        alt={altText} 
                        width={192}
                        height={192}
                        className={styles.largeImage}
                    />
                </div>
                <div className={styles.cardInfo}>
                    <h3 className={styles.soundTitle}>{altText}</h3>
                    <div className={styles.progressRow}>
                        <div className={styles.progressBar}></div>
                    </div>
                    <div className={styles.controlsRow}>
                        <div className={styles.sideCircle}></div>
                        <div className={styles.controls}>
                            <Image 
                                src={isPlaying ? '/images/destress_relaxing_sounds/pauseButton.svg' : '/images/destress_relaxing_sounds/playbutton.svg'}
                                alt={isPlaying ? "Pause" : "Play"}
                                width={40}
                                height={40}
                                className={styles.playButton}
                                onClick={togglePlayer}
                            />
                        </div>
                        <div className={styles.sideCircle}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
