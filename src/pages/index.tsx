import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/parallax";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <>
      <Head>testing</Head>
      <main className={styles.main}>
        <div>
          <Banner />
          <Intro />
        </div>
      </main>
    </>
  );
}
