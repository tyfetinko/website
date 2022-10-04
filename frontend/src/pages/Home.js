import React from "react";

import "../styles/Home.css";
/*
-Add picture of me above the first H2
-change color scheme
*/
function Home() {
  return (
    <div className="home">
      <div className="about">
      <img src="./3rdParty.PNG" alt="issue"/>
        <h2> Hi, my name is Ty </h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
         

        
        </div>
      </div>
    </div>
  );
}

export default Home;