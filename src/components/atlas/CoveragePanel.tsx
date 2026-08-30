import { computeCoverage } from "@/lib/coverage";
import type { Visit } from "@/lib/visit-store";
import { formatPercent } from "@/lib/utils";

type Props = {
  visits: Record<string, Visit>;
};

export function CoveragePanel({ visits }: Props) {
  const cov = computeCoverage(visits);

  return (
    <section aria-label="Abdeckung">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-[0.6875rem] font-medium tracking-wide text-muted uppercase">
            Welt
          </p>
          <p className="font-display text-3xl leading-none font-medium tracking-tight tabular-nums text-fg">
            {formatPercent(cov.ratio, cov.ratio > 0 && cov.ratio < 0.1 ? 1 : 0)}
          </p>
        </div>
        <p className="text-sm tabular-nums text-muted">
          {cov.visited}
          <span className="text-subtle"> / {cov.total}</span>
        </p>
      </div>
      <ol className="mt-5 flex flex-col gap-3">
        {cov.continents.map((c) => (
          <li key={c.id}>
            <div className="flex items-baseline justify-between gap-2 text-xs">
              <span className="text-fg">{c.label}</span>
              <span className="tabular-nums text-muted">
                {c.visited}/{c.total} · {formatPercent(c.ratio, 0)}
              </span>
            </div>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-surface-2">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-(--motion-fast) ease-(--ease-out)"
                style={{ width: `${Math.max(c.ratio * 100, c.visited > 0 ? 2 : 0)}%` }}
              />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
