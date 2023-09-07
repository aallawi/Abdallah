import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';

import images from '../../constants/images';
import './Founder.css';

const Founder = () => (
  <div className='Founder bg_black_photo section_padding'>

    <div className="Founder_content">
      <SubHeading parag = "Chef’s Word" title = "What We Believe In" posion = "flex-start" />
      <div className="Founder_content_quote">
        <img src={images.quote} alt="quote_image" />
        <p className="text_white">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
      </div>
      <p className="text_white"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>

      <div className="Founder_content_sign">
        <p>Kevin Luo</p>
        <p className="text_white">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
    <div className="Founder_img flex_center">
      <img src={images.chef} alt="Founder_image" />
    </div>
  </div>
);

export default Founder;
