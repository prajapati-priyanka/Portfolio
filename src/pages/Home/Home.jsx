import { useNavigate } from "react-router-dom";
import "./Home.css";

const stats = [
  { icon: "⚡", num: "3.8+", label: "Years of Experience" },
  { icon: "🏆", num: "2×", label: "MVP Award Winner" },
  { icon: "🚀", num: "4+", label: "Production Projects" },
  { icon: "🎓", num: "2",   label: "Interns Mentored" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-tag">Available for new opportunities</div>
        <h1>
          Frontend Developer<br />
          <em>crafting</em> great<br />
          web experiences.
        </h1>
        <p className="hero-desc">
          3.8 years of experience building fast, responsive, and scalable web
          applications with React.js, Redux Toolkit, TypeScript, and REST APIs.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => navigate("/projects")}>
            View My Work
          </button>
          <button className="btn btn-ghost" onClick={() => navigate("/contact")}>
            Get In Touch
          </button>
        </div>
      </div>

      <div className="hero-right">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className="stat-icon">{s.icon}</div>
            <div>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
