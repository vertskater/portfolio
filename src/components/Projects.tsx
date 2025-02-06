import { useEffect, useState } from "react";
import Select from "react-select";
import projects from "./projects.ts";
import "./styles/Projects.css";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('')
  const [filterVisible, setFilterVisible] = useState<boolean>(false)

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
  const options = [
    {value: "Frontend", label: "Frontend"},
    {value: "Backend", label: "Backend"},
  ]

  const handleSelect = (selected: {value: string, label: string } ) => {
    setFilter(selected.value);
    setFeedback('');
  }
  const handleDeleteFilter = () => {
    setFilter("");
    setFeedback('Filter wurde gelöscht')
  }
  const handleCloseMsg = () => {
    setFeedback('');
  }
  return (
    <section className={`projects ${isVisible ? "visible" : ""}`} id="projects">
      <h2>Projekte</h2>
      <div className="filter">
        <span style={feedback !== '' ? {backgroundColor: 'lightgreen', padding: "15px", borderRadius: '10px', display: "block", marginBottom: "20px", position: "relative"} : {}} className="filter-message">
          <span onClick={handleCloseMsg} className="close-msg" style={feedback !== '' ? {display: 'block'}: {}}>x</span>
          {feedback}
        </span>
        <h4>Filter nach Kategorie:</h4>
        <div style={{width: "50%", color: "black", margin: "10px auto"}}>
          <Select options={options} onChange={(selected) => handleSelect(selected!)}/>
        </div>
        <div className="button" onClick={handleDeleteFilter}>Filter Löschen</div>
      </div>
      <div className="projects-grid">
        {
          projects
              .filter(project => project.category.includes(filter))
              .map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.img} alt={`${project.title} screenshot`} />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Category: <span style={{color: '#facc15'}}>{project.category}</span></p>
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
                return <img key={tech} src={tech} alt={`tech-icon`}/>
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
