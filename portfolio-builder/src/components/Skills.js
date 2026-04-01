import React from "react";
import SkillCard from "./SkillCard";

function Skills({ skills }) {
  return (
    <section className="portfolio-section" id="skills">
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2>Core strengths and tools</h2>
      </div>

      <div className="skills-grid">
        {skills.length > 0 ? (
          skills.map((skill) => <SkillCard key={skill} skill={skill} />)
        ) : (
          <p className="empty-state">Add skills from the form to preview them here.</p>
        )}
      </div>
    </section>
  );
}

export default Skills;
