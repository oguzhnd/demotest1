import React, { useCallback } from "react";
import {
  AdvancedMarker,
  AdvancedMarkerAnchorPoint,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { IconTower } from "@tabler/icons-react";
import { Center, Paper, Text } from "@mantine/core";

import classes from "../Hotel.module.css";
import { useLocale } from "next-intl";

type TreeMarkerProps = {
  position: google.maps.LatLngLiteral;
  featureId: string;
  onMarkerClick?: (
    marker: google.maps.marker.AdvancedMarkerElement,
    featureId: string
  ) => void;
  active: boolean
  selected?: boolean
};

export const FeatureMarker = ({
  position,
  featureId,
  onMarkerClick,
  active,
  selected
}: TreeMarkerProps) => {
  const locale = useLocale();

  const [markerRef, marker] = useAdvancedMarkerRef();
  const handleClick = useCallback(
    () => onMarkerClick && onMarkerClick(marker!, featureId),
    [onMarkerClick, marker, featureId]
  );

  return (
    <AdvancedMarker
      ref={markerRef}
      position={position}
      onClick={handleClick}
      anchorPoint={AdvancedMarkerAnchorPoint.CENTER}
      className={"marker feature"}
    >
      <Paper px="md" py={8} radius="xl" className={classes.hotelMarker} data-arrow data-active={active} data-selected={selected}>
        <Text size="sm" fw={500} lh={1} truncate>
          {(16077).toLocaleString(locale)} TRY
        </Text>
      </Paper>
    </AdvancedMarker>
  );
};
