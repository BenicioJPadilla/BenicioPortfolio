import styles from "./page.module.scss";
import Envelope from "../_components/contact/Envelope/Envelope";
import Hero from "../_components/common/Hero/Hero";
import Footer from "../_components/common/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        title=""
        subtitle=""
      />
      <Envelope />
      <Footer />
    </main>
  );
}