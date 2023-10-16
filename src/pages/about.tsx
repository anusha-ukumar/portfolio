import Head from 'next/head'
import Greeting from "../components/Greeting";
import Navigation from "@/components/Navigation";
import IconLinks from "@/components/IconLinks";
import text from "../constants/text";
import styles from "../styles/Page.module.css";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout currentTabIndex={0}>
         <Head>
        <link rel="icon" href="/favicon.png" />
        </Head>
      <div className={styles["about-conainter"]}>
        <Greeting />
        <div className={styles["text-container"]}>{text.aboutMe}</div>
      </div>
    </Layout>
  );
};

export default About;
