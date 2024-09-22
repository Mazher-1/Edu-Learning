import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Inspiring the Leaders of Tomorrow</h2>
        <p>
          At Edu Learning, we believe in unlocking the full potential of every
          learner. Our mission is to provide innovative, world-class education
          that prepares students for the challenges of tomorrow.
        </p>

        <p>
          Through personalized learning experiences, we empower students to grow
          their skills and knowledge in a constantly changing environment. Our
          goal is to inspire curiosity and a lifelong love of learning.
        </p>

        <p>
          Join us at Edu Learning as we work together to shape a brighter future
          by nurturing creativity, critical thinking, and leadership in our
          students.
        </p> 
      </div>
    </div>
  );
};

export default About;
