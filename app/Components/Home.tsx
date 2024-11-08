"use client";

import React from 'react';
import { useEffect } from "react";
import "../style.css";
import Image from "next/image";
import myPic from "../../public/images/my-pic.png";
import Typewriter from "typewriter-effect";
import ScrollReveal from "scrollreveal";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const sr = ScrollReveal({
        reset: true,
        distance: "80px",
        duration: 2000,
        delay: 200,
      });

      sr.reveal(".home-content, .heading", { origin: "top" });
      sr.reveal(
        ".home-image, .skills-container, .portfolio-box, .contact form",
        { origin: "bottom" }
      );
      sr.reveal(".home-content h1, .about-image", { origin: "left" });
      sr.reveal(".home-content p, .about-content", { origin: "right" });
    }
  },[]);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hey I'am</h3>
        <h1>Abdul Raheem</h1>
        <h3>And I'm a <span className="multiple-text"><Typewriter options={{strings: ["Web Developer", "Next.JS Developer", "Frontend Developer"], autoStart: true, loop: true, delay: 50, deleteSpeed: 30,}}/></span></h3>
        <p>Creative Front-End Developer Crafting Engaging User Experiences with Modern Web Technologies.</p>
        <div className="social-media">
          <a href="https://www.facebook.com/share/19ZseuZweL/" target="_blank"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/raheem_veer/profilecard/?igsh=cXd0aW56bnFzdzZ5" target="_blank"><i className="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com/in/abdul-raheem-4538452b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className="bx bxl-linkedin"></i></a>
          <a href="https://github.com/RAHEEMVEER" target="_blank"><i className='bx bxl-github'></i></a>
        </div>
        <a href="#contact" className="btn">Hire Me</a>
      </div>
      <div className="home-image">
        <div className="image-shape">
          <Image src={myPic} alt="My Image" />
        </div>
      </div>
    </section>
  );
}
