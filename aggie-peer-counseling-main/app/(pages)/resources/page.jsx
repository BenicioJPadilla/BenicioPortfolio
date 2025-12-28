"use client";
import styles from "./page.module.scss";
import Hero from "../_components/common/Hero/Hero";
import ResourceCard from "@/app/(pages)/_components/resources/ResourceCard/ResourceCard";
import Directory from "@/app/(pages)/_components/resources/Directory/Directory";
import { cards } from "./resourcesData"
import Footer from "../_components/common/Footer/Footer";


export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        backgroundImage="/images/noon2.png"
        title="Resources"
        subtitle="Support made just for you"
      />
      <div className={styles.resourcesContainer}>
        
        <div className={styles.resourcesBody}>
          <Directory textData={cards} whereToScroll={(id) => {
            const scrollTo = document.getElementById(id);
            scrollTo.scrollIntoView({ behavior: 'smooth' });
          }} />


          <div className={styles.cardContainer}>
            <div className={styles.column}>
              {cards.map((card, index) => (
                index % 2 == 0 &&
                <div key={index} id={card.id}>
                  <ResourceCard data={card} />
                </div>
              ))}
            </div>
            <div className={styles.column}>
              {cards.map((card, index) => (
                index % 2 == 1 &&
                <div key={index} id={card.id}>
                  <ResourceCard data={card} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      <Footer variant="Resources" />
    </main>
  );
}
