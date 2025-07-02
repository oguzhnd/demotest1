"use client";

import Blogs from "@/components/CommonElements/Blog";
import Campaigns from "@/components/CommonElements/Campaigns";
import FAQ from "@/components/CommonElements/FAQ";
import SearchHistory from "@/components/CommonElements/SearchHistory";
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
      <Campaigns tabs={["rental"]} />
      <Blogs />
      <FAQ
        items={[
          {
            question:
              "NTT GO, en uygun araç kiralama seçeneklerini nasıl sunuyor?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, temporibus corporis, sapiente, repudiandae a ex debitis nostrum possimus culpa excepturi fugiat laboriosam. Voluptatem dolores at debitis rerum laborum facilis mollitia?",
          },
          {
            question:
              "NTT GO, araç kiralama işlemlerimin güvenliğini nasıl sağlıyor?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, temporibus corporis, sapiente, repudiandae a ex debitis nostrum possimus culpa excepturi fugiat laboriosam. Voluptatem dolores at debitis rerum laborum facilis mollitia?",
          },
          {
            question: "NTT GO’da hangi marka araçları kiralayabilirim?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, temporibus corporis, sapiente, repudiandae a ex debitis nostrum possimus culpa excepturi fugiat laboriosam. Voluptatem dolores at debitis rerum laborum facilis mollitia?",
          },
        ]}
      />
      <SearchHistory tabs={["rental"]} />
    </Stack>
  );
};

export default RentalSearch;
