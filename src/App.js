import React, { useEffect, useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const projectCoverFallbacks = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBmS5exQbMyW8DXo5XPkRg9-oXQzL0p3F3xv97arEIZiJAQyUh0oHjn0XapF7rbnVGGVPHfdt1u1lneu4OgxmBO8CF7cCAdVwIukCy-jxAZQrNQDyLclTMpfvhTno59nNTvfHRnCzB3LsBV2IJtv7tyJNB_i2UAkAZ4JzddubZ-H5xoT3u-yJwlM1EpfsWqYmL7N7_6F2TPm9V3EJhMuNlsNo2EPTJPb9pAIE_-rpD3q_ApUVGcdpbnBPdOsL5BVtIGyCdgcPSBwb4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBWR5HexD-wpXDCIPWCcKZuX62JvK9u7UlqdiHA92K_gzKDSHvuv9vRRTf0LiHmV-_VYKooqAaaOypnj9JGPjVE6GD2cSwtklHHqOoI3iXefd-G4jDtnv12M9nkuxfH97Oc1JO6dUguqghpzkeEDG4SBgn-pYg_xcMdlUEBwMkk17d_H2zUy7fVumCsJsoUACsT_qcCwdB7Pqstf_fsoJ8-DniHYdPRl2sVFiENsdaqQpwR1dHkGacvS4UV3hpJ5ZNL1Phd4VNaZmc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA8uDhHClwScNFmUaY7v15qfSoWKoUNzJ4L8SSRYsgxPGPLyuiCBxvJqlqYKaowmpZuug47Dvp_RU_JBTESe_c1-80_u-ANcbXmjWUX1qSfi0aRI0roUXhXMIiY8l2CH9sC2dZYiWNvfiN5ulHoYx6DrKDsL7fnzSIOggZCu2IgMk7i1B8s1P8nn7epcn3NXcGsDxlg28WDKGavvYMMqzwp6hV8fUhtW8wSZdsRlY4GC2JJ8xxAckLl6XJzUriYiUbuq7yxDqLmYYo"
];

