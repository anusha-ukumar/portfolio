
import styles from "../styles/Page.module.css";
import Layout from "@/components/Layout";
import Content from "@/components/Content";
import Copy from "@/components/Copy";
import contact from "@/constants/contact";

const Experience = () => {
  return (
    <Layout currentTabIndex={2}>
      <div className={styles["experience-conainter"]}>
        <Content>
          <div>
            Please drop an email to the following address
            <Copy text={contact.email} />
            <a className={styles['link']} target="_blank" href={contact.linkedin}>
              LinkedIn
            </a>
            <a className={styles['link']} target="_blank" href={contact.github}>
              GitHub
            </a>
          </div>
        </Content>
      </div>
    </Layout>
  );
};

export default Experience;
