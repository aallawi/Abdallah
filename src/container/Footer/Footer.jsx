import React from "react";

import "./Footer.css";
import Newsletter from "./Newsletter";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => (
  <div className="footer bg_black_photo" id="login">
    <Newsletter />

    <div className="footer_links section_padding">
      {/* logo */}
      <div className="footer_links_logo">
        <img src={images.gericht} className="gericht" alt="footer_logo" />
        <p className="text_white">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon_img"
          style={{ marginTop: 15 }}
          alt="spoon"
        />
        <div className="footer_links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      {/* work */}
      <div className="footer_links_work">
        <h1 className="heading_p">Working Hours</h1>
        <p className="text_white">Monday-Friday:</p>
        <p className="text_white">08:00 am - 12:00 am</p>
        <p className="text_white">Saturday-Sunday:</p>
        <p className="text_white">07:00 am - 11:00 pm</p>
      </div>
      {/* contactUs */}
      <div className="footer_links_contactUs">
        <h1 className="heading_p">Contact Us</h1>
        <p className="text_white">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="text_white">+1 212-344-1230</p>
        <p className="text_white">+1 212-555-1230</p>
      </div>
    </div>

    <div className="footer_copyright bg_black">
      <p className="text_white">
        Copyright 2022 developed by
        <a href="https://aallawi.github.io/portfolio" target="_blank">
          Ahmed Allawi.
        </a>
        All rights reserved
      </p>
    </div>
  </div>
);

export default Footer;
