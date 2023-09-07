import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Basic.css';
import { CgChevronRight } from 'react-icons/cg';

const Basic = ({ pageName , url}) => {
  const navigate = useNavigate();
  return (
    <div className="basic flex_center" id="Basic">
      <h1 className="heading_h">{pageName}</h1>
      <div className="basic_text">
        <p onClick={()=> navigate('/')} className="basic_text_title">Home</p>
        <div className="arrow">
          <CgChevronRight />
        </div>
        <p onClick={()=> navigate({pageName})} className="basic_text_title">{pageName}</p>
      </div>
    </div>
  )
};

export default Basic;
