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
    image: workoutTrackerImg,
    summary: 'Web app for users to log and track their workouts and retrieve exercise recommendations to help meet personal fitness goals',
    tools: 'HTML, CSS/Bootstrap, JavaScript, Node.js, Express.js, MySQL/Sequelize, Handlebars.js'
  },
  {
    id: 2,
    title: 'Word of My Life',
    deployed: 'https://avanimuchhala.github.io/word-of-my-life/',
    github: 'https://github.com/AvaniMuchhala/word-of-my-life',
    image: wordLifeImg,
    summary: 'App that generates random word of the day or allows users to search any word, and displays info and related media about that word to make learning new words fun',
    tools: 'HTML, CSS/Bulma, JavaScript, multiple third-party APIs'
  },
  {
    id: 3,
    title: 'Tech Blog',
    deployed: 'https://avani-tech-blog.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/tech-blog',
    image: techBlogImg,
    summary: 'CMS-style blog site for developers to publish their tech blogs and comment on others\' posts. Place for developers to learn more about technical concepts, stay up-to-date with new technologies, and share knowledge with tech community',
    tools: 'HTML, CSS/Bootstrap, JavaScript, Node.js, Express.js, MySQL/Sequelize, Handlebars.js'
  },
  {
    id: 4,
    title: 'J.A.T.E (Text Editor)',
    deployed: 'https://warm-lake-93524.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/text-editor',
    image: textEditorImg,
    summary: 'Text editor for creating and storing notes or code snippets regardless of Internet connection. Easily access your saved notes at any time!',
    tools: 'Node.js, Express.js, Web Manifest, Service Workers, Cache API, IndexedDB'
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    deployed: 'https://avanimuchhala.github.io/weather-dashboard/',
    github: 'https://github.com/AvaniMuchhala/weather-dashboard',
    image: weatherDashboardImg,
    summary: 'Displays current weather and 5-day forecast for any city that user searches and saves any searched cities. Built so that users can plan a trip based on the weather outlook in their city.',
    tools: 'HTML, CSS, JavaScript, OpenWeatherMap API, Day.js'
  },
  {
    id: 6,
    title: 'Coding Quiz',
    deployed: 'https://avanimuchhala.github.io/coding-quiz/',
    github: 'https://github.com/AvaniMuchhala/coding-quiz',
    image: codingQuizImg,
    summary: 'Timed quiz on JavaScript fundamentals that stores each player\'s scores. Allow coding bootcamp students to test their knowledge and gauge their progress compared to peers.',
    tools: 'HTML, CSS, JavaScript'
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
          <Project title={project.title} deployed={project.deployed} github={project.github} image={project.image} summary={project.summary} tools={project.tools} key={project.id} />
        ))}
      </section>
    </div>
  );
}
