import React from 'react';
import './AboutSection.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { Admin } from '../../utils/constants';
import { parseBoldText } from '../../utils/functions';

function AboutSection() {
    return (
        <div id='about' className='about section'>
            <h1>About Me</h1>
            <p id="user-detail-intro">
                {parseBoldText(Admin.aboutSection.about)}
                <a href="#contact" className='contactMe'>{Admin.aboutSection.contact}</a>
            </p>
            <div className='education_card'>
                <h2>Education</h2>
                <Timeline
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.05,
                        },
                    }}
                >
                    {Admin.educationDetails.map((item, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent />
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color={item.color} />
                                {index < Admin.educationDetails.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='education_box'>
                                    <h2>{item.title}</h2>
                                    <p>{item.institution}</p>
                                    <p>{item.duration}</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </div>
    );
}

export default AboutSection;
