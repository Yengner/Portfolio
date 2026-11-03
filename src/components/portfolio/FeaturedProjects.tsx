"use client";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiGithub,
  FiPlay,
  FiArrowRight,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Modal } from "@mantine/core";
import { useState } from "react";
import { Section } from "../utils";
import EdgeFoundryCard from "./EdgeFoundryCard";

const deepVisorImages = [
  {
    src: "/DeepVisor/DeepVisor.png",
    alt: "DeepVisor dashboard showing advertising KPIs and campaign performance",
  },
  {
    src: "/DeepVisor/DeepVisor-2.png",
    alt: "DeepVisor automation planner and queued workflows",
  },
  {
    src: "/DeepVisor/DeepVisor-4.png",
    alt: "DeepVisor operations dashboard and job history",
  },
  {
    src: "/DeepVisor/DeepVisor-5.png",
    alt: "DeepVisor account analytics and campaign heatmap",
  },
];

export default function FeaturedProjects() {
  const [gallery, setGallery] = useState(false);
  const [slide, setSlide] = useState(0);
  return (
    <Section
      id="featured-projects"
      number="02"
      title="Built to solve real problems."
      description="An independent market discovery, a product I founded, and hands-on software engineering."
    >
      <EdgeFoundryCard />
      <div className="featured-grid">
        <article className="project-card">
          <button
            className="project-image-button"
            type="button"
            onClick={() => setGallery(true)}
            aria-label="Explore DeepVisor dashboard screenshots"
          >
            <div className="project-image deepvisor-image">
              <Image
                src={deepVisorImages[0].src}
                alt={deepVisorImages[0].alt}
                fill
                sizes="(max-width: 720px) 100vw, 50vw"
              />
              <span className="image-caption">
                EXPLORE THE DASHBOARD <FiArrowUpRight aria-hidden="true" />
              </span>
            </div>
          </button>
          <div className="project-body">
            <div className="project-eyebrow">
              <span>FOUNDER / PAID-SOCIAL INTELLIGENCE</span>
              <span>01</span>
            </div>
            <h3>
              DeepVisor<span className="project-title-dot">.</span>
            </h3>
            <p>
              The account intelligence platform I founded to turn paid-social
              data into a clearer picture of performance.
            </p>
            <ul className="project-highlights">
              <li>Asynchronous, idempotent Meta Ads ingestion.</li>
              <li>
                Tenant-scoped access with Supabase and PostgreSQL row-level
                security.
              </li>
              <li>
                Dockerized n8n and PostgreSQL on OCI, behind Cloudflare Tunnel.
              </li>
            </ul>
            <div className="project-metric">
              <strong>
                7–9s <FiArrowRight aria-hidden="true" /> ~2.7s
              </strong>
              <span>Dashboard load time</span>
            </div>
            <ul className="tags">
              <li>Next.js</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>OCI</li>
            </ul>
            <div className="project-actions">
              <a
                className="text-link"
                href="https://www.deepvisor.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit DeepVisor <FiArrowUpRight aria-hidden="true" />
              </a>
              <button className="text-link" onClick={() => setGallery(true)}>
                View screenshots <FiArrowUpRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </article>
        <article className="project-card">
          <a
            className="project-image-button"
            href="https://youtu.be/XREwYePKlpA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch the MarketPulse walkthrough"
          >
            <div className="project-image marketpulse-image">
              <Image
                src="/MarketPulse/walkthrough.jpg"
                alt="Preview of the MarketPulse application walkthrough"
                fill
                sizes="(max-width: 720px) 100vw, 50vw"
              />
              <span className="play-button">
                <FiPlay aria-hidden="true" />
              </span>
              <span className="image-caption">
                WATCH THE WALKTHROUGH <FiArrowUpRight aria-hidden="true" />
              </span>
            </div>
          </a>
          <div className="project-body">
            <div className="project-eyebrow">
              <span>USF / SOFTWARE SYSTEMS DEVELOPMENT</span>
              <span>02</span>
            </div>
            <h3>
              MarketPulse<span className="project-title-dot">.</span>
            </h3>
            <p>
              A C# and .NET WinForms stock analysis application that makes
              historical market data interactive.
            </p>
            <ul className="project-highlights">
              <li>Candlestick charts for historical price analysis.</li>
              <li>Candle-by-candle historical price replay.</li>
              <li>
                Modular pattern detection with extensible recognizers and a
                clear separation of concerns.
              </li>
            </ul>
            <div className="project-note">
              <FiCodeMark />
              <span>
                Object-oriented design.
                <br />
                Built for extensibility.
              </span>
            </div>
            <ul className="tags">
              <li>C#</li>
              <li>.NET</li>
              <li>WinForms</li>
              <li>OOP</li>
            </ul>
            <div className="project-actions">
              <a
                className="text-link"
                href="https://github.com/Yengner/MarketPulse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub aria-hidden="true" /> Source code{" "}
                <FiArrowUpRight aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href="https://youtu.be/XREwYePKlpA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiPlay aria-hidden="true" /> Walkthrough
              </a>
            </div>
          </div>
        </article>
      </div>
      <Modal
        opened={gallery}
        onClose={() => setGallery(false)}
        title="DeepVisor · Product gallery"
        centered
        size="min(1100px, 94vw)"
        closeButtonProps={{
          icon: <FiX aria-hidden="true" />,
          "aria-label": "Close screenshots",
        }}
        classNames={{ content: "gallery-modal", header: "gallery-header" }}
      >
        <div className="gallery-image">
          <Image
            src={deepVisorImages[slide].src}
            alt={deepVisorImages[slide].alt}
            fill
            sizes="90vw"
          />
        </div>
        <div className="gallery-controls">
          <button
            className="button button-secondary"
            onClick={() =>
              setSlide(
                (slide + deepVisorImages.length - 1) % deepVisorImages.length,
              )
            }
            aria-label="Previous screenshot"
          >
            <FiChevronLeft />
          </button>
          <p aria-live="polite">
            {slide + 1} / {deepVisorImages.length}
          </p>
          <button
            className="button button-secondary"
            onClick={() => setSlide((slide + 1) % deepVisorImages.length)}
            aria-label="Next screenshot"
          >
            <FiChevronRight />
          </button>
        </div>
        <p className="gallery-description">{deepVisorImages[slide].alt}</p>
      </Modal>
    </Section>
  );
}
function FiCodeMark() {
  return (
    <span className="code-mark" aria-hidden="true">
      &lt;/&gt;
    </span>
  );
}
