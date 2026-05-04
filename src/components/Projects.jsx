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
    stack: ["ReactJS", "Context API", "Reducer", "CSS3"],
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

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-label">Things I've built</div>
      <h2 className="section-title reveal">
        Featured <span>Projects</span>
      </h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card reveal" key={p.name}>
            <div className="project-header">
              <div>
                <div className="project-type">{p.type}</div>
                <div className="project-name">{p.name}</div>
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link" title="GitHub">⌥</a>
                <a href={p.live} target="_blank" rel="noreferrer" className="project-link" title="Live">↗</a>
              </div>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-stack">
              {p.stack.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
