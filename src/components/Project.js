import React from 'react';
import '../styles/Project.css';

export default function Project(props) {
    // Return single card with project image cover
    return (
        <section className="card col-lg-5 m-3 p-0 border-0 rounded">
            <img src={props.image} className="card-img" alt="project-cover"></img>
            {/* Each card will have hidden box with project title (linked to deployed app) and Github icon (linked to GitHub repo) */}
            <div className="middle d-flex flex-column align-items-center justify-content-center p-2">
                <section className="d-flex">
                    <a href={props.deployed} target="_blank" className="links"><h3 className="text"><b>{props.title}</b></h3></a>
                    <a href={props.github} target="_blank" className="links"><i className="fa-brands fa-github github-link mt-0"></i></a>
                </section>
                <p>{props.summary}</p>
                <p>Tools: {props.tools}</p>
            </div>
        </section>
    );
};