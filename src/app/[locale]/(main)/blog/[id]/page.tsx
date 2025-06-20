"use client"

import { useRouter } from "@/i18n/navigation";
import {
  ActionIcon,
  Container,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import React from "react";

const BlogDetails = () => {
  const { push } = useRouter();

  return (
    <Container py={20} w="100%">
      <Stack>
        <Group>
          <ActionIcon size="lg" variant="subtle" color="dark" onClick={() => push("/blog")}>
            <IconChevronLeft size={20} />
          </ActionIcon>
          <Text size="lg" fw={500}>
            Dünyanın En Dikkat Çekici 10 Mimari Yapısı
          </Text>
        </Group>

        <Image
          radius="md"
          src="https://www.hotelchick.com/upload/Blog/ac0daa25c49382bc86eb109d6b0f9ee9.jpg"
        />

        <Stack mt="sm">
          <Stack gap={8}>
            <Text fw={500}>Dünyanın En Dikkat Çekici 10 Mimari Yapısı</Text>
            <Text size="sm" c="gray.7">
              Dünya, sadece muhteşem manzaraları, lezzetli yemekleri ve zengin
              kültürleriyle değil, aynı zamanda hayranlık uyandıran mimari
              yapılarıyla da tanınır. Bu ikonik yapılar, hem fiziksel hem de
              manevi özellikleriyle ziyaretçileri büyüler. İşte dünyanın en
              dikkat çekici mimari yapılarından bazıları:
            </Text>
          </Stack>
          <Stack gap={8}>
            <Text fw={500}>Kâbe, Suudi Arabistan</Text>
            <Text size="sm" c="gray.7">
              İslam&apos;ın en kutsal mabedi olan Kâbe, Mekke&apos;de yer alır ve her yıl
              milyonlarca Müslüman tarafından hac ve umre ziyaretleri için
              ziyaret edilir. Bu küp şeklindeki yapı, Müslümanların kıblesi
              olarak bilinir ve Mescid-i Haram&apos;ın merkezinde yer alır. Kâbe&apos;nin
              manevi önemi ve tarihi değeri, onu dünya üzerindeki en önemli
              yapılardan biri yapar.
            </Text>
          </Stack>
          <Stack gap={8}>
            <Text fw={500}>Lotus Tapınağı, Hindistan</Text>
            <Text size="sm" c="gray.7">
              Yeni Delhi&apos;de bulunan Lotus Tapınağı, çiçek şeklindeki mimarisiyle
              dikkat çeker. Bahai inancının bir ibadethanesi olan bu yapı, tüm
              dinlerden insanları ağırlamaya açıktır. Beyaz mermerden yapılmış
              olan tapınak, saflığı ve ruhani birliği simgeler.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default BlogDetails;
