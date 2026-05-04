import "./Experience.css";

const experiences = [
  {
    date: "May 2024 – Present",
    location: "Pune",
    role: "Software Engineer I",
    company: "Nuvolo Technologies India Pvt Ltd",
    mvp: true,
    desc: "Developed an Asset Reservation application with timezone-aware booking and real-time asset tracking. Engineered the core scheduling logic from scratch — handling complex timezone conversions across global geographies — one of the most technically demanding features of the product. Recognised with the MVP Award twice for consistent delivery and team contribution.",
    tags: ["JavaScript", "TypeScript", "React.js", "REST APIs"],
  },
  {
    date: "Nov 2022 – Feb 2024",
    location: "Ahmedabad",
    role: "Junior React Developer",
    company: "Thinkbiz Technology Pvt Ltd",
    mvp: false,
    desc: "Built a Cricbuzz-style baseball analytics platform featuring live commentary, real-time player statistics, and interactive dashboards. Implemented dynamic ball trajectory animations using GSAP and integrated monetization via Google Ads and GPT. Mentored two interns, taking ownership of their onboarding and growth.",
    tags: ["React.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "GSAP", "JEST"],
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

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-label">Where I've worked</div>
      <h2 className="section-title reveal">
        Work <span>Experience</span>
      </h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className="timeline-item reveal" key={i}>
            <div className="timeline-date">
              <div className="timeline-date-main">{exp.date}</div>
              <div className="timeline-date-sub">{exp.location}</div>
            </div>
            <div className="timeline-line">
              <div className="timeline-dot"></div>
              <div className="timeline-connector"></div>
            </div>
            <div className="timeline-content">
              {exp.mvp && (
                <div className="mvp-badge">🏆 MVP Award × 2</div>
              )}
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">{exp.company}</div>
              <p className="timeline-desc">{exp.desc}</p>
              <div className="timeline-tags">
                {exp.tags.map((tag) => (
                  <span className="timeline-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