const templateCards = [
  {
    id: "minimal",
    name: "Minimalist",
    desc: "Focus on Breath & Space",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTIruoHZynX7MGLGQOb3NvbQiHWmetTWDs8_M5cDNwil_Y0YHDSMPxBcyhNcJ4z1IPl3aEPSU7ftVjW7De66W7RAgXyn-Nhqa4gFWXoRlGa7u3jNYHrcmy6ICUYAwlL-Gf3XgBJIjxUedOFwOvrAoWNtxtsLS5Tm1mtdG1BBGa3yE-uSW2LmjwSTyvhCBCqRa4807rvBrghqfJTegjbTJF4maASGf_pM7v2ajvXqYN_3WdekuaS1L9Zz1N73aaK60IlLJT2Vmr3RU",
    popular: true
  },
  {
    id: "bold",
    name: "Bold & Colorful",
    desc: "Loud Design for Loud Voices",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6ES6k01sGFX9_LqtRGX_DK7j-EXdrveOV2Re2pQlQJTsW9NwUXw77cURE7rbypegfLyeuyemYN9f7FOMRncUBJR3mRTeeT2uqFfd9Lx8xLU9OEGbnxx00iGtRb9rQM_uHfpnpor52Rh1OJz_Ie4bTvXfM3jgi1Vi0nlWu6Rurw32T5rwxZ-ihLHekcwtei_mdW9Nt38xonMMihsSsVxdvUqf4JTb87r43D8TFnlzfgnNIwM55zB6WEYb6JIxgG6IDJJw-tu94zMQ"
  },
  {
    id: "grid",
    name: "Grid Layout",
    desc: "The Collector's Archive",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv99XAbaWM603ZyIdc_CX7etZcwpDMngTuPCQ6qNtYr4FSS_NvQjG_CsVo80kw83lWhav0PL4Zf59gp2EqSTfjGRwTFhQ_gxfCoOKPdZqQr5FApzNFVoYBMXc6AjSTrC9QKA868LaqmUURM8es19cVRPXePv6vVDmZr7p9CeoWr7_QYhGOtkH4j2sLAfCNbS0mws4zLy3_hS1yFEStuVDhnrBbxdiuhwNr-mx1tw44U6h2iLzxdv8_wGiJ_eZSF6e29OEOELb5t8g"
  },
  {
    id: "editorial",
    name: "Editorial Sidebar",
    desc: "Classical Navigation Logic",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsmHQcikCi_QB7ipgU0NJ1wDILgne5wIHsOp0Vuhe4U78Pl83tIHuJuvhVTakCbE0D6sD0K9pah4fsdqoEru9Ub-g5PLxnYwIg7WLplaj502aiMNenA9R017mrX3UENcSSd2wPKjEQexnKObijXCT5QV9RlkE1RE0eCMw84z73Bcr5njhEq6KSb7_MudoSJ53xoDkB9wrYAJKJEDNV_M3yBBTyvXR5Oqn3ZI0DfTJMwHZfNZgxWBJRIWW1GG80qkDSjW-kGj5gXPc"
  },
  {
    id: "dark",
    name: "Midnight Studio",
    desc: "Engineered for Dark Mode",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApV7594uIkOzPUv9E_HYdP3fTeBA2ZpC8YefFTlfAO8BrUlvj-9jFKbyMB6gW6yScxgNZ3qyg1K0797x2fzIKb4uNG-zUJRzZqCkvAdaGvMUsve-KdlxjwEoafevCXFhxSDybbmOFCSbCyoMMKXCOsuE98Ss4vj58Z_oZobhOdi-cFy58RBB9aRwwTqk4zmWiCX6_mKZKyWwr9VaDK0L045Nr800UTR18JKe62GQUgSVvejtNa1e79PSdeRtU-vcO2_nL9dMo5Z2E",
    premium: true
  },
  {
    id: "gallery",
    name: "The Gallery",
    desc: "Linear Horizontal Storytelling",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM9h5RZHTfjugUgO5wpjhe4mWw55Ap0bgeqYYohZ141zE8kQeH8JW5IzllPKA3xBqd58NoRaRQyxEkze2uvSSzJPCT3xenaFslFFP_uyXl0UQrH_Q8kcjygFJVi8f7Iu0-kdqiWLUzPTvewmaLa4ZRLzzhR_Vh7H-zGLRzR9vfQhQY4PYI8KSc3oak7gB7gWYw4YMAmp0JCY-FsF2wxVBF0T5lImJ1phzs2AXwGQMrCguVAXGAOOqGAhmueMfw36AwKbzrUsIVhKQ"
  }
];

