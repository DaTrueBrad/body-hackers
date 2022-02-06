import React, { useState } from "react";
import "./menu.css";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import 'boxicons'

function Menu() {
  const [isActive, setActive] = useState("true");
  const menuClick = () => setActive(!isActive);
  //TODO We could od a universal click handler, that on click, toggles a class that will affect the target, and then sets all sibling classes to null, allowing us to effectively create an active class that can be active for all endpoints.
  return (
    <header>
      <img src={logo} alt="" />
      <box-icon name='menu' size='lg' onClick={menuClick} color={!isActive ? "#25AAE1" : ""}/>
      <nav className="nav-menu" id={`${isActive ? "hidden" : ""}`}>
        <h2>Welcome, User</h2>
        <NavLink to="/" onClick={menuClick}>
          Home
        </NavLink>
        <NavLink to="/team/logan" onClick={menuClick}>
          Team
        </NavLink>
        <NavLink to="/contact" onClick={menuClick}>
          Contact
        </NavLink>
        <NavLink to="/faq" onClick={menuClick}>
          FAQ
        </NavLink>
        <br />
        <NavLink to="/register/pt1" onClick={menuClick}>
          Login / Register
        </NavLink>
        <NavLink to="/dashboard" onClick={menuClick}>
          Profile
        </NavLink>
        
        
      </nav>
    </header>
  );
}

export default Menu;
