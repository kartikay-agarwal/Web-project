import React from "react";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-tag">{project.category || "Project"}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="project-bottom">
        <p className="technologies">{project.technologies}</p>

        <div className="project-actions">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
