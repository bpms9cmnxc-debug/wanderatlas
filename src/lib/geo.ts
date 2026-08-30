import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import worldAtlas from "../../public/data/countries-50m.json";
import { COUNTRY_BY_KEY, matchFeatureKey, type Country } from "@/lib/countries";

export type CountryFeature = Feature<Geometry, { key: string; name: string }> & {
  country?: Country;
};

type TopologyLike = {
  type: "Topology";
  objects: {
    countries: { type: string };
    land?: { type: string };
  };
};

const world = worldAtlas as TopologyLike;

export function loadWorld(): CountryFeature[] {
  const fc = feature(
    world as never,
    world.objects.countries as never,
  ) as unknown as FeatureCollection;
  return fc.features.map((f) => {
    const props = (f.properties ?? {}) as { name?: string };
    const key = matchFeatureKey(
      f.id as string | number | null | undefined,
      props.name,
    );
    const country = key ? COUNTRY_BY_KEY[key] : undefined;
    return {
      ...f,
      properties: {
        key,
        name: country?.name ?? props.name ?? "Unbekannt",
      },
      country,
    } satisfies CountryFeature;
  });
}
