import type { Metadata } from "next";
import Link from "next/link";
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiServer,
  FiTerminal,
  FiCheckCircle,
} from "react-icons/fi";
import SpaceObject from "@/components/SpaceObject";
import MarketGapChart from "@/components/edgefoundry/MarketGapChart";
import ResearchReveal from "@/components/edgefoundry/ResearchReveal";
import { StarfieldToggle } from "@/components/AmbientSpaceProvider";
import styles from "./edgefoundry.module.css";

export const metadata: Metadata = {
  title: "EdgeFoundry — A Gold Market Discovery | Yengner Bermudez",
  description:
    "How an observed Gold pricing discrepancy during futures maintenance became a real-market discovery, a lesson in upstream change, and a Python research platform.",
  openGraph: {
    title: "EdgeFoundry — A Gold Market Discovery",
    description:
      "Market data, financial infrastructure, and the backend engineering that followed an independent discovery.",
    type: "article",
  },
};

const milestones = [
  {
    date: "MID-AUGUST 2026",
    title: "Notice the discrepancy.",
    text: "Investigate unusual behavior around the weekday maintenance window in Kalshi’s 15-minute Gold markets.",
  },
  {
    date: "AUGUST–SEPTEMBER",
    title: "Observe. Investigate. Trade.",
    text: "Monitor the setup across approximately 25 consecutive eligible trading days without a losing daily session.",
  },
  {
    date: "SEPTEMBER 17",
    title: "The conditions change.",
    text: "Kalshi’s market change ends the original opportunity. The historical setup no longer holds.",
  },
  {
    date: "AFTER THE CHANGE",
    title: "Build beyond the discovery.",
    text: "Develop systematic collection, research, testing, and paper-execution infrastructure in EdgeFoundry.",
  },
];
const architecture = [
  { Icon: FiLayers, title: "Public market data", text: "Kalshi REST API" },
  {
    Icon: FiArrowDown,
    title: "Collect & normalize",
    text: "Markets, quotes, timestamps",
  },
  {
    Icon: FiGitBranch,
    title: "Research engine",
    text: "Historical observations",
  },
  {
    Icon: FiCheckCircle,
    title: "Strategy evaluation",
    text: "Signals & risk checks",
  },
  {
    Icon: FiTerminal,
    title: "Paper execution",
    text: "Hypothetical fill planning",
  },
  { Icon: FiDatabase, title: "SQLite", text: "Decisions & settlement ledger" },
  { Icon: FiServer, title: "Dashboard", text: "Read-only monitoring" },
];

function SectionHeading({
  number,
  label,
  title,
  text,
}: {
  number: string;
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <header className={styles.sectionHeading}>
      <p className={styles.kicker}>
        <span>{number}</span> {label}
      </p>
      <h2>{title}</h2>
      {text && <p className={styles.sectionIntro}>{text}</p>}
    </header>
  );
}

