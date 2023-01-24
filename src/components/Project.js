import React from 'react';

export default function Project(props) {
    // return single card with project title, github link, deployed link, image
    return (
        <section className="card">
            <img src={props.image} class="card-img" alt="project" style={{height: '200px', width: '500px'}}></img>
            <section className="card-img-overlay d-flex flex-column">
                <h1>{props.title}</h1>
                <a href={props.github}>GitHub Link</a>
                <a href={props.deployed}>Deployed Link</a>
            </section>
        </section>
    );
};