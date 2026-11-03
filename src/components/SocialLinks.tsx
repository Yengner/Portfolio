"use client";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";
const links = [
  { label: "GitHub", href: "https://github.com/Yengner", Icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yengner-bermudez",
    Icon: FiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:yengner.bermudez.dev@gmail.com",
    Icon: FiMail,
  },
];
export default function SocialLinks({
  orientation = "horizontal",
  compact = false,
}: {
  orientation?: "horizontal" | "vertical";
  compact?: boolean;
}) {
  return (
    <div className={`social-links ${orientation} ${compact ? "compact" : ""}`}>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          <Icon aria-hidden="true" />
          {label}
          <FiArrowUpRight className="social-arrow" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
