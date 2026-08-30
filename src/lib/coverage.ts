import {
  COUNTABLE_COUNTRIES,
  CONTINENTS,
  type ContinentId,
  type Country,
} from "@/lib/countries";
import type { Visit } from "@/lib/visit-store";

export const TRACKED_CONTINENTS: ContinentId[] = [
  "europa",
  "asien",
  "afrika",
  "nordamerika",
  "suedamerika",
  "ozeanien",
];

export type ContinentCoverage = {
  id: ContinentId;
  label: string;
  total: number;
  visited: number;
  ratio: number;
};

export type Coverage = {
  total: number;
  visited: number;
  ratio: number;
  continents: ContinentCoverage[];
};

export function computeCoverage(visits: Record<string, Visit>): Coverage {
  const visitedSet = new Set(Object.keys(visits));
  const countable = COUNTABLE_COUNTRIES;
  const visited = countable.filter((c) => visitedSet.has(c.iso2)).length;
  const continents = TRACKED_CONTINENTS.map((id) => {
    const list = countable.filter((c) => c.continent === id);
    const v = list.filter((c) => visitedSet.has(c.iso2)).length;
    return {
      id,
      label: CONTINENTS[id].label,
      total: list.length,
      visited: v,
      ratio: list.length === 0 ? 0 : v / list.length,
    };
  });
  return {
    total: countable.length,
    visited,
    ratio: countable.length === 0 ? 0 : visited / countable.length,
    continents,
  };
}

export function visitedCountries(visits: Record<string, Visit>): Country[] {
  const set = new Set(Object.keys(visits));
  return COUNTABLE_COUNTRIES.filter((c) => set.has(c.iso2));
}
