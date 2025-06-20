import { Image, Paper, Stack, Text } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import React from "react";

import classes from "./Hotel.module.css";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

const ShowOnMap = () => {
  const t = useTranslations();

  const { push } = useRouter();

  return (
    <Paper
      className={classes.showOnMap}
      withBorder
      onClick={() => push("/hotel/list/map")}
    >
      <Stack gap={0} align="center">
        <Image
          h={100}
          src={`https://maps.googleapis.com/maps/api/staticmap?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&center=36.8643,30.726517&size=400x400&zoom=13`}
        />
        <Text size="sm" fw={500} p={10} c="blue.7">
          {t("Show on Map")}
        </Text>
      </Stack>
    </Paper>
  );
};

export default ShowOnMap;
