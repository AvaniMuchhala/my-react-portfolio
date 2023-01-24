import React from 'react';
import resumePDF from '../../assets/resume.pdf';

export default function Resume() {
    return (
        <div>
            <a href={resumePDF} target="_blank">Resume</a>
        </div>
    );
};