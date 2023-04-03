import React from 'react';
import Project from '../Project';
// Import image URLs for project covers
import journeyJournalsImg from '../../assets/journey-journals-img.png';
import workoutTrackerImg from '../../assets/workout-tracker-img.png';
import wordLifeImg from '../../assets/word-of-my-life-img.png';
import techBlogImg from '../../assets/tech-blog-img.png';
import textEditorImg from '../../assets/text-editor-img.png';
import weatherDashboardImg from '../../assets/weather-dashboard-img.png';

// Information about each project (i.e. title, links, images)
const projects = [
  {
    id: 1,
    title: 'Journey Journals',
    deployed: 'https://journey-journals-2023.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/journey-journals',
    image: journeyJournalsImg,
    summary: 'Social media platform for travelers to post about their adventures, interact with other users\' posts on their feed, and follow/block and message other users',
    tools: 'MERN Stack: MongoDB/Mongoose, Express.js, React.js, Node.js, GraphQL; Cloudinary API'
  },
  {
    id: 2,
    title: 'Workout Tracker',
    deployed: 'https://workout-tracker-2023.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/workout-tracker',
    image: workoutTrackerImg,
    summary: 'Web app for users to log and track their workouts and retrieve exercise recommendations to help meet personal fitness goals',
    tools: 'HTML, CSS/Bootstrap, JavaScript, Node.js, Express.js, MySQL/Sequelize, Handlebars.js'
  },
  {
    id: 3,
    title: 'Word of My Life',
    deployed: 'https://avanimuchhala.github.io/word-of-my-life/',
    github: 'https://github.com/AvaniMuchhala/word-of-my-life',
    image: wordLifeImg,
    summary: 'App that generates random word of the day or allows users to search any word, and displays info and related media about that word to make learning new words fun',
    tools: 'HTML, CSS/Bulma, JavaScript, APIs: Wordnik, Merriam Webster, Movie Database, Open Library, RAWG Video Games'
  },
  {
    id: 4,
    title: 'Tech Blog',
    deployed: 'https://avani-tech-blog.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/tech-blog',
    image: techBlogImg,
    summary: 'CMS-style blog site for developers to publish their tech blogs and comment on others\' posts. Place for developers to learn more about technical concepts, stay up-to-date with new technologies, and share knowledge with tech community',
    tools: 'HTML, CSS/Bootstrap, JavaScript, Node.js, Express.js, MySQL/Sequelize, Handlebars.js'
  },
  {
    id: 5,
    title: 'J.A.T.E (Text Editor)',
    deployed: 'https://warm-lake-93524.herokuapp.com/',
    github: 'https://github.com/AvaniMuchhala/text-editor',
    image: textEditorImg,
    summary: 'Text editor for creating and storing notes or code snippets regardless of Internet connection. Easily access your saved notes at any time!',
    tools: 'Node.js, Express.js, Web Manifest, Service Workers, Cache API, IndexedDB'
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    deployed: 'https://avanimuchhala.github.io/weather-dashboard/',
    github: 'https://github.com/AvaniMuchhala/weather-dashboard',
    image: weatherDashboardImg,
    summary: 'Displays current weather and 5-day forecast for any city that user searches and saves any searched cities. Built so that users can plan a trip based on the weather outlook in their city.',
    tools: 'HTML, CSS, JavaScript, OpenWeatherMap API, Day.js'
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
