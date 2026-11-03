import {
  FiArrowRight,
  FiServer,
  FiBox,
  FiTerminal,
  FiGitBranch,
  FiActivity,
  FiCheckCircle,
} from "react-icons/fi";
import { Section } from "../utils";

function ArchitectureDiagram() {
  return (
    <figure
      className="architecture"
      aria-labelledby="architecture-title"
      aria-describedby="architecture-summary"
    >
      <div className="diagram-heading">
        <span id="architecture-title">From legacy VMs to OpenShift</span>
        <span className="mono">CONCEPTUAL ARCHITECTURE</span>
      </div>
      <p id="architecture-summary" className="sr-only">
        The legacy Linux VM ORMB batch workload is containerized with JVM, Perl,
        and Oracle Client dependencies and moved to Red Hat OpenShift. A
        persistent worker Deployment and on-demand batch Jobs discover one
        another through a headless Service and Oracle Coherence Well-Known
        Addresses. ConfigMaps, Secrets, and shared persistent batch-log storage
        support the workloads. A separate Harness CD pipeline builds, scans,
        publishes, deploys, and checks compliance using Docker and Helm.
      </p>
      <div className="runtime-flow" aria-hidden="true">
        <div className="legacy-node">
          <FiServer />
          <strong>Legacy Linux VM</strong>
          <span>Java / ORMB batch</span>
          <div className="legacy-deps">JVM · Perl · Oracle Client</div>
        </div>
        <div className="migration-arrow">
          <span>Containerize</span>
          <FiArrowRight />
        </div>
        <div className="cluster">
          <div className="cluster-heading">
            <FiBox />
            <strong>Red Hat OpenShift</strong>
            <span>KUBERNETES</span>
          </div>
          <div className="workloads">
            <div className="workload">
              <FiServer />
              <strong>Worker Deployment</strong>
              <span>Persistent worker</span>
            </div>
            <div className="workload">
              <FiTerminal />
              <strong>Batch Jobs</strong>
              <span>On-demand execution</span>
            </div>
          </div>
          <div className="discovery">
            <span className="discovery-dot" />
            Headless Service <span>↔</span> Coherence WKA
            <span className="discovery-caption">Cross-pod discovery</span>
          </div>
          <div className="cluster-support">
            <span>ConfigMaps & Secrets</span>
            <span>Shared persistent log storage</span>
          </div>
        </div>
      </div>
      <div className="delivery-flow">
        <div className="delivery-label">
          <FiGitBranch aria-hidden="true" />
          <strong>DELIVERY</strong>
          <span>Harness CD · Docker · Helm</span>
        </div>
        <p>
          Build <FiArrowRight aria-hidden="true" /> Security scan{" "}
          <FiArrowRight aria-hidden="true" /> Publish image{" "}
          <FiArrowRight aria-hidden="true" /> Deploy{" "}
          <FiArrowRight aria-hidden="true" /> Compliance checks
        </p>
        <span className="delivery-note">
          Verified capabilities within a seven-stage pipeline; deploys the
          cluster workloads above.
        </span>
      </div>
      <figcaption>Conceptual reconstruction using generic labels.</figcaption>
    </figure>
  );
}

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      number="01"
      title="Enterprise scale. Hands-on engineering."
      description="Taking a legacy workload into a modern container platform, with delivery and validation built in."
    >
      <article className="experience-card">
        <div className="experience-top">
          <div className="company-mark" aria-label="Citi">
            citi
            <span />
          </div>
          <div className="experience-role">
            <p className="eyebrow">CITI · TECHNOLOGY SUMMER ANALYST</p>
            <h3>Application Development</h3>
          </div>
          <div className="experience-location">
            <span>Summer 2026</span>
            <span>Tampa, FL</span>
          </div>
        </div>
        <div className="experience-intro">
          <span className="small-label">THE CHALLENGE</span>
          <p>
            Migrate Java-based{" "}
            <strong>Oracle Revenue Management and Billing (ORMB)</strong> batch
            workloads from legacy Linux VMs to{" "}
            <strong>Red Hat OpenShift</strong>, preserving execution and
            discovery across pods.
          </p>
        </div>
        <ArchitectureDiagram />
        <div className="experience-details">
          <div>
            <FiBox className="detail-icon" aria-hidden="true" />
            <h4>Containerize & orchestrate</h4>
            <p>
              Packaged the JVM, Perl, and Oracle Client dependencies.
              Implemented a persistent worker Deployment and on-demand
              Kubernetes Jobs, connected through a headless Service and Oracle
              Coherence WKA.
            </p>
          </div>
          <div>
            <FiGitBranch className="detail-icon" aria-hidden="true" />
            <h4>Automate delivery</h4>
            <p>
              Built a seven-stage CI/CD pipeline with Harness CD, Docker, and
              Helm. Verified automated image builds, security scans, image
              publishing, deployment, and compliance checks. Managed
              configuration with ConfigMaps and Secrets.
            </p>
          </div>
          <div>
            <FiActivity className="detail-icon" aria-hidden="true" />
            <h4>Observe & validate</h4>
            <p>
              Used shared persistent storage for batch logs, Grafana, and
              centralized logs for troubleshooting. Wrote a Bash submission
              script to launch batch jobs and validate execution end to end.
            </p>
          </div>
        </div>
        <div className="experience-validation">
          <FiCheckCircle aria-hidden="true" />
          <span>
            Validated the full path: image build → deployment → job submission →
            execution logs.
          </span>
        </div>
      </article>
    </Section>
  );
}
