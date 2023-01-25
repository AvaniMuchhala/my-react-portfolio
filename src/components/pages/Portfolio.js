import React from 'react';
import Project from '../Project';
import projectImage1 from '../../assets/web_dev_background.jpg';
import projectImage2 from '../../assets/horiseon_img.png';

const projects = [
  {
    id: 1,
    title: 'Workout Tracker',
    deployed: 'https://workout-tracker-2023.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/workout-tracker',
    image: projectImage1
  },
  {
    id: 2,
    title: 'Word of My Life',
    deployed: 'https://avanimuchhala.github.io/word-of-the-day-project/',
    github: 'https://github.com/AvaniMuchhala/word-of-the-day-project',
    image: projectImage2
  },
  {
    id: 3,
    title: 'Tech Blog',
    deployed: 'https://avani-tech-blog.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/tech-blog',
    image: projectImage2
  },
  {
    id: 4,
    title: 'Tech Blog',
    deployed: 'https://avani-tech-blog.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/tech-blog',
    image: projectImage1
  },
  {
    id: 5,
    title: 'Tech Blog',
    deployed: 'https://avani-tech-blog.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/tech-blog',
    image: projectImage1
  },
  {
    id: 6,
    title: 'Tech Blog',
    deployed: 'https://avani-tech-blog.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/tech-blog',
    image: projectImage2
  }
];

export default function Portfolio() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Portfolio</h1>
      <section className="row col-10 d-flex flex-row flex-wrap justify-content-center">
        {projects.map(project => (
          <Project title={project.title} deployed={project.deployed} github={project.github} image={project.image} key={project.id} />
        ))}
      </section>
    </div>
  );
}
