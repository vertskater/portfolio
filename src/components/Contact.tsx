import "./styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-description">Kontaktdaten:</p>
        <div className="contact-card">
          <div className="contact-item">
            <span className="icon">
              <img src="icons/email.svg" alt="mail-logo" />
            </span>
            <strong>Email:</strong>
            <a href="mailto:chris.mitterwallner@gmail.com">
              chris.mitterwallner@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="icon">
              <img src="icons/phone.svg" alt="phone-logo" />
            </span>
            <strong>Tel.:</strong>
            <a href="tel:+436605832458">+43 660 58 324 58</a>
          </div>
          <div className="contact-item">
            <span className="icon">
              <img src="./icons/linkedin.svg" alt="linkedin-logo" />
            </span>
            <strong>LinkedIn:</strong>
            <a
              href="https://www.linkedin.com/in/christoph-mitterwallner-bed-a108891b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com
            </a>
          </div>
          <div className="contact-item">
            <span className="icon">
              <img src="./icons/github.svg" alt="github-logo" />
            </span>
            <strong>GitHub:</strong>
            <a
              href="https://github.com/vertskater"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/vertskater
            </a>
          </div>
        </div>
        <div className="call-to-action">
          <p>
            Gerne können Sie mich per E-Mail kontaktieren oder über LinkedIn
            vernetzen.
          </p>
        </div>
      </div>
    </section>
  );
}
