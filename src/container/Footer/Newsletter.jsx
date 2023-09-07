import React from 'react';

import './Newsletter.css';
import SubHeading from './../../components/SubHeading/SubHeading';

const Newsletter = () => (
  <div className="newsletter">
    <div className="newsletter_heading">
      <SubHeading parag = "Newsletter" title = "Subscribe To Our Newsletter" posion = "center" />
      <p className="text_white">And never miss latest Updates!</p>
    </div>
    <div className="newsletter_input">
      <input type="email" placeholder="Enter your email address"/>
      <button type="button" className="custom_button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
