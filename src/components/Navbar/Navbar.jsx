import React , {useState} from 'react';
import { Link , NavLink, useNavigate } from 'react-router-dom';


import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';
import images from '../../constants/images';

const Navbar = () => {

  const [toggleMenu,  setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const NavLinkStyles = ({isActive})=> {
    return {
      fontSize : isActive ? "22px" : "20px" ,
      color : isActive ? "var(--color-golden)" : "var(--color-white)" ,
      // دي أول طريقة ل ستايل  الإيليمنت الأكتف
      // الطريقة التانية فى ملف css
      // li:has(> a.active)
    }
  }

  return(
    <div className='navbar'>
      <div onClick={()=> navigate('/')} className="navbar_logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className='navbar_links'>
        <li className="text_white link chef_name"><NavLink style={NavLinkStyles} to = '/'>Home</NavLink></li>
        <li className="text_white link chef_name"><NavLink style={NavLinkStyles} to = '/AboutPage'>About</NavLink></li>
        <li className="text_white link chef_name"><NavLink style={NavLinkStyles} to = '/MenuPage'>Menu</NavLink></li>
        <li className="text_white link chef_name"><NavLink style={NavLinkStyles} to = '/ContactPage'>Contact</NavLink></li>
      </ul>
      <div className="navbar_login">
        <a href="#login" className="text_white">Log In / Registration</a>
        <div className='separator'/>
        <a href="/" className="text_white">Book Table</a>
      </div>
      <div className="overlay_open">
        <GiHamburgerMenu color="white" fontSize={27} onClick={() => setToggleMenu(true)} />
      </div>
      {toggleMenu && (
        <div className="overlay flex_center">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
          <ul className="overlay_links">
            <li><NavLink style={NavLinkStyles} to = '/' onClick={() => setToggleMenu(false)}>Home</NavLink></li>
            <li><NavLink style={NavLinkStyles} to = '/AboutPage' onClick={() => setToggleMenu(false)}>About</NavLink></li>
            <li><NavLink style={NavLinkStyles} to = '/MenuPage'  onClick={() => setToggleMenu(false)}>Menu</NavLink></li>
            <li><NavLink style={NavLinkStyles} to = '/ContactPage' onClick={() => setToggleMenu(false)}>Contact</NavLink></li>
          </ul>
        </div>
      )}
    </div>
  )
};

export default Navbar;
