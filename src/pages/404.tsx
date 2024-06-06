import Head from "next/head";

import styles from "@/styles/404.module.css";
import useBlobity from "blobity/lib/react/useBlobity";
import { initiaBlobityOptions } from ".";



export default function Home() {
    useBlobity(initiaBlobityOptions as any);
    return (
    <>
        <Head>
            <title>luna</title>
            <meta name="description" content="catsonluna :3" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div>
            <h1 className={styles.title}>404</h1>
            <p className={styles.subtitle}>You're not supposed to be here silly </p>
            <a href="/" className={styles.link}>Go back</a>
          </div>
        </div>
      </main>
    </>
  );
}