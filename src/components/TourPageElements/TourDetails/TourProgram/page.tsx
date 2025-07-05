import { Group, Image, Stack, Text, Timeline } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslations } from "next-intl";
import React from "react";

const TourProgram = () => {
  const t = useTranslations();

  const matchesSm = useMediaQuery("(max-width: 48em)")

  const Parent = matchesSm ? Stack : Group

  return (
    <Stack>
      <Group>
        <Text size="lg" fw={500}>
          {t("Tour Program")}
        </Text>
      </Group>
      <Timeline bulletSize={24} lineWidth={2}>
        <Timeline.Item bullet={1} title="Antalya - Saraybosna">
          <Parent wrap="nowrap" align="flex-start" gap="xs" mt={8}>
            <Image
              src="https://api2.gitmeklazim.com/TourImagesFiles/antalyadan-direkt-sefer-ile-buyuk-balkan-turu-rotasi-General-114764.webp"
              w={120}
              h={80}
              radius="md"
              style={{ flexShrink: 0 }}
            />
            <Stack>
              <Text size="sm" c="gray.7">
                Antalya Havalimanı Dış Hatlar gidiş terminalinde siz değerli
                konuklarımızla uçuştan minimum 3 saat önce buluşma. Bilet, bagaj
                ve pasaport işlemlerini takiben, *** havayolunun *** tarifeli
                uçağı ile *** Saraybosna’ ya hareket. Yerel saat ile ***
                Saraybosna varış. Pasaport ve bilet işlemlerinin ardından
                otelimize transfer. Geceleme ve akşam yemeği otelimizde. Akşam
                Yemeği: Otelde ücrete dâhil olarak alınacaktır. Konaklama: 4*
                Exclusive Hotel vb. / 4* Hollywood Hotel vb.
              </Text>
            </Stack>
          </Parent>
        </Timeline.Item>

        <Timeline.Item
          bullet={2}
          title="Saraybosna - Mostar - Poçitel - Medjugorje"
        >
          <Parent wrap="nowrap" align="flex-start" gap="xs" mt={8}>
            <Image
              src="https://api2.gitmeklazim.com/TourImagesFiles/antalyadan-direkt-sefer-ile-buyuk-balkan-turu-rotasi-General-114764.webp"
              w={120}
              h={80}
              radius="md"
              style={{ flexShrink: 0 }}
            />
            <Stack>
              <Text size="sm" c="gray.7">
                Antalya Havalimanı Dış Hatlar gidiş terminalinde siz değerli
                konuklarımızla uçuştan minimum 3 saat önce buluşma. Bilet, bagaj
                ve pasaport işlemlerini takiben, *** havayolunun *** tarifeli
                uçağı ile *** Saraybosna’ ya hareket. Yerel saat ile ***
                Saraybosna varış. Pasaport ve bilet işlemlerinin ardından
                otelimize transfer. Geceleme ve akşam yemeği otelimizde. Akşam
                Yemeği: Otelde ücrete dâhil olarak alınacaktır. Konaklama: 4*
                Exclusive Hotel vb. / 4* Hollywood Hotel vb.
              </Text>
            </Stack>
          </Parent>
        </Timeline.Item>

        <Timeline.Item bullet={3} title="Medjugorje - Kotor - Budva - İşkodra">
          <Parent wrap="nowrap" align="flex-start" gap="xs" mt={8}>
            <Image
              src="https://api2.gitmeklazim.com/TourImagesFiles/antalyadan-direkt-sefer-ile-buyuk-balkan-turu-rotasi-General-114764.webp"
              w={120}
              h={80}
              radius="md"
              style={{ flexShrink: 0 }}
            />
            <Stack>
              <Text size="sm" c="gray.7">
                Antalya Havalimanı Dış Hatlar gidiş terminalinde siz değerli
                konuklarımızla uçuştan minimum 3 saat önce buluşma. Bilet, bagaj
                ve pasaport işlemlerini takiben, *** havayolunun *** tarifeli
                uçağı ile *** Saraybosna’ ya hareket. Yerel saat ile ***
                Saraybosna varış. Pasaport ve bilet işlemlerinin ardından
                otelimize transfer. Geceleme ve akşam yemeği otelimizde. Akşam
                Yemeği: Otelde ücrete dâhil olarak alınacaktır. Konaklama: 4*
                Exclusive Hotel vb. / 4* Hollywood Hotel vb.
              </Text>
            </Stack>
          </Parent>
        </Timeline.Item>

        <Timeline.Item bullet={4} title="İşkodra - Tiran - Ohrid">
          <Parent wrap="nowrap" align="flex-start" gap="xs" mt={8}>
            <Image
              src="https://api2.gitmeklazim.com/TourImagesFiles/antalyadan-direkt-sefer-ile-buyuk-balkan-turu-rotasi-General-114764.webp"
              w={120}
              h={80}
              radius="md"
              style={{ flexShrink: 0 }}
            />
            <Stack>
              <Text size="sm" c="gray.7">
                Antalya Havalimanı Dış Hatlar gidiş terminalinde siz değerli
                konuklarımızla uçuştan minimum 3 saat önce buluşma. Bilet, bagaj
                ve pasaport işlemlerini takiben, *** havayolunun *** tarifeli
                uçağı ile *** Saraybosna’ ya hareket. Yerel saat ile ***
                Saraybosna varış. Pasaport ve bilet işlemlerinin ardından
                otelimize transfer. Geceleme ve akşam yemeği otelimizde. Akşam
                Yemeği: Otelde ücrete dâhil olarak alınacaktır. Konaklama: 4*
                Exclusive Hotel vb. / 4* Hollywood Hotel vb.
              </Text>
            </Stack>
          </Parent>
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
};

export default TourProgram;
