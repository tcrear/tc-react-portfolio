import React from 'react';
import '../styles/aboutme.css';
import headshot from '../image/headshot.jpg';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img src={headshot} alt="headshot" className="headshot"></img>
      <p>Hi, I'm Tammie. I was born and raised in Minnesota. Graduated from Winona State University in 2014 with a bachelors degree in Communication Studies and a minor in Sociology.</p><br></br> 
      <p>My previous experience includes work in the financial and insurance industries providing customer service and product knowledge to internal and external stakeholders.</p><br></br> 
      <p>I chose to leave the corporate world and follow my passion to learn coding after the pandemic gave me much needed time to explore the depths of my knowledge and where I wanted to learn more in technology.</p><br></br> 
    </div>
  );
}
