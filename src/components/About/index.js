import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Import the CSS file for styling

const About = () => {
  return (
    <div>
      <nav className="navbar ">
        <Link to="/">
          <button className="btnPortfolio">Portfolio.</button>
        </Link>
        <div className="homeNav">
          <Link to="/">
            {" "}
            <button className="btn">Home</button>
          </Link>
          <Link to="/About">
            {" "}
            <button className="btn">About</button>{" "}
          </Link>
          <Link to="/Skills">
            <button className="btn">Skills</button>
          </Link>
          <Link to="/">
            {" "}
            <button className="btn">Portfolio</button>
          </Link>
          <Link to="/Contact">
            {" "}
            <button className="btn">Contact</button>
          </Link>
        </div>
      </nav>
      <section className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Hi, I'm Rakshith Adepu</h3>
              <p>
                Hello and welcome to my portfolio! I'm a dedicated web designer passionate about the entire spectrum of development, including frontend, backend, and full-stack projects. With years of experience, I've honed my skills in HTML, CSS, Bootstrap, JavaScript, React JS, Next JS, Redux, Node JS, Express JS, Python, SQL, MongoDB, Jira, GitHub, and Bitbucket. I specialize in crafting responsive designs for optimal user experiences. Excited to bring my expertise to your projects!
              </p>
              <p>
                I believe in the power of embrace a growth mindset and believe
                in the importance of continuous learning. I stay up to date with
                new technologies, industry trends, andemerging best practices to
                enhance their skills and deliver innovative solutions. My goal
                is to deliver the best outcome to the clients. I am always eager
                to learn and explore new ideas, and I thrive on challenges that
                allow me to grow both personally and professionally.
              </p>
              <p>
               I completed my secondary education at Suryodhya High School in 2011 with a score of 73%. Following this, I pursued an M.P.C. program in intermediate education, achieving an 80% score in 2013. In 2017, I graduated with a bachelor's degree in Computer Science. My professional journey began at Wipro, where I worked with Google on Android applications. Transitioning to Tech Mahindra, I served Verizon, focusing on frontend development for websites. Currently, I am a Senior Software Developer at Fineant Consultant Services, contributing to projects like Myclickerr and Easyprompt, ensuring innovative software solutions for optimal user satisfaction.
              </p>
            </div>
            <div className="about-image">
              <img src="https://res.cloudinary.com/dcbgett3c/image/upload/c_scale,h_329,q_100/v1686330979/IMG_20211215_181858_702_1_uaueis.webp" alt="Profile" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
