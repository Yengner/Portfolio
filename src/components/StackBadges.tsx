"use client";

import React from "react";

type BadgeDef = { alt: string; src: string };

const rowStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center",
};

const Shield = ({ alt, src }: BadgeDef) => (
    <img
        alt={alt}
        src={src}
        style={{
            height: 32,
            display: "block",
            borderRadius: 6,
            boxShadow: "0 6px 18px rgba(60, 50, 66, 0.14)",
            background: "var(--background)",
            border: "1px solid rgba(60, 50, 66, 0.08)",
        }}
        loading="lazy"
    />
);

// Pulled from your repos/profile (Next.js 15 + Mantine + Supabase, Selenium scraping,
// Detectron2/Jupyter, OCI+Cloudflare, Vercel extension site, .NET/C# WinForms, etc.)
const STACK: Record<string, BadgeDef[]> = {
    "Languages": [
        { alt: "TypeScript", src: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" },
        { alt: "JavaScript", src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=222" },
        { alt: "Python", src: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
        { alt: "SQL", src: "https://img.shields.io/badge/SQL-025E8C?style=for-the-badge&logo=postgresql&logoColor=white" },
        { alt: "C#", src: "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white" },
    ],
    "Frontend & UI": [
        { alt: "React", src: "https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=0F172A" },
        { alt: "Next.js", src: "https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" },
        { alt: "Mantine", src: "https://img.shields.io/badge/Mantine-339AF0?style=for-the-badge&logo=mantine&logoColor=white" },
        { alt: "Tailwind CSS", src: "https://img.shields.io/badge/Tailwind-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" },
        { alt: "Framer Motion", src: "https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" },
        { alt: "Three.js", src: "https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white" },
    ],
    "Backend & APIs": [
        { alt: "Node.js", src: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
        { alt: "n8n", src: "https://img.shields.io/badge/n8n-FF6A33?style=for-the-badge&logo=n8n&logoColor=white" },
        { alt: "Vercel", src: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" },
        { alt: "Cloudflare", src: "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" },
        { alt: "Oracle Cloud (OCI)", src: "https://img.shields.io/badge/Oracle%20Cloud-FF0000?style=for-the-badge&logo=oracle&logoColor=white" },
    ],
    "Data & ML": [
        { alt: "Jupyter", src: "https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white" },
        { alt: "Detectron2 (PyTorch)", src: "https://img.shields.io/badge/Detectron2-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" },
        { alt: "Selenium", src: "https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white" },
    ],
    "Databases": [
        { alt: "PostgreSQL", src: "https://img.shields.io/badge/Postgres-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" },
        { alt: "Supabase", src: "https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=1b1f23" },
    ],
    "Infra & DevOps": [
        { alt: "Docker", src: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
        { alt: "Ubuntu", src: "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" },
        { alt: "Git", src: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
    ],
    ".NET / Desktop": [
        { alt: ".NET", src: "https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" },
        { alt: "WinForms", src: "https://img.shields.io/badge/WinForms-512BD4?style=for-the-badge&logo=windows&logoColor=white" },
    ],
    "Platforms & Extras": [
        { alt: "Chrome Extension", src: "https://img.shields.io/badge/Chrome%20Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" },
    ],
};

export default function StackBadges() {
    return (
        <div style={{ display: "grid", gap: 10 }}>
            {Object.entries(STACK).map(([group, badges]) => (
                <div key={group} style={{ display: "grid", gap: 6 }}>
                    <span
                        style={{
                            fontSize: 12,
                            letterSpacing: "0.08em",
                            color: "var(--text-muted)",
                            textTransform: "uppercase",
                        }}
                    >
                        {group}
                    </span>
                    <div style={rowStyle}>
                        {badges.map((b) => <Shield key={b.alt} {...b} />)}
                    </div>
                </div>
            ))}
        </div>
    );
}
