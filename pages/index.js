import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Pasisia Developers</title>
        <meta name="description" content="Pasisia Developers" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Home</h1>
        </main>
      </div>
    </Layout>
  );
}
