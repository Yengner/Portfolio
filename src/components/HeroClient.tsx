"use client";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import SocialLinks from "./SocialLinks";
import CosmicPlayground from "./CosmicPlayground";

export default function HeroClient() {
  return (
    <section id="hero" className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> YENGNER BERMUDEZ{" "}
          <span className="eyebrow-location">/ TAMPA, FL</span>
        </p>
        <h1 id="hero-title">
          Backend &<br />
          <span>Infrastructure</span>
          <br />
          Engineer<span className="title-period">.</span>
        </h1>
        <p className="hero-description">
          I build the systems behind the experience.
          <br className="desktop-break" /> From enterprise workloads to products
          of my own.
        </p>
        <p className="hero-credentials">
          Former Citi Technology Summer Analyst
          <br />
          Founder of{" "}
          <a
            href="https://www.deepvisor.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            DeepVisor <FiArrowUpRight aria-hidden="true" />
          </a>
          <span className="hero-education">
            USF Computer Science · Expected December 2026
          </span>
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#experience">
            Explore my experience <FiArrowDown aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#featured-projects">
            View projects <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <SocialLinks compact />
      </div>
      <CosmicPlayground />
      <div className="hero-footer">
        <span>
          USF Computer Science{" "}
          <span className="muted">· Expected December 2026</span>
        </span>
        <a href="#experience">
          SCROLL TO EXPLORE <FiArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
