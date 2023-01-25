import React from 'react';
import Project from '../Project';
// Import image URLs for project covers
import workoutTrackerImg from '../../assets/workout-tracker-img.png';
import wordLifeImg from '../../assets/word-of-my-life-img.png';
import techBlogImg from '../../assets/tech-blog-img.png';
import textEditorImg from '../../assets/text-editor-img.png';
import weatherDashboardImg from '../../assets/weather-dashboard-img.png';
import codingQuizImg from '../../assets/coding-quiz-img.png';

// Information about each project (i.e. title, links, images)
const projects = [
  {
    id: 1,
    title: 'Workout Tracker',
    deployed: 'https://workout-tracker-2023.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/workout-tracker',
    image: workoutTrackerImg
  },
  {
    id: 2,
    title: 'Word of My Life',
    deployed: 'https://avanimuchhala.github.io/word-of-the-day-project/',
    github: 'https://github.com/AvaniMuchhala/word-of-the-day-project',
    image: wordLifeImg
  },
  {
    id: 3,
    title: 'Tech Blog',
    deployed: 'https://avani-tech-blog.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/tech-blog',
    image: techBlogImg
  },
  {
    id: 4,
    title: 'J.A.T.E (Text Editor)',
    deployed: 'https://warm-lake-93524.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/text-editor',
    image: textEditorImg
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    deployed: 'https://avanimuchhala.github.io/weather-dashboard/',
    github: 'https://github.com/AvaniMuchhala/weather-dashboard',
    image: weatherDashboardImg
  },
  {
    id: 6,
    title: 'Coding Quiz',
    deployed: 'https://avanimuchhala.github.io/coding-quiz/',
    github: 'https://github.com/AvaniMuchhala/coding-quiz',
    image: codingQuizImg
  }
];

export default function Portfolio() {
  // Return Portfolio header, and section with all Project components
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Portfolio</h1>
      <section className="row col-10 d-flex flex-row flex-wrap justify-content-center">
        {/* For each object in projects array, render Project component passing in title, links, and image URL in the props */}
        {projects.map(project => (
          <Project title={project.title} deployed={project.deployed} github={project.github} image={project.image} key={project.id} />
        ))}
      </section>
    </div>
  );
}
