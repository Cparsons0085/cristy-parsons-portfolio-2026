import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import GlassTubePreview from './components/GlassTubePreview.jsx';
import './styles.css';

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#resume' },
  { label: 'About Me', href: '#about' },
  { label: 'Contact Me', href: '#contact' },
];

const heroActions = [
  { label: 'Live Projects', href: '#projects' },
  { label: 'GIS Portfolio', href: 'https://cristy-parsons-geospatial-portfolio-kctcs.hub.arcgis.com/',
    external: true, },
  { label: 'Resume', href: '#resume' },
];

const projects = [
  {
    title: 'Organized-ish',
    description: 'ADHD-friendly productivity planner built with React, focused on usable workflows, task clarity, and persistent state.',
    stack: 'React, Vite, JavaScript, CSS, LocalStorage',
    primary: 'Live Demo',
    secondary: 'GitHub',
  },
  {
    title: 'GeoClover',
    description: 'Crowdsourced GIS mapping app that connects public input, spatial data, and practical web application patterns.',
    stack: 'React, ArcGIS Online, ArcGIS JavaScript API, Node/Express, PostgreSQL',
    primary: 'Live Demo',
    secondary: 'View Project',
  },
  {
    title: "Honey Bunch's Tree & Lawn",
    description: 'Business scheduling and job management platform for organizing service requests, field work, and customer follow-up.',
    stack: 'React, Vite, JavaScript',
    primary: 'Live Demo',
    secondary: 'GitHub',
  },
  {
    title: 'Community Art GIS',
    description: 'Public-facing GIS project that uses Esri tools to collect, visualize, and present community art location data.',
    stack: 'Survey123, ArcGIS Online, StoryMaps, Experience Builder',
    primary: 'Live Demo',
    secondary: 'View Project',
  },
  {
    title: 'Cristy.codes 3D Logo',
    description:
      'Interactive 3D glass-and-neon logo built in Spline using layered custom paths, glass materials, lighting, bloom, and subtle floating motion.',
    stack: 'Spline, 3D Design, SVG Paths, Materials, Lighting, Motion',
    primary: 'Live Preview',
    secondary: 'View Project',
    hasSplinePreview: true,
},
];

const skills = [
  {
    title: 'Front-End Development',
    items: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS', 'responsive design', 'component-based UI'],
  },
  {
    title: 'Programming',
    items: ['Python', 'JavaScript', 'SQL', 'Arcade', 'API integration', 'debugging'],
  },
  {
    title: 'Application Development',
    items: [
      'User-focused app design',
      'LocalStorage/state persistence',
      'form handling',
      'data-driven interfaces',
      'project organization',
      'deployment-ready builds',
    ],
  },
  {
    title: 'GIS Development',
    items: [
      'ArcGIS JavaScript API',
      'ArcGIS Online',
      'Survey123',
      'Dashboards',
      'StoryMaps',
      'Experience Builder',
      'spatial data workflows',
    ],
  },
  {
    title: 'Developer Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Netlify', 'Render', 'Node/Express basics', 'PostgreSQL basics'],
  },
];

const experience = [
  'Healthcare experience since 2008',
  'Clinical workflows and EHR familiarity',
  'Technical troubleshooting and documentation',
  'GIS and geospatial technology training',
  'Real deployed project work',
];

const resumeItems = [
  'A.A.S. Computer & Information Technologies',
  'Geospatial Technologies concentration',
  'MOS Associate',
  'ITIL Fundamentals',
  'Computer Technician Certificate',
  'Healthcare background since 2008',
];

const contactLinks = ['Email Me', 'LinkedIn', 'GitHub', 'Resume'];

