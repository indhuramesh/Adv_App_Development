import React from "react";
import { NavLink } from "react-router-dom";
import  { useState } from "react";
import logo from "../Images/LogoImage3.png"

const UserNavbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  return (
    <React.Fragment>
<link href="https://fonts.googleapis.com/css2?family=Cookie&family=Kaushan+Script&display=swap" rel="stylesheet"/>
        <div><nav className="navbar">
    <div className="nav-container">
      <NavLink exact to="/Read" className="nav-logo">
      <img src={logo} alt="Logo" className="img" />
        
      </NavLink>
      

      <ul className={click ? "nav-menu active" : "nav-menu"}>
      
    <li className="nav-item">
      <a className="nav-links" href="#Home">Home</a>
    </li>
        <li className="nav-item">
      <a className="nav-links" href="#Events">Events</a>
    </li>
    <li className="nav-item">
      <a className="nav-links" href="#BookingStatus">Bookings</a>
    </li> 
    <li className="nav-item">
      <a className="nav-links" href="#About">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-links" href="#Blog">Blog</a>
    </li>
       
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        
      </div></div>
  </nav></div>
  </React.Fragment>
  )
}

export default UserNavbar