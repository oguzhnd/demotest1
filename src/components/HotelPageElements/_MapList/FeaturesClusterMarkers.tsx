import React, { useCallback } from "react";
import {
  AdvancedMarker,
  AdvancedMarkerAnchorPoint,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { IconTower } from "@tabler/icons-react";
import { Center, Paper, Text } from "@mantine/core";
import { useTranslations } from "next-intl";

import classes from "../Hotel.module.css"

type TreeClusterMarkerProps = {
  clusterId: number;
  onMarkerClick?: (
    marker: google.maps.marker.AdvancedMarkerElement,
    clusterId: number
  ) => void;
  position: google.maps.LatLngLiteral;
  size: number;
  sizeAsText: string;
};

export const FeaturesClusterMarker = ({
  position,
  size,
  sizeAsText,
  onMarkerClick,
  clusterId,
}: TreeClusterMarkerProps) => {
  const t = useTranslations()

  const [markerRef, marker] = useAdvancedMarkerRef();
  const handleClick = useCallback(
    () => onMarkerClick && onMarkerClick(marker!, clusterId),
    [onMarkerClick, marker, clusterId]
  );

  return (
    <AdvancedMarker
      ref={markerRef}
      position={position}
      zIndex={size}
      onClick={handleClick}
      className={"marker cluster"}
      anchorPoint={AdvancedMarkerAnchorPoint.CENTER}
    >
      <Paper px="md" py={8} radius="xl" className={classes.hotelMarker}>
        <Text size="sm" fw={500} lh={1} truncate>{sizeAsText} {t("Hotel")}</Text>
      </Paper>
    </AdvancedMarker>
  );
};
