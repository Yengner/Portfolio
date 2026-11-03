import { FiServer, FiDatabase, FiCode } from "react-icons/fi";
const groups = [
  {
    title: "Infrastructure & delivery",
    Icon: FiServer,
    description: "The foundation that keeps systems running.",
    skills: [
      "Kubernetes",
      "Red Hat OpenShift",
      "Docker",
      "Docker Compose",
      "Helm",
      "Harness CD",
      "GitHub Actions",
      "Linux · RHEL & Ubuntu",
      "Oracle Cloud Infrastructure",
      "Cloudflare Tunnel",
      "Grafana",
    ],
  },
  {
    title: "Backend, data & enterprise systems",
    Icon: FiDatabase,
    description: "Services, pipelines, and reliable persistence.",
    skills: [
      "Java",
      "Python",
      "C# / .NET",
      "Bash",
      "SQL",
      "REST APIs",
      "PostgreSQL",
      "Oracle Database",
      "Supabase",
      "Apache Kafka",
      "ORMB",
      "Oracle Utilities Application Framework (OUAF)",
      "Oracle Coherence",
    ],
  },
  {
    title: "Web & automation",
    Icon: FiCode,
    description: "Interfaces and workflows that bring it together.",
    skills: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "React",
      "Next.js",
      "Tailwind CSS",
      "n8n",
      "Vercel",
    ],
  },
];
export default function StackBadges() {
  return (
    <div className="skills-grid">
      {groups.map(({ title, Icon, description, skills }, index) => (
        <article
          className={`skill-card ${index < 2 ? "skill-primary" : ""}`}
          key={title}
        >
          <Icon className="skill-icon" aria-hidden="true" />
          <h3>{title}</h3>
          <p>{description}</p>
          <ul className="tags">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
