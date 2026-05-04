import "./Skills.css";

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

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-label">What I work with</div>
      <h2 className="section-title reveal">
        Skills &amp; <span>Technologies</span>
      </h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group reveal" key={group.title}>
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span className="skill-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
