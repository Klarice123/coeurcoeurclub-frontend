import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CoeurCoeurClub</title>
        <meta name="coeurcoeurclub" content="description du concept coeurcoeur club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
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
      </main>
    </>
  );
}
