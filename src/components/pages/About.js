import React from 'react';
import profilePic from '../../assets/profile-pic.jpg';
import '../../styles/About.css';

const styles = {
  headerStyle: {
    textAlign: 'center',
    margin: '1rem'
  }
};

export default function About() {
  // Return About header, profile image, and paragraph
  return (
    <div className="d-flex flex-column about-div">
      <h1 style={styles.headerStyle}>About Me</h1>
      <section id="about-section">
        <img id="profile-img" alt="profile" src={profilePic}></img>
        <p id="about-para">
          Hello! I’m Avani Muchhala, a Case Western Reserve University graduate with a B.S.E. in Biomedical Engineering and a minor in Computer Science. My academic and professional journey has spanned several domains of computer science, with a focus on medical imaging research, during which I developed machine learning models for medical image analytics used for disease diagnosis and treatment evaluation. I also completed University of Pennsylvania's Full-stack Web Development Boot Camp. As a former Life Sciences Analyst at Cognizant, I collaborated with product managers, software developers, UX/UI designers, and customers to integrate LabVantage, a laboratory information management system, into agricultural labs. My role involved translating business requirements into user stories, testing products, developing training materials, and delivering customer support.
          <br></br>

          <br></br>
          With my diverse experiences in machine learning, biomedical imaging, product development, and web development, I am passionate about developing software and artificial intelligence tools to advance healthcare diagnostics and patient outcomes. I’m currently interested in pursuing a Master’s in Computer Science to deepen my technical expertise, particularly in machine learning. Feel free to explore my portfolio or reach out—I'd love to connect! 
          <br></br>
        </p>
      </section>
    </div>
  );
}
