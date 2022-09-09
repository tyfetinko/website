import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
/*
-Add picture of me above the first H2
-change color scheme
*/
function Home() {
  return (
    <div className="home">
      <div className="about">
        
        <h2> Hi, my name is Ty </h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
    </div>
  );
}

export default Home;