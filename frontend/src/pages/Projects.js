import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> Previous Projects</h1>
      <span>Some GitHub Links are unavailable.</span>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
          
            <ProjectItem id={idx} name={project.name} image={project.image} link={project.link}  github={project.gitlink} group={project.group} />
            
          );
        })}
 
      </div>
     
    </div>
  
  );
}

export default Projects;
