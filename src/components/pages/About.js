import React from 'react';
import profilePic from '../../assets/profile-pic.jpg';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img alt="profile" src={profilePic}></img>
      <p>
        Hi! My name is Avani Muchhala. I graduated from Case Western Reserve University in May 2022 with
        a B.S.E. in Biomedical Engineering and a minor in Computer Science. Throughout college, I was involved
        in medical imaging research in which I helped develop machine learning models for medical image
        analytics used for disease diagnosis and treatment evaluation. Currently, I am enrolled in the Penn LPS
        Coding Bootcamp to build a stronger foundation in coding while expanding my skill set as I explore the
        field of web development. Please check out my portfolio and feel free to contact me!
      </p>
    </div>
  );
}
