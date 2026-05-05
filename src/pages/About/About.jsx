import RevealBox from "../../components/RevealBox";
import "./About.css";

const skillGroups = [
  {
    title: "Languages",
    tags: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "Context API", "React Router", "GSAP"],
  },
  {
    title: "Tools & Testing",
    tags: ["REST APIs", "Jest", "Git", "GitHub", "Netlify", "Postman"],
  },
];

const experiences = [
  {
    date: "May 2024 – Present",
    location: "Pune",
    role: "Software Engineer I",
    company: "Nuvolo Technologies India Pvt Ltd",
    mvp: true,
    desc: "Developed an Asset Reservation application with timezone-aware booking and real-time asset tracking. Engineered the core scheduling logic from scratch — handling complex timezone conversions across global geographies — one of the most technically demanding features of the product. Recognised with the MVP Award twice for consistent delivery and team contribution.",
    tags: ["TypeScript", "React.js", "REST APIs"],
  },
  {
    date: "Nov 2022 – Feb 2024",
    location: "Ahmedabad",
    role: "Junior React Developer",
    company: "Thinkbiz Technology Pvt Ltd",
    mvp: false,
    desc: "Built a Cricbuzz-style baseball analytics platform featuring live commentary, real-time player statistics, and interactive dashboards. Implemented dynamic ball trajectory animations using GSAP and integrated monetization via Google Ads and GPT. Mentored two interns, taking ownership of their onboarding and growth.",
    tags: ["React.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "GSAP", "Jest"],
  },
  {
    date: "Nov 2017 – May 2018",
    location: "Hyderabad",
    role: "Trainee Web Developer",
    company: "Aspire Info Labs",
    mvp: false,
    desc: "Developed responsive UI components using HTML, CSS, and JavaScript. Built interactive web pages and implemented core frontend concepts.",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
];

export default function About() {
  return (
    <div className="about-page">

      {/* Skills */}
      <section className="skills-section">
        <div className="section-label">What I work with</div>
        <RevealBox tag="h2" className="section-title">
          Skills &amp; <span>Technologies</span>
        </RevealBox>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <RevealBox className="skill-group" key={group.title} delay={i * 80}>
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </RevealBox>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="experience-section">
        <div className="section-label">Where I've worked</div>
        <RevealBox tag="h2" className="section-title">
          Work <span>Experience</span>
        </RevealBox>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <RevealBox className="timeline-item" key={i} delay={i * 100}>
              <div className="timeline-date">
                <div className="timeline-date-main">{exp.date}</div>
                <div className="timeline-date-sub">{exp.location}</div>
              </div>
              <div className="timeline-line">
                <div className="timeline-dot" />
                <div className="timeline-connector" />
              </div>
              <div className="timeline-content">
                {exp.mvp && <div className="mvp-badge">🏆 MVP Award × 2</div>}
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-desc">{exp.desc}</p>
                <div className="timeline-tags">
                  {exp.tags.map((tag) => (
                    <span className="timeline-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </RevealBox>
          ))}
        </div>
      </section>

    </div>
  );
}
