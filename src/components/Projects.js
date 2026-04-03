import React from "react";
import ProjectCard from "./ProjectCard";

function Projects({ projects, projectFilter, setProjectFilter, projectCategories }) {
  return (
    <section className="portfolio-section" id="projects">
      <div className="section-heading section-heading-row">
        <div>
          <p className="section-kicker">Projects</p>
          <h2>Featured work</h2>
        </div>

        <div className="filter-group">
          {projectCategories.map((category) => (
            <button
              type="button"
              key={category}
              className={projectFilter === category ? "active-filter" : ""}
              onClick={() => setProjectFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map((project) => <ProjectCard key={project.id} project={project} />)
        ) : (
          <p className="empty-state">
            No projects match the selected filter. Try another category.
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
