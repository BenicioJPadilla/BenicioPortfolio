import styles from "./WhatWeDo.module.scss";

export default function WhatWeDo() {
  const items = [
    {
      icon: "/images/WhatWeDo/Lily.svg",
      alt: "Lily icon",
      text: "Weekly hang-outs to talk, connect, eat, etc.",
    },
    {
      icon: "/images/WhatWeDo/Heart.svg",
      alt: "Heart icon",
      text: "Gain a mentor and support group based on shared interests",
    },
    {
      icon: "/images/WhatWeDo/Cloud.svg",
      alt: "Cloud icon",
      text: "Serve the Davis community and other students",
    },
    {
      icon: "/images/WhatWeDo/Flower.svg",
      alt: "Flower icon",
      text: "Professional development opportunities",
    },
  ];

  return (
    <section className={styles.section} id="whatwedo">
      <h2 className={styles.heading}>What We Do</h2>

      <div className={styles.grid}>
        {items.map(({ icon, text, alt }, idx) => (
          <div key={idx} className={styles.card}>
            <img src={icon} alt={alt} className={styles.icon} />
            <p className={styles.text}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