const defaultPortfolio = {
  name: "Julian Vance",
  title: "Architect & Digital Storyteller",
  about:
    "A curated selection of architectural explorations, editorial systems, and spatial narratives designed to define the digital horizon.",
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  skills: ["Editorial Design", "Spatial Thinking", "ReactJS", "Brand Systems"],
  projects: [
    {
      id: 1,
      title: "Brutalist Perspectives",
      description:
        "A photographic series exploring the intersection of raw concrete, memory, and urban decay.",
      technologies: "Photography, Storytelling, Direction",
      github: "https://github.com/your-username/brutalist-perspectives",
      demo: "https://your-demo-link.com/brutalist-perspectives",
      category: "Creative",
      image: projectCoverFallbacks[0]
    },
    {
      id: 2,
      title: "Vogue Archive Redesign",
      description:
        "A conceptual digital experience focused on cinematic editorial flow and luxurious storytelling.",
      technologies: "React, UI Systems, Motion",
      github: "https://github.com/your-username/vogue-archive-redesign",
      demo: "https://your-demo-link.com/vogue-archive-redesign",
      category: "Editorial",
      image: projectCoverFallbacks[1]
    }
  ],
  contact: {
    email: "julian.vance@example.com",
    phone: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/julianvance",
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
  category: "Creative",
  image: ""
};

const getRoute = () => window.location.hash.replace("#", "") || "/";

const navigateTo = (path) => {
  window.location.hash = path;
};

function App() {
  const [route, setRoute] = useState(getRoute);
  const [portfolio, setPortfolio] = useState(() => {
    const savedPortfolio = localStorage.getItem("curator-portfolio-data");
    return savedPortfolio ? JSON.parse(savedPortfolio) : defaultPortfolio;
  });
  const [draftProject, setDraftProject] = useState(emptyProject);
  const [draftSkill, setDraftSkill] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("editorial");

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    if (!window.location.hash) {
      navigateTo("/");
    }
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    localStorage.setItem("curator-portfolio-data", JSON.stringify(portfolio));
  }, [portfolio]);

  const activeTemplate = useMemo(
    () => templateCards.find((template) => template.id === selectedTemplate) || templateCards[3],
    [selectedTemplate]
  );

  const updatePortfolioField = (event) => {
    const { name, value } = event.target;
    setPortfolio((current) => ({ ...current, [name]: value }));
  };

  const updateContactField = (event) => {
    const { name, value } = event.target;
    setPortfolio((current) => ({
      ...current,
      contact: { ...current.contact, [name]: value }
    }));
  };

  const updateDraftProject = (event) => {
    const { name, value } = event.target;
    setDraftProject((current) => ({ ...current, [name]: value }));
  };

  const addProject = () => {
    if (!draftProject.title.trim() || !draftProject.description.trim()) {
      return;
    }

    setPortfolio((current) => ({
      ...current,
      projects: [
        ...current.projects,
        {
          ...draftProject,
          id: Date.now(),
          image:
            draftProject.image.trim() ||
            projectCoverFallbacks[current.projects.length % projectCoverFallbacks.length]
        }
      ]
    }));
    setDraftProject(emptyProject);
  };

  const removeProject = (projectId) => {
    setPortfolio((current) => ({
      ...current,
      projects: current.projects.filter((project) => project.id !== projectId)
    }));
  };

  const addSkill = () => {
    const value = draftSkill.trim();
    if (!value) {
      return;
    }

    setPortfolio((current) => ({
      ...current,
      skills: [...current.skills, value]
    }));
    setDraftSkill("");
  };

  const removeSkill = (skillToRemove) => {
    setPortfolio((current) => ({
      ...current,
      skills: current.skills.filter((skill) => skill !== skillToRemove)
    }));
  };

  const resetPortfolio = () => {
    setPortfolio(defaultPortfolio);
    setDraftProject(emptyProject);
    setDraftSkill("");
  };

  const downloadResume = () => window.print();

  return (
    <div className={`curator-app template-${selectedTemplate}`}>
      {route === "/" && <LandingPage />}
      {route === "/onboarding" && (
        <OnboardingPage
          portfolio={portfolio}
          draftProject={draftProject}
          draftSkill={draftSkill}
          selectedTemplate={selectedTemplate}
          updatePortfolioField={updatePortfolioField}
          updateContactField={updateContactField}
          updateDraftProject={updateDraftProject}
          setDraftSkill={setDraftSkill}
          addProject={addProject}
          removeProject={removeProject}
          addSkill={addSkill}
          removeSkill={removeSkill}
        />
      )}
      {route === "/templates" && (
        <TemplateSelectorPage
          activeTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      )}
      {route === "/editor" && (
        <EditorPage
          portfolio={portfolio}
          activeTemplate={activeTemplate}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          updatePortfolioField={updatePortfolioField}
          downloadResume={downloadResume}
          resetPortfolio={resetPortfolio}
        />
      )}
    </div>
  );
}

