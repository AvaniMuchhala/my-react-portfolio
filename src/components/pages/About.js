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
  return (
    <div className="d-flex flex-column about-div">
      <h1 style={styles.headerStyle}>About Me</h1>
      <section id="about-section">
        <img id="profile-img" alt="profile" src={profilePic}></img>
        <p id="about-para">
          Hi! My name is Avani Muchhala. I graduated from Case Western Reserve University in May 2022 with
          a B.S.E. in Biomedical Engineering and a minor in Computer Science. Throughout college, I was involved
          in medical imaging research in which I helped develop machine learning models for medical image
          analytics used for disease diagnosis and treatment evaluation. Currently, I am enrolled in University of Pennsylvania's
          Coding Bootcamp to build a stronger foundation in coding while expanding my skill set as I explore the
          field of web development. Please check out my portfolio and feel free to contact me!
        </p>
      </section>
    </div>
  );
}
