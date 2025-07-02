"use client";

import Blogs from "@/components/CommonElements/Blog";
import Campaigns from "@/components/CommonElements/Campaigns";
import FAQ from "@/components/CommonElements/FAQ";
import Links from "@/components/CommonElements/Links";
import SearchHistory from "@/components/CommonElements/SearchHistory";
import MostVisitedDestinations from "@/components/HotelPageElements/MostVisitedDestinations";
import SelectedHotels from "@/components/HotelPageElements/SelectedHotels";
import SearchArea from "@/components/SearchArea";
import { Stack } from "@mantine/core";
import { useTranslations } from "next-intl";

const HotelPage = () => {
  const t = useTranslations();

  return (
    <Stack gap={0}>
      <SearchArea />
      <SelectedHotels />
      <MostVisitedDestinations />
      <Campaigns tabs={["hotel"]} />
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
      <SearchHistory tabs={["hotel"]} />
    </Stack>
  );
};

export default HotelPage;
