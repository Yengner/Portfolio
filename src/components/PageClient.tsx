"use client";
import SpaceInterlude from "./SpaceInterlude";
import HeroClient from "./HeroClient";
import Nav from "./Nav";
import ProjectsSection from "./portfolio/ProjectsSection";
import ExperienceSection from "./portfolio/ExperienceSection";
import EducationSection from "./portfolio/EducationSection";
import ResumeSection from "./portfolio/ResumeSection";
import ContactSection from "./portfolio/ContactSection";
import FeaturedProjects from "./portfolio/FeaturedProjects";
export default function HomeClient() {
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <HeroClient />
        <div className="content-sections">
          <ExperienceSection />
          <FeaturedProjects />
          <SpaceInterlude />
          <ProjectsSection />
          <EducationSection />
          <ResumeSection />
          <ContactSection />
        </div>
      </main>
      <footer className="site-footer container">
        <a className="wordmark" href="#hero">
          yb<span>.</span>
        </a>
        <span>Designed with intent. Built by Yengner.</span>
        <a href="#hero">Back to top ↑</a>
      </footer>
    </div>
  );
}
