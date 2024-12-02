import { useEffect, useState } from "react";
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

  const skills = [
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "WordPress", icon: "/icons/wordpress.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "NPM", icon: "/icons/npm.svg" },
    { name: "Expressjs", icon: "/icons/express.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MariaDB", icon: "/icons/mariadb.svg" },
    { name: "Prisma", icon: "/icons/prisma.svg" },
    { name: "WebStorm", icon: "/icons/webstorm.svg" },
    { name: "PHPStorm", icon: "/icons/phpstorm.svg" },
    { name: "VSCode", icon: "/icons/vscode.svg" },
  ];

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
