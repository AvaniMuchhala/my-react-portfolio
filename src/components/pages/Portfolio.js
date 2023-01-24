import React from 'react';
import Project from '../Project';
import projectImage from '../../images/web_dev_background.jpg';

const projects = [
  {
    id: 1,
    title: 'Workout Tracker',
    deployed: 'https://workout-tracker-2023.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/workout-tracker',
    image: projectImage
  },
  {
    id: 2,
    title: 'Word of My Life',
    deployed: 'https://avanimuchhala.github.io/word-of-the-day-project/',
    github: 'https://github.com/AvaniMuchhala/word-of-the-day-project',
    image: projectImage
  },
  {
    id: 3,
    title: 'Tech Blog',
    deployed: 'https://avani-tech-blog.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/tech-blog',
    image: projectImage
  }
];

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <section>
        {projects.map(project => (
          <Project title={project.title} deployed={project.deployed} github={project.github} image={project.image} key={project.id} />
        ))}
      </section>
    </div>
  );
}
