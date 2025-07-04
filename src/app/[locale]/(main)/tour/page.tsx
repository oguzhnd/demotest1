"use client";

import Blogs from "@/components/CommonElements/Blog";
import Campaigns from "@/components/CommonElements/Campaigns";
import FAQ from "@/components/CommonElements/FAQ";
import Links from "@/components/CommonElements/Links";
import SearchHistory from "@/components/CommonElements/SearchHistory";
import SearchArea from "@/components/SearchArea";
import PopularTours from "@/components/TourPageElements/PopularTours";
import SelectedTours from "@/components/TourPageElements/SelectedTours";
import { Stack } from "@mantine/core";
import React from "react";

const TourPage = () => {
  return (
    <Stack gap={0}>
      <SearchArea />
      <SelectedTours />
      <PopularTours />
      {/* <SelectedHotels />
          <MostVisitedDestinations /> */}
      <Campaigns tabs={["tour"]} />
      <Blogs />
      <Links />
      <FAQ
        items={[
          {
            question: "NTT GO en uygun otel fiyatlarını nasıl sunuyor?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, temporibus corporis, sapiente, repudiandae a ex debitis nostrum possimus culpa excepturi fugiat laboriosam. Voluptatem dolores at debitis rerum laborum facilis mollitia?",
          },
          {
            question: "NTT GO’da otel rezervasyonumu nasıl yapabilirim?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, temporibus corporis, sapiente, repudiandae a ex debitis nostrum possimus culpa excepturi fugiat laboriosam. Voluptatem dolores at debitis rerum laborum facilis mollitia?",
          },
          {
            question: "NTT GO'da yurt dışı otel rezervasyonu yapabilir miyim?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, temporibus corporis, sapiente, repudiandae a ex debitis nostrum possimus culpa excepturi fugiat laboriosam. Voluptatem dolores at debitis rerum laborum facilis mollitia?",
          },
        ]}
      />
      <SearchHistory tabs={["tour"]} />
    </Stack>
  );
};

export default TourPage;
