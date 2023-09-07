import React from 'react';

import './AboutUs.css';
import { images } from "../../constants"

const AboutUs = () => (
  <div className="about bg_black_photo flex_center section_padding" id="about">


    <div className="about_overlay flex_center">
      <img src={images.G} alt="G" />
    </div>


    <div className="about_content flex_center">
      <div className="about_content_one">
        <h1 className="title">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className="text_white_padd">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom_button">Know More</button>
      </div>

      <div className="about_content_knife">
        <img src={images.knife} alt="Knife" className="Knife" />
      </div>

      <div className="about_content_two">
        <h1 className="title">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className="text_white_padd">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom_button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
