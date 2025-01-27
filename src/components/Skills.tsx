import { useEffect, useState } from "react";
import skills from './skills.ts';
import "./styles/Skills.css";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.querySelector(".skills");
      if (
        skillsSection &&
        skillsSection.getBoundingClientRect().top <= window.innerHeight - 100
      ) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <section className={`skills ${isVisible ? "visible" : ""}`}>
      <h2>Meine Kenntnisse</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={`${skill.name} Icon`} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
