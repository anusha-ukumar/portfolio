import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import experienceTimeline from "@/constants/experienceTimeline";
import styles from "./index.module.css";

const ExperienceTimeline = ({ setExperienceId }) => {
  return (
    <Timeline position="alternate">
      {experienceTimeline.map((item, idx) => {
        return (
          <TimelineItem key={`timeline-${idx}`}>
            <TimelineOppositeContent>
              <div className={styles["timeline-opposite-item"]}>
                {item.oppositeContentLabel}
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "var(--dark-gray)" }} />
              {/* <TimelineDot /> */}
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <div
                className={styles["timeline-item"]}
                onClick={() => {
                  setExperienceId(item.id);
                }}
              >
                {item.contentLabel}
              </div>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default ExperienceTimeline;
