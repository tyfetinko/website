import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];



  return (
    <div className="project">
      <h1> {project.name}  &#40;{project.title}&#41;</h1>
      <img src={project.image} alt=" not available" />
      <p>
        <b>Skills:</b> {project.skills} <br/>
        {project.link}
      </p>
      <GitHubIcon href=""/>
    </div>
  );
}

export default ProjectDisplay;