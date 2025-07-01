import React, { Ref, useCallback, useEffect } from "react";
import Supercluster, { ClusterProperties } from "supercluster";
import { Feature, FeatureCollection, Point } from "geojson";
import { useSupercluster } from "@/utils/hooks/useSuperCluster";
import { FeaturesClusterMarker } from "./FeaturesClusterMarkers";
import { FeatureMarker } from "./FeatureMarker";

type ClusteredMarkersProps = {
  geojson: FeatureCollection<Point>;
  activeHotel: string | null
  selectedHotel?: string
  onClick: (hotelId: string) => void;
};

const superclusterOptions: Supercluster.Options<any, ClusterProperties> = {
  extent: 256,
  radius: 80,
  maxZoom: 14,
};

export const ClusteredMarkers = ({
  geojson,
  activeHotel,
  selectedHotel,
  onClick,
}: ClusteredMarkersProps) => {
  const { clusters, getLeaves } = useSupercluster(geojson, superclusterOptions);

  return (
    <>
      {clusters.map((feature) => {
        const [lng, lat] = feature.geometry.coordinates;

        const clusterProperties = feature.properties as ClusterProperties;
        const isCluster: boolean = clusterProperties.cluster;

        return isCluster ? (
          <FeaturesClusterMarker
            key={feature.id}
            clusterId={clusterProperties.cluster_id}
            position={{ lat, lng }}
            size={clusterProperties.point_count}
            sizeAsText={String(clusterProperties.point_count_abbreviated)}
            properties={feature.properties}
          />
        ) : (
          <FeatureMarker
            key={feature.id}
            featureId={feature.id as string}
            position={{ lat, lng }}
            selected={selectedHotel === feature.id}
            active={activeHotel === feature.id}
            onMarkerClick={(_, featureId) => onClick(featureId)}
            properties={feature.properties}
          />
        );
      })}
    </>
  );
};
