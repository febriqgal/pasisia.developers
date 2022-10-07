import React from "react";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ pageTittle, children }) {
  return (
    <>
      <Head>
        <title>{pageTittle}Pasisia Developers</title>
        <meta name="description" content="Pasisia Developers" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar/>
      <div>{children}</div>
      <Footer />
    </>
  );
}
