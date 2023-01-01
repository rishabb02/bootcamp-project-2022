import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <nav>
    <div className="nav-bar">
        <h1>Chef Curry's Kitchen</h1>
        <ul className="nav-elements">
          <Link to= "/"> Home </Link>
          <Link to= "/about" >About Me</Link>
        </ul>
    </div> 
</nav>
  );
}