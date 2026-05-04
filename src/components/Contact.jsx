import "./Contact.css";

// Contact Icons
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const contactLinks = [
  {
    href: "https://mail.google.com/mail/u/0/#inbox",
    icon: EmailIcon(),
    text: "contact.priyankaprajapati@gmail.com",
    label: "Email",
    external: true,

  },
  {
    href: "https://www.linkedin.com/in/priyanka-prajapati-853098146/",
    icon: LinkedInIcon(),
    text: "linkedin.com/in/priyanka-prajapati",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/prajapati-priyanka",
    icon: GitHubIcon(),
    text: "github.com/prajapati-priyanka",
    label: "GitHub",
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-label">Let's talk</div>
      <div className="contact-inner">
        <h2 className="section-title reveal">
          Get In <span>Touch</span>
        </h2>
        <p className="contact-intro reveal">
          I am currently open to Frontend Developer opportunities. Feel free to
          reach out — I would love to connect.
        </p>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact-link reveal"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              <span className="contact-link-icon">{link.icon}</span>
              <div>
                {link.label}
                {/* <span className="contact-link-label">{link.label}</span> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
