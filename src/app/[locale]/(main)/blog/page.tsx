"use client";

import BlogCard from "@/components/BlogPageElements/BlogCard";
import BlogLoading from "@/components/BlogPageElements/BlogLoading";
import { useLoading } from "@/utils/hooks/useLoading";
import {
  Button,
  Container,
  Group,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { isNull, isString, uniq } from "lodash";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Blog = () => {
  const t = useTranslations();

  const [loading, startLoading, stopLoading] = useLoading();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const blogs = [
    {
      category: "Hotel",
      image:
        "https://www.hotelchick.com/upload/Blog/ac0daa25c49382bc86eb109d6b0f9ee9.jpg",
      title: "Dünyanın En Dikkat Çekici 10 Mimari Yapısı",
      description:
        "Dünyanın En Dikkat Çekici 10 Mimari YapısıDünya, sadece muhteşem manzaraları, lezzetli yemekleri ve",
    },
    {
      category: "Hotel",
      image:
        "https://www.hotelchick.com/upload/Blog/ac0daa25c49382bc86eb109d6b0f9ee9.jpg",
      title: "Dünyanın En Dikkat Çekici 10 Mimari Yapısı",
      description:
        "Dünyanın En Dikkat Çekici 10 Mimari YapısıDünya, sadece muhteşem manzaraları, lezzetli yemekleri ve",
    },
    {
      category: "Flight",
      image:
        "https://www.hotelchick.com/upload/Blog/ac0daa25c49382bc86eb109d6b0f9ee9.jpg",
      title: "Dünyanın En Dikkat Çekici 10 Mimari Yapısı",
      description:
        "Dünyanın En Dikkat Çekici 10 Mimari YapısıDünya, sadece muhteşem manzaraları, lezzetli yemekleri ve",
    },
    {
      category: "Car Rental",
      image:
        "https://www.hotelchick.com/upload/Blog/ac0daa25c49382bc86eb109d6b0f9ee9.jpg",
      title: "Dünyanın En Dikkat Çekici 10 Mimari Yapısı",
      description:
        "Dünyanın En Dikkat Çekici 10 Mimari YapısıDünya, sadece muhteşem manzaraları, lezzetli yemekleri ve",
    },
  ];

  useEffect(() => {
    startLoading();
    setTimeout(() => {
      stopLoading();
    }, 2000);
  }, []);

  return (
    <Container size="xl" w="100%" py={20}>
      <Stack>
        <Stack gap={0}>
          <Text size="xl" fw={500}>
            {t("Blog")}
          </Text>
          <Text size="sm" c="gray.7">
            {t(
              "The world is huge! Don't know where to go? Check out recommendations on destinations, the best time to travel, and what to do there"
            )}
          </Text>
        </Stack>

        <ScrollArea offsetScrollbars scrollbarSize={7}>
          <Group gap="xs" wrap="nowrap">
            <Button
              radius="xl"
              variant={isNull(selectedCategory) ? "filled" : "default"}
              onClick={() => setSelectedCategory(null)}
            >
              {t("All")}
            </Button>
            {uniq(blogs.map((e) => e.category)).map((category, i) => (
              <Button
                key={`category-${i}`}
                radius="xl"
                variant={category === selectedCategory ? "filled" : "default"}
                onClick={() => setSelectedCategory(category)}
              >
                {t(category)}
              </Button>
            ))}
          </Group>
        </ScrollArea>

        <SimpleGrid
          cols={{
            base: 1,
            xs: 2,
            sm: 3,
            md: 4,
          }}
        >
          {loading
            ? Array(4)
                .fill("")
                .map((blog, i) => <BlogLoading key={`blog-${i}`} />)
            : (isString(selectedCategory)
                ? blogs.filter((e) => e.category === selectedCategory)
                : blogs
              ).map((blog, i) => <BlogCard key={`blog-${i}`} />)}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Blog;
