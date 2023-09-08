import React from "react";

import Basic from "../../components/Basic/Basic";
import { images } from "../../constants";

import "./ContactPage.css";
import { Footer, Suggestion } from "../../container";

function ContactPage() {
  return (
    <div className="ContactPage bg_black">
      <Basic pageName={"Contact"} url={"main"} />
      <div className="section_padding bg_black">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d75202.57170327388!2d31.324399456892877!3d30.037027298970248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1694143795460!5m2!1sen!2seg"
          width="100%"
          height="450"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Suggestion />
      <Footer />
    </div>
  );
}

export default ContactPage;
