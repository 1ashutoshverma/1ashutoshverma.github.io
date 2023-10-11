import React from 'react'
import "./AboutSection.css"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';


function AboutSection() {
    return (
        <div id='about' className='about section'>
            <h1>About Me</h1>
            <p>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
            </p>
            <div className='education_card'>

                <h2>Eduction</h2>

                <div>
                    {/* timeline starts here */}
                    <Timeline
                        sx={{
                            [`& .${timelineOppositeContentClasses.root}`]: {
                                flex: 0.2,
                            },
                        }}
                    >
                        <TimelineItem>
                            <TimelineOppositeContent />
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='education_box'>
                                    <h2>hello</h2>
                                    <h2>hello</h2>
                                    <h2>hello</h2>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent />
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="secondary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='education_box'>
                                    <h2>hello</h2>
                                    <h2>hello</h2>
                                    <h2>hello</h2>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent />
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="primary" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className='education_box'>
                                    <h2>hello</h2>
                                    <h2>hello</h2>
                                    <h2>hello</h2>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    {/* timeline Ends here */}
                </div>
            </div>

        </div>
    )
}

export default AboutSection