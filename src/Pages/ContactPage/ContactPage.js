import React from "react";

import Basic from "../../components/Basic/Basic";
import { images } from "../../constants";

import "./ContactPage.css";
import { Footer, Suggestion } from "../../container";

function ContactPage() {
  return (
    <div className="ContactPage bg_black">
      <Basic pageName={"Contact"} url={"main"} />
      <div className="map bg_black">
        <img src={images.map} alt="map" />
      </div>
      <Suggestion />
      <Footer />
    </div>
  );
}

export default ContactPage;
