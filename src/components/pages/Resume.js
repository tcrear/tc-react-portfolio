import React from 'react';
import '../styles/resume.css';

const styles = {
  sectionStyles: {
    background: '#155e6b;',
  },
};


function Resume() {
  return (  
    <section style={styles.sectionStyles} className="section">
      <a href="https://drive.google.com/file/d/1om13BwV2XF488_56YfAZ6QkZchVgjKYQ/view?usp=sharing">See More</a>
      <h2>Tech Stack</h2>
        <p>Languages: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL</p><br></br>
        <p>Applications: GitHub, MongoDB, MySQL</p><br></br>
        <p>Tools: Express, React, Node, Handlebars, Query, Bootstrap</p><br></br>
      <h2>Education</h2>
        <p>Certificate, Full Stack Web Development University of Minnesota - Minneapolis, MN</p><br></br>
        <p>Bachelor of Arts, Communication Winona State University - Winona, MN</p><br></br>
        <p>Associate of Arts - Inver Hills Community College - Inver Grove Heights, MN</p><br></br>
    </section>
  );
}

export default Resume;