function Nav({ showLinks = true, ctaText = "Create Portfolio", ctaRoute = "/onboarding" }) {
  return (
    <nav className="curator-nav">
      <div className="curator-nav__inner">
        <button className="brand-button" onClick={() => navigateTo("/")}>
          The Curator
        </button>
        {showLinks && (
          <div className="curator-nav__links">
            <button onClick={() => navigateTo("/templates")}>Explore</button>
            <button onClick={() => navigateTo("/templates")}>Templates</button>
            <button>Pricing</button>
          </div>
        )}
        <div className="curator-nav__actions">
          <button className="text-button">Sign In</button>
          <button className="pill-button pill-button--primary" onClick={() => navigateTo(ctaRoute)}>
            {ctaText}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="curator-footer">
      <div className="curator-footer__inner">
        <div>
          <div className="brand-mark">The Curator</div>
          <p>© 2026 The Curator Portfolio. Designed for the Digital Architect.</p>
        </div>
        <div className="curator-footer__links">
          <button>Privacy</button>
          <button>Terms</button>
          <button>Support</button>
          <button>Careers</button>
        </div>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="page-shell">
      <Nav />
      <main>
        <section className="hero-landing">
          <div className="hero-landing__copy">
            <h1>
              Build Your Portfolio <span>in Minutes</span>, Not Days.
            </h1>
            <p>
              The Digital Architect&apos;s workspace. Create a high-end, editorial
              portfolio that reflects your unique creative vision without touching a
              single line of code.
            </p>
            <div className="hero-landing__actions">
              <button className="pill-button pill-button--primary pill-button--large" onClick={() => navigateTo("/onboarding")}>
                Get Started for Free
              </button>
              <button className="pill-button pill-button--ghost pill-button--large" onClick={() => navigateTo("/templates")}>
                View Showcase
              </button>
            </div>
          </div>
          <div className="hero-landing__visual">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1Hwqe42dWlctuBeyp1HVKfyHBeXzoq3UrwyFmIRCmI1URqJQI6-JLBShgSJbDlSiuavdgyIGF6T4mthQsUQL7FegUMF9HWsA2DokbyTEQEg0mojZnl0bqqABTxgrSA4TGIXLQtHGxcKJTGJ4sQVHo6WQ6OLU4fB-KHbPcKWiNEXOwEtfWPVHaDzaF335Rl5bSCDbV5jXXhR05HWWrsGytMeUCTOdRTd8y33qqObYvBTuwrzGiy3FZbkOhki7V-GWO-exycISrgFA"
              alt="Editor interface"
            />
          </div>
        </section>

        <section className="feature-band">
          <div className="section-heading">
            <h2>How it Works</h2>
            <div className="heading-line" />
          </div>
          <div className="feature-grid">
            {[
              ["Step 01", "Input Details", "Upload your best projects, craft your bio, and define your creative specialty."],
              ["Step 02", "Pick a Template", "Select from our editorial layouts, from quiet gallery styles to bold magazine compositions."],
              ["Step 03", "Launch Your Site", "Publish a polished digital portfolio engineered for speed, elegance, and presence."]
            ].map(([step, title, text]) => (
              <article className="feature-card" key={title}>
                <span className="feature-step">{step}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-panel">
          <h2>Ready to curate your story?</h2>
          <p>
            Join creatives who have switched to a better way of showing their work.
          </p>
          <button className="pill-button pill-button--light pill-button--large" onClick={() => navigateTo("/onboarding")}>
            Build Your Free Portfolio
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function OnboardingPage({
  portfolio,
  draftProject,
  draftSkill,
  selectedTemplate,
  updatePortfolioField,
  updateContactField,
  updateDraftProject,
  setDraftSkill,
  addProject,
  removeProject,
  addSkill,
  removeSkill
}) {
  return (
    <div className="page-shell onboarding-shell">
      <div className="wizard-topbar">
        <button className="brand-button" onClick={() => navigateTo("/")}>The Curator</button>
        <div className="wizard-topbar__meta">
          <span>Step 02 / 04</span>
          <button className="icon-button" onClick={() => navigateTo("/")}>×</button>
        </div>
      </div>

      <main className="wizard-main">
        <div className="wizard-steps">
          {["Basics", "Projects", "Skills", "Contact"].map((step, index) => (
            <div className="wizard-steps__item" key={step}>
              <div className={`wizard-steps__dot ${index < 2 ? "is-active" : ""}`}>{index < 1 ? "✓" : index + 1}</div>
              <span>{step}</span>
            </div>
          ))}
        </div>

        <header className="wizard-header">
          <h1>Curate Your Work.</h1>
          <p>
            Shape the same premium experience as the HTML reference while keeping your
            portfolio fully editable in React.
          </p>
        </header>

        <section className="onboarding-grid">
          <div className="editor-card editor-card--wide">
            <h3>Basics</h3>
            <div className="field-grid">
              <label><span>Name</span><input name="name" value={portfolio.name} onChange={updatePortfolioField} /></label>
              <label><span>Title</span><input name="title" value={portfolio.title} onChange={updatePortfolioField} /></label>
              <label className="field-span-2"><span>About</span><textarea name="about" rows="4" value={portfolio.about} onChange={updatePortfolioField} /></label>
              <label className="field-span-2"><span>Profile Image URL</span><input name="image" value={portfolio.image} onChange={updatePortfolioField} /></label>
            </div>
          </div>

          {portfolio.projects.map((project) => (
            <article className="project-tile" key={project.id}>
              <img src={project.image || projectCoverFallbacks[0]} alt={project.title} />
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <button className="tile-delete" onClick={() => removeProject(project.id)}>×</button>
            </article>
          ))}

          <div className="editor-card editor-card--wide">
            <h3>Add New Project</h3>
            <div className="field-grid">
              <label><span>Project Title</span><input name="title" value={draftProject.title} onChange={updateDraftProject} /></label>
              <label><span>Category</span><input name="category" value={draftProject.category} onChange={updateDraftProject} /></label>
              <label className="field-span-2"><span>Description</span><textarea name="description" rows="3" value={draftProject.description} onChange={updateDraftProject} /></label>
              <label><span>Technologies</span><input name="technologies" value={draftProject.technologies} onChange={updateDraftProject} /></label>
              <label><span>Cover Image URL</span><input name="image" value={draftProject.image} onChange={updateDraftProject} /></label>
              <label><span>GitHub Link</span><input name="github" value={draftProject.github} onChange={updateDraftProject} /></label>
              <label><span>Demo Link</span><input name="demo" value={draftProject.demo} onChange={updateDraftProject} /></label>
            </div>
            <div className="card-actions"><button className="pill-button pill-button--dark" onClick={addProject}>Save Project</button></div>
          </div>

          <div className="editor-card">
            <h3>Skills</h3>
            <div className="inline-compose">
              <input value={draftSkill} onChange={(event) => setDraftSkill(event.target.value)} placeholder="Add skill" />
              <button className="pill-button pill-button--primary" onClick={addSkill}>Add</button>
            </div>
            <div className="chip-cloud">
              {portfolio.skills.map((skill) => (
                <button className="chip" key={skill} onClick={() => removeSkill(skill)}>{skill}</button>
              ))}
            </div>
          </div>

          <div className="editor-card">
            <h3>Contact</h3>
            <div className="field-grid">
              <label><span>Email</span><input name="email" value={portfolio.contact.email} onChange={updateContactField} /></label>
              <label><span>Phone</span><input name="phone" value={portfolio.contact.phone} onChange={updateContactField} /></label>
              <label><span>LinkedIn</span><input name="linkedin" value={portfolio.contact.linkedin} onChange={updateContactField} /></label>
              <label><span>GitHub</span><input name="github" value={portfolio.contact.github} onChange={updateContactField} /></label>
              <label className="field-span-2"><span>Location</span><input name="location" value={portfolio.contact.location} onChange={updateContactField} /></label>
            </div>
          </div>

          <div className="editor-card">
            <h3>Template</h3>
            <p className="muted-copy">Current selection: {selectedTemplate}</p>
            <button className="pill-button pill-button--ghost" onClick={() => navigateTo("/templates")}>Choose Template</button>
          </div>
        </section>
      </main>

      <div className="wizard-footer">
        <button className="text-button" onClick={() => navigateTo("/")}>Back</button>
        <button className="pill-button pill-button--primary" onClick={() => navigateTo("/templates")}>
          Next: Choose Template
        </button>
      </div>
    </div>
  );
}

function TemplateSelectorPage({ activeTemplate, setSelectedTemplate }) {
  return (
    <div className="page-shell">
      <Nav />
      <div className="template-layout">
        <aside className="template-sidebar">
          <h2>Templates</h2>
          <p>Discovery Engine</p>
          <input className="search-field" placeholder="Search styles..." />
        </aside>
        <main className="template-main">
          <header className="template-header">
            <h1>
              Architect Your <span>Digital Legacy.</span>
            </h1>
            <p>
              Select a foundation that mirrors your creative philosophy.
            </p>
          </header>
          <div className="template-grid">
            {templateCards.map((template, index) => (
              <article
                className={`template-card ${activeTemplate === template.id ? "is-selected" : ""} ${index % 3 === 1 ? "is-offset" : ""}`}
                key={template.id}
              >
                <img src={template.img} alt={template.name} />
                <div className="template-card__body">
                  <div>
                    <h3>{template.name}</h3>
                    <p>{template.desc}</p>
                  </div>
                  <div className="template-badges">
                    {template.popular && <span>POPULAR</span>}
                    {template.premium && <span>PREMIUM</span>}
                  </div>
                </div>
                <div className="template-card__actions">
                  <button className="pill-button pill-button--ghost" onClick={() => navigateTo("/editor")}>Preview</button>
                  <button
                    className="pill-button pill-button--primary"
                    onClick={() => {
                      setSelectedTemplate(template.id);
                      navigateTo("/editor");
                    }}
                  >
                    Select
                  </button>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function EditorPage({
  portfolio,
  activeTemplate,
  selectedTemplate,
  setSelectedTemplate,
  updatePortfolioField,
  downloadResume,
  resetPortfolio
}) {
  return (
    <div className="editor-shell">
      <header className="editor-topbar">
        <div className="editor-topbar__left">
          <button className="brand-button" onClick={() => navigateTo("/")}>The Curator</button>
          <div className="editor-topbar__links">
            <button onClick={() => navigateTo("/templates")}>Templates</button>
            <button>Pricing</button>
          </div>
        </div>
        <div className="editor-topbar__actions">
          <button className="text-button" onClick={resetPortfolio}>Reset</button>
          <button className="pill-button pill-button--primary" onClick={downloadResume}>Download Resume PDF</button>
        </div>
      </header>

      <main className="editor-workspace">
        <aside className="editor-sidebar">
          <div className="editor-sidebar__header">
            <h2>Editor</h2>
            <p>{activeTemplate.name}</p>
          </div>

          <section className="editor-sidebar__section">
            <h3>Template</h3>
            <div className="template-switch-list">
              {templateCards.slice(0, 4).map((template) => (
                <button
                  className={selectedTemplate === template.id ? "active" : ""}
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  {template.name}
                </button>
              ))}
            </div>
          </section>

          <section className="editor-sidebar__section">
            <h3>Headline</h3>
            <input name="name" value={portfolio.name} onChange={updatePortfolioField} />
            <input name="title" value={portfolio.title} onChange={updatePortfolioField} />
          </section>

          <section className="editor-sidebar__section">
            <h3>About Copy</h3>
            <textarea name="about" rows="5" value={portfolio.about} onChange={updatePortfolioField} />
          </section>
        </aside>

        <section className="editor-canvas">
          <div className="preview-browser">
            <div className="preview-browser__bar">
              <div className="browser-dots"><span /><span /><span /></div>
              <div className="browser-address">
                portfolio-{selectedTemplate}.thecurator.com
              </div>
            </div>

            <div className="preview-browser__content">
              <section className="legacy-hero">
                <div className="legacy-hero__background" />
                <div className="legacy-hero__copy">
                  <span>Architecture & Design</span>
                  <h1>
                    Defining the <br />
                    <em>Digital Horizon.</em>
                  </h1>
                  <p>{portfolio.about}</p>
                  <div className="legacy-hero__actions">
                    <button className="pill-button pill-button--primary">View Projects</button>
                    <button className="pill-button pill-button--ghost">Biography</button>
                  </div>
                </div>
                <div className="legacy-hero__portrait">
                  <img src={portfolio.image} alt={portfolio.name} />
                </div>
              </section>

              <section className="legacy-projects">
                <div className="legacy-projects__grid">
                  {portfolio.projects.slice(0, 2).map((project, index) => (
                    <article className={`legacy-project ${index === 0 ? "legacy-project--large" : ""}`} key={project.id}>
                      <img src={project.image || projectCoverFallbacks[index % projectCoverFallbacks.length]} alt={project.title} />
                      <div className="legacy-project__meta">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="legacy-details">
                <div className="legacy-section-heading">
                  <h2>{portfolio.name}</h2>
                  <p>{portfolio.title}</p>
                </div>
                <div className="skill-ribbon">
                  {portfolio.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <div className="contact-ribbon">
                  <article>
                    <h4>Email</h4>
                    <p>{portfolio.contact.email}</p>
                  </article>
                  <article>
                    <h4>Phone</h4>
                    <p>{portfolio.contact.phone}</p>
                  </article>
                  <article className="qr-ribbon">
                    <h4>LinkedIn</h4>
                    <QRCodeSVG value={portfolio.contact.linkedin || "https://linkedin.com"} size={92} />
                  </article>
                  <article className="qr-ribbon">
                    <h4>GitHub</h4>
                    <QRCodeSVG value={portfolio.contact.github || "https://github.com"} size={92} />
                  </article>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
