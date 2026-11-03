import SpaceObject from "./SpaceObject";

export default function SpaceInterlude() {
  return (
    <figure
      className="space-interlude container"
      aria-labelledby="space-interlude-title"
    >
      <SpaceObject variant="planet" className="interlude-planet" />
      <figcaption>
        <span className="space-interlude-eyebrow">ENGINEERING PERSPECTIVE</span>
        <strong id="space-interlude-title">Finding order in complexity.</strong>
        <p>
          I’m drawn to backend engineering, infrastructure, DevOps, and the systems
          behind financial markets. Like our universe, complex systems hold order
          within chaos—a perspective that shapes how I build reliable software.
        </p>
        <div className="space-interlude-coordinates" aria-hidden="true">
          <span>01 / SYSTEMS</span>
          <i />
          <span>02 / RELIABILITY</span>
        </div>
      </figcaption>
    </figure>
  );
}
