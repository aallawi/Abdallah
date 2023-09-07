import React from "react";

import "./Suggestion.css";
import { images } from "../../constants";

const Suggestion = () => (
  <div className="suggestion bg_black">
    <div className="suggestion_input">
      <div>
        <label>
          Full Name
          <input
            type="text"
            id="fname"
            name="fulltname"
            placeholder="Your name.."
          />
        </label>
      </div>
      <div>
        <label>
          Email Adress
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
          />
        </label>
      </div>
      <div>
        <label>
          Message
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Your Message.."
          />
        </label>
      </div>
      <button className="custom_button">Subscribe</button>
    </div>

    <div className="suggestion_photo">
      <img src={images.laurels} alt="suggestion_photo" />
    </div>
  </div>
);

export default Suggestion;