const codeRainLines = [
  { className: 'blue', text: 'const build = "useful";' },
  { className: 'green', text: 'function solve(problem) {}' },
  { className: 'pink', text: '<ReactComponent />' },
  { className: 'mauve', text: '.map(data => insight)' },
  { className: 'blue', text: 'SELECT * FROM workflows;' },
  { className: 'green', text: 'arcgis.layers.add()' },
  { className: 'mauve', text: 'const app = createSolution();' },
  { className: 'blue', text: 'return user.needs.map(buildTool);' },
  { className: 'pink', text: 'if (workflow.isMessy) organize();' },
  { className: 'green', text: 'fetch("/api/projects").then(render);' },
  { className: 'blue', text: 'const map = new ArcGISMap();' },
  { className: 'green', text: 'layer.applyEdits(updates);' },
  { className: 'pink', text: 'function makeLifeEasier() {}' },
  { className: 'mauve', text: 'debug(realProblem);' },
  { className: 'blue', text: 'state.persist();' },
  { className: 'green', text: 'deploy(build);' },
  { className: 'pink', text: 'useEffect(() => {});' },
  { className: 'blue', text: 'const ui = improveExperience();' },
  { className: 'green', text: 'workflow.optimize();' },
  { className: 'mauve', text: 'npm run build;' },
  { className: 'pink', text: 'git commit -m("ship it");' },
  { className: 'blue', text: 'await solve(problem);' },
  { className: 'green', text: 'const route = "/projects";' },
  { className: 'pink', text: 'render(<Portfolio />);' },
  { className: 'mauve', text: 'query.where = "purpose = useful";' },
  { className: 'green', text: 'mapView.goTo(feature);' },
  { className: 'blue', text: 'localStorage.setItem("wins", JSON.stringify(data));' },
];

function CodeRain() {
  return (
    <div className="code-rain" aria-hidden="true">
      {codeRainLines.map((line) => (
        <span className={line.className} key={line.text}>
          {line.text}
        </span>
      ))}
    </div>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="site-logo-link" href="#top" aria-label="Cristy Codes home">
        <img
          className="site-logo"
          src="/images/cristy-codes-glass-pink.png"
          alt="Cristy Codes glass logo"
        />
      </a>
      <nav>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  const [activeWord, setActiveWord] = useState(null);
  const toggleWord = (word) => {
    setActiveWord((current) => (current === word ? null : word));
  };

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-ambient" aria-hidden="true" />
      <img
        className="hero-silhouette hero-silhouette-left"
        src="/images/silhouette-healthcare.png"
        alt="Healthcare professional silhouette representing clinical workflow experience"
      />
      <div className="hero-center">
        <h1 id="hero-title">
          <span className="hero-title-line hero-title-primary">Full-Stack Developer</span>
          <span className="hero-title-line hero-title-secondary">Web + App + GIS</span>
        </h1>
        <p className="hero-tagline">
          <span>Healthcare</span> • Technology • Problem Solving
        </p>
        <p className="hero-lead">
          Building practical <span className="accent-blue">web</span>,{' '}
          <span className="accent-green">GIS</span>, and{' '}
          <span className="accent-mauve">data-driven</span> applications.
        </p>
        <p className="hero-subtext">
          I build tools that make life easier —{' '}
          <InteractiveWord
            activeWord={activeWord}
            label="fun"
            onToggle={toggleWord}
            type="fun"
          />
          ,{' '}
          <InteractiveWord
            activeWord={activeWord}
            label="interactive"
            onToggle={toggleWord}
            type="interactive"
          />
          ,{' '}
          <InteractiveWord
            activeWord={activeWord}
            label="organized"
            onToggle={toggleWord}
            type="organized"
          />{' '}
          applications designed around real people, real workflows, and real problems.
        </p>
        <div className="hero-actions" aria-label="Portfolio actions">
          {heroActions.map((action) => (
            <a className="button" key={action.label} href={action.href} target={action.external ? '_blank' : '_self'} rel={action.external ? 'noopener noreferrer' : undefined}>
              {action.label}
            </a>
          ))}
        </div>
      </div>
      <img
        className="hero-silhouette hero-silhouette-right"
        src="/images/silhouette-tech.png"
        alt="Technology professional silhouette representing development and support experience"
      />
    </section>
  );
}

function InteractiveWord({ activeWord, label, onToggle, type }) {
  return (
    <button
      className={`interactive-word interactive-word-${type}${activeWord === type ? ' is-active' : ''}`}
      type="button"
      onClick={() => onToggle(type)}
      onBlur={() => onToggle(null)}
    >
      {label}
    </button>
  );
}

