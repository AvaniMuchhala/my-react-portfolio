import React from 'react';
import '../styles/Project.css';

export default function Project(props) {
    // return single card with project title, github link, deployed link, image
    return (
        <section className="card col-lg-5 m-3 p-0 border-0 rounded">
            <img src={props.image} className="card-img" alt="project-cover"></img>
            {/* <section className="card-img-overlay d-flex flex-column"> */}
                {/* <h1>{props.title}</h1> */}
                {/* <a href={props.github}>GitHub Link</a> */}
                {/* <a href={props.deployed}>Deployed Link</a> */}
                <div className="middle d-flex flex-column align-items-center justify-content-center px-2">
                    <a href={props.deployed} target="_blank" className="links"><h3 className="text">{props.title}</h3></a>
                    <a href={props.github} target="_blank" className="links"><i className="fa-brands fa-github github-link mt-0"></i></a>
                </div>
            {/* </section> */}
            
        </section>
    );
};