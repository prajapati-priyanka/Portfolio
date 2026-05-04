import { useState, useEffect } from "react";
import "./Nav.css";

const navLinks = ["skills", "experience", "projects", "contact"];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleOutside = (e) => {
      if (!e.target.closest(".nav")) setMenuOpen(false);
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav className="nav">
      <a className="nav-logo" href="#">Priyanka Prajapati</a>

      {/* Desktop links */}
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger button */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link}`} onClick={handleLinkClick}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}