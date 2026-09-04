import { useEffect, useState } from "react";
import { Check, Download, MapPinned, Trash2 } from "lucide-react";
import { COUNTRY_BY_ISO2, CONTINENTS, type Country } from "@/lib/countries";
import { METRICS, formatMetricValue, metricValue, type MetricId } from "@/lib/metrics";
import type { Visit } from "@/lib/visit-store";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { CoveragePanel } from "@/components/atlas/CoveragePanel";
import { cn } from "@/lib/utils";

type Props = {
  selected: Country | null;
  visits: Record<string, Visit>;
  onToggle: (iso2: string) => void;
  onNote: (iso2: string, note: string) => void;
  onSince: (iso2: string, since: string) => void;
  onClear: () => void;
  className?: string;
};

export function Sidebar({
  selected,
  visits,
  onToggle,
  onNote,
  onSince,
  onClear,
  className,
}: Props) {
  const visit = selected ? visits[selected.iso2] : undefined;
  const visitedCount = Object.keys(visits).filter((k) => COUNTRY_BY_ISO2[k]?.kind === "c")
    .length;

  return (
    <aside
      className={cn(
        "flex h-full min-h-0 w-full flex-col bg-surface",
        className,
      )}
    >
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
        {selected ? (
          <CountryDetail
            country={selected}
            visit={visit}
            onToggle={() => onToggle(selected.iso2)}
            onNote={(n) => onNote(selected.iso2, n)}
            onSince={(s) => onSince(selected.iso2, s)}
          />
        ) : (
          <EmptyDetail />
        )}
        <Separator className="my-6" />
        <CoveragePanel visits={visits} />
      </div>
      <div className="flex items-center gap-2 border-t border-border px-5 py-3">
        <a
          href="https://github.com/bpms9cmnxc-debug/wanderatlas/releases/latest"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-8 flex-1 items-center justify-center gap-2 rounded-lg px-3 text-xs font-medium text-muted transition-colors duration-(--motion-quick) hover:bg-surface-2 hover:text-fg"
        >
          <Download className="size-3.5" />
          Mac-App
        </a>
        <Button
          variant="ghost"
          size="sm"
          className="text-subtle"
          disabled={visitedCount === 0}
          onClick={onClear}
        >
          <Trash2 className="size-3.5" />
          Zurücksetzen
        </Button>
      </div>
    </aside>
  );
}

function EmptyDetail() {
  return (
    <div>
      <p className="font-display text-xl tracking-tight text-fg">Wähle ein Land</p>
      <p className="mt-2 text-sm text-pretty text-muted">
        Klicke auf die Karte oder suche oben. Markiere, wo du schon warst — der
        Anteil erscheint live, auch je Kontinent.
      </p>
      <p className="mt-4 flex items-center gap-2 text-xs text-subtle">
        <MapPinned className="size-3.5" />
        Doppelklick zoomt hinein
      </p>
    </div>
  );
}

function CountryDetail({
  country,
  visit,
  onToggle,
  onNote,
  onSince,
}: {
  country: Country;
  visit?: Visit;
  onToggle: () => void;
  onNote: (note: string) => void;
  onSince: (since: string) => void;
}) {
  const [note, setNote] = useState(visit?.note ?? "");
  useEffect(() => {
    setNote(visit?.note ?? "");
  }, [country.iso2, visit?.note]);

  return (
    <div>
      <p className="text-[0.6875rem] font-medium tracking-wide text-muted uppercase">
        {CONTINENTS[country.continent].label}
        {country.kind === "t" ? " · Gebiet" : ""}
      </p>
      <h2 className="font-display mt-1 text-2xl leading-tight font-medium tracking-tight text-balance text-fg">
        {country.name}
      </h2>
      <p className="mt-1 text-sm text-muted">
        {country.capital || "—"}
        <span className="text-subtle"> · {country.iso2}</span>
      </p>

      <label className="mt-5 flex min-h-11 cursor-pointer items-center justify-between gap-3 rounded-xl bg-surface-2 px-3 py-2.5">
        <span className="flex items-center gap-2 text-sm text-fg">
          {visit ? <Check className="size-4 text-accent" /> : null}
          Ich war hier
        </span>
        <Switch checked={Boolean(visit)} onCheckedChange={onToggle} />
      </label>

      {visit && (
        <div className="mt-3 flex flex-col gap-3">
          <label className="flex flex-col gap-1.5 text-xs text-muted">
            Erstmals
            <input
              type="date"
              value={visit.since}
              onChange={(e) => onSince(e.target.value)}
              className="h-10 rounded-lg bg-surface-2 px-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-xs text-muted">
            Notiz
            <textarea
              value={note}
              rows={2}
              onChange={(e) => setNote(e.target.value)}
              onBlur={() => onNote(note)}
              placeholder="Kurz notieren…"
              className="resize-none rounded-lg bg-surface-2 px-3 py-2 text-sm text-fg shadow-[var(--shadow-border)] outline-none placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-accent/40"
            />
          </label>
        </div>
      )}

      <dl className="mt-6 grid grid-cols-1 gap-2">
        {METRICS.filter((m) => m.id !== "visited").map((m) => (
          <MetricRow key={m.id} country={country} metric={m.id} label={m.label} />
        ))}
      </dl>
    </div>
  );
}

function MetricRow({
  country,
  metric,
  label,
}: {
  country: Country;
  metric: MetricId;
  label: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-border py-2 last:border-0">
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="text-sm tabular-nums text-fg">
        {formatMetricValue(metric, metricValue(country, metric))}
      </dd>
    </div>
  );
}
