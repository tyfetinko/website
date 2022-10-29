import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHub from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1> {project.name}  &#40;{project.title}&#41;</h1>
      <h4>This project was:{project.group}</h4>
      <img src={project.image} alt=" not available" />
      <p>
        <b>Skills:</b> {project.skills} <br/>
        {project.link} 
      </p>
      <a href={project.gitlink} target="_blank" rel="noreferrer"><GitHub/></a>
      
    </div>
  );
}
export default ProjectDisplay;