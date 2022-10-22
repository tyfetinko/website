import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> Previous Projects</h1>
      <span>Some GitHub Links are unavailable due to NDA agreements</span>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} link={project.link} />
          );
        })}
 
      </div>
     
    </div>
  
  );
}

export default Projects;
