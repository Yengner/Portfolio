"use client";
import { FiBookOpen, FiArrowUpRight } from "react-icons/fi";
import { Section } from "../utils";
import ParticleMark from "../ParticlesComponent";
const courses = [
  "Software Engineering",
  "Operating Systems",
  "Ethics and Professional Conduct",
  "Cryptography Theory & Practice",
];
export default function EducationSection() {
  return (
    <Section
      id="education"
      number="04"
      title="Always building. Always learning."
    >
      <div className="education-card">
        <div className="education-school">
          <div className="usf-particle-block">
            <ParticleMark
              svg="/words/USF.svg"
              label="USF logo"
              width={210}
              height={135}
              color="var(--usf-particle-color)"
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <p className="eyebrow">TAMPA, FLORIDA</p>
            <h3>University of South Florida</h3>
            <p>B.S. in Computer Science</p>
            <span className="education-date">Expected December 2026</span>
          </div>
        </div>
        <div className="coursework">
          <h4>
            <FiBookOpen aria-hidden="true" /> Current coursework
          </h4>
          <ul>
            {courses.map((course) => (
              <li key={course}>
                <span />
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a
        className="text-link education-link"
        href="https://www.usf.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        University of South Florida <FiArrowUpRight aria-hidden="true" />
      </a>
    </Section>
  );
}
