"use client";

import Blogs from "@/components/CommonElements/Blog";
import FlightTickets from "@/components/FlightPageElements/FlightTickets";
import PopularCities from "@/components/FlightPageElements/PopularCities";
import SearchArea from "@/components/SearchArea";
import { Stack } from "@mantine/core";
import { useTranslations } from "next-intl";

const FlightSearch = () => {
  const t = useTranslations();

  return (
    <Stack>
      <SearchArea />
      <PopularCities />
      <FlightTickets />
      <Blogs />
    </Stack>
  );
};

export default FlightSearch;
