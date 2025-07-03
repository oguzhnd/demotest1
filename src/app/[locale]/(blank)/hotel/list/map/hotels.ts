import { FeatureCollection, Point } from "geojson";

export type CastleFeatureProps = {
  name: string;
  wikipedia: string;
  wikidata: string;
};

// @ts-ignore
export type CastlesGeojson = FeatureCollection<Point, CastleFeatureProps>;