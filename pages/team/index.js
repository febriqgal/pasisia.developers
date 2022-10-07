import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

export default function index() {
  return (
    <Layout pageTittle={"Team - "}>
      <div className={styles.main}>
        <h1>Team</h1>
      </div>
    </Layout>
  );
}
