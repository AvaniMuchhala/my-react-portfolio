import React from 'react';
import resumePDF from '../../assets/resume.pdf';
import '../../styles/Resume.css';

export default function Resume() {
    return (
        <div className="d-flex flex-column align-items-center">
            <a href={resumePDF} target="_blank"><button className="btn resume-btn"><h4>View My Resume</h4></button></a>

            <section className="col-10 col-xl-6 skills">
                <h3>Skills:</h3>
                <ul className="p-0">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS/Bootstrap</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>MATLAB</li>
                    <li>GitHub/Git</li>
                </ul>
            </section>

        </div>
    );
};