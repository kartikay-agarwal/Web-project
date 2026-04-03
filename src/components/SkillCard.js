import React from "react";

function SkillCard({ skill }) {
  return (
    <article className="skill-card">
      <span className="skill-dot" />
      <h3>{skill}</h3>
    </article>
  );
}

export default SkillCard;
