"use client";

import HeroClient from "../components/HeroClient";
import BackgroundParticles from "./BackgroundParticles";

import AboutSection from "./portfolio/AboutSection";
import SkillsSection from "./portfolio/SkillsSection";
import ProjectsSection from "./portfolio/ProjectsSection";
import WorkflowSection from "./portfolio/WorkflowSection";
import ExperienceSection from "./portfolio/ExperienceSection";
import EducationSection from "./portfolio/EducationSection";
import PlaygroundSection from "./portfolio/PlaygroundSection";
import ContactSection from "./portfolio/ContactSection";

export default function HomeClient() {
    return (
        <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
            <BackgroundParticles />
            <main style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "4rem" }}>
                <HeroClient />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <WorkflowSection />
                <ExperienceSection />
                <EducationSection />
                <PlaygroundSection />
                <ContactSection />
            </main>
        </div>
    );
}
