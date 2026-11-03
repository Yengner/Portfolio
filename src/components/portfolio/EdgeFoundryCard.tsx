import Link from "next/link";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

export default function EdgeFoundryCard() {
  return (
    <article className="edge-spotlight" aria-labelledby="edgefoundry-title">
      <div className="edge-spotlight-copy">
        <p className="edge-spotlight-eyebrow">
          <span /> FEATURED CASE STUDY
        </p>
        <h3 id="edgefoundry-title">
          EdgeFoundry<span>.</span>
        </h3>
        <p className="edge-spotlight-lead">The Gold market discovery.</p>
        <p className="edge-spotlight-description">
          I identified and personally traded a temporary pricing discrepancy in
          Kalshi’s Gold markets. That discovery became a Python research
          platform for investigating market data and evaluating paper execution.
        </p>
        <ul className="tags">
          <li>Python</li>
          <li>REST APIs</li>
          <li>SQLite</li>
          <li>Docker</li>
        </ul>
        <Link className="edge-spotlight-cta" href="/edgefoundry">
          Explore the discovery <FiArrowUpRight aria-hidden="true" />
        </Link>
        <span className="edge-spotlight-preview">
          The pricing gap <FiArrowRight aria-hidden="true" /> the market change{" "}
          <FiArrowRight aria-hidden="true" /> the engineering
        </span>
      </div>
      <div className="edge-spotlight-results">
        <svg
          className="edge-spotlight-orbits"
          viewBox="0 0 400 360"
          fill="none"
          aria-hidden="true"
        >
          <ellipse
            cx="310"
            cy="85"
            rx="155"
            ry="54"
            transform="rotate(-33 310 85)"
          />
          <ellipse cx="310" cy="85" rx="115" ry="115" />
          <ellipse cx="310" cy="85" rx="70" ry="70" />
          <circle cx="310" cy="85" r="6" />
        </svg>
        <p className="edge-spotlight-result-label">
          ORIGINAL GOLD SETUP · AUG–SEP 2026
        </p>
        <div className="edge-spotlight-metrics">
          <div>
            <strong className="edge-spotlight-gains">$10k+</strong>
            <span>Personally reported gains</span>
          </div>
          <div>
            <strong>~25</strong>
            <span>
              Consecutive eligible days
              <br />
              without a losing daily session
            </span>
          </div>
        </div>
        <div className="edge-spotlight-milestone">
          <span>SEP 17</span>
          <p>The market change that ended the original opportunity.</p>
        </div>
        <p className="edge-spotlight-attribution">
          Personal historical results. The later EdgeFoundry automation is
          paper-only.
        </p>
      </div>
    </article>
  );
}
