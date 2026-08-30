import {
  type Country,
  gdpPerCapita,
} from "@/lib/countries";
import { formatCompact, formatDe } from "@/lib/utils";

export type MetricId =
  | "visited"
  | "population"
  | "gdp"
  | "gdpPerCapita"
  | "area"
  | "hdi"
  | "life";

export type MetricScale = "bin" | "log" | "lin";

export type MetricDef = {
  id: MetricId;
  label: string;
  short: string;
  description: string;
  scale: MetricScale;
  unit: string;
};

export const METRICS: MetricDef[] = [
  {
    id: "visited",
    label: "Bereist",
    short: "Bereist",
    description: "Länder, die du bereits betreten hast",
    scale: "bin",
    unit: "",
  },
  {
    id: "population",
    label: "Bevölkerung",
    short: "Bevölkerung",
    description: "Einwohner, gerundete Schätzung",
    scale: "log",
    unit: "",
  },
  {
    id: "gdp",
    label: "BIP",
    short: "BIP",
    description: "Bruttoinlandsprodukt, nominal",
    scale: "log",
    unit: "USD",
  },
  {
    id: "gdpPerCapita",
    label: "BIP pro Kopf",
    short: "BIP/Kopf",
    description: "Nominales BIP je Einwohner",
    scale: "log",
    unit: "USD",
  },
  {
    id: "area",
    label: "Fläche",
    short: "Fläche",
    description: "Landesfläche",
    scale: "log",
    unit: "km²",
  },
  {
    id: "hdi",
    label: "HDI",
    short: "HDI",
    description: "Index der menschlichen Entwicklung",
    scale: "lin",
    unit: "",
  },
  {
    id: "life",
    label: "Lebenserwartung",
    short: "Leben",
    description: "Lebenserwartung bei Geburt",
    scale: "lin",
    unit: "Jahre",
  },
];

export const METRIC_BY_ID: Record<MetricId, MetricDef> = Object.fromEntries(
  METRICS.map((m) => [m.id, m]),
) as Record<MetricId, MetricDef>;

export function metricValue(country: Country, metric: MetricId): number | null {
  switch (metric) {
    case "visited":
      return null;
    case "population":
      return country.population > 0 ? country.population : null;
    case "gdp":
      return country.gdpBillionUsd > 0 ? country.gdpBillionUsd * 1_000_000_000 : null;
    case "gdpPerCapita": {
      const v = gdpPerCapita(country);
      return v > 0 ? v : null;
    }
    case "area":
      return country.areaKm2 > 0 ? country.areaKm2 : null;
    case "hdi":
      return country.hdi > 0 ? country.hdi : null;
    case "life":
      return country.lifeExpectancy > 0 ? country.lifeExpectancy : null;
    default:
      return null;
  }
}

export function formatMetricValue(metric: MetricId, value: number | null): string {
  if (value === null || Number.isNaN(value)) return "—";
  switch (metric) {
    case "visited":
      return "";
    case "population":
      return formatDe(value, { maximumFractionDigits: 0 });
    case "gdp":
      return `${formatCompact(value)} USD`;
    case "gdpPerCapita":
      return `${formatDe(Math.round(value), { maximumFractionDigits: 0 })} USD`;
    case "area":
      return `${formatDe(value, { maximumFractionDigits: 0 })} km²`;
    case "hdi":
      return formatDe(value, { minimumFractionDigits: 3, maximumFractionDigits: 3 });
    case "life":
      return `${formatDe(value, { minimumFractionDigits: 1, maximumFractionDigits: 1 })} J.`;
    default:
      return formatDe(value);
  }
}

export function formatLegendValue(metric: MetricId, value: number | null): string {
  if (value === null || Number.isNaN(value)) return "—";
  switch (metric) {
    case "hdi":
      return formatDe(value, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    case "life":
      return `${formatDe(value, { maximumFractionDigits: 0 })} J.`;
    case "gdp":
    case "gdpPerCapita":
      return `${formatCompact(value)} USD`;
    case "area":
      return `${formatCompact(value)} km²`;
    case "population":
      return formatCompact(value);
    default:
      return formatCompact(value);
  }
}
