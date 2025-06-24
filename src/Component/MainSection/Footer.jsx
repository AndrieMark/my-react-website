import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PolicyIcon from "@mui/icons-material/Policy";
import PhoneIcon from "@mui/icons-material/Phone";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import "../CSS/footter.css";

function FooterSection() {
  return (
    <footer className="footer-container">
      <section className="footer-subscription">
        <h2 className="footer-subscription-heading">
          Join the <span className="highlight">Lorem</span>. Stay updated!
        </h2>
        <p className="footer-subscription-text">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="input-areas">
          <input
            className="footer-input"
            name="email"
            type="email"
            placeholder="Your Email"
          />
          <button className="footer-subscribe-button" type="submit">
            Subscribe
          </button>
        </div>
      </section>

      <div className="footer-links-grid">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h3>Company</h3>
            <a href="#"><HomeIcon /> Home</a>
            <a href="#"><PhoneIcon /> About</a>
          </div>

          <div className="footer-link-items">
            <h3>Support</h3>
            <a href="#"><QuestionAnswerIcon /> Carlist</a>
            <a href="#"><PolicyIcon /> Contact</a>
            <Link to="/admin"><AccountBoxIcon /> Admin Login</Link>
          </div>

          <div className="footer-link-items">
            <h3>Follow Us</h3>
            <div className="social-media-icons">
              <a href="#"><FacebookIcon /></a>
              <a href="#"><TwitterIcon /></a>
              <a href="#"><LinkedInIcon /></a>
              <a href="#"><GoogleIcon /></a>
              <a href="#"><InstagramIcon /></a>
            </div>
          </div>
        </div>
      </div>    

      <div className="footer-bottom">
        <p className="website-rights">Lorem ipsum dolor sit amet consectetur. © 2025</p>
      </div>
    </footer>
  );
}

export default FooterSection;