"use client";

import Blogs from "@/components/CommonElements/Blog";
import Campaigns from "@/components/CommonElements/Campaigns";
import FAQ from "@/components/CommonElements/FAQ";
import Links from "@/components/CommonElements/Links";
import SearchHistory from "@/components/CommonElements/SearchHistory";
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
      <Campaigns tabs={["flight"]} />
      <Blogs />
      <Links />
      <FAQ
        items={[
          {
            question: "NTT GO, en uygun uçak bileti fiyatlarını nasıl sunuyor?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, temporibus corporis, sapiente, repudiandae a ex debitis nostrum possimus culpa excepturi fugiat laboriosam. Voluptatem dolores at debitis rerum laborum facilis mollitia?",
          },
          {
            question: "NTT GO, işlemlerimin güvenliğini nasıl sağlıyor?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, temporibus corporis, sapiente, repudiandae a ex debitis nostrum possimus culpa excepturi fugiat laboriosam. Voluptatem dolores at debitis rerum laborum facilis mollitia?",
          },
          {
            question: "NTT GO’da aradığım tüm havayolları ve tüm uçuşları bulabilir miyim?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, temporibus corporis, sapiente, repudiandae a ex debitis nostrum possimus culpa excepturi fugiat laboriosam. Voluptatem dolores at debitis rerum laborum facilis mollitia?",
          },
        ]}
      />
      <SearchHistory tabs={["flight"]} />
    </Stack>
  );
};

export default FlightSearch;
