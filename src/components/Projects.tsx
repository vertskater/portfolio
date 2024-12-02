import { useEffect, useState } from "react";
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

  const projects = [
    {
      title: "Bookshelf",
      description:
        "Eine einfaceh CRUD Applikation die Firebase als Datenbank und Benutzer-Authentifizierung nutzt.",
      github: "https://github.com/vertskater/bookshelf-fs",
      live: "https://bookshelf-fs.vercel.app/",
      img: "/img/bookshelf-fs.png",
    },
    {
      title: "React Memory Game",
      description:
        "Ein einfaches Merkspiel mit Highscore Anzeige und Punktestand Zähler.",
      github: "https://github.com/vertskater/memory-game/tree/main",
      live: "https://memory-game-woad-psi.vercel.app/",
      img: "/img/memory-game.png",
    },
    {
      title: "React Shopping Cart",
      description:
        "Ein kleines Webshop-Frontend mit Suchfunktion und Warenkorb",
      github: "https://github.com/vertskater/shopping-cart",
      live: "https://shopping-cart-six-lac.vercel.app/",
      img: "/img/shopping-cart.png",
    },
    {
      title: "Webshop PHP",
      description: "Ein Webshop mit PHP und MariaDB als Datenbank.",
      github: "https://github.com/vertskater/php-webshop",
      live: "",
      img: "/img/webshop-php.png",
    },
    {
      title: "My-Drive",
      description:
        "Eine Applikation mit Nodejs/Express/PostgreSQL zum Erstellen von Verzeichnissen und hochladen von Dateien.",
      github: "https://github.com/vertskater/my-drive",
      live: "https://my-drive-production.up.railway.app/",
      img: "/img/mydrive.png",
    },
    {
      title: "Blog API",
      description:
        "Eine API zum Abrufen von Blogbeiträgen und Kommentaren. Umgesetzt mit Nodejs/Express/PostgreSQL.",
      github: "https://github.com/vertskater/blog-api",
      live: "",
      img: "/img/blog-api.png",
    },
  ];

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
          </div>
        ))}
      </div>
    </section>
  );
}
