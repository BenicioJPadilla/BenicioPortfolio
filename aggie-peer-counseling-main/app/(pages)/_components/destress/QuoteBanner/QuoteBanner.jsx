import React from "react";
import styles from "./QuoteBanner.module.scss";

const QuoteBanner = ({ bannerNumber }) => {
  const isBanner1 = bannerNumber === 1;

  const basePath = isBanner1
    ? "/images/ExercisePageBanner1/ExercisePageBanner1"
    : "/images/ExercisePageBanner2/ExercisePageBanner2";

  const vectors = [1, 2, 3, 4, 5].map(
    (num) => `${basePath}/vector${num}.png`
  );

  return (
    <div className={[styles.banner, isBanner1 ? styles.background1 : styles.background2].join(' ')}>
      {isBanner1 ? <p className={styles.text}>Sometimes the most productive thing you can do is relax and recharge</p> :  <p className={styles.text}>You are worthy of happiness and peace of mind</p>}
    </div>
  );
};

export default QuoteBanner;
