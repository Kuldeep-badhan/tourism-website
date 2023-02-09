import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <section className="footer_subscription">
        <p className="footer_subscription_heading">
          Join Adventure newsletter to receive our best vacation deals
        </p>
        <small className="footer_unsubscribe_caption">
          You can unsubscribe at any time.
        </small>
        <form className="footer_form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      <section className="footer_links">
        <div className="about_us">
          <strong className="footer_link_heading">About Us</strong>
          <ul className="link_list">
            <li>
              {" "}
              <Link to={"/"}>How it works</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Testimonials</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Carrers</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Investors</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Terms of Service</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="contact_us">
          <strong className="footer_link_heading">Contact Us</strong>
          <ul className="link_list">
            <li>
              {" "}
              <Link to={"/"}>Contact</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Support</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Destination</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Sponsorships</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="videos">
          <strong className="footer_link_heading">Videos</strong>
          <ul className="link_list">
            <li>
              {" "}
              <Link to={"/"}>Submit Video</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Ambassadors</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Agency</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Influencer</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="social_media">
          <strong className="footer_link_heading">Social Media</strong>
          <ul className="link_list">
            <li>
              {" "}
              <Link to={"/"}>Instagram</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Facebook</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Youtube</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Twitter</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/"}>Terms of Service</Link>{" "}
            </li>
          </ul>
        </div>
      </section>
      <section className="logo_social_links">
        <div className="logo_copyright">
          <span className="footer_logo">TRVL</span>
          <span className="footer_copyright">copyright@ 2022</span>
        </div>
        <ul className="footer_social_logo_links">
          <li>
            {" "}
            <i class="fa-brands fa-instagram"></i>{" "}
          </li>
          <li>
            {" "}
            <i class="fa-brands fa-youtube"></i>{" "}
          </li>
          <li>
            {" "}
            <i class="fa-brands fa-facebook-f"></i>{" "}
          </li>
          <li>
            {" "}
            <i class="fa-brands fa-twitter"></i>{" "}
          </li>
          <li>
            {" "}
            <i class="fa-brands fa-linkedin"></i>{" "}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
