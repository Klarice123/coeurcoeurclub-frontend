import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Contact from "@/components/Contact";
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
        <Header/>
        <section id='welcome'>welcome</section>
        <section id='concept'>concept COUCOUCOU</section>
        <section id='team'>team</section>
        <Image src={"../images/coeur-rouge-vide.png"} alt={""}></Image>
        <Contact/>
      </main>
    </>
  );
}
