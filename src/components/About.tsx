import "./styles/About.css";

export default function About() {
  return (
    <section className="about">
      <h2>Über mich</h2>
      <div className="about-content">
        <p>
          Ich bin ein vielseitiger IT-Allrounder mit einem Schwerpunkt auf
          Webentwicklung, sowohl in der Lehre als auch in der praktischen
          Umsetzung. In meinen Kursen vermittle ich grundlegende
          Programmierkenntnisse in Python, JavaScript und C#, lege jedoch auch
          Wert auf fortgeschrittene Themen wie objektorientierte Programmierung,
          Algorithmen und Datenstrukturen sowie Design Patterns in der
          Softwareentwicklung.
        </p>
        <p>
          In meiner Arbeit nutze ich moderne Tools und Technologien wie HTML,
          CSS sowie die Programmiersprachen JavaScript/TypeScript und PHP. Bei
          der Entwicklung setze ich auf bewährte Frameworks und Bibliotheken wie
          React und Tailwind CSS, um performante und benutzerfreundliche
          Anwendungen zu erstellen. Auf dieser Portfolioseite finden Sie eine
          Auswahl meiner Projekte, die einen Einblick in meine Fähigkeiten und
          Erfahrungen geben.
        </p>
        <div className="about-buttons">
          <a href="#projects" className="button">
            Meine Projekte
          </a>
          <a href="#contact" className="button">
            Sende mir eine Nachricht
          </a>
        </div>
      </div>
      <div className="svg-decorations">
        <svg
          className="circle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="48" />
        </svg>
        <svg
          className="triangle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <polygon points="50,0 100,100 0,100" />
        </svg>
      </div>
    </section>
  );
}
