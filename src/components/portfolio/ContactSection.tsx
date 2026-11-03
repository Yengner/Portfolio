import { FiArrowUpRight } from "react-icons/fi";
import SocialLinks from "../SocialLinks";
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-section container"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">
        <span className="status-dot" /> LET’S CONNECT
      </p>
      <h2 id="contact-title">
        Good systems start with
        <br />
        <span>a conversation.</span>
      </h2>
      <p>
        Have an interesting engineering challenge or an opportunity?
        <br />
        I’d love to hear about it.
      </p>
      <a className="contact-email" href="mailto:yengner.bermudez.dev@gmail.com">
        Say hello <FiArrowUpRight aria-hidden="true" />
      </a>
      <SocialLinks compact />
    </section>
  );
}
