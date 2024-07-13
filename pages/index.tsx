import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import ContactForm from "@/components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CoeurCoeurClub</title>
        <meta name="coeurcoeurclub" content="description du concept coeurcoeur club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <section className={`${styles.above_the_fold}`}>
          <section className="image-container">
            <img
              src={"/images/coeur-rouge-vide.png"}
              alt={"coeur à 3 bosses"}
              className={`${styles.image} ${styles.coeur}`}
            />
            <img
              src={"/images/lettrage-noir.png"}
              alt={"coeurcoeurclub"}
              className={`${styles.image} ${styles.lettrage}`}
            />
          </section>
        </section>
        <section className={`${styles.below_the_fold}`}>
          <div className={`${styles.bloc_adresse}`}>
              <p>RÉSIDENCE D'ARTISTES</p>
              <p>Tattoo - Coiffure - Textile - Illustration</p>
            <div className={`${styles.adresse}`}>
              <p>COEUR COEUR CLUB</p>
              <p>12 rue Maubec, 64100 Bayonne</p>
            </div>
          </div>
          <div className={`${styles.bloc_contact}`}>
          <ContactForm/>
          </div>
        </section>
      </main>
    </>
  );
}
