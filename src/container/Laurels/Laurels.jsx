import React from 'react';

import './Laurels.css';
import SubHeading from './../../components/SubHeading/SubHeading';
import AwardCard from './../../components/AwardCard/AwardCard';
import { data, images } from '../../constants';

const Laurels = () => (
  <div className="laurels bg_black_photo section_padding">

    <div className="laurels_content">
      <div className="subheading">
        <SubHeading  parag={"Awards & Recognition"} title={"Our Laurels"} posion={"flex start"}/>
      </div>
      <div className="awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />) }
      </div>
    </div>

    <div className="laurels_photo">
      <img src={images.laurels} alt="laurels_img" />
    </div>
    
  </div>
);

export default Laurels;
