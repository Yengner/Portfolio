import type { ReactNode } from "react";

export function Section({
  id,
  title,
  description,
  children,
  number,
}: {
  id: string;
  title: string;
  description?: string;
  children?: ReactNode;
  number?: string;
}) {
  return (
    <section
      id={id}
      className="section container"
      aria-labelledby={`${id}-title`}
    >
      <header className="section-header">
        <div className="section-heading">
          <span className="section-number" aria-hidden="true">
            {number}
          </span>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        {description && <p className="section-description">{description}</p>}
      </header>
      {children}
    </section>
  );
}