export default function EdgeFoundryPage() {
  return (
    <div className={styles.page}>
      <a className="skip-link" href="#edge-main">
        Skip to case study
      </a>
      <header className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <Link href="/#featured-projects" className={styles.backLink}>
            <FiArrowLeft aria-hidden="true" /> Portfolio
          </Link>
          <div className={styles.topbarTools}>
            <span className={styles.topbarLabel}>
              EDGEFOUNDRY <i>/</i> INDEPENDENT RESEARCH
            </span>
            <StarfieldToggle />
          </div>
        </div>
      </header>
      <main id="edge-main">
        <ResearchReveal>
          <section
            className={`container ${styles.hero}`}
            aria-labelledby="edge-title"
          >
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>
                <span className={styles.goldDot} /> DATA. MARKETS. SYSTEMS.
              </p>
              <h1 id="edge-title" className={styles.title}>
                EdgeFoundry<span>.</span>
              </h1>
              <p className={styles.heroLead}>
                Finding patterns at the intersection of market data, financial
                infrastructure, and software engineering.
              </p>
              <p className={styles.heroDescription}>
                An independent research project that began with an unusual Gold
                pricing discrepancy during futures maintenance and evolved into
                a Python-based market analysis and paper-execution platform.
              </p>
              <div className={styles.heroActions}>
                <a href="#discovery" className={styles.primaryLink}>
                  Explore the discovery <FiArrowDown aria-hidden="true" />
                </a>
                <a href="#engineering" className={styles.secondaryLink}>
                  See the system <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <ul className={styles.techList}>
                <li>Python</li>
                <li>REST APIs</li>
                <li>SQLite</li>
                <li>Docker</li>
              </ul>
            </div>
            <div className={styles.heroOrbit}>
              <SpaceObject variant="planet" />
              <span className={styles.orbitCaption}>
                CURIOSITY, ACROSS DIFFERENT ORBITS.
              </span>
            </div>
          </section>

          <section
            className={`container ${styles.observations}`}
            aria-labelledby="observations-title"
            data-reveal
          >
            <h2 id="observations-title" className="sr-only">
              The historical observation
            </h2>
            <div className={styles.metrics}>
              <div>
                <strong>~25</strong>
                <h3>
                  Consecutive eligible trading days
                  <br />
                  without a losing daily session
                </h3>
              </div>
              <div>
                <strong className={styles.periodMetric}>
                  Aug–Sep<span>2026</span>
                </strong>
                <h3>
                  A specific historical
                  <br />
                  observation period
                </h3>
              </div>
              <div>
                <strong>Sep 17</strong>
                <h3>
                  The market-change
                  <br />
                  milestone
                </h3>
              </div>
            </div>
            <p className={styles.observationNote}>
              My reported personal observation for one maintenance-window setup,
              not independently audited performance. Eligibility followed that
              setup; weekends were outside it. This is not a claim that every
              Gold trade won or that future outcomes are guaranteed.
            </p>
          </section>

          <section
            id="discovery"
            className={`container ${styles.section}`}
            data-reveal
          >
            <SectionHeading
              number="01"
              label="THE DISCOVERY"
              title="A small discrepancy. A deeper systems story."
              text="The useful question wasn’t only where Gold was going. It was which price each system was actually using."
            />
            <div className={styles.discoveryGrid}>
              <div className={styles.narrative}>
                <p>
                  Around mid-August 2026, I began investigating Kalshi’s{" "}
                  <code>KXGOLD15M</code> series. Its 15-minute contracts compare
                  the official ending Gold reference with the opening reference;
                  an ending value at or above the opening level resolves “Up.”
                </p>
                <p>
                  I noticed recurring behavior around{" "}
                  <strong>5:00 p.m. New York time</strong>, as traditional
                  futures entered their maintenance period. I compared price
                  observations, opening and settlement references, and the
                  YES/NO prices available on Kalshi.
                </p>
                <p>
                  That investigation led to a real-market opportunity I
                  personally traded. The discovery and trading experience came
                  first; the later software grew from the questions they raised.
                </p>
              </div>
              <aside className={styles.referenceCard}>
                <span className={styles.kicker}>THREE CONNECTED SYSTEMS</span>
                <div>
                  <span>01</span>
                  <p>
                    <strong>Traditional futures</strong>Gold futures ordinarily
                    pause for a maintenance hour beginning at 5:00 p.m. ET.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    <strong>Gold reference / index</strong>Continuously
                    publishing indices can follow a different schedule and
                    methodology.
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    <strong>Prediction-market settlement</strong>Kalshi’s rules
                    determine which opening and ending references decide the
                    contract.
                  </p>
                </div>
              </aside>
            </div>
            <div className={styles.timeline} aria-label="Discovery timeline">
              {milestones.map((item, index) => (
                <article key={item.date}>
                  <span className={styles.timelineDot} aria-hidden="true">
                    {index + 1}
                  </span>
                  <p className={styles.timelineDate}>{item.date}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="pricing-gap"
            className={`container ${styles.section}`}
            data-reveal
          >
            <SectionHeading
              number="02"
              label="FOLLOWING THE DATA"
              title="The gap was observable. The cause needed investigation."
              text="Independent systems can differ in instruments, update cadence, liquidity, and price construction. A discrepancy is a starting point for research."
            />
            <MarketGapChart />
            <div className={styles.gapNotes}>
              <div className={styles.formula}>
                <span className={styles.kicker}>THE CONCEPTUAL MEASURE</span>
                <p>
                  <strong>Gap(t)</strong>
                  <span>
                    = External Gold Reference(t)
                    <br />− Kalshi Gold Reference(t)
                  </span>
                </p>
              </div>
              <div>
                <h3>What I investigated</h3>
                <p>
                  Did the difference grow at maintenance? Did it persist through
                  settlement? Did contract pricing reflect it? Did the pattern
                  hold across eligible days?
                </p>
                <p className={styles.methodNote}>
                  An observed discrepancy does not establish a particular
                  publisher handoff or an executable arbitrage spread. The exact
                  source-level cause remained unverified.
                </p>
              </div>
            </div>
          </section>

          <section
            id="market-change"
            className={`container ${styles.section}`}
            data-reveal
          >
            <SectionHeading
              number="03"
              label="THE STRUCTURAL BREAK"
              title="September 17 changed the conditions."
              text="A consistent historical setup can become obsolete when the system it depends on changes."
            />
            <div className={styles.changeGrid}>
              <article>
                <span className={styles.changeLabel}>BEFORE</span>
                <div className={styles.beforePattern} aria-hidden="true">
                  {Array.from({ length: 12 }, (_, i) => (
                    <i key={i} />
                  ))}
                </div>
                <h3>A recurring opportunity.</h3>
                <p>
                  I repeatedly observed and traded the weekday
                  maintenance-window setup during August and September.
                </p>
              </article>
              <article className={styles.changeMilestone}>
                <span className={styles.changeLabel}>SEPTEMBER 17, 2026</span>
                <div className={styles.breakSymbol} aria-hidden="true">
                  <span />
                  <FiGitBranch />
                  <span />
                </div>
                <h3>Kalshi’s market change.</h3>
                <p>
                  This is the end date of my observed opportunity. The market
                  behavior on which the setup depended changed.
                </p>
              </article>
              <article>
                <span className={styles.changeLabel}>AFTER</span>
                <div className={styles.afterPattern} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <h3>Revisit the assumptions.</h3>
                <p>
                  The original setup was no longer available under the same
                  conditions. Earlier results did not establish a new edge.
                </p>
              </article>
            </div>
            <p className={styles.changeNote}>
              These panels describe a change in conditions, not a performance
              series. The precise internal patch, feed mapping, or scheduling
              change that ended my setup is not established here.
            </p>
            <div className={styles.takeaway}>
              <span className={styles.kicker}>THE SYSTEMS LESSON</span>
              <p>
                Upstream data, settlement rules, and market schedules are
                dependencies. When they change, the model needs to be
                revalidated.
              </p>
            </div>
          </section>

          <section
            id="engineering"
            className={`container ${styles.section}`}
            data-reveal
          >
            <SectionHeading
              number="04"
              label="FROM DISCOVERY TO ENGINEERING"
              title="Build a system that can question its own assumptions."
              text="EdgeFoundry followed the original live-market experience. Its current implementation is a research and paper-execution platform."
            />
            <div className={styles.researchLayers}>
              <div>
                <span>01 / PERSONAL EXPERIENCE</span>
                <strong>The original Gold discovery</strong>
                <p>
                  My own observations and live-market trading during a limited
                  historical condition.
                </p>
              </div>
              <FiArrowRight aria-hidden="true" />
              <div>
                <span>02 / RETROSPECTIVE RESEARCH</span>
                <strong>Investigate the explanation</strong>
                <p>
                  Compare outcomes and reference behavior while keeping datasets
                  and hypotheses distinct.
                </p>
              </div>
              <FiArrowRight aria-hidden="true" />
              <div>
                <span>03 / SOFTWARE PLATFORM</span>
                <strong>Make the research repeatable</strong>
                <p>
                  Automate collection, evaluation, paper fills, and
                  reconciliation.
                </p>
              </div>
            </div>
            <figure
              className={styles.architecture}
              aria-labelledby="edge-architecture-title"
              aria-describedby="edge-architecture-summary"
            >
              <div className={styles.architectureHeading}>
                <h3 id="edge-architecture-title">
                  The implemented research backend.
                </h3>
                <span>PUBLIC DATA IN · PAPER DECISIONS OUT</span>
              </div>
              <p id="edge-architecture-summary" className="sr-only">
                Public Kalshi REST data is collected and normalized, then used
                for research and strategy evaluation. Risk checks and paper fill
                simulation generate hypothetical decisions. SQLite stores
                observations, decisions, and the ledger. Official market results
                are reconciled back into storage. A read-only dashboard presents
                system status and research.
              </p>
              <ol className={styles.architectureNodes}>
                {architecture.map(({ Icon, title, text }) => (
                  <li key={title}>
                    <Icon aria-hidden="true" />
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </li>
                ))}
              </ol>
              <figcaption>
                <FiGitBranch aria-hidden="true" />
                <span>
                  Official results → settlement reconciliation → SQLite ledger
                </span>
              </figcaption>
            </figure>
            <div className={styles.engineeringCards}>
              <article>
                <FiLayers aria-hidden="true" />
                <h3>Collect with context.</h3>
                <p>
                  Public API market discovery, normalized observations, and
                  separate request and receipt timestamps preserve the context
                  needed for later evaluation.
                </p>
              </article>
              <article>
                <FiGitBranch aria-hidden="true" />
                <h3>Evaluate realistically.</h3>
                <p>
                  Strategy logic, spread and depth checks, estimated fees, and
                  hypothetical fill planning keep paper execution assumptions
                  explicit.
                </p>
              </article>
              <article>
                <FiDatabase aria-hidden="true" />
                <h3>Persist and reconcile.</h3>
                <p>
                  SQLite transactions, settlement handling, and a read-only
                  dashboard support auditable research workflows. Docker Compose
                  provides the operational packaging.
                </p>
              </article>
            </div>
            <div className={styles.implementationNote}>
              <FiCheckCircle aria-hidden="true" />
              <p>
                Paper-only automation: public market-data collection, simulated
                orders, and settlement reconciliation. Docker Compose packages
                the worker, with OCI VM deployment guidance documented in the
                repository.
              </p>
            </div>
          </section>

          <section
            className={`container ${styles.lessons}`}
            data-reveal
            aria-labelledby="lessons-title"
          >
            <div>
              <p className={styles.kicker}>05 / WHAT STAYED WITH ME</p>
              <h2 id="lessons-title">
                The lasting edge was understanding the system.
              </h2>

              <p>
                What started as a small pricing discrepancy turned into a pretty
                valuable lesson about financial markets. I learned how different
                data sources interact, spotted a recurring pattern, and watched
                it disappear after Kalshi patched it. And as any sane person
                would do lol, I started with <b>$50</b>, compounded it at
                roughly <b>35% daily returns</b>, and turned it into{" "}
                <b>five figures</b> before the opportunity was gone.
              </p>

              <p>
                EdgeFoundry grew from that experience into a platform for more
                disciplined, reproducible research.
              </p>
              <div className={styles.lessonTags}>
                <span>Data engineering</span>
                <span>Backend systems</span>
                <span>Quantitative research</span>
                <span>Systems thinking</span>
              </div>
            </div>
            <SpaceObject variant="pulsar" />
          </section>

          <section
            className={`container ${styles.evidence}`}
            aria-labelledby="evidence-title"
          >
            <h2 id="evidence-title">Context & evidence</h2>
            <p>
              The timeline and ~25-session run describe my reported experience.
              Independent validation would require the underlying
              eligible-session records and archived market-change notices. No
              personal account records are published here.
            </p>
            <p>
              The chart is synthetic and explanatory. Public documentation below
              provides context about market schedules and rules; it does not
              independently verify my historical results.
            </p>
            <div>
              <a
                href="https://www.cmegroup.com/markets/metals/precious/gold.contractSpecs.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                CME Gold specifications <FiArrowUpRight aria-hidden="true" />
              </a>
              <a
                href="https://docs.pyth.network/pro/market-hours"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pyth market hours <FiArrowUpRight aria-hidden="true" />
              </a>
              <a
                href="https://help.kalshi.com/en/articles/13823822-market-rules"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kalshi market rules <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </section>
        </ResearchReveal>
      </main>
      <footer className={`container ${styles.footer}`}>
        <Link href="/#featured-projects">
          <FiArrowLeft aria-hidden="true" /> Back to all projects
        </Link>
        <span>
          YENGNER BERMUDEZ <i>/</i> EDGEFOUNDRY
        </span>
      </footer>
    </div>
  );
}
