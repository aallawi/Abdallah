import React from 'react';
import { images } from '../../constants';


import './SubHeading.css';

const SubHeading = ({ parag , title , posion}) => (
  <div className= "heading" style={{ alignItems: posion}} >
    <p className="heading_p">{parag}</p>
    <img src={images.spoon} className="heading_img" alt="spoon" />
    <h1 className="heading_h">{title}</h1>
  </div>
);

export default SubHeading;
