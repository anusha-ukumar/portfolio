import { get } from "lodash";
import { experienceDescription } from "@/constants/experienceDescription";
import styles from "./index.module.css";

type Props = {
  experienceId: string;
};

type Experience =
  | {
      key: string;
      heading?: string | undefined;
      description: string;
      timeline?: string | undefined;
      location?: string | undefined;
      projects?: any | undefined;
    }
  | undefined;

type Project = {
  name: string;
  bullets: string[];
  skills: string[];
  linkToSource?: string | undefined;
  linkToSite?: string | undefined;
};

const ExperienceDescription = ({ experienceId }: Props): JSX.Element => {
  const experience: Experience = experienceDescription.find(
    (exp) => exp.key === experienceId
  );
  return (
    <div>
      {get(experience, "heading", null) && (
        <div className={styles["heading-container"]}>
          {experience?.heading}
          {get(experience, "timeline", null) && (
            <div className={styles["timeline"]}>{experience?.timeline}</div>
          )}
        </div>
      )}
      {get(experience, "location", null) && (
        <div className={styles["location"]}>{experience?.location}</div>
      )}
      {get(experience, "description")}

      {get(experience, "projects", null) && (
        <div className={styles["location"]}>
          {experience?.projects.map((project: Project, idx: number) => {
            const skills = project.skills.join(", ");
            const projectsLength = experience.projects.length;

            return (
              <div key={`project-${idx}`} className={styles["project"]}>
                <span className={styles["project-title"]}>{project.name}</span>
                <div className={styles["list"]}>
                  <ul>
                    {project.bullets.map((bullet: string, idx: number) => {
                      return <li key={`li-${idx}`}>{bullet}</li>;
                    })}
                  </ul>
                </div>
                {get(project, "linkToSource", null) && (
                  <div className={styles["links"]}>
                    <a target="_blank" href={project.linkToSource}>
                      Link to source code
                    </a>
                    {get(project, "linkToSite", null) && (
                      <a target="_blank" href={project.linkToSite}>
                        Link to website
                      </a>
                    )}
                  </div>
                )}
                <span className={styles["skills"]}>
                  {`Key skills: ${skills}`}
                </span>
                {idx != projectsLength - 1 && (
                  <div className={styles["separator"]} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ExperienceDescription;
