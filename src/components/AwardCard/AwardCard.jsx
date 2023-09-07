import React from 'react';

import './AwardCard.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="award">
    <img src={imgUrl} alt="award" />
    <div className="award_content">
      <p className="text_white" style={{ color:'#DCCA87'}}>{title}</p>
      <p className="text_white">{subtitle}</p>
    </div>
  </div>
);

export default AwardCard;
