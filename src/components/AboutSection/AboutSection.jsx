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

                <h2>Education</h2>
                <div>
                    {/* timeline starts here */}
                    <Timeline
                        sx={{
                            [`& .${timelineOppositeContentClasses.root}`]: {
                                flex: 0.05,
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
                                    <h2>Full Stack Web Development</h2>
                                    <p>Masai School, Banglore</p>
                                    <p>March 20223 - Present | Remote</p>
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
                                    <h2>B.Sc - Maths and Physics</h2>
                                    <p>CSJM University, Kanpur</p>
                                    <p>July 2015 - Jun 2018</p>
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
                                    <h2>Intermediate (12th)</h2>
                                    <p>Government Inter College Lakhimpur-kheri</p>
                                    <p>July 2013 - Jun 2015</p>
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