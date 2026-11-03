import { Section } from "../utils";
import StackBadges from "../StackBadges";
export default function ProjectsSection() {
  return (
    <Section
      id="me"
      number="03"
      title="The tools behind the work."
      description="A backend and infrastructure foundation, with the range to ship the whole product."
    >
      <StackBadges />
    </Section>
  );
}
