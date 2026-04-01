import React, { useEffect, useMemo, useState } from "react";
import Form from "./components/Form";
import PortfolioPreview from "./components/PortfolioPreview";

const defaultPortfolio = {
  name: "Alex Carter",
  title: "Frontend React Developer",
  about:
    "I build responsive, accessible, and thoughtful web experiences with modern React. I enjoy turning ideas into clean interfaces that balance usability and visual polish.",
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  skills: ["ReactJS", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  projects: [
    {
      id: 1,
      title: "Task Flow Dashboard",
      description:
        "A productivity dashboard for managing daily goals, project timelines, and team updates with a polished user interface.",
      technologies: "React, CSS Grid, Local Storage",
      github: "https://github.com/your-username/task-flow-dashboard",
      demo: "https://your-demo-link.com/task-flow-dashboard",
      category: "Web App"
    },
    {
      id: 2,
      title: "Creative Portfolio Site",
      description:
        "A personal website template focused on storytelling, clean layouts, and smooth section-based navigation.",
      technologies: "React, Hooks, Flexbox",
      github: "https://github.com/your-username/creative-portfolio-site",
      demo: "https://your-demo-link.com/creative-portfolio-site",
      category: "Portfolio"
    }
  ],
  contact: {
    email: "alex.carter@example.com",
    phone: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/alexcarter",
    github: "https://github.com/your-username",
    location: "Bengaluru, India"
  }
};

const emptyProject = {
  title: "",
  description: "",
  technologies: "",
  github: "",
  demo: "",
  category: "Web App"
};

function App() {
  // Main app state drives both the form and the live preview.
  const [portfolio, setPortfolio] = useState(() => {
    const savedPortfolio = localStorage.getItem("portfolio-builder-data");
    return savedPortfolio ? JSON.parse(savedPortfolio) : defaultPortfolio;
  });
  const [draftSkill, setDraftSkill] = useState("");
  const [draftProject, setDraftProject] = useState(emptyProject);
  const [errors, setErrors] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("professional");
  const [projectFilter, setProjectFilter] = useState("All");
  const [isPersonalOpen, setIsPersonalOpen] = useState(true);
  const [isSkillsOpen, setIsSkillsOpen] = useState(true);
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(true);

  useEffect(() => {
    localStorage.setItem("portfolio-builder-data", JSON.stringify(portfolio));
  }, [portfolio]);

  useEffect(() => {
    document.body.className = isDarkMode ? "theme-dark" : "theme-light";
  }, [isDarkMode]);

  const projectCategories = useMemo(() => {
    const categories = portfolio.projects.map((project) => project.category || "Other");
    return ["All", ...new Set(categories)];
  }, [portfolio.projects]);

  const filteredProjects = useMemo(() => {
    if (projectFilter === "All") {
      return portfolio.projects;
    }

    return portfolio.projects.filter(
      (project) => (project.category || "Other") === projectFilter
    );
  }, [portfolio.projects, projectFilter]);

  const validatePortfolio = () => {
    const nextErrors = {};

    if (!portfolio.name.trim()) {
      nextErrors.name = "Full name is required.";
    }

    if (!portfolio.title.trim()) {
      nextErrors.title = "Professional title is required.";
    }

    if (!portfolio.about.trim()) {
      nextErrors.about = "About description is required.";
    }

    if (!portfolio.contact.email.trim()) {
      nextErrors.email = "Email is required.";
    }

    if (portfolio.skills.length === 0) {
      nextErrors.skills = "Add at least one skill.";
    }

    if (portfolio.projects.length === 0) {
      nextErrors.projects = "Add at least one project.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleGeneratePortfolio = (event) => {
    event.preventDefault();
    validatePortfolio();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPortfolio((currentPortfolio) => ({
      ...currentPortfolio,
      [name]: value
    }));
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;

    setPortfolio((currentPortfolio) => ({
      ...currentPortfolio,
      contact: {
        ...currentPortfolio.contact,
        [name]: value
      }
    }));
  };

  const handleAddSkill = () => {
    const trimmedSkill = draftSkill.trim();

    if (!trimmedSkill) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        skills: "Enter a skill before adding it."
      }));
      return;
    }

    setPortfolio((currentPortfolio) => ({
      ...currentPortfolio,
      skills: [...currentPortfolio.skills, trimmedSkill]
    }));
    setDraftSkill("");
    setErrors((currentErrors) => ({ ...currentErrors, skills: "" }));
  };

  const handleRemoveSkill = (skillToRemove) => {
    setPortfolio((currentPortfolio) => ({
      ...currentPortfolio,
      skills: currentPortfolio.skills.filter((skill) => skill !== skillToRemove)
    }));
  };

  const handleProjectDraftChange = (event) => {
    const { name, value } = event.target;

    setDraftProject((currentDraftProject) => ({
      ...currentDraftProject,
      [name]: value
    }));
  };

  const handleAddProject = () => {
    if (
      !draftProject.title.trim() ||
      !draftProject.description.trim() ||
      !draftProject.technologies.trim()
    ) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        projects: "Project title, description, and technologies are required."
      }));
      return;
    }

    setPortfolio((currentPortfolio) => ({
      ...currentPortfolio,
      projects: [
        ...currentPortfolio.projects,
        {
          ...draftProject,
          id: Date.now()
        }
      ]
    }));
    setDraftProject(emptyProject);
    setErrors((currentErrors) => ({ ...currentErrors, projects: "" }));
  };

  const handleRemoveProject = (projectId) => {
    setPortfolio((currentPortfolio) => ({
      ...currentPortfolio,
      projects: currentPortfolio.projects.filter((project) => project.id !== projectId)
    }));
  };

  const handleReset = () => {
    setPortfolio(defaultPortfolio);
    setDraftSkill("");
    setDraftProject(emptyProject);
    setErrors({});
    setProjectFilter("All");
    setSelectedTemplate("professional");
    setIsDarkMode(false);
  };

  const handleDownloadResume = () => {
    window.print();
  };

  return (
    <div className={`app-shell ${selectedTemplate}`}>
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <header className="app-header">
        <div>
          <p className="eyebrow">React Personal Portfolio Builder</p>
          <h1>Create a live portfolio from your details</h1>
          <p className="app-intro">
            Build a polished personal portfolio with real-time updates, reusable
            components, and frontend-only React architecture.
          </p>
        </div>

        <div className="app-actions">
          <button type="button" className="secondary-button" onClick={handleReset}>
            Reset Form
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={handleDownloadResume}
          >
            Download Resume PDF
          </button>
          <button
            type="button"
            className="primary-button"
            onClick={() => setIsDarkMode((currentMode) => !currentMode)}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      <main className="app-layout">
        <Form
          portfolio={portfolio}
          draftSkill={draftSkill}
          draftProject={draftProject}
          errors={errors}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          setDraftSkill={setDraftSkill}
          handleInputChange={handleInputChange}
          handleContactChange={handleContactChange}
          handleProjectDraftChange={handleProjectDraftChange}
          handleAddSkill={handleAddSkill}
          handleRemoveSkill={handleRemoveSkill}
          handleAddProject={handleAddProject}
          handleRemoveProject={handleRemoveProject}
          handleGeneratePortfolio={handleGeneratePortfolio}
          sections={{
            isPersonalOpen,
            isSkillsOpen,
            isProjectsOpen,
            isContactOpen
          }}
          toggles={{
            setIsPersonalOpen,
            setIsSkillsOpen,
            setIsProjectsOpen,
            setIsContactOpen
          }}
        />

        <PortfolioPreview
          portfolio={portfolio}
          filteredProjects={filteredProjects}
          projectFilter={projectFilter}
          setProjectFilter={setProjectFilter}
          projectCategories={projectCategories}
          selectedTemplate={selectedTemplate}
        />
      </main>
    </div>
  );
}

export default App;
