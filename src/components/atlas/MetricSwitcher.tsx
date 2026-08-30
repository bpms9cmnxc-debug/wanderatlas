import { METRICS, type MetricId } from "@/lib/metrics";
import { cn } from "@/lib/utils";

type Props = {
  value: MetricId;
  onChange: (id: MetricId) => void;
};

export function MetricSwitcher({ value, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Kennzahl"
      className="metric-switcher flex max-w-full gap-1 overflow-x-auto rounded-xl bg-surface/90 p-1 shadow-[var(--shadow-border)]"
    >
      {METRICS.map((m) => {
        const active = m.id === value;
        return (
          <button
            key={m.id}
            role="tab"
            aria-selected={active}
            className={cn(
              "relative shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium",
              "transition-[background-color,color] duration-(--motion-quick) ease-(--ease-out)",
              active ? "bg-fg text-bg" : "text-muted hover:text-fg",
            )}
            onClick={() => onChange(m.id)}
          >
            {m.short}
          </button>
        );
      })}
    </div>
  );
}
