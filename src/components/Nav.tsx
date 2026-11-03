"use client";
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { StarfieldToggle } from "./AmbientSpaceProvider";
const links = [
  { href: "#experience", label: "Experience" },
  { href: "#featured-projects", label: "Projects" },
  { href: "#me", label: "Skills" },
  { href: "#education", label: "Education" },
];
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Primary">
        <a
          className="wordmark"
          href="#hero"
          aria-label="Yengner Bermudez, home"
        >
          yb<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
        <div id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <StarfieldToggle />
          <a
            className="nav-resume"
            href="#resume"
            onClick={() => setOpen(false)}
          >
            Resume <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
