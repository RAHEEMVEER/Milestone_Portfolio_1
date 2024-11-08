import React from "react";
import "../style.css";
import Image from "next/image";
import myPic from "../../public/images/my-pic.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <div className="image-shape">
          <Image src={myPic} alt="My Image" />
        </div>
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer!</h3>
        <p>
          I am a dedicated frontend developer from Pakistan, passionate about
          creating intuitive and dynamic user interfaces. Proficient in HTML,
          CSS, and JavaScript, I strive to deliver high-quality, responsive
          websites. I enjoy learning new technologies and improving my skills to
          provide exceptional user experiences.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
}