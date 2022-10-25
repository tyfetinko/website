import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/tyfetinko/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="https://github.com/tyfetinko" target="_blank" rel="noreferrer">  <GithubIcon /></a>
        
      </div>
    </div>
  )
}

export default Footer;