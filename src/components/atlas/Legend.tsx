import { useMemo } from "react";
import { extent } from "d3-array";
import { interpolateRgbBasis } from "d3-interpolate";
import { scaleSequential, scaleSequentialLog } from "d3-scale";
import { COUNTABLE_COUNTRIES } from "@/lib/countries";
import {
  METRIC_BY_ID,
  formatLegendValue,
  metricValue,
  type MetricId,
} from "@/lib/metrics";
import { CHORO_HEX, LAND_HEX, VISITED_HEX } from "@/lib/tokens";

const STEPS = 5;

type Props = {
  metric: MetricId;
};

export function Legend({ metric }: Props) {
  const def = METRIC_BY_ID[metric];

  const bins = useMemo(() => {
    if (metric === "visited") return null;
    const values = COUNTABLE_COUNTRIES.map((c) => metricValue(c, metric)).filter(
      (v): v is number => v != null && v > 0,
    );
    const ext = extent(values);
    if (ext[0] == null || ext[1] == null) return [];
    const interp = interpolateRgbBasis([...CHORO_HEX]);
    const scale =
      def.scale === "log"
        ? scaleSequentialLog(interp).domain([Math.max(ext[0], 1e-9), ext[1]])
        : scaleSequential(interp).domain([ext[0], ext[1]]);
    return Array.from({ length: STEPS }, (_, i) => {
      const t = i / (STEPS - 1);
      const v =
        def.scale === "log"
          ? Math.exp(
              Math.log(Math.max(ext[0], 1e-9)) * (1 - t) + Math.log(ext[1]) * t,
            )
          : ext[0] * (1 - t) + ext[1] * t;
      return { color: scale(v), label: formatLegendValue(metric, v) };
    });
  }, [metric, def.scale]);

  return (
    <div className="pointer-events-none max-w-xs rounded-xl bg-surface/90 px-3 py-2.5 shadow-[var(--shadow-border)]">
      <p className="text-[0.6875rem] font-medium tracking-wide text-muted uppercase">
        {def.label}
      </p>
      {metric === "visited" ? (
        <div className="mt-2 flex items-center gap-4">
          <LegendSwatch color={VISITED_HEX} label="Bereist" />
          <LegendSwatch color={LAND_HEX} label="Noch nicht" />
        </div>
      ) : (
        <div className="mt-2">
          <div className="flex h-2 overflow-hidden rounded-full">
            {(bins ?? []).map((b, i) => (
              <div
                key={i}
                className="h-full flex-1"
                style={{ background: b.color }}
              />
            ))}
          </div>
          <div className="mt-1.5 flex justify-between gap-2 text-[0.6875rem] tabular-nums text-subtle">
            <span>{bins?.[0]?.label}</span>
            <span>{bins?.[bins.length - 1]?.label}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function LegendSwatch({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-[0.6875rem] text-muted">
      <span
        className="size-2.5 rounded-sm shadow-[var(--shadow-border)]"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}
