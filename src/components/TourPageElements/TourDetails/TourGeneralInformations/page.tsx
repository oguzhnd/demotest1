import { Stack, Text } from "@mantine/core";
import React from "react";

const TourGeneralInformations = () => {
  return (
    <Stack>
      <Stack gap={8}>
        <Text size="lg" fw={500}>
          KATILIM ŞARTI
        </Text>
        <Text size="sm" c="gray.7">
          Bu gezimiz, en az 20 kişi katılım şartı ile düzenlenmektedir. Yeterli
          katılım sağlanamadığı takdirde, son iptal bildirim tarihi tur
          başlangıcının 20 gün öncesidir. Katılım yetersizliği nedeniyle iptal
          edilen tur, acenteniz aracılığı ile tarafınıza bildirilecektir.
        </Text>
      </Stack>
      <Stack gap={8}>
        <Text size="lg" fw={500}>
          VİZE
        </Text>
        <Text size="sm" c="gray.7">
          Umumi Pasaport - Vize gerekli değil
        </Text>
        <Text size="sm" c="gray.7">
          Yeşil Pasaport - Vize gerekli değil
        </Text>
        <Text size="sm" c="gray.7">
          Hizmet Pasaportu - Vize gerekli değil
        </Text>
        <Text size="sm" c="gray.7">
          Seyahat bitiş tarihinden itibaren 6 ay geçerli ve 10 yıldan eski
          olmayan pasaportunuzun olması gerekmektedir.
        </Text>
      </Stack>
      {/* {hotelDetails?.description_struct.map(
        (
          struct: {
            title: string;
            paragraphs: string[];
          },
          i: number
        ) => (
          <Stack key={`struct-${i}`} gap={8}>
            <Text size="lg" fw={500}>
              {struct.title}
            </Text>
            {struct.paragraphs.map((paragraph: string, j: number) => (
              <Text key={`paragraph-${j}`} size="sm" c="gray.7">
                {paragraph}
              </Text>
            ))}
          </Stack>
        )
      )} */}
    </Stack>
  );
};

export default TourGeneralInformations;
