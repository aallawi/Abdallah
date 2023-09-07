import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import SubHeading from "../../components/SubHeading/SubHeading";
import { data } from "../../constants";
import "./Team.css";

const Team = () => (
  <div className="team bg_black">
    <SubHeading parag={"Team"} title={"Working Group"} posion={"center"} />
    <div className="chefs">
      {data.chefs.map((chef, index) => {
        return (
          <div key={index} className="chef">
            <div className="chef_photo">
              <img src={chef.imgUrl} alt={chef.name} />
              <div className="social">
                <div className="social_icon">
                  <FaFacebookF />
                  <BsTwitter />
                  <BsInstagram />
                </div>
              </div>
            </div>

            <div className="chef_text">
              <p className="chef_name">{chef.name}</p>
              <p className="text_white">{chef.job}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Team;
