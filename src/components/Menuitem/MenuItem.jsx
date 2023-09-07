import React from 'react';

import './MenuItem.css';

const MenuItem = ({title , price , tags}) => (
  <div className="box">
    <div className="box_head">
      <div className="box_head_name">{title}</div>
      <div className="box_head_dash"/>
      <div className="box_head_price">{price} </div>
    </div>
    <div className="text_white">{tags}</div>
  </div>
);

export default MenuItem;
