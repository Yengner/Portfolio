import { FiArrowUpRight, FiDownload, FiFileText } from "react-icons/fi";
import { Section } from "../utils";
export default function ResumeSection() {
  return (
    <Section id="resume" number="05" title="The experience, on one page.">
      <div className="resume-card">
        <FiFileText className="resume-icon" aria-hidden="true" />
        <div>
          <h3>Yengner Bermudez</h3>
          <p>Backend, infrastructure, and the projects that connect them.</p>
          <span className="mono">RESUME / PDF</span>
        </div>
        <div className="resume-actions">
          <a
            className="button button-primary"
            href="/Yengner_Bermudez_Resume.pdf"
            download
          >
            Download PDF <FiDownload aria-hidden="true" />
          </a>
          <a
            className="text-link"
            href="/Yengner_Bermudez_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open resume <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </Section>
  );
}
