import React from "react";
import "./navbar/Navbar.css";
import logo from '../assets/A+ Studio.png'

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt='/' />
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">What We Do</a>
        </li>
        <li>
          <a href="/service">Service</a>
        </li>
        <li>
          <a href="/project">Project</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
