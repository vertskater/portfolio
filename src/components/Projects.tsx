import { useEffect, useState } from "react";
import projects from "./projects.ts";
import "./styles/Projects.css";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.querySelector(".skills");
      if (
        skillsSection &&
        skillsSection.getBoundingClientRect().top <= window.innerHeight - 200
      ) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <section className={`projects ${isVisible ? "visible" : ""}`} id="projects">
      <h2>Projekte</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.img} alt={`${project.title} screenshot`} />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                  >
                    Live Preview
                  </a>
                )}
              </div>
            </div>
            <div className="tech-stack">
              {project.techStack?.map(tech => {
                return <img src={tech} alt={`tech-icon`}/>
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
