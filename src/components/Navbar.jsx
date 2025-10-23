import React from "react";
import logo from "../assets/logo.png"; 
import "./NavBar.css"; 

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} className="logo"/>
        </a>
      </div>

      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/projects">Events</a></li>
        <li><a href="/resume">Resume</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
