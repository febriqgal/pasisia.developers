import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
export default function Projects() {
  return (
    <Layout>
       <Head>
        <title>Project - Pasisia Developers</title>
        <meta name="description" content="Pasisia Developers" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.main}>Project</div>
    </Layout>
  );
}
