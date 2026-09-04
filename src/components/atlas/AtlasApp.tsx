import { useEffect, useMemo, useState } from "react";
import { Globe2, PanelRight } from "lucide-react";
import { COUNTRY_BY_ISO2, type Country } from "@/lib/countries";
import { computeCoverage } from "@/lib/coverage";
import { loadWorld } from "@/lib/geo";
import type { MetricId } from "@/lib/metrics";
import { useVisitStore } from "@/lib/visit-store";
import { formatPercent } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CountrySearch } from "@/components/atlas/CountrySearch";
import { Legend } from "@/components/atlas/Legend";
import { MetricSwitcher } from "@/components/atlas/MetricSwitcher";
import { Sidebar } from "@/components/atlas/Sidebar";
import { WorldMap } from "@/components/atlas/WorldMap";

const WORLD = loadWorld();

export function AtlasApp() {
  const [metric, setMetric] = useState<MetricId>("population");
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [focusNonce, setFocusNonce] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const visits = useVisitStore((s) => s.visits);
  const hydrated = useVisitStore((s) => s.hydrated);
  const shownVisits = hydrated ? visits : {};
  const toggleVisit = useVisitStore((s) => s.toggleVisit);
  const setNote = useVisitStore((s) => s.setNote);
  const setSince = useVisitStore((s) => s.setSince);
  const clearAll = useVisitStore((s) => s.clearAll);

  const selected: Country | null = useMemo(() => {
    if (!selectedKey) return null;
    if (COUNTRY_BY_ISO2[selectedKey]) return COUNTRY_BY_ISO2[selectedKey];
    const feat = WORLD.find((f) => f.properties.key === selectedKey);
    return feat?.country ?? null;
  }, [selectedKey]);

  const coverage = computeCoverage(shownVisits);

  function pickCountry(c: Country) {
    setSelectedKey(c.iso2);
    setFocusNonce((n) => n + 1);
    setMobileOpen(true);
  }

  function selectFromMap(key: string | null) {
    setSelectedKey(key);
    if (key) setMobileOpen(true);
  }

  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-bg text-fg">
      <header className="z-30 flex items-center gap-3 border-b border-border px-3 py-2.5 md:px-4">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-surface-2 text-accent">
            <Globe2 className="size-4" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-sm leading-none font-medium tracking-tight">
              Wanderatlas
            </p>
            <p className="mt-0.5 hidden text-[0.6875rem] text-subtle sm:block">
              Länder, die du berührt hast
            </p>
          </div>
        </div>
        <CountrySearch
          onPick={pickCountry}
          className="mx-auto hidden w-full max-w-xs md:block"
        />
        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-lg leading-none tabular-nums">
              {formatPercent(
                coverage.ratio,
                coverage.ratio > 0 && coverage.ratio < 0.1 ? 1 : 0,
              )}
            </span>
            <span className="text-[0.6875rem] text-muted">bereist</span>
          </div>
          <Button
            variant="secondary"
            size="icon-sm"
            className="lg:hidden"
            aria-label="Details öffnen"
            onClick={() => setMobileOpen(true)}
          >
            <PanelRight />
          </Button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <main className="relative min-w-0 flex-1 overflow-hidden">
          <WorldMap
            features={ready ? WORLD : []}
            loading={!ready}
            metric={metric}
            visits={shownVisits}
            selectedKey={selectedKey}
            focusNonce={focusNonce}
            onSelect={selectFromMap}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-col gap-2 p-3 md:p-4">
            <div className="pointer-events-auto md:hidden">
              <CountrySearch onPick={pickCountry} />
            </div>
            <div className="pointer-events-auto w-full min-w-0 pr-14 md:w-auto md:max-w-[calc(100%-4rem)] md:pr-0">
              <MetricSwitcher value={metric} onChange={setMetric} />
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-3 left-3 z-20 md:bottom-4 md:left-4">
            <div className="pointer-events-auto">
              <Legend metric={metric} />
            </div>
          </div>
        </main>

        <div className="hidden w-[22.5rem] shrink-0 border-l border-border lg:block">
          <Sidebar
            selected={selected}
            visits={shownVisits}
            onToggle={toggleVisit}
            onNote={setNote}
            onSince={setSince}
            onClear={clearAll}
          />
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden">
          <button
            className="fixed inset-0 z-40 bg-bg/60"
            aria-label="Schließen"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-x-0 bottom-0 z-50 max-h-[78dvh] overflow-hidden rounded-t-3xl bg-surface shadow-[var(--shadow-float)]">
            <div className="flex justify-center pt-3">
              <span className="h-1 w-10 rounded-full bg-border-strong" />
            </div>
            <div className="h-[min(72dvh,640px)]">
              <Sidebar
                selected={selected}
                visits={shownVisits}
                onToggle={toggleVisit}
                onNote={setNote}
                onSince={setSince}
                onClear={clearAll}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
