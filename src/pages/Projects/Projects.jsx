import RevealBox from "../../components/RevealBox";
import "./Projects.css";

const projects = [
   {
    type: "Pet Portfolio App",
    name: "Pet Gallery",
    github: "https://github.com/prajapati-priyanka/Pet-Gallery",
    live: "https://pets-portfolio.netlify.app/",
    desc: "A pet image gallery built with React and TypeScript. Browse, search, sort, select and download pet photos from a live API.",
    stack: ["ReactJS", "TypeScript", "styled-component", "React-Router", "Context API", "Fetch API"],
  },
   {
    type: "To-do App",
    name: "Task_Tracker",
    github: "https://github.com/prajapati-priyanka/Task_Tracker",
    live: "https://mytasktrackingapp.netlify.app/",
    desc: "A To-do list app, where user can create and maintain tasks effectively. It has features like Task management, sorting, search.",
    stack: ["ReactJS", "JavaScript", "TailwindCSS", "React-Router", "Redux Toolkit", "JEST"],
  },
  
  {
    type: "Video Library App",
    name: "Pine Tube",
    github: "https://github.com/prajapati-priyanka/pinetube",
    live: "https://pine-tube-video-library.netlify.app/",
    desc: "A fully-featured video library with authentication, playlist management, watch history, like/unlike, watch later, and category-based filtering. Built with a mock backend for realistic API simulation.",
    stack: ["ReactJS", "Context API", "React Router", "CSS3"],
  },
  {
    type: "Social Media Platform",
    name: "Bridge",
    github: "https://github.com/prajapati-priyanka/Bridge",
    live: "https://bridge-stay-connected.netlify.app/",
    desc: "A social media app with auth, follow/unfollow, like/dislike, CRUD on posts and comments, bookmarks, image/video upload — built with Redux Toolkit for scalable state management.",
    stack: ["ReactJS", "Redux Toolkit", "Chakra UI", "React Router"],
  },
  {
    type: "E-commerce App",
    name: "Pine Apparel",
    github: "https://github.com/prajapati-priyanka/my-app",
    live: "https://pine-apparel-ecomm.netlify.app/",
    desc: "A fashion ecommerce platform with product listing, filters, search, cart management, wishlist, price calculation, and address management — all with authentication.",
    stack: ["ReactJS", "Context API", "Reducer", "CSS3", "Pine UI"],
  },
  {
    type: "CSS Component Library",
    name: "Pine UI",
    github: "https://github.com/prajapati-priyanka/pineUI-component-library",
    live: "https://pineui-temp.netlify.app/",
    desc: "A reusable CSS utility library with modular classes for layout, typography, spacing, and component styling — built to help developers create consistent UIs faster.",
    stack: ["HTML5", "CSS3"],
  },
];
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
export default function Projects() {
  return (
    <section className="projects-page">
      <div className="section-label">Things I've built</div>
      <RevealBox tag="h2" className="section-title">
        Featured <span>Projects</span>
      </RevealBox>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <RevealBox className="project-card" key={p.name} delay={i * 80}>
            <div className="project-header">
              <div>
                <div className="project-type">{p.type}</div>
                <div className="project-name">{p.name}</div>
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link" title="GitHub">
                  <GitHubIcon />
                </a>
                <a href={p.live} target="_blank" rel="noreferrer" className="project-link" title="Live Demo">
                  <ExternalIcon />
                </a>
              </div>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-stack">
              {p.stack.map((s) => <span key={s}>{s}</span>)}
            </div>
          </RevealBox>
        ))}
      </div>
    </section>
  );
}
