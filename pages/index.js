import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Febriqgal from "../public/febriqgal.jpg";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Pasisia Developers</title>
        <meta name="description" content="Pasisia Developers" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.container}>
        <section className="bg-slate-400 rounded-xl mb-4">
          <main className={styles.main}>
            <h1>Home</h1>
          </main>
        </section>
        <section id="team" className="bg-slate-400 rounded-xl">
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
                {"Febriqgal Purnama, S.Kom (OTW🤣)"}
              </h1>
              <h2 className="text-slate-300">Web & Mobile App Developer</h2>
            </div>
          </div>
        </section>
        <section id="project" className="bg-slate-400 rounded-xl">
          <main className={styles.main}>
            <h1>Project</h1>
          </main>
        </section>
      </div>
    </Layout>
  );
}
