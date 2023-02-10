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
          Hi! My name is Avani Muchhala. I graduated from Case Western Reserve University in May 2022 with
          a B.S.E. in Biomedical Engineering and a minor in Computer Science. Throughout college, I was involved
          in medical imaging research in which I helped develop machine learning models for medical image
          analytics used for disease diagnosis and treatment evaluation.
          <br></br>

          <br></br>
          After college ended, I wanted to delve deeper into computer science, since a lot of my work in college required some form of programming skills. However, I felt like there were some gaps in my knowledge. Thus, I enrolled in University of Pennsylvania's Full-stack Web Development Boot Camp and just recently graduated in February 2023. The 3-month boot camp was a fast-paced learning environment where I built a stronger foundation in coding while exploring a completely different subfield of computer science, was exposed to various tools/technologies, and learned how to pick up new skills quickly. 
          <br></br>

          <br></br>
          I'm currently seeking full-time software developer positions. Looking for a way to combine my interests in technology, web development, and healthcare to leave a lasting impact. Hoping my problem-solving mindset, attention to detail, and initiation will allow me to do so. Please check out my portfolio and feel free to contact me!
        </p>
      </section>
    </div>
  );
}
