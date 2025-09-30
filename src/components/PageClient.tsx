"use client";

import HeroClient from "../components/HeroClient";
import BackgroundParticles from "./BackgroundParticles";

import ProjectsSection from "./portfolio/ProjectsSection";
import EducationPage from "./portfolio/EducationSection";
import ResumeSection from "./portfolio/ResumeSection";
import ContactSection from "./portfolio/ContactSection";
import FeaturedProjects from "./portfolio/FeaturedProjects";

export default function HomeClient() {
    return (
        <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
            <BackgroundParticles />
            <main style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "3.2rem" }}>
                <HeroClient />
                <ProjectsSection />
                <FeaturedProjects />
                <EducationPage />
                <ResumeSection />
                <ContactSection />
            </main>
        </div>
    );
}
