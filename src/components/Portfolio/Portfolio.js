import React from "react";
import {Link} from "react-router-dom"
import Typed from "typed.js";

import "./index.css";
import { BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";

const Portfolio = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer.", "Web Developer.", "Full Stack Developer."],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  // typed= new typed(".SpanEle",{
  //   string:["Frontend Developer",
  //   "Web Developer", "Web Designer" ],
  //   typeSpeed:100,
  //   backSpeed: 100,
  //   backDelay: 1000,
  //   loop:true})

  return (
    <>
      <div className="portfolioMainCont">
        <nav className="navbar ">
          <Link to="/"><button className="btnPortfolio">Portfolio.</button></Link>
          <div className="homeNav">
           <Link to="/"> <button className="btn">Home</button></Link>
           <Link to="/About"> <button className="btn">About</button> </Link>
            <Link to="/Skills"><button className="btn">Skills</button></Link>
           <Link to="/">  <button className="btn">Portfolio</button></Link>
           <Link to="/Contact"> <button className="btn">Contact</button></Link>
          </div>
        </nav>
        <div className="leftCont ">
          <h3 className="h3">Hello, It's Me</h3>
          <h1 className="h1">Rakshith Adepu</h1>
          <h3 className="h3">
            And I'm a <span ref={el} className="SpanEle"></span>{" "}
          </h3>
          <p className="p">
            I'm a web Designer with extensive experience for over 3 years.
            <br />
            expertise is to create and web design, Frontend , and
            <br /> many more...
          </p>
          <div className="SocialIconCont">
            <a href="https://www.facebook.com/adepu.rakshit" target={"_blank"}>
              <RiFacebookFill className="icons" />
            </a>
            <a href="https://www.instagram.com/rakshith_adepu/" target={"_blank"}><BsInstagram className="icons" /></a>
           
           <a href="https://wa.me/9618229951?text=message" target={"_blank"
          }> <BsWhatsapp className="icons" /></a>

            <a
              href="https://www.linkedin.com/in/rakshithadepu/"
              target={"_blank"}>
              <BsLinkedin className="icons" />
            </a>
          </div>
          <div>
            <Link to="/About">
            <button className="moreAboutMeBtn" type="button">
              More about me
            </button></Link>
          </div>
        </div>
        <div className="rightCont ">
          <img
            className="imgCont"
            src="https://res.cloudinary.com/dcbgett3c/image/upload/v1684772677/Picsart_23-05-22_20-02-18-395_bfmqsh.jpg"
            alt="Profilepic"
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
