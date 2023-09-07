import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import './FindUs.css'



const FindUs = () => (
  <div className="findUp bg_black_photo section_padding">
    <div className="findUp_info">
      <div className="SubHeading">
        <SubHeading parag={"Contact"} title={"Find Us"} posion={"flex start"}/>
        <p className="text_white">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      </div>
      <div className="Opening_Hours">
        <h1 className="title">Opening Hours</h1>
        <p>Mon - Fri : 10:00 am - 02:00 am</p>
        <p>Sat - Sun : 10:00 am - 03:00 am</p>
        <div style={{ marginTop: "20px" }}>
          <button type="button" className="custom_button">View More</button>
        </div>
      </div>
    </div>

    <div className="findUp_imge">
      <img src={images.findus} alt={"FindUp"} />
    </div>

  </div>
);

export default FindUs;
