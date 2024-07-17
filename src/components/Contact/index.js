import React, { useState } from 'react';
import {Link} from "react-router-dom"
import { BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import './index.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/meqwbwlq", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phoneNumber, message }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
    setName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <div>
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
       <div className='mainContactCont'>
          <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form> 
   <div>
    <h1>Contact Me</h1>
    <p>You can reach me via telephone, and my contact number is +91 961829951.
        <br/>
        For any further inquiries, please feel free to contact me via email at rakshithadepu09@gmail.com.
        <br/>

        
    </p>
   <div className="SocialIconCont">
            <a href="https://www.facebook.com/adepu.rakshit" target={"_blank"}>
              <RiFacebookFill className="icons" />
            </a>
            <a href="https://www.instagram.com/" target={"_blank"}><BsInstagram className="icons" /></a>
           
           <a href="https://wa.me/919618229951?text=message" target={"_blank"
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
       </div>
    </div>
  );
   
};

export default Contact;
