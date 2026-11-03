"use client";
import { useId, useState } from "react";
import styles from "@/app/edgefoundry/edgefoundry.module.css";

// Synthetic, dimensionless values explain a possible divergence. They are not
// a historical session, a reconstructed trade, or a claim about a feed handoff.
const points = Array.from({ length: 91 }, (_, minute) => {
  const index =
    0.12 * Math.sin(minute * 0.28) +
    0.08 * Math.cos(minute * 0.13) +
    (minute > 15 ? Math.min((minute - 15) / 18, 1) * 0.75 : 0);
  const futures =
    minute <= 15
      ? 0.07 + 0.13 * Math.sin(minute * 0.24)
      : 0.53 + 0.14 * Math.sin(minute * 0.18);
  return { minute, index, futures };
});
const target = points[15].index;
const x = (minute: number) => minute * 10;
const y = (value: number) => 220 - value * 140;
const path = (data: typeof points, field: "index" | "futures") =>
  data
    .map(
      (p, i) =>
        `${i ? "L" : "M"}${x(p.minute).toFixed(2)},${y(p[field]).toFixed(2)}`,
    )
    .join(" ");
const clock = (minute: number) => {
  const total = 16 * 60 + 45 + minute;
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
};
const labels = [
  { key: "futures", label: "Traditional futures", color: "slate" },
  { key: "index", label: "Continuous index", color: "gold" },
  { key: "opening", label: "Kalshi opening level", color: "blue" },
] as const;

export default function MarketGapChart() {
  const id = useId();
  const [minute, setMinute] = useState(30);
  const [visible, setVisible] = useState({
    futures: true,
    index: true,
    opening: true,
  });
  const phase =
    minute < 15
      ? "Before maintenance"
      : minute <= 30
        ? "Inside the 15-minute contract"
        : minute < 75
          ? "After the contract window"
          : "Futures resume";
  const explanation =
    minute < 15
      ? "Independent pricing systems can already differ. The question is how their behavior changes at the boundary."
      : minute <= 30
        ? "Futures observations pause in this illustration while a continuous index keeps moving. Kalshi’s opening level remains the fixed comparator for the contract."
        : minute < 75
          ? "The 17:15 settlement boundary is distinct from the end of the futures maintenance hour. Different schedules create different comparison windows."
          : "The futures series resumes at 18:00 in this illustration. A later observation cannot establish what was executable during the earlier contract.";
  return (
    <figure
      className={styles.chart}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-description`}
    >
      <div className={styles.chartTop}>
        <div>
          <span className={styles.kicker}>AN EXPLANATORY MODEL</span>
          <h3 id={`${id}-title`}>
            One commodity. Different reference systems.
          </h3>
        </div>
        <span className={styles.illustrative}>Illustrative data</span>
      </div>
      <p id={`${id}-description`} className={styles.chartDescription}>
        Synthetic, relative values explain how sources can diverge. This is not
        an actual Gold session or a record of trading performance.
      </p>
      <div className={styles.chartLegend} aria-label="Visible price references">
        {labels.map((item) => (
          <label key={item.key}>
            <input
              type="checkbox"
              checked={visible[item.key]}
              onChange={() =>
                setVisible({ ...visible, [item.key]: !visible[item.key] })
              }
            />
            <span className={styles[item.color]} aria-hidden="true" />
            {item.label}
          </label>
        ))}
      </div>
      <div className={styles.chartEvents}>
        <span>
          <i className={styles.goldDot} />
          17:00 · Futures maintenance begins
        </span>
        <span>
          <i className={styles.blueDot} />
          17:15 · Contract settlement boundary
        </span>
      </div>
      <div className={styles.plot}>
        <svg
          viewBox="0 0 900 290"
          preserveAspectRatio="none"
          role="img"
          aria-label="Illustrative futures and continuous-index paths with a fixed opening comparator; the futures series has a gap from 17:00 to 18:00."
        >
          <rect
            x="150"
            y="0"
            width="600"
            height="290"
            className={styles.maintenanceShade}
          />
          {[40, 100, 160, 220, 280].map((value) => (
            <line
              key={value}
              x1="0"
              x2="900"
              y1={value}
              y2={value}
              className={styles.gridLine}
            />
          ))}
          <line
            x1="150"
            x2="150"
            y1="0"
            y2="290"
            className={styles.maintenanceLine}
          />
          <line
            x1="300"
            x2="300"
            y1="0"
            y2="290"
            className={styles.settlementLine}
          />
          {visible.futures && (
            <g className={styles.futuresPath}>
              <path
                d={path(
                  points.filter((p) => p.minute <= 15),
                  "futures",
                )}
              />
              <path
                d={path(
                  points.filter((p) => p.minute >= 75),
                  "futures",
                )}
              />
            </g>
          )}
          {visible.opening && (
            <line
              x1="150"
              x2="300"
              y1={y(target)}
              y2={y(target)}
              className={styles.openingPath}
            />
          )}
          {visible.index && (
            <path d={path(points, "index")} className={styles.indexPath} />
          )}
          <line
            x1={x(minute)}
            x2={x(minute)}
            y1="0"
            y2="290"
            className={styles.scrubLine}
          />
          {visible.index && (
            <circle
              cx={x(minute)}
              cy={y(points[minute].index)}
              r="5"
              className={styles.chartPoint}
            />
          )}
        </svg>
      </div>
      <div className={styles.chartAxis} aria-hidden="true">
        {[0, 15, 30, 75, 90].map((value) => (
          <span key={value} style={{ left: `${(value / 90) * 100}%` }}>
            {clock(value)}
          </span>
        ))}
      </div>
      <div className={styles.chartAxisNote}>
        <span>Relative price movement</span>
        <span>New York time</span>
      </div>
      <label className={styles.scrubber} htmlFor={`${id}-time`}>
        <span>Explore the timeline</span>
        <output htmlFor={`${id}-time`}>{clock(minute)} ET</output>
        <input
          id={`${id}-time`}
          type="range"
          min="0"
          max="90"
          step="1"
          value={minute}
          aria-valuetext={`${clock(minute)} New York time. ${phase}.`}
          onChange={(event) => setMinute(Number(event.target.value))}
        />
      </label>
      <figcaption className={styles.chartCaption} aria-live="polite">
        <strong>{phase}</strong>
        <span>{explanation}</span>
      </figcaption>
    </figure>
  );
}
