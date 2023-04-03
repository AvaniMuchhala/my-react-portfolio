import React from 'react';
import resumePDF from '../../assets/resume-v3.pdf';
import '../../styles/Resume.css';

export default function Resume() {
    // Return div with button linked to downloadable resume and list of skills
    return (
        <div className="d-flex flex-column align-items-center">
            <a href={resumePDF} target="_blank"><button className="btn resume-btn"><h2 className="m-0">View My Resume</h2></button></a>

            <section className="col-10 col-xl-6 skills">
                <h3><b>Skills:</b></h3>
                <ul className="p-0">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS/Bootstrap</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>GraphQL</li>
                    <li>Java</li>
                    <li>Jest Unit Testing</li>
                    <li>MATLAB</li>
                    <li>Git/GitHub</li>
                </ul>
            </section>

        </div>
    );
};