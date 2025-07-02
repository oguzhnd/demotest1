"use client";

import Blogs from "@/components/CommonElements/Blog";
import Campaigns from "@/components/CommonElements/Campaigns";
import SearchHistory from "@/components/CommonElements/SearchHistory";
import MostVisitedDestinations from "@/components/HotelPageElements/MostVisitedDestinations";
import SelectedHotels from "@/components/HotelPageElements/SelectedHotels";
import SearchArea from "@/components/SearchArea";
import { Stack } from "@mantine/core";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations();

  return (
    <Stack gap={0}>
      <SearchArea />
      <Campaigns />
      <Blogs />
      <SearchHistory />
    </Stack>
  );
};

export default HomePage;
