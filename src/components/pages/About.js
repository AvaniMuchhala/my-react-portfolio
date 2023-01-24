import React from 'react';
import profilePic from '../../assets/profile-pic.jpg';
import '../../styles/About.css';

const styles = {
  headerStyle: {
    textAlign: 'center',
    margin: '1rem'
  },
  imageStyle: {
    borderRadius: '50%',
    border: 'solid 5px',
    overflow: 'hidden',
    height: '10rem',
    textAlign: 'center',
    // width: '10rem'
    display: 'block',
    margin: 'auto'
  },
  paraStyle: {
    backgroundColor: '#F2E7C9',
    margin: '1.5rem',
    padding: '1.5rem',
    borderRadius: '2rem',
    border: '4px solid'
  }
};

export default function About() {
  return (
    <div>
      <h1 style={styles.headerStyle}>About Me</h1>
      <section>
        <img alt="profile" src={profilePic} style={styles.imageStyle}></img>
        <p style={styles.paraStyle}>
          Hi! My name is Avani Muchhala. I graduated from Case Western Reserve University in May 2022 with
          a B.S.E. in Biomedical Engineering and a minor in Computer Science. Throughout college, I was involved
          in medical imaging research in which I helped develop machine learning models for medical image
          analytics used for disease diagnosis and treatment evaluation. Currently, I am enrolled in the Penn LPS
          Coding Bootcamp to build a stronger foundation in coding while expanding my skill set as I explore the
          field of web development. Please check out my portfolio and feel free to contact me!
        </p>
      </section>
    </div>
  );
}
