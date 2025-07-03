import { Box, Image, Stack, Text } from "@mantine/core";
import { useHover, useMediaQuery } from "@mantine/hooks";
import React, { FC } from "react";

import classes from "./Campaigns.module.css";
import { useRouter } from "@/i18n/navigation";
import { CampaignTypes } from ".";

export interface CampaignCardProps {
  id: string;
  image: string;
  type: CampaignTypes
  title: string;
}

const CampaignCard: FC<CampaignCardProps> = ({ id, image, title }) => {
  const matchesSm = useMediaQuery("(max-width: 48em)");

  const { push } = useRouter();

  const { ref, hovered } = useHover();

  return (
    <Stack
      ref={ref}
      gap="xs"
      style={{ cursor: "pointer" }}
      onClick={() => push(`/campaigns/${id}`)}
    >
      <Box
        style={{ overflow: "hidden", borderRadius: "var(--mantine-radius-md)" }}
        h={matchesSm ? 100 : 160}
      >
        <Image
          src={image}
          h={matchesSm ? 100 : 160}
          radius="md"
          style={{
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "transform .2s ease",
          }}
        />
      </Box>
      <Text fw={500}>{title}</Text>
    </Stack>
  );
};

export default CampaignCard;
