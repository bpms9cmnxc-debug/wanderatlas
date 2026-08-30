import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  geoGraticule10,
  geoNaturalEarth1,
  geoPath,
  type GeoProjection,
  type GeoPermissibleObjects,
} from "d3-geo";
import { extent } from "d3-array";
import { interpolateRgbBasis } from "d3-interpolate";
import { scaleSequential, scaleSequentialLog } from "d3-scale";
import { zoom, zoomIdentity, type ZoomBehavior } from "d3-zoom";
import { select } from "d3-selection";
import "d3-transition";
import { Minus, Plus, RotateCcw } from "lucide-react";
import type { CountryFeature } from "@/lib/geo";
import {
  METRIC_BY_ID,
  formatMetricValue,
  metricValue,
  type MetricId,
} from "@/lib/metrics";
import { COUNTABLE_COUNTRIES } from "@/lib/countries";
import { CHORO_HEX, LAND_HEX, MISSING_HEX, VISITED_HEX } from "@/lib/tokens";
import type { Visit } from "@/lib/visit-store";
import { Button } from "@/components/ui/button";
import { MapTooltip } from "@/components/atlas/MapTooltip";
import { cn } from "@/lib/utils";

const SPHERE = { type: "Sphere" } as const;

type Props = {
  features: CountryFeature[];
  loading: boolean;
  metric: MetricId;
  visits: Record<string, Visit>;
  selectedKey: string | null;
  focusNonce: number;
  onSelect: (key: string | null) => void;
};

