import React from "react";
import "./hero.css";
import dark_arrow from "../../assets/arrow.svg";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Shaping Brighter Futures Through Quality Education</h1>
        <p>
          At Edu Learning, we are committed to empowering learners with the
          knowledge and skills to succeed in a rapidly changing world. Join us
          in making a difference, one student at a time.
        </p>
        <button className="btn hover-btn">
          Explore More <img className="white-arrow"src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
