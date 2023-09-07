import React from 'react';
import { data, images } from '../../constants';

import './SpecialMenu.css';
import MenuItem from './../../components/Menuitem/MenuItem';
import SubHeading from './../../components/SubHeading/SubHeading';

const SpecialMenu = () => (
  <div className= "menu bg_black flex_center section_padding" >
    <div className="menu-title">
      <SubHeading parag= "Menu That Fits You Palatte" title = "Today’s Special" posion= "center" />
    </div>

    <div className="menu_wine_photo_cocktails">
      
      {/* wine */}
      <div className="menu_wine">
        <h4 className= "menu_wine_heading">Wine & Beer</h4>
        <div className="menu_wine_items">
          {data.wines.map((wine , index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))
          }
        </div>
      </div>

      {/* photo */}
      <div className="menu_photo">
        <img src={images.menu}  alt="Menu_photo" />
      </div>

      {/* cocktails */}
      <div className="menu_cocktails">
        <h4 className= "menu_cocktails_heading">Cocktails</h4>
        <div className="menu_cocktails_items">
          {data.cocktails.map((cock , index) => (
              <MenuItem key={cock.title + index} title={cock.title} price={cock.price} tags={cock.tags} />
            ))
          }
        </div>
      </div>
    </div>
    
    <div style={{ marginTop: "20px" }}>
      <button type="button" className="custom_button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