export function WorldMap({
  features,
  loading,
  metric,
  visits,
  selectedKey,
  focusNonce,
  onSelect,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 800, height: 560 });
  const [transform, setTransform] = useState(zoomIdentity);
  const [hover, setHover] = useState<{
    feature: CountryFeature;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const cr = entries[0]?.contentRect;
      if (!cr) return;
      setSize({
        width: Math.max(320, cr.width),
        height: Math.max(280, cr.height),
      });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const projection = useMemo<GeoProjection>(() => {
    return geoNaturalEarth1()
      .rotate([-11, -6, 0])
      .fitExtent(
        [
          [28, 20],
          [size.width - 28, size.height - 20],
        ],
        SPHERE as unknown as GeoPermissibleObjects,
      );
  }, [size.width, size.height]);

  const path = useMemo(() => geoPath(projection), [projection]);
  const graticule = useMemo(() => geoGraticule10(), []);
  const sphereD = useMemo(() => path(SPHERE as never) ?? "", [path]);
  const graticuleD = useMemo(() => path(graticule) ?? "", [path]);

  const colorFn = useMemo(() => {
    if (metric === "visited") return null;
    const def = METRIC_BY_ID[metric];
    const values = COUNTABLE_COUNTRIES.map((c) => metricValue(c, metric)).filter(
      (v): v is number => v != null && v > 0,
    );
    const ext = extent(values);
    if (ext[0] == null || ext[1] == null || ext[0] === ext[1]) return null;
    const interp = interpolateRgbBasis([...CHORO_HEX]);
    if (def.scale === "log") {
      return scaleSequentialLog(interp).domain([Math.max(ext[0], 1e-9), ext[1]]);
    }
    return scaleSequential(interp).domain([ext[0], ext[1]]);
  }, [metric]);

  const fillOf = useCallback(
    (f: CountryFeature) => {
      const c = f.country;
      if (!c || c.kind === "x") return MISSING_HEX;
      if (metric === "visited") {
        return visits[c.iso2] ? VISITED_HEX : LAND_HEX;
      }
      const v = metricValue(c, metric);
      if (v == null || !colorFn) return LAND_HEX;
      return colorFn(v);
    },
    [metric, visits, colorFn],
  );

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const behavior = zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.85, 16])
      .extent([
        [0, 0],
        [size.width, size.height],
      ])
      .on("zoom", (event) => {
        setTransform(event.transform);
      });
    zoomRef.current = behavior;
    const sel = select(svg);
    sel.call(behavior);
    sel.on("dblclick.zoom", null);
    return () => {
      sel.on(".zoom", null);
    };
  }, [size.width, size.height]);

  const zoomToFeature = useCallback(
    (f: CountryFeature) => {
      const svg = svgRef.current;
      const behavior = zoomRef.current;
      if (!svg || !behavior) return;
      const b = path.bounds(f);
      const dx = Math.max(b[1][0] - b[0][0], 8);
      const dy = Math.max(b[1][1] - b[0][1], 8);
      const cx = (b[0][0] + b[1][0]) / 2;
      const cy = (b[0][1] + b[1][1]) / 2;
      const k = Math.max(
        1.2,
        Math.min(12, 0.72 / Math.max(dx / size.width, dy / size.height)),
      );
      const t = zoomIdentity
        .translate(size.width / 2, size.height / 2)
        .scale(k)
        .translate(-cx, -cy);
      select(svg).transition().duration(650).call(behavior.transform, t);
    },
    [path, size.width, size.height],
  );

  useEffect(() => {
    if (!selectedKey || !features.length || focusNonce === 0) return;
    const f = features.find(
      (x) => x.properties.key === selectedKey || x.country?.iso2 === selectedKey,
    );
    if (f) zoomToFeature(f);
  }, [focusNonce, selectedKey, features, zoomToFeature]);

  const selected = features.find(
    (f) => f.properties.key === selectedKey || f.country?.iso2 === selectedKey,
  );

  function scaleBy(k: number) {
    const svg = svgRef.current;
    const behavior = zoomRef.current;
    if (!svg || !behavior) return;
    select(svg).transition().duration(220).call(behavior.scaleBy, k);
  }

  function resetView() {
    const svg = svgRef.current;
    const behavior = zoomRef.current;
    if (!svg || !behavior) return;
    select(svg).transition().duration(400).call(behavior.transform, zoomIdentity);
  }

  return (
    <div ref={wrapRef} className="relative h-full w-full overflow-hidden bg-ocean">
      {loading && (
        <div className="absolute inset-0 z-10 bg-ocean" aria-hidden />
      )}
      <svg
        ref={svgRef}
        width={size.width}
        height={size.height}
        className="atlas-svg block h-full w-full touch-none"
        role="img"
        aria-label="Choropleth-Weltkarte"
        onPointerDown={(e) => {
          pointerRef.current = { x: e.clientX, y: e.clientY };
        }}
        onClick={(e) => {
          const dx = e.clientX - pointerRef.current.x;
          const dy = e.clientY - pointerRef.current.y;
          if (dx * dx + dy * dy > 36) return;
          if ((e.target as SVGElement).dataset.country !== "1") onSelect(null);
        }}
      >
        <g
          transform={`translate(${transform.x},${transform.y}) scale(${transform.k})`}
        >
          <path d={sphereD} className="atlas-sphere" />
          <path d={graticuleD} className="atlas-graticule" />
          {features.map((f, i) => {
            const d = path(f);
            if (!d) return null;
            const key = f.properties.key || f.country?.iso2 || f.properties.name;
            const isSel =
              selectedKey !== null &&
              (f.properties.key === selectedKey || f.country?.iso2 === selectedKey);
            const isVisited = Boolean(f.country && visits[f.country.iso2]);
            return (
              <path
                key={`${key}-${i}`}
                d={d}
                data-country="1"
                fill={fillOf(f)}
                className={cn(
                  "atlas-country",
                  isVisited && metric !== "visited" && "atlas-country-visited",
                  isSel && "atlas-country-selected",
                )}
                onPointerEnter={(e) => {
                  setHover({ feature: f, x: e.clientX, y: e.clientY });
                }}
                onPointerMove={(e) => {
                  setHover((h) =>
                    h ? { ...h, x: e.clientX, y: e.clientY } : { feature: f, x: e.clientX, y: e.clientY },
                  );
                }}
                onPointerLeave={() => setHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  const dx = e.clientX - pointerRef.current.x;
                  const dy = e.clientY - pointerRef.current.y;
                  if (dx * dx + dy * dy > 36) return;
                  const k = f.country?.iso2 ?? f.properties.key;
                  onSelect(k);
                }}
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  zoomToFeature(f);
                }}
              />
            );
          })}
          {selected && path(selected) ? (
            <path d={path(selected)!} className="atlas-selected-outline" />
          ) : null}
        </g>
      </svg>

      {hover && (
        <MapTooltip
          x={hover.x}
          y={hover.y}
          name={hover.feature.country?.name ?? hover.feature.properties.name}
          continent={hover.feature.country?.continent}
          metric={metric}
          value={
            hover.feature.country
              ? formatMetricValue(
                  metric,
                  metric === "visited"
                    ? null
                    : metricValue(hover.feature.country, metric),
                )
              : "—"
          }
          visited={Boolean(
            hover.feature.country && visits[hover.feature.country.iso2],
          )}
        />
      )}

      <div className="pointer-events-none absolute top-3 right-3 z-20 flex flex-col gap-2">
        <div className="pointer-events-auto flex flex-col overflow-hidden rounded-xl bg-surface/90 shadow-[var(--shadow-border)]">
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-none"
            aria-label="Vergrößern"
            onClick={() => scaleBy(1.4)}
          >
            <Plus />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-none"
            aria-label="Verkleinern"
            onClick={() => scaleBy(1 / 1.4)}
          >
            <Minus />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-none"
            aria-label="Ansicht zurücksetzen"
            onClick={resetView}
          >
            <RotateCcw />
          </Button>
        </div>
      </div>
    </div>
  );
}