function SectionHeader({ kicker, title, children }) {
  return (
    <div className="section-header">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function getCardHandlers(cardId, activeCard, setActiveCard) {
  const toggleCard = () => {
    setActiveCard((current) => (current === cardId ? null : cardId));
  };

  return {
    className: activeCard === cardId ? ' is-active' : '',
    onClick: (event) => {
      if (event.target.closest('a')) {
        return;
      }
      toggleCard();
    },
    onKeyDown: (event) => {
      if (event.target !== event.currentTarget || !['Enter', ' '].includes(event.key)) {
        return;
      }
      event.preventDefault();
      toggleCard();
    },
  };
}

function ProjectCard({ project, activeCard, setActiveCard }) {
  const cardId = `project-${project.title}`;
  const cardHandlers = getCardHandlers(cardId, activeCard, setActiveCard);

  return (
    <article
      className={`glass-card project-card code-card${project.hasSplinePreview ? ' project-card-featured' : ''}${cardHandlers.className}`}
      tabIndex="0"
      onClick={cardHandlers.onClick}
      onKeyDown={cardHandlers.onKeyDown}
      aria-label={`${project.title} project card`}
    >
      <CodeRain />
      <div className="card-content">
        {project.hasSplinePreview && (
          <GlassTubePreview />
        )}
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <p className="stack">
          <span>Stack</span>
          {project.stack}
        </p>
        <div className="card-actions">
          <a href="#contact">{project.primary}</a>
          <a href="#contact">{project.secondary}</a>
        </div>
      </div>
    </article>
  );
}

function Projects({ activeCard, setActiveCard }) {
  return (
    <section className="page-section" id="projects" aria-labelledby="projects-title">
      <SectionHeader kicker="Selected Work" title="Featured Projects">
        Practical builds that show application thinking, interface polish, GIS workflows, and real user problems.
      </SectionHeader>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        ))}
      </div>
    </section>
  );
}

function Skills({ activeCard, setActiveCard }) {
  return (
    <section className="page-section" id="skills" aria-labelledby="skills-title">
      <SectionHeader kicker="Technical Range" title="Development & Programming Skills">
        A practical toolset for web apps, GIS projects, support workflows, and data-driven interfaces.
      </SectionHeader>
      <div className="skills-grid">
        {skills.map((group) => {
          const cardId = `skill-${group.title}`;
          const cardHandlers = getCardHandlers(cardId, activeCard, setActiveCard);

          return (
          <article
            className={`glass-card skill-card code-card${cardHandlers.className}`}
            key={group.title}
            tabIndex="0"
            onClick={cardHandlers.onClick}
            onKeyDown={cardHandlers.onKeyDown}
            aria-label={`${group.title} skill card`}
          >
            <CodeRain />
            <div className="card-content">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="page-section split-section" id="gis" aria-labelledby="experience-title">
      <div className="section-header align-left">
        <p className="section-kicker">Practical Background</p>
        <h2 id="experience-title">Experience Snapshot</h2>
        <p>
          My healthcare and support background gives me a grounded way to build software: clarify the
          workflow, document what matters, troubleshoot calmly, and keep the user in view.
        </p>
      </div>
      <div className="glass-card checklist-card">
        <ul className="checklist">
          {experience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="page-section resume-section" id="resume" aria-labelledby="resume-title">
      <div className="glass-card resume-card">
        <div>
          <p className="section-kicker">Credentials</p>
          <h2 id="resume-title">Resume Snapshot</h2>
        </div>
        <ul className="resume-list">
          {resumeItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a className="button button-wide" href="#" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page-section about-section" id="about" aria-labelledby="about-title">
      <SectionHeader kicker="About" title="Calm, Practical Problem-Solving" />
      <div className="about-copy">
        <p>
          I started in healthcare helping patients navigate stressful, complicated systems. Now I bring
          that same calm, practical problem-solving mindset into software development, GIS, and technical
          support. I build projects that are useful, organized, and designed around real users — because I
          know what it feels like when systems are confusing.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page-section contact-section" id="contact" aria-labelledby="contact-title">
      <SectionHeader kicker="Next Step" title="Contact" />
      <div className="contact-grid">
        {contactLinks.map((link) => (
          <a className="glass-card contact-link" href="#" key={link}>
            {link}
          </a>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects activeCard={activeCard} setActiveCard={setActiveCard} />
        <Skills activeCard={activeCard} setActiveCard={setActiveCard} />
        <Experience />
        <Resume />
        <About />
        <Contact />
      </main>
      <footer>
        <p>© 2026 Cristy Codes. Built with React + Vite.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
