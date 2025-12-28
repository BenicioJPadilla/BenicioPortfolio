"use client";
import { useState, useEffect } from 'react';
import styles from './ExerciseSection.module.scss';
import stars from '@/public/images/destress/ExercisePage/Stars.svg'

export default function ExerciseSection() {
  const exercises = [
    {
      name: "Side Stretch",
      instructions: [
        { step: "step 1:", instruction: "start by lying on your back" },
        { step: "step 2:", instruction: "lift both arm and leg up per perpendicular to the ground." },
        { step: "step 3:", instruction: "slowly bring down opposite leg and arm" },
        { step: "step 4:", instruction: "repeat on opposite side!" }
      ],
      imageSrc: "/images/redCow.png"
    },
    {
      name: "Yoga",
      instructions: [
        { step: "step 1:", instruction: "start by standing up" },
        { step: "step 2:", instruction: "pick a position you would like and try balancing for 30 seconds." },
        { step: "step 2.5:", instruction: "focus on your breath while balancing!" }
      ],
      imageSrc: "/images/yellowCow.png"
    },
    {
      name: "Stretch",
      instructions: [
        { step: "step 1:", instruction: "start by lying on your back" },
        { step: "step 2:", instruction: "lift both arm and leg up per perpendicular to the ground." },
        { step: "step 3:", instruction: "slowly bring down opposite leg and arm" }
      ],
      imageSrc: "/images/blueCow.png"
    }
  ];

  const [openDropdowns, setOpenDropdowns] = useState(Array(exercises.length).fill(false));

  const toggleDropdown = (index) => {
    setOpenDropdowns(prev => prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };

  // useEffect(() => {
  //   const starsContainer = document.createElement('div');
  //   starsContainer.className = styles.starsContainer;
  //   document.body.appendChild(starsContainer);

  //   const totalStars = 20;
  //   for (let i = 0; i < totalStars; i++) {
  //     const starImg = document.createElement('img');
  //     starImg.src = i % 2 === 0 ? "/images/strongElipse.png" : "/images/weakElipse.png";
  //     starImg.className = styles.starImage;
  //     starImg.style.left = `${Math.random() * 100}%`;
  //     starImg.style.top = `${Math.random() * 100}%`;
  //     starImg.style.width = `${Math.random() * 15 + 15}px`;
  //     starImg.style.height = starImg.style.width;
  //     starImg.style.animationDelay = `${Math.random() * 3}s`;
  //     starsContainer.appendChild(starImg);
  //   }

  //   return () => {
  //     document.body.removeChild(starsContainer);
  //   };
  // }, []);

  const renderGrassImages = () => {
    const grassImages = [];
    const numGrassImages = 30;
    for (let i = 0; i < numGrassImages; i++) {
      const position = (i / numGrassImages) * 120 - 10;
      const imageNum = (i % 18) + 1;
      grassImages.push(
        <img 
          key={i}
          src={`images/destress/ExercisePage/ExercisePageGrass/Union-${imageNum}.png`}
          className={styles.grassImage} 
          style={{ 
            left: `${position}%`, 
            width: `${100 / numGrassImages * 3}%`,
            zIndex: i % 2 === 0 ? 2 : 3
          }} 
          alt="grass" 
        />
      );
    }
    return grassImages;
  };

  return (
    <div className={styles.pageContainer} id="exercisesection">
      <div className={styles.container}>
        <h1 className={styles.title}>Check out these Exercises!</h1>
        <div className={styles.scrollableContainer}>
          {exercises.map((exercise, index) => (
            <div key={index} className={styles.dropdown}>
              <button
                className={`${styles.dropdownBtn} ${openDropdowns[index] ? styles.activeBtn : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(index);
                }}
              >
                {exercise.name}
                <svg
                  className={`${styles.chevron} ${openDropdowns[index] ? styles.rotate : ''}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#5279a2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {openDropdowns[index] && (
                <div className={styles.dropdownContent}>
                  <div className={styles.exerciseInstructions}>
                    <div className={styles.exerciseImageContainer}>
                      <img src={exercise.imageSrc} alt={`${exercise.name} Image`} style={{ width: '80px' }} />
                    </div>
                    <div className={styles.instructionSteps}>
                      {exercise.instructions.map((step, stepIndex) => (
                        <div key={stepIndex} className={styles.instructionStep}>
                          <span className={styles.stepNumber}>{step.step}</span>
                          <span className={styles.stepText}>{step.instruction}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.grassContainer}>
        {renderGrassImages()}
      </div>
    </div>
  );
}
