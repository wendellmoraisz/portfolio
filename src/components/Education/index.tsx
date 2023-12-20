
import React from "react"
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Container, Wrapper, Title, TimelineSection } from "./EducationStyles";
import { Educations } from "../../utils/data/constants";
import EducationCard from "../Cards/EducationCard";

const EducationSection = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Educação</Title>
        <TimelineSection>
          <Timeline>
            {Educations.map((education, index) => (
              <TimelineItem >
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== Educations.length - 1 && <TimelineConnector style={{ background: "#854CE6" }} />}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>

        </TimelineSection>
      </Wrapper>
    </Container>
  )
}

export default EducationSection;