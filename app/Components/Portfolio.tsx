import React from "react";
import "../style.css";
import Image from "next/image";
import pic1 from "../../public/images/portfolio1.webp";
import pic2 from "../../public/images/portfolio2.jpg";
import pic3 from "../../public/images/portfolio3.jpeg";
import pic4 from "../../public/images/portfolio4.jpg";
import pic5 from "../../public/images/portfolio5.jpg";
import pic6 from "../../public/images/portfolio6.jpg";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <Image src={pic1} alt="project pic" />
          <div className="portfolio-layer">
            <h4>Sindh Governor</h4>
            <p>"Clone of Sindh Governor's website highlighting key features and design."</p>
            <a href="http://governor-sindh-web-clone-two.vercel.app" target="_blank" aria-label="Visit Sindh Governor's website"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <Image src={pic2} alt="project pic" />
          <div className="portfolio-layer">
            <h4>Glam Bags</h4>
            <p>"Stylish Glam Bags purse website featuring trendy designs and latest collections."</p>
            <a href="http://glam-bags-website-j2sw.vercel.app" target="_blank" aria-label="Visit Glam Bag Website"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <Image src={pic3} alt="project pic" />
          <div className="portfolio-layer">
            <h4>Resume Builder</h4>
            <p>"Custom resume builder allowing users to input their details and generate professional resumes easily."</p>
            <a href="http://hackathon-nu-eight.vercel.app" target="_blank" aria-label="Visit Resume Builder"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <Image src={pic4} alt="project pic" />
          <div className="portfolio-layer">
            <h4>To_Do_List</h4>
            <p>A dynamic To-Do List app where users can add, manage, and track their daily tasks efficiently."</p>
            <a href="http://to-do-list-web-page.vercel.app" target="_blank" aria-label="Visit Todo List"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <Image src={pic5} alt="project pic" />
          <div className="portfolio-layer">
            <h4>Tic_Tac_Toe</h4>
            <p>"Interactive Tic Tac Toe game allowing players to compete and enjoy classic gameplay."</p>
            <a href="http://tic-tac-toe-web-project.vercel.app" target="_blank" aria-label="Visit Tic Tac Toe"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <Image src={pic6} alt="project pic" />
          <div className="portfolio-layer">
            <h4>Calculator</h4>
            <p>"Simple and intuitive calculator for performing basic arithmetic operations with ease."</p>
            <a href="http://calculator-web-page.vercel.app" target="_blank" aria-label="Visit Calculator"><i className="bx bx-link-external"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}
