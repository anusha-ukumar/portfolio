import { useState } from 'react';
import ExperienceTimeline from "@/components/Timeline";
import styles from "../styles/Page.module.css";
import Layout from "@/components/Layout";
import Content from "@/components/Content";
import ExperienceDescription from "@/components/ExperienceDescription";

const Experience = () => {
    const [experienceId, setExperienceId] = useState("default");
  return (
    <Layout currentTabIndex={1}>
      <div className={styles["experience-conainter"]}>
        <div>
        <ExperienceTimeline  setExperienceId={setExperienceId}/>
        <div className={styles['experience-extra-links']}
            onClick={()=> setExperienceId("hobbyproject")}
        >
            <div className={styles['experience-extra-links-icon']}></div>
            Hobby projects</div>
        </div>
        <Content>
            <ExperienceDescription experienceId={experienceId} />
        </Content>
      </div>
      
    </Layout>
  );
};

export default Experience;
