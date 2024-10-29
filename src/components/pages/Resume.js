import React from 'react';
import resumePDF from '../../assets/cv-1.pdf';
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
                    <li>CSS</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>GraphQL</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>MATLAB</li>
                    <li>Git/GitHub</li>
                    <li>Azure DevOps</li>
                    <li>LabVantage LIMS</li>
                    <li>3D Slicer Software</li>
                </ul>
            </section>

        </div>
    );
};