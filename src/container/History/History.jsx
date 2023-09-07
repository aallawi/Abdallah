import React from "react";
import { images } from "../../constants";
import "./History.css";
import separaton from "../../assets/separaton.png";

const History = () => (
  <div className="history section_padding">
    <div className="history_one">
      <div className="history_one_text">
        <p className="text_frattoria">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
      </div>
      <div className="history_one_photo">
        <img src={images.frattoria} alt="frattoria" />
      </div>
    </div>

    <div className="history_two">
      <div className="history_two_photo">
        <img src={images.library} alt="frattoria" />
      </div>
      <div className="history_two_text">
        <h1 className="heading">Over The Years</h1>
        <div className="groups">
          <div className="group">
            <h1 className="number">30+</h1>
            <img src={images.spoon} alt="spoon" />
            <p className="text">Breakfast Options</p>
          </div>
          <div className="break">
            <img src={separaton} alt="separaton" />
          </div>
          <div className="group">
            <h1 className="number">50+</h1>
            <img src={images.spoon} alt="spoon" />
            <p className="text">Dinner Options</p>
          </div>
          <div className="break">
            <img src={separaton} alt="separaton" />
          </div>
          <div className="group">
            <h1 className="number">8+</h1>
            <img src={images.spoon} alt="spoon" />
            <p className="text">New Locations</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default History;
