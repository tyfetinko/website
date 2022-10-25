import React from "react";
import { GitHub,LinkedIn } from "@mui/icons-material";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       
        <a href="https://www.linkedin.com/in/tyfetinko/" target="_blank" rel="noreferrer"><LinkedIn/></a>
        <a href="https://github.com/tyfetinko" target="_blank" rel="noreferrer"><GitHub/></a>
        
      </div>
    </div>
  )
}

export default Footer;