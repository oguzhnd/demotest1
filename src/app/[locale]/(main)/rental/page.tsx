"use client";

import Blogs from "@/components/CommonElements/Blog";
import PopularAirports from "@/components/RentalPageElements/PopularAirports";
import PopularLocations from "@/components/RentalPageElements/PopularLocations";
import SearchArea from "@/components/SearchArea";
import { Stack } from "@mantine/core";
import { useTranslations } from "next-intl";

const RentalSearch = () => {
  const t = useTranslations();

  return (
    <Stack>
      <SearchArea />
      <PopularLocations />  
      <PopularAirports />
      <Blogs />
    </Stack>
  );
};

export default RentalSearch;
