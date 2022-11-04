import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";
import Febriqgal from "../../public/febriqgal.jpg";
import Image from "next/image";
import Head from "next/head";

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Team - Pasisia Developers</title>
        <meta name="description" content="Pasisia Developers" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.main}>
        <div className="h-[200px] w-[200px] rounded-full overflow-clip">
          <Image
            className="hover:scale-125 duration-1000"
            src={Febriqgal}
            alt="febriqgal"
          />
        </div>
        <div className="text-center mt-5">
          <h1 className="hover:underline font-bold text-xl text-slate-700">
            Febriqgal Purnama, S.Kom
          </h1>
          <h2 className="text-slate-400">Web & Mobile App Developer</h2>
        </div>
      </div>
    </Layout>
  );
}
