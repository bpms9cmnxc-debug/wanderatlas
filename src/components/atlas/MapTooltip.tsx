import { CONTINENTS, type ContinentId } from "@/lib/countries";
import { METRIC_BY_ID, type MetricId } from "@/lib/metrics";

type Props = {
  x: number;
  y: number;
  name: string;
  continent?: ContinentId;
  metric: MetricId;
  value: string;
  visited: boolean;
};

export function MapTooltip({
  x,
  y,
  name,
  continent,
  metric,
  value,
  visited,
}: Props) {
  const vw = typeof window === "undefined" ? 1200 : window.innerWidth;
  const left = x + 16 > vw - 240 ? x - 220 : x + 16;
  const top = y - 12;
  const metricLabel = METRIC_BY_ID[metric].short;

  return (
    <div
      className="atlas-tooltip pointer-events-none fixed z-50 w-52 rounded-xl bg-surface px-3 py-2.5 shadow-[var(--shadow-float)]"
      style={{ left, top }}
      role="tooltip"
    >
      <p className="font-display text-sm font-medium tracking-tight text-fg text-balance">
        {name}
      </p>
      <p className="mt-0.5 text-xs text-muted">
        {continent ? CONTINENTS[continent].label : "Gebiet"}
        {visited ? " · Bereist" : ""}
      </p>
      {metric !== "visited" && (
        <p className="mt-2 flex items-baseline justify-between gap-2 border-t border-border pt-2 text-xs">
          <span className="text-subtle">{metricLabel}</span>
          <span className="tabular-nums text-fg">{value}</span>
        </p>
      )}
    </div>
  );
}
