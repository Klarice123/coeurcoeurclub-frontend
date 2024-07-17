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
          <div className={`${styles.bloc_gauche}`}>
              <div className={`${styles.titre_container}`}>
                  <h1 className={`${styles.h1}`}>
                    RÉSIDENCE D&apos;ARTISTES
                  </h1>
                  <p className={`${styles.font_m}`}>
                    Tattoo - Coiffure - Textile - Illustration
                  </p>
              </div>
              <div className={`${styles.coordonnees}`}>
                <p className={`${styles.font_m}`}>
                  COEUR COEUR CLUB
                </p>
                <p className={`${styles.font_r}`}>
                  12 rue Maubec, 64100 Bayonne
                </p>
                  <a href="https://www.instagram.com/coeurcoeur.club/" target="_blank" className={`${styles.instagram_container}`}>
                    <img
                      src={"/images/instagram.png"}
                      alt={"logo instagram"}
                      className={`${styles.image_instagram}`}
                    />
                    <p className={`${styles.instagram_link}`}>@coeurcoeur.club</p>
                  </a>
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
