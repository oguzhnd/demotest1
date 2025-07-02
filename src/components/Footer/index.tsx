"use client";

import { Link } from "@/i18n/navigation";
import {
  ActionIcon,
  Anchor,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBrandInstagram,
  IconBrandMeta,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";

const socialLinks = [];

const footerLinks = [
  {
    label: "About Us",
    links: [
      {
        name: "About Us",
        href: "/about-us",
      },
      {
        name: "Help Center",
        href: "/help-center",
      },
      {
        name: "Terms of Service",
        href: "/terms-of-service",
      },
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        name: "Travel Stories",
        href: "/travel-stories",
      },
      {
        name: "Corporate Ticketing",
        href: "/corporate-ticketing",
      },
      {
        name: "Documents",
        href: "/documents",
      },
    ],
  },
  {
    label: "Solutions",
    links: [
      {
        name: "Hotel",
        href: "/hotel"
      },
      {
        name: "Flight",
        href: "/flight"
      },
      {
        name: "Car Rental",
        href: "/rental"
      },
    ],
  },
  {
    label: "Partnership",
    links: [
      {
        name: "Affiliate Program",
        href: "/affiliate-program",
      },
      {
        name: "Advertise with Us",
        href: "/advertise-with-us",
      },
    ],
  },
  {
    label: "Contact",
    links: [
      {
        name: "Contact Us",
        href: "/contact",
      },
    ],
  },
];

const Footer = () => {
  const t = useTranslations();

  const matchesSm = useMediaQuery("(max-width: 48em)");

  return (
    <Paper bg="black" py={40} radius={0}>
      <Container size="xl">
        <Grid w="100%" gutter={0}>
          <Grid.Col
            span={{
              base: 12,
              sm: 4,
            }}
          >
            <Stack justify="space-between">
              <Stack gap={4}>
                <Group justify="flex-start">
                  <Image src="/ntt_logo_light.png" w="auto" h={48} />
                </Group>

                <Group mt="md" gap="xs">
                  <ActionIcon
                    color="gray.5"
                    size="lg"
                    radius="xl"
                    variant="outline"
                  >
                    <IconBrandX size={16} />
                  </ActionIcon>
                  <ActionIcon
                    color="gray.5"
                    size="lg"
                    radius="xl"
                    variant="outline"
                  >
                    <IconBrandInstagram size={16} />
                  </ActionIcon>
                  <ActionIcon
                    color="gray.5"
                    size="lg"
                    radius="xl"
                    variant="outline"
                  >
                    <IconBrandYoutube size={16} />
                  </ActionIcon>
                  <ActionIcon
                    color="gray.5"
                    size="lg"
                    radius="xl"
                    variant="outline"
                  >
                    <IconBrandMeta size={16} />
                  </ActionIcon>
                </Group>
              </Stack>

              <Divider color="gray.9" mr="xl" />

              {/* <Group>
                <Image src="https://www.hotelchick.com/upload/General/61be2b6e7a8ace0b82fc8562c2a43eb3.png" w="auto" h={60} />
                <Image src="https://www.hotelchick.com/upload/General/1abe53099d2ef2eb4330d2c8bcb71a6d.jpeg" w="auto" h={60} />
              </Group> */}
            </Stack>
          </Grid.Col>
          {footerLinks.map((links, i) => (
            <Grid.Col
              key={`links-${i}`}
              span={{
                base: 12,
                xs: 6,
                sm: 2,
              }}
            >
              <Stack mt={matchesSm ? 20 : 0}>
                <Text fw={500} c="white">
                  {t(links.label)}
                </Text>

                <Stack gap={6} align="flex-start">
                  {links.links.map((link, j) => (
                    <Link
                      key={`link-${i}-${j}`}
                      href={link.href}
                      style={{ fontSize: 14, color: "var(--mantine-color-gray-6)", textDecoration: "none" }}
                    >
                      {t(link.name)}
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
