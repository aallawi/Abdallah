import React from "react";

import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="Header bg_black section_padding">
    <div className="Header_info">
      <SubHeading parag={"Chase the new Flavour"} title={"The Key To Fine Dining"} posion={"flex start"} />
      <p className="text_white">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <div className="button">
        <button className="changing_button">Explore Menu</button>
      </div>
    </div>
    <div className="Header_photo">
      <img src={images.slid1} alt="Header_photo" />
    </div>
  </div>
);

export default Header;
