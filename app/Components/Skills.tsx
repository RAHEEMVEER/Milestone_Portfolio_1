import React from 'react';

import "../style.css";
import {SiNextdotjs} from "react-icons/si"

export default function Skills() {
  return (
    <section className="skills" id="skills">
    <h2 className="heading">My <span>Skills</span></h2>

    <div className="skills-container">
      <div className="skills-box" id="hyper">
        <i className="bx bxl-html5" id="html"></i>
        <h3>HTML5</h3>
        <p>
          am skilled in HTML, creating well-structured and semantically rich
          web pages, ensuring clear, accessible content and a strong
          foundation for web development.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>

      <div className="skills-box" id="cascading">
        <i className="bx bxl-css3" id="css"></i>
        <h3>CSS 3</h3>
        <p>
          I am skilled in CSS, enabling me to create visually appealing and
          responsive designs that enhance the user experience across various
          devices and screen sizes.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>

      <div className="skills-box" id="javascript">
        <i className="bx bxl-javascript" id="js"></i>
        <h3>Javascript</h3>
        <p>
          Proficient in JavaScript, capable of building interactive and
          dynamic web applications, enhancing user experiences with responsive
          and efficient code.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>

      <div className="skills-box" id="react.js">
        <i className='bx bxl-react'  id="react"></i>
        <h3>React JS</h3>
        <p>
        Proficient in React, building dynamic web applications with reusable components,
        efficient state management, and enhancing user experience through interactivity.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>

      <div className="skills-box" id="next.js">
        <i id="next"><SiNextdotjs/></i>
        <h3>Next JS</h3>
        <p>
        Skilled in Next.js, creating optimized, SEO-friendly, server-side rendered applications 
        with fast performance, improved routing, and scalable architecture for modern websites.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>

      <div className="skills-box" id="tailwind-css">
        <i className='bx bxl-tailwind-css' id="tailwind"></i>        
        <h3>Tailwind CSS</h3>
        <p>
        Experienced with Tailwind CSS, crafting responsive, utility-first designs that ensure clean, 
        consistent, and flexible styling for efficient user interface development.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </div>
  </section>

  )
}
