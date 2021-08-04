import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Search</title>
        <meta name="description" content="Movie Search app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1>Movie Search</h1>
      </main>

      <footer className={styles.footer}>
        <h3>Created By Pattarapon Siwapornchai</h3>
      </footer>
    </div>
  );
}
