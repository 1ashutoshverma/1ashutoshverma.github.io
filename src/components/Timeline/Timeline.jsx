"use client";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Styles from "./Timeline.module.css";
export const TimelineComponent = ({ details, title, type = "EDUCATION" }) => {
  return (
    <div className={Styles.card}>
      <h2>Education</h2>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.05,
          },
        }}
      >
        {details.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent />
            <TimelineSeparator>
              <TimelineDot variant="outlined" color={item.color} />
              {index < details.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <div className="education_box">
                <h2>{item.title}</h2>
                <p>{item.place}</p>
                <p>{item.duration}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};
