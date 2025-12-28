import ExerciseSection from "../_components/destress/ExerciseSection/ExerciseSection.jsx";
import styles from "./page.module.scss";
import Breathe from "../_components/destress/Breathe/Breathe";
import Hero from "../_components/common/Hero/Hero";
import Footer from "../_components/common/Footer/Footer";
import RelaxingSounds from "../_components/destress/RelaxingSounds/RelaxingSounds.jsx";
import QuoteBanner from "../_components/destress/QuoteBanner/QuoteBanner.jsx";


export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        title="De-Stress with Us"
        subtitle="Breathe, relax, reset"
      />
      <Breathe />
      <QuoteBanner bannerNumber={1} />
      <RelaxingSounds/>
      <QuoteBanner bannerNumber={2} />
      <ExerciseSection/>
      <Footer variant="De-Stress" />
    </main>
  );
}