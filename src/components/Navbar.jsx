import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import { profile } from "../data.js";
import { useScrollState } from "../hooks.js";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const ids = ["home", ...links.map((l) => l.id)];

export default function Navbar() {
  const { progress, scrolled, active } = useScrollState(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "menu-open" : ""}`}>
        <div className="container nav__inner">
          <a href="#home" className="logo" aria-label="Back to top">
            <span className="logo__mark">{profile.initials}</span>
            <span className="logo__text">{profile.name}</span>
          </a>

          <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main">
            {links.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={active === l.id ? "is-active" : ""}
                style={{ "--i": i }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn--primary nav__cta" onClick={() => setOpen(false)}>
              Hire Me
            </a>
          </nav>

          <button
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>
      </header>
    </>
  );
}
