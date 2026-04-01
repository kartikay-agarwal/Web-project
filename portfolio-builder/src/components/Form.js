import React from "react";

function Form({
  portfolio,
  draftSkill,
  draftProject,
  errors,
  selectedTemplate,
  setSelectedTemplate,
  setDraftSkill,
  handleInputChange,
  handleContactChange,
  handleProjectDraftChange,
  handleAddSkill,
  handleRemoveSkill,
  handleAddProject,
  handleRemoveProject,
  handleGeneratePortfolio,
  sections,
  toggles
}) {
  const sectionButtons = [
    {
      title: "Personal Information",
      isOpen: sections.isPersonalOpen,
      onToggle: () => toggles.setIsPersonalOpen((currentValue) => !currentValue)
    },
    {
      title: "Skills Section",
      isOpen: sections.isSkillsOpen,
      onToggle: () => toggles.setIsSkillsOpen((currentValue) => !currentValue)
    },
    {
      title: "Projects Section",
      isOpen: sections.isProjectsOpen,
      onToggle: () => toggles.setIsProjectsOpen((currentValue) => !currentValue)
    },
    {
      title: "Contact Section",
      isOpen: sections.isContactOpen,
      onToggle: () => toggles.setIsContactOpen((currentValue) => !currentValue)
    }
  ];

  return (
    <section className="form-panel">
      <div className="panel-header">
        <div>
          <p className="panel-label">Portfolio Input</p>
          <h2>Fill in your personal details</h2>
        </div>

        <div className="template-switcher">
          <label htmlFor="template">Template</label>
          <select
            id="template"
            value={selectedTemplate}
            onChange={(event) => setSelectedTemplate(event.target.value)}
          >
            <option value="professional">Professional</option>
            <option value="minimal">Minimal</option>
          </select>
        </div>
      </div>

      <form className="portfolio-form" onSubmit={handleGeneratePortfolio}>
        {sectionButtons.map((section) => (
          <div className="form-section" key={section.title}>
            <button
              type="button"
              className="collapse-button"
              onClick={section.onToggle}
            >
              <span>{section.title}</span>
              <span>{section.isOpen ? "Hide" : "Show"}</span>
            </button>

            {section.title === "Personal Information" && sections.isPersonalOpen && (
              <div className="section-content">
                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    value={portfolio.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <small className="error-text">{errors.name}</small>}
                </label>

                <label>
                  Professional Title
                  <input
                    type="text"
                    name="title"
                    value={portfolio.title}
                    onChange={handleInputChange}
                    placeholder="Frontend Developer"
                  />
                  {errors.title && <small className="error-text">{errors.title}</small>}
                </label>

                <label>
                  About Description
                  <textarea
                    name="about"
                    value={portfolio.about}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Write a short introduction about yourself"
                  />
                  {errors.about && <small className="error-text">{errors.about}</small>}
                </label>

                <label>
                  Profile Image URL
                  <input
                    type="url"
                    name="image"
                    value={portfolio.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/your-photo.jpg"
                  />
                </label>
              </div>
            )}

            {section.title === "Skills Section" && sections.isSkillsOpen && (
              <div className="section-content">
                <label>
                  Add Skill
                  <div className="inline-field">
                    <input
                      type="text"
                      value={draftSkill}
                      onChange={(event) => setDraftSkill(event.target.value)}
                      placeholder="ReactJS"
                    />
                    <button
                      type="button"
                      className="small-action-button"
                      onClick={handleAddSkill}
                    >
                      Add Skill
                    </button>
                  </div>
                </label>

                {errors.skills && <small className="error-text">{errors.skills}</small>}

                <div className="pill-list">
                  {portfolio.skills.map((skill) => (
                    <div className="pill-item" key={skill}>
                      <span>{skill}</span>
                      <button type="button" onClick={() => handleRemoveSkill(skill)}>
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.title === "Projects Section" && sections.isProjectsOpen && (
              <div className="section-content">
                <label>
                  Project Title
                  <input
                    type="text"
                    name="title"
                    value={draftProject.title}
                    onChange={handleProjectDraftChange}
                    placeholder="Project name"
                  />
                </label>

                <label>
                  Project Description
                  <textarea
                    name="description"
                    value={draftProject.description}
                    onChange={handleProjectDraftChange}
                    rows="4"
                    placeholder="Describe what the project does"
                  />
                </label>

                <label>
                  Technologies Used
                  <input
                    type="text"
                    name="technologies"
                    value={draftProject.technologies}
                    onChange={handleProjectDraftChange}
                    placeholder="React, CSS, JavaScript"
                  />
                </label>

                <label>
                  Project Category
                  <select
                    name="category"
                    value={draftProject.category}
                    onChange={handleProjectDraftChange}
                  >
                    <option value="Web App">Web App</option>
                    <option value="Portfolio">Portfolio</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Frontend">Frontend</option>
                  </select>
                </label>

                <label>
                  GitHub Link
                  <input
                    type="url"
                    name="github"
                    value={draftProject.github}
                    onChange={handleProjectDraftChange}
                    placeholder="https://github.com/username/project"
                  />
                </label>

                <label>
                  Live Demo Link
                  <input
                    type="url"
                    name="demo"
                    value={draftProject.demo}
                    onChange={handleProjectDraftChange}
                    placeholder="https://your-demo-link.com"
                  />
                </label>

                <button
                  type="button"
                  className="small-action-button wide-button"
                  onClick={handleAddProject}
                >
                  Add Project
                </button>

                {errors.projects && (
                  <small className="error-text">{errors.projects}</small>
                )}

                <div className="project-list">
                  {portfolio.projects.map((project) => (
                    <div className="project-list-item" key={project.id}>
                      <div>
                        <h4>{project.title}</h4>
                        <p>{project.technologies}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveProject(project.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.title === "Contact Section" && sections.isContactOpen && (
              <div className="section-content">
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={portfolio.contact.email}
                    onChange={handleContactChange}
                    placeholder="name@example.com"
                  />
                  {errors.email && <small className="error-text">{errors.email}</small>}
                </label>

                <label>
                  Phone
                  <input
                    type="text"
                    name="phone"
                    value={portfolio.contact.phone}
                    onChange={handleContactChange}
                    placeholder="+91 98765 43210"
                  />
                </label>

                <label>
                  LinkedIn
                  <input
                    type="url"
                    name="linkedin"
                    value={portfolio.contact.linkedin}
                    onChange={handleContactChange}
                    placeholder="https://linkedin.com/in/username"
                  />
                </label>

                <label>
                  GitHub
                  <input
                    type="url"
                    name="github"
                    value={portfolio.contact.github}
                    onChange={handleContactChange}
                    placeholder="https://github.com/username"
                  />
                </label>

                <label>
                  Location
                  <input
                    type="text"
                    name="location"
                    value={portfolio.contact.location}
                    onChange={handleContactChange}
                    placeholder="City, Country"
                  />
                </label>
              </div>
            )}
          </div>
        ))}

        <button type="submit" className="primary-button wide-button">
          Generate Portfolio
        </button>
      </form>
    </section>
  );
}

export default Form;
