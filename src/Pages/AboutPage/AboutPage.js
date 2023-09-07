import React from "react";

import Basic from "../../components/Basic/Basic";
import SubHeading from "../../components/SubHeading/SubHeading";
import { Founder, Footer, Intro, Laurels, History } from "../../container";
import "./AboutPage.css";

const AboutPage = () => (
  <div className="aboutPage bg_black">
    <div className="aboutPage bg_black">
      <Basic pageName={"About"} url={"main"} />

      <div className="SubHeading">
        <SubHeading
          parag={"Our History"}
          title={"Serving Customers For Over A Decade"}
          posion={"center"}
        />
      </div>

      <History />

      <div className="SubHeading">
        <SubHeading
          parag={"About Us"}
          title={"Happy Hours With Us"}
          posion={"center"}
        />
        <div className="about_text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.{" "}
          </p>
        </div>
      </div>

      <Intro />
      <Founder />
      <Laurels />
      <Footer />
    </div>
  </div>
);

export default AboutPage;
