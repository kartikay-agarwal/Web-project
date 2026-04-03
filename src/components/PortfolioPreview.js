import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function PortfolioPreview({
  portfolio,
  filteredProjects,
  projectFilter,
  setProjectFilter,
  projectCategories,
  selectedTemplate
}) {
  return (
    <section className={`preview-panel ${selectedTemplate}`}>
      <div className="preview-frame">
        <Navbar name={portfolio.name} />

        <div className="portfolio-wrapper">
          <About
            name={portfolio.name}
            title={portfolio.title}
            about={portfolio.about}
            image={portfolio.image}
            location={portfolio.contact.location}
          />

          <Skills skills={portfolio.skills} />

          <Projects
            projects={filteredProjects}
            projectFilter={projectFilter}
            setProjectFilter={setProjectFilter}
            projectCategories={projectCategories}
          />

          <Contact contact={portfolio.contact} />
        </div>

        <footer className="portfolio-footer">
          <p>
            Copyright {new Date().getFullYear()} {portfolio.name || "Portfolio Owner"}.
            All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}

export default PortfolioPreview;
